import { useMemo } from 'react';
import projects from '../../data/projectsData';
import HeroHeader from './components/HeroHeader';
import AboutSection from './components/About';
import ArchitectureDesignSection from './components/ArchitectureDesign';
import DemoSection from './components/Demo';
import WorkGallery from '../homepage/components/WorkGallery';
import ServicesSection from '../homepage/components/Services';
import { useParams } from 'react-router-dom';
import { localizeProject, useLanguage } from '../../context/LanguageContext';

const ProjectPage = () => {
  const { id } = useParams();
  const { t, getProjectOverlay } = useLanguage();

  const project = useMemo(() => {
    const base = projects.find((p) => p.id === id);
    if (!base) return null;
    return localizeProject(base, getProjectOverlay(id));
  }, [id, getProjectOverlay]);

  return (
    <div className="homepage-content">
      <HeroHeader
        title={project ? project.title : t('projectPage.fallbackTitle')}
        subtitle={project ? project.subtitle : t('projectPage.fallbackSubtitle')}
        technologies={project ? project.technologies : []}
      />
      <AboutSection
        description={project ? project.description : t('projectPage.fallbackDescription')}
        general_details={project ? project.general_details : []}
      />
      <ServicesSection
        title={t('projectPage.featuresTitle')}
        services={project ? project.features : []}
      />
      <ArchitectureDesignSection
        tabsData={project ? project.architecture_design_items : []}
      />
      <WorkGallery
        title={t('projectPage.galleryTitle')}
        projects={project ? project.gallery_items : []}
        openModalOnClick={true}
      />
      {project?.project_links?.length > 0 && (
        <DemoSection project_links={project.project_links} />
      )}
    </div>
  );
};

export default ProjectPage;
