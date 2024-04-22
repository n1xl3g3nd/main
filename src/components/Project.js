import React from 'react'
import styles from  '../css/Project.module.css';

import { useState } from 'react';
import Navbar from '../help_components/navbar/Navbar';
import Slider from '../help_components/slider/Slider';

const Project = () => {


  return (
    <div className={styles.main_block}>
      <div className={styles.MainBlockFlex}>
    <Navbar/>
      <div className={styles.startBlock}>
        <div className={styles.titleBlock}>
          <p className={styles.titleText}>Социальная сеть</p>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.text}>На этой странице я подробно описываю свой будущий проект и прикладываю несколько его скриншотов. В этой социальной сети будут реализованы все основные функции, которые должны быть в подобных сервисах: регистрация и редактирование профиля, добавление друзей и отправка им сообщений, публикация постов, комментирование и лайки чужих публикаций, сортировка постов по категориям и многое другое.Стоит сказать, что то, что вы увидете на скриншотах, это не финальная версия, и многое будет доработано. </p>
        </div>
        </div>
        <Slider/>
      </div>
    </div>
  );
};

export default Project;