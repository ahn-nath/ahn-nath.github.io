import React from 'react';
import SocialLink from '../../../components/SocialLink';
import ProfileImage from '../../../media/35_chosen.jpg';
import { useLanguage } from '../../../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      href: 'https://www.upwork.com/freelancers/~0138ecfcda52ffec5e',
      color: 'rgb(40, 44, 52)',
      dPath:
        'M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z',
      text: t('home.about.upwork'),
    },
    {
      href: 'https://www.linkedin.com/in/nathaly-toledo/',
      color: 'rgb(40, 44, 52)',
      dPath:
        'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4',
      text: t('home.about.linkedin'),
    },
  ];

  return (

    

    <section className="about">
      <div className="container py-xl-5 px-xl-5" style={{ maxWidth: '1200px' }}>
        <div className="row g-0 justify-content-center mt-md-5">
          <div className="col-xl-4 mx-auto order-xl-2 showcase-img about-profile mt-5">
            <img
              src={ProfileImage}
              alt="Nathaly Toledo"
              className="about-profile-img"
            />
          </div>

          <div className="col-xl-7 order-xl-1 py-5 px-4 px-sm-5">
            <h2 className="text-uppercase text-center mb-4">{t('home.about.title')}</h2>
            <p className="lead mb-0">
              {t('home.about.p1')}
              <br />
              <br />
              {t('home.about.p2')}
              <br />
              <br />
              <span style={{ color: '#282C34' }}>{t('home.about.p3')}</span>
            </p>

            <div className="mt-5">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  color={link.color}
                  dPath={link.dPath}
                >
                  &nbsp;{link.text}
                </SocialLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
