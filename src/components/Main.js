import React, { useEffect, useState } from 'react';
import home from '../static/home.png';
import {observer} from "mobx-react-lite";

import styles from '../css/Main.module.css';
import Navbar from '../help_components/navbar/Navbar';

const Main = observer(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const calculateOpacity = (scrollTop, blockTop, blockHeight) => {
      const scrollBottom = scrollTop + windowHeight;
      const blockBottom = blockTop + blockHeight;
      const minVisiblePosition = Math.max(scrollTop, blockTop);
      const maxVisiblePosition = Math.min(scrollBottom, blockBottom);
      const visibleHeight = Math.max(0, maxVisiblePosition - minVisiblePosition);
      const totalHeight = Math.min(windowHeight, blockHeight);
      return visibleHeight / totalHeight;
    };
  
    const calculateScale = (opacity) => {
      // Примерное соотношение прозрачности и масштаба
      return 1 - (1 - opacity) * 0.6;
    };
    return (
      <div className={styles.main_block}>
      <div className={styles.MainBlockFlex}>
        <Navbar/>
        
        <div
          className={styles.startBlock}
          style={{
           
          }}
        >
          <div className={styles.imgInStartBlock}>
            <img src={home} className={styles.imgInStart} alt="Home" />
          </div>
          <div className={styles.blockTitleStart}>
            <p className={styles.titleStart}>n1xl3g3nd: Веб-программист</p>
          </div>
          <div className={styles.blockTextStart}>
          <p className={styles.textStart}>
          Приветствую всех посетителей моего веб-сайта. Идея создания этого сайта возникла у меня давно. Я убежден, что каждый уважающий себя веб-программист должен иметь собственную онлайн-визитку. С ее помощью можно продемонстрировать свои навыки и возможности. На страницах этого сайта вы найдете информацию обо мне как ученике и личности, также сможете узнать о навыках, которыми  владею. Я также расскажу о своих последних проектах и поделюсь мыслями о веб-разработке. 
          </p>
          </div>
        </div>
        <div
          className={styles.blockAboutMe}
          style={{
            ...(windowWidth > 1000
              ? {
                opacity: calculateOpacity(scrollPosition, windowHeight * 0.39, windowHeight),
                transform: `scale(${calculateScale(calculateOpacity(scrollPosition, windowHeight * 0.445, windowHeight))})`,
                }
              : {
                  
                }),
          }}
        >
          <div className={styles.imgInStartBlock}>
            <img src={home} className={styles.imgInStart} alt="Home" />
          </div>
          <div className={styles.blockTitleStart}>
            <p className={styles.titleStart}>Про меня</p>
          </div>
          <div className={styles.blockTextAboutProjects}>
          <p className={styles.textStart}>
          Давайте немного больше узнаем обо мне. Меня зовут Ярослав, и в настоящее время я являюсь учеником 9 класса.Ниже я опишу свои полезные навыки(soft skills):
          </p>
          <ul>
            <li className={styles.textStart}>Трудолюбие</li>
            <li className={styles.textStart}>Стремление к развитию</li>
            <li className={styles.textStart}>Коммуникативные навыки</li>
            <li className={styles.textStart}>Умение выступать на публике</li>
            <li className={styles.textStart}>Самостоятельное нахождение и усвоение информации</li>
          </ul>
          </div>
        </div>
        <div
          className={styles.ProjectBlock}
          style={{
            ...(windowWidth > 1000
              ? {
                opacity: calculateOpacity(scrollPosition, windowHeight * 0.78, windowHeight),
                transform: `scale(${calculateScale(calculateOpacity(scrollPosition, windowHeight * 0.77, windowHeight))})`,
                }
              : {
                 
                }),
          }}
        >
          <div className={styles.imgInStartBlock}>
            <img src={home} className={styles.imgInStart} alt="Home" />
          </div>
          <div className={styles.blockTitleStart}>
            <p className={styles.titleStart}>Проекты</p>
          </div>
          <div className={styles.blockTextAboutProjects}>
          <p className={styles.textStart}>
          Этот блок посвящен тому, что я уже делал помимо этого веб-сайта. Ранее я создавал новостной сайт, однако в связи с развитием своих возможностей и умений перешел на разработку социальной сети. Ниже я приведу примеры того, с чем мне приходилось работать как веб-разработчику (hard skills):
          </p>
          <ul>
            <li className={styles.textStart}>React: Библиотека для создания пользовательских интерфейсов</li>
            <li className={styles.textStart}>Django: Фреймворк для создания веб-приложений</li>
            <li className={styles.textStart}>Express js: Фреймворк для создания RESTful API и серверных приложений</li>
            <li className={styles.textStart}>Postgres/Mysql: Системы управления базами данных</li>
            <li className={styles.textStart}>MobX: Библиотека для управления состоянием</li>
            <li className={styles.textStart}>Socket: Технология для двусторонней связи в реальном времени</li>
            <li className={styles.textStart}>HTML: Язык разметки для создания структуры и содержимого веб-страниц</li>
            <li className={styles.textStart}>CSS: Язык стилей для описания внешнего вида веб-страниц</li>
            
          </ul>
          </div>
        </div>
      </div>
    </div>
  
    )
  });
export default Main;

