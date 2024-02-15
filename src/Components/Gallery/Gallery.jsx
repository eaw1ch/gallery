import React from 'react';
import './Gallery.css';

import ImagesComponent from '../ImagesComponent/ImagesComponent';

const Gallery = () => {
  return (
    <main className="gallery">
      <ImagesComponent />
      <hr />
    </main>
  );
};

export default Gallery;
