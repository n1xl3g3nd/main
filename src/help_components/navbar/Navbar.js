import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { MAIN_ROUTE, PROJECT_ROUTE } from '../../utils/consts'
const Navbar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainFlex}>
        <div className={styles.MyNameLogo}>
            <p className={styles.logoText}>n1xl3g3nd</p>
        </div>
        <div className={styles.Links}>
          {location.pathname === PROJECT_ROUTE 
          ? 
          <NavLink to={MAIN_ROUTE} className={styles.textLinks}>На главную</NavLink> 
          : 
          <NavLink to={PROJECT_ROUTE} className={styles.textLinks}>мои проекты</NavLink>}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
