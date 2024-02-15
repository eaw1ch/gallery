import React, { useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import './Modal.css';

import images from '../../data/images';
import arrowPrev from '../../assets/icons/arrow-prev.svg';
import arrowNext from '../../assets/icons/arrow-next.svg';

import ImageScroller from '../ImageScroller/ImageScroller';

const Modal = ({ view, setView, photo, setPhoto }) => {
  const [photoPath, setPhotoPath] = useState('');

  const findImage = (id) => {
    return images.filter((image) => {
      return Number(image.key) === Number(id);
    });
  };

  useEffect(() => {
    setPhotoPath(findImage(photo.id));
  }, [photo]);

  const closePhoto = () => {
    setView(false);
  };

  const prevPhoto = () => {
    if (photo.id > 1) {
      setPhoto((prevState) => ({
        ...prevState,
        id: Number(photo.id) - 1
      }));
    } else {
      setPhoto((prevState) => ({
        ...prevState,
        id: images.length
      }));
    }
  };

  const nextPhoto = () => {
    if (photo.id < images.length) {
      setPhoto((prevState) => ({
        ...prevState,
        id: Number(photo.id) + 1
      }));
    } else {
      setPhoto((prevState) => ({
        ...prevState,
        id: 1
      }));
    }
  };

  const Reset = () => {
    const { resetTransform } = useControls();
    return (
      <span className="reset-button" onClick={() => resetTransform()}>
        <svg
          fill="#ffffff"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z" />
        </svg>
      </span>
    );
  };

  return (
    <div style={{ display: view ? 'flex' : 'none' }} className="modal">
      <div className="modal__window">
        <TransformWrapper>
          <div className="tools">
            <Reset />
            <span className="modal__window-close">
              <svg
                onClick={closePhoto}
                className="close-icon"
                width="20"
                height="20"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg">
                <line
                  y1="-0.5"
                  x2="17.5227"
                  y2="-0.5"
                  transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)"
                />
                <line
                  y1="-0.5"
                  x2="17.5227"
                  y2="-0.5"
                  transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)"
                />
              </svg>
            </span>
          </div>

          <div className="modal__window-elements">
            <span className="element__btn-prev" onClick={prevPhoto}>
              <img src={arrowPrev} alt="" />
            </span>
            <TransformComponent>
              <ImageScroller imageSrc={photoPath[0]?.photo} />
            </TransformComponent>
            <span className="element__btn-next" onClick={nextPhoto}>
              <img src={arrowNext} alt="" />
            </span>
          </div>
          <span className="modal__window-info">{photoPath[0]?.name}</span>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Modal;
