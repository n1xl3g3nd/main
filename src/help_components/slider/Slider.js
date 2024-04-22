// Slider.js

import React, { useState } from 'react';
import styles from './Slider.module.css';
import image1 from '../../static/project/image1.png';
import image2 from '../../static/project/image2.png';
import image3 from '../../static/project/image3.png';
import image4 from '../../static/project/image4.png';
import image5 from '../../static/project/image5.png';
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <a key={`image-${index}`} href={image} target="_blank" rel="noopener noreferrer">
            {/* Изображение обернуто в тег <a> */}
            <div className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.imageBlock} />
            </div>
          </a>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
