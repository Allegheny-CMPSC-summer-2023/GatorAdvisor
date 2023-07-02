import React, {Component} from 'react';
import Navbar from "../components/Navbar"
import Courses from "./Courses"
import Home from "./Home"
import About from "./About"
import { Route, Routes } from "react-router-dom"
import * as Card from "../components/Cards"
import NotFoundPage from './404';
import RoadMap from "../components/web-of-knowledge";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RoadMap />} />
          {/*<Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App;
