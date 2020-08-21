import React , { Component } from 'react';
import  Main  from './components/MainComponent';
import { DISHES } from './shared/dishes';

import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
