import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, tags, title, onOpenModal, openModalOnClick = false }) => {
  // Click handler when modal is desired
  const handleOpen = (e) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(id);
    }
  };

  const cardInner = (
  <div className="col item flip-card mb-4">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="img-fluid image-gallery" src={image} alt={title} />
        <div className="my-2 tags text-start">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="badge rounded-pill me-2"
              style={{
                backgroundColor: tag.color,
                color: '#FAFFFC',
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flip-card-back">
        <a className="text-decoration-none">
          <div 
            className="flip-card-back-body image-gallery"
            style={{ background: 'url("/background-card.png") center/cover no-repeat' }}
          >
            <h2 className='heading-flip-back-card'>
              {title}
            </h2>
          </div>
        </a>
      </div>
    </div>
  </div>
  );

  // This code is a switch that determines if the card should open a modal or be a link
    return (
    <div className="col item flip-card mb-4">
      {openModalOnClick ? (
        // Use a button-like element so accessibility is okay
        <a href="#" className="text-decoration-none" onClick={handleOpen}>
          {cardInner}
        </a>
      ) : (
        <Link to={`/projects/${id}`} className="text-decoration-none">
          {cardInner}
        </Link>
      )}
    </div>
  );
}

export default ProjectCard;