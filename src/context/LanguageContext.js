import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';
import projectsEs from '../locales/projects.es.json';

const dictionaries = { en, es };
const projectOverlays = { es: projectsEs };

const LanguageContext = createContext(null);

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function interpolate(value, vars) {
  if (typeof value !== 'string' || !vars) return value;
  return value.replace(/\{\{(\w+)\}\}/g, (_, name) =>
    vars[name] != null ? String(vars[name]) : `{{${name}}}`
  );
}

export function localizeProject(project, overlay) {
  if (!project || !overlay) return project;

  return {
    ...project,
    title: overlay.title ?? project.title,
    subtitle: overlay.subtitle ?? project.subtitle,
    description: overlay.description ?? project.description,
    general_details: project.general_details?.map((detail, index) => {
      const o = overlay.general_details?.[index];
      if (!o) return detail;
      if (typeof detail.value === 'object' && detail.value !== null) {
        return {
          ...detail,
          label: o.label ?? detail.label,
          value: {
            ...detail.value,
            text: o.valueText ?? detail.value.text,
          },
        };
      }
      return {
        ...detail,
        label: o.label ?? detail.label,
        value: o.value ?? detail.value,
      };
    }),
    features: project.features?.map((feature, index) => {
      const o = overlay.features?.[index];
      if (!o) return feature;
      return {
        ...feature,
        title: o.title ?? feature.title,
        description: o.description ?? feature.description,
        type: o.type ?? feature.type,
      };
    }),
    architecture_design_items: project.architecture_design_items?.map((item, index) => {
      const o = overlay.architecture_design_items?.[index];
      if (!o) return item;
      return {
        ...item,
        label: o.label ?? item.label,
        title: o.title ?? item.title,
        texts: o.texts ?? item.texts,
        highlight: o.highlight ?? item.highlight,
      };
    }),
    gallery_items: project.gallery_items?.map((item, index) => {
      const o = overlay.gallery_items?.[index];
      if (!o) return item;
      return {
        ...item,
        title: o.title ?? item.title,
      };
    }),
    project_links: project.project_links?.map((link, index) => {
      const o = overlay.project_links?.[index];
      if (!o) return link;
      return {
        ...link,
        name: o.name ?? link.name,
      };
    }),
  };
}

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = new Set(['en', 'es']);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem('site-lang');
      return SUPPORTED_LANGS.has(stored) ? stored : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  });

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem('site-lang', next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (key, vars) => {
      const fromActive = getByPath(dictionaries[lang], key);
      const resolved =
        fromActive != null ? fromActive : getByPath(dictionaries.en, key);
      if (resolved == null) return key;
      return interpolate(resolved, vars);
    };

    const getProjectOverlay = (projectId) =>
      projectOverlays[lang]?.[projectId] ?? null;

    return { lang, setLang, t, getProjectOverlay };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
}
