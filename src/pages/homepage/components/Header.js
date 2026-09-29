import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <section className="section-header top-section hero-header-home">
      <div className="content-container-header content-theme-dark">
        <div className="content-inner-header">
          <h1>Nathaly T.</h1>
          <h3>{t('home.header.role')}</h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
