import testimonialsSlides from '../../../data/testimonials';
import { useLanguage } from '../../../context/LanguageContext';

const TestimonialCard = ({ text, author, source, link, isDark, fromLabel }) => {
  return (
    <div className={`card ${isDark ? 'dark-card' : 'card-light'} border-0 my-3`}>
      <div className="card-body p-4 p-sm-5">
        <p className="text-start card-text text-gray-700 text-with-linebreaks">{text}</p>
        <h5 className="text-end card-title">{author}</h5>
        <a href={`${link}`} className="text-decoration-none">
          <p className="mb-2 small card-source-text text-end">{fromLabel}</p>
        </a>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="text-center bg-light testimonials" id="testimonials">
      <div className="container p-4 p-sm-5" style={{ background: 'var(--bs-body-bg)' }}>
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>{t('home.testimonials.title')}</h2>
          </div>
        </div>

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3">
            <div className="text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-quote"
                style={{ fontSize: '94px' }}
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
              </svg>
              <h4>{t('home.testimonials.heading')}</h4>
              <p className="text-start">{t('home.testimonials.intro')}</p>
            </div>

            <div className="text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-linkedin me-2"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-link me-2"
                style={{ fontSize: '17px' }}
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-bag-fill me-2"
                style={{ fontSize: '16px' }}
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>
            </div>
          </div>

          <div className="col-sm-auto col-md-9 col-lg-9">
            <div
              className="carousel slide carousel-dark pointer-event"
              data-bs-ride="false"
              data-bs-wrap="false"
              id="carousel-2"
            >
              <div className="carousel-inner">
                {testimonialsSlides.map((slide, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="row gy-4 mb-5 pb-3 mx-sm-3 mx-1">
                      <div key={index} className="col">
                        <TestimonialCard
                          {...slide}
                          fromLabel={t('common.fromSource', { source: slide.source })}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carousel-indicators">
                {testimonialsSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
