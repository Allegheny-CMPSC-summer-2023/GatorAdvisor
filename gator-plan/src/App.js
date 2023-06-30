import React from 'react';
import Navbar from "./components/Navbar"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import About from "./pages/About"
// import { Route, Routes } from "react-router-dom"
// import * as Card from "./components/Cards"
import NotFoundPage from './pages/404';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
