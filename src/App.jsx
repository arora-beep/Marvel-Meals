import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './context/GlobalState';
import Header from './components/Header';
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style.css";
import SearchPage from "./pages/SearchPage";
import MealDetail from "./pages/MealDetail";



const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
