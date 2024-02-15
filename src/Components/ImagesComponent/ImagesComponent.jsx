import React, { useState } from 'react';
import './ImagesComponent.css';

import Modal from '../Modal/Modal';
import images from '../../data/images';

const ImagesComponent = () => {
  const [view, setView] = useState(false);
  const [photo, setPhoto] = useState({
    id: '',
    name: ''
  });

  let openPhoto = (event) => {
    setPhoto((prevState) => ({
      ...prevState,
      id: event.target.id,
      name: event.target.name
    }));
    setView(true);
  };
  return (
    <section className="images">
      {images.map((image) => {
        return (
          <span key={image.key} onClick={openPhoto}>
            <img
              className="images__item"
              name={image.name}
              id={image.key}
              src={image.photo}
              alt=""
            />
          </span>
        );
      })}
      <Modal view={view} setView={setView} photo={photo} setPhoto={setPhoto} />
    </section>
  );
};

export default ImagesComponent;
