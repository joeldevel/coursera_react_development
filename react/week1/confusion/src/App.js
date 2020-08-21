import React , { Component } from 'react';
import  Main  from './components/MainComponent';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
