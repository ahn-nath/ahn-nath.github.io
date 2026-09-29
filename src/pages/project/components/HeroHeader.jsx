import './HeroHeader.css';

const HeroHeader = ({title, subtitle, technologies}) => {

  return (
    <header className="hero-header d-flex flex-column py-5">

      {/* Main Content */}
      <div className="container flex-grow-1 d-flex flex-column justify-content-center text-center text-md-start">
        <h1 className="display-2 fw-bold mb-4 gradient-text">
          {title}
        </h1>
        <p className="fs-4 mb-5 text-light-emphasis">
          {subtitle}
        </p>

        {/* Tech Stack Pills */}
        <div className="tech-stack d-flex flex-column gap-3">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            {technologies.map((tech, i) => (
              <span key={i} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
