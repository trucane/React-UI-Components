import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import LogoImage from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div className="container">
      <div className="left-container"><LogoImage /></div>

      <div className="right-container">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
