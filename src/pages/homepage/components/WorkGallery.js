import ProjectCard from './ProjectCard';
import ImageModal from './ImageModal';
import { useState } from 'react';

const WorkGallery = ({title, projects = [], openModalOnClick = false, description}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (projectId) => {
    const p = projects.find((x) => x.id === projectId);
    if (p) setSelectedProject(p);
  };

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="work-gallery" className="photo-gallery py-5 py-xl-5">
       {projects && projects.length > 0 ? (
      
      <div className="container py-5" style={{ background: 'url("/background-container-work-gallery.png") bottom/contain' }}>
        <div className="row">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="text-uppercase">{title}</h2>
            <p className="w-lg-50">
              {description}
            </p>
          </div>
        </div>

        <div className="row gx-5 gy-5 row-cols-1 row-cols-md-2 row-cols-xl-3 photos my-2">
          {projects.map((project, index) => (
            
            <ProjectCard
              key={project.id || index}
              id = {project.id}
              image={project.image}
              tags={project.tags}
              title={project.title}
              openModalOnClick={openModalOnClick}
              onOpenModal={handleOpenModal}
            />
            
          ))}
        </div>

      </div>


             ) : (<div></div>
                )}

                
      {/* Image Modal: only rendered when a project is selected */}
      <ImageModal
        show={!!selectedProject}
        onClose={handleCloseModal}
        image={selectedProject?.image}
        title={selectedProject?.title}
        
      />
    </section>

    

  );
};

export default WorkGallery;