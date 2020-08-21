import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function renderDish(dish) {
  if( dish ) {
    return(

      <Card className="col-12 col-md-5 m-1">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>

    )
  }
  else return( <></>)
}
function renderComments(comments) {
  if( comments ) {
    return(
      <div className="col-12 col-md-5 m-1">
        <h4>Comments </h4>
        <ul className="list-unstyled">
          {comments.map( comment=>{
            return (
              <li key={comment.id}>
                <p>-- {comment.comment}</p>
                <p>{comment.author},
                  {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
  else
  return (
    <></>
)
}
const DishDetail =( props )=> {

    return(
      <div className="row">
        { renderDish(props.dish)}
        {renderComments(props.dish.comments)}
      </div>
    )

}

export default DishDetail
