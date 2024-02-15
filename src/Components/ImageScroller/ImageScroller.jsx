import React from 'react';

const ImageScroller = ({ imageSrc }) => {
  return (
    <div>
      <img className="element__img" src={imageSrc} alt="Изображение" />
    </div>
  );
};

export default ImageScroller;
