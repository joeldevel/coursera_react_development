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
  }
  renderDish(dish) {
    if( dish ) {
      return(
        <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      )
    }
    else return( <div></div>)
  }
  renderComments( comments ) {
    if( comments )
      return(
        <ul className="list-unstyled">
          {comments.map( comment=>{
            return (
            <li key={comment.id}>
              <p>--{comment.comment}</p>
              <p>{comment.author} {comment.date}</p>
            </li>
           )
         })
      }</ul>
      )
    else
      return (
        <div></div>
      )
  }
  render() {
    return(
      <div className="row">
        { this.renderDish(this.props.dish)}
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          { this.renderComments( this.props.dish.comments ) }
        </div>
    </div>
    )
  }
}

export default Dish
