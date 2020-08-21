import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div class="container">
          <div>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          </div>
          <div>
            <DishDetail dish={eldish} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
