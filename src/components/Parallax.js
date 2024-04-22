import React, { useState, useEffect } from 'react';
import styles from '../css/Parallax.module.css';

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.parallaxContent} style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
        {/* Здесь ваш контент, который будет прокручиваться с эффектом параллакса */}
      </div>
    </div>
  );
};

export default Parallax;
