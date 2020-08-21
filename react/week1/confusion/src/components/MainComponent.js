import React, { Component } from 'react';
import Header from './Header';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
    // console.log( " los dishes son ",this.state.dishes);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    // const eldish= this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0];
    const eldish= this.state.dishes.filter( dish=>dish.id===this.state.selectedDish)[0] || {};
    // console.log( "Eldish pasado es: ", eldish);
    return (
      <div>
        <Header/>
        <div class="container">
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={eldish} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
