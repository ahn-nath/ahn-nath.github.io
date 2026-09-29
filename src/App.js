import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProjectPage from './pages/project/ProjectPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LangToggle from './context/LangToggle';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';
import './App.css';

function getRouterBasename() {
  const publicPath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  if (!publicPath) return undefined;
  const { pathname } = window.location;
  if (pathname === publicPath || pathname.startsWith(`${publicPath}/`)) {
    return publicPath;
  }
  return undefined;
}

function AppShell() {
  const { t } = useLanguage();

  return (
    <BrowserRouter basename={getRouterBasename()}>
      <div className="App">
        <header className="site-topbar">
          <Link to="/" className="site-topbar-brand" aria-label="Nathaly Toledo">
            <img
              src={`${process.env.PUBLIC_URL}/logo_horizontal.svg`}
              alt="Nathaly Toledo"
              className="site-topbar-logo"
            />
          </Link>
          <nav className="site-topbar-nav" aria-label={t('nav.primaryAria')}>
            <Link to="/" className="nav-link text-dark">{t('nav.home')}</Link>
          </nav>
          <div className="site-topbar-divider" aria-hidden="true" />
          <LangToggle />
          <div className="site-topbar-divider" aria-hidden="true" />
          <SocialIcons className="site-topbar-socials" />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
