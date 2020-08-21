import React, { Component } from 'react';

import Header from './Header';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    // const eldish= this.state.dishes.filter( dish=>dish.id===this.state.selectedDish)[0] || {};
    // const HomePage = () =><Home/>;
    return (
      <div>
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;