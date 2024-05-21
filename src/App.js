import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/myelino';
import Data from './pages/data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
};

export default App;
