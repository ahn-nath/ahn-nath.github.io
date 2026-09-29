import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = ({title, description, services = [], showIcon = false}) => {

  return (
   
    
    <section id="services">
                {services && services.length > 0 ? (

      <div className="container py-5 py-xl-5 text-white px-4 px-sm-5" style={{ background: '#282C34' }}>
        <div id="services-inner-wrapper" className="py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="text-uppercase">{title}</h2>
              <p className="w-lg-50">{description}</p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                iconPath={service.iconPath}
                showIcon={showIcon}
                title={service.title}
                description={service.description}
                link={service.link}
                type={service.type}
              />
            ))}
          </div>
        </div>
      </div>
                ) : (<div></div>
                )}
    </section>

  );
};

export default ServicesSection;