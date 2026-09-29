import React, { useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const ImageModal = ({ show, onClose, image, title }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ cursor: 'pointer' }}
      />

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label={t('common.close')}
                onClick={onClose}
              />
            </div>

            <div className="modal-body p-0">
              <img
                src={image}
                alt={title}
                className="img-fluid w-100"
                style={{ display: 'block' }}
              />
            </div>

            <div className="modal-footer border-0">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                {t('common.close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
