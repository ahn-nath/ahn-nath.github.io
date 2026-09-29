import React from 'react';
import './Demo.css';
import { useLanguage } from '../../../context/LanguageContext';

const DemoSection = ({ project_links }) => {
  const { t } = useLanguage();

  return (
    <header className="demo-header d-flex flex-column py-5">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center text-center text-md-start">
        <h1 className="display-2 fw-bold mb-4 gradient-text text-center">
          {t('projectPage.demoHeading')}
        </h1>

        <div className="tech-stack d-flex flex-column gap-3 mt-3">
          <div className="d-flex flex-wrap gap-5 justify-content-center">
            {project_links.map((pill, i) => (
              <a
                key={i}
                href={pill.url}
                className="btn btn-outline-light tech-pill"
                target="_blank"
                rel="noreferrer"
              >
                <i className={pill.icon}></i> {pill.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoSection;
