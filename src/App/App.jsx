import React from 'react';
import Navbar from 'components/Navbar';

import './App.css';
import Home from 'Pages/Home';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};
// some backdrop path
// https://image.tmdb.org/t/p/w500/h4MNLYzr6Cr02iHv3Hpqb9lmTPv.jpg
export default App;
