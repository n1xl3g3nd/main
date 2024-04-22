import React from 'react'
import { Routes } from 'react-router-dom'
import { Route} from 'react-router-dom'
import { MAIN_ROUTE,PROJECT_ROUTE,PARALLAX_ROUTE,  } from '../utils/consts'
import Main from './Main'
import Project from './Project'
import Parallax from './Parallax'

const AppRouter = () => {
  return (
    <Routes>
        <Route key={MAIN_ROUTE} path={MAIN_ROUTE} element={<Main />} />
        <Route key={PROJECT_ROUTE} path={PROJECT_ROUTE} element={<Project />} />
        <Route key={PARALLAX_ROUTE} path={PARALLAX_ROUTE} element={<Parallax />} />
        
    </Routes>
  )
}

export default AppRouter
