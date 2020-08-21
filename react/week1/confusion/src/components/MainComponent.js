import React, { Component } from 'react';
import Header from './Header';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        // selectedDish: null
    };
    // console.log( " los dishes son ",this.state.dishes);
  }
  //
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {
    const eldish= this.state.dishes.filter( dish=>dish.id===this.state.selectedDish)[0] || {};
    const HomePage = () =><Home/>;
    return (
      <div>
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
