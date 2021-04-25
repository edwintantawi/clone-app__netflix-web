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
export default App;
