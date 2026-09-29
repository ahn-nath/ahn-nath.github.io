import Header from './components/Header';
import AboutSection from './components/About';
import Slogan from './components/Slogan';
import ServicesSection from './components/Services';
import WorkGallery from './components/WorkGallery';
import TestimonialsSection from './components/Testimonials';
import creditUsImg from '../../media/credit-us.jpg';
import csrSchedulerImg from '../../media/calendar.jpg';
import researchImbalancesImg from '../../media/translation.png';
import brainsetAuthImg from '../../media/auth_screen.png';
import { useLanguage } from '../../context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  const serviceIcons = ['bi bi-easel2', 'bi bi-fast-forward', 'bi bi-graph-up-arrow'];
  const serviceItems = t('home.services.items') || [];
  const services = serviceItems.map((item, index) => ({
    iconPath: serviceIcons[index],
    title: item.title,
    description: item.description,
    link: '#',
    type: item.type,
  }));

  const projects = [
    {
      id: 'brainset-production-os',
      image: brainsetAuthImg,
      tags: [
        { label: 'WEB / SAAS', color: '#C19707' },
        { label: '2026', color: '#5170FF' },
      ],
      title: t('home.gallery.projects.brainset-production-os'),
    },
    {
      id: 'credit-repair-system',
      image: creditUsImg,
      tags: [
        { label: 'API', color: '#C19707' },
        { label: '2024', color: '#5170FF' },
      ],
      title: t('home.gallery.projects.credit-repair-system'),
    },
    {
      id: 'csr-scheduler',
      image: csrSchedulerImg,
      tags: [
        { label: 'WEB', color: '#282C34' },
        { label: '2025', color: '#5170FF' },
      ],
      title: t('home.gallery.projects.csr-scheduler'),
    },
    {
      id: 'research-imbalances-on-wikipedia',
      image: researchImbalancesImg,
      tags: [
        { label: 'TOOLS & SCRIPTING', color: '#C19707' },
        { label: '2024', color: '#5170FF' },
      ],
      title: t('home.gallery.projects.research-imbalances-on-wikipedia'),
    },
  ];

  return (
    <div className="homepage-content">
      <Header />

      <AboutSection />
      <Slogan />
      <ServicesSection
        title={t('home.services.title')}
        services={services}
        showIcon={true}
        description={t('home.services.description')}
      />

      <WorkGallery
        title={t('home.gallery.title')}
        projects={projects}
        openModalOnClick={false}
        description={t('home.gallery.description')}
      />
      
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
