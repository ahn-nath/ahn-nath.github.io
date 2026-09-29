
import creditUsImg from "../../../media/credit-us.jpg";



const TabContentSection = ({ title, texts = [], highlight, isActive=false, image }) => {
    return (
            <div className="row align-items-center">
                {/* Left side image placeholder */}
                <div className="col-md-7 text-center p-4">
                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "250px" }}>
                        <img className="img-fluid image-gallery" src={image} alt={title} />
                        {/* TODO 2: we need to have a feature that open the image as a view like in gallery with Boostrap (?) */}
                    </div>
                </div>

                {/* Right side content */}
                <div className="col-md-5 p-4">
                    <h5 className="fw-bold">{title}</h5>

                    {texts.map((text, idx) => (
                        <p key={idx} className="text-muted mb-2">
                            {text}
                        </p>
                    ))}

                    {highlight && (
                        <a
                            href="#"
                            className="fw-bold text-primary text-decoration-none mt-5 d-inline-block"
                        >
                            {highlight} <i className="bi bi-lightning-charge-fill"></i>
                        </a>
                    )}
                </div>
            </div>

    );
};

export default TabContentSection;
