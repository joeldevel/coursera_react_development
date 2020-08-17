import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
class Dish extends Component {
  constructor( props ) {
    super( props )
    // this.state = {
    //   dish: props.dish
    // }
    // console.log( this.state.dish)
  }
  render() {
    return(
      <Card className="col-md-5">
        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
        <CardBody>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>{this.props.dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }
}

export default Dish
