import React from 'react';
import Navbar from "./components/Navbar"
import Courses from "./pages/courses"
import Home from "./pages/home"
import About from "./pages/about"
import { Route, Routes } from "react-router-dom"
import * as Card from "./components/Cards"
import NotFoundPage from './pages/404';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      </div>
    </>
  )
}

export default App;
