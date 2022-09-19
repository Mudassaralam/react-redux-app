import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomeContainer from './pages/HomeContainers';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './pages/HeaderContainer';

function App() {
  return (
    <React.Fragment>
    <HeaderContainer />
    
    <HomeContainer />
    
     
    </React.Fragment>
  );
}

export default App;
