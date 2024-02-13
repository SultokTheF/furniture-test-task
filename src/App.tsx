import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/layouts";

import { HomePage, ContactPage, AboutPage } from "./pages/MainPages";

import FurnituresPage from "./pages/FurnituresPage";
import FurnitureInfoPage from "./pages/FurnitureInfoPage";

import "./assets/global.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/about" element={ <AboutPage /> } />

        <Route path="/furnitures" element={ <FurnituresPage /> } />
        <Route path="/furniture/:id" element={ <FurnitureInfoPage /> } />
      </Routes>
    </>
  );
}

export default App;
