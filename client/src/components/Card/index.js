import React from "react";
import { Card, Row }from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { PrimaryRating } from '../Rating'
import { Link } from "react-router-dom";
import "./style.css";

function Cards(props) {
  return (
    <>
    <Link to={`/product/${props.id}`}>
    <Card className="eachCard mt-5" style={{  width: "200px" }}>
      <Card.Img
        variant="top"
        className="cardImg zoom"
        data-id={props.id}
        alt={props.name}
        src={process.env.PUBLIC_URL + props.image}
      />
      <Card.Body style={{padding:'0.4rem'}}>
        {/* <Card.Title className="text-uppercase card-title">
        {props.name}
        </Card.Title> */}
          <Row className='cardText ml-2 mr-2 text-uppercase'>{props.name}</Row>
          <Row className='cardText ml-2 mr-2 mt-1 mb-1'><PrimaryRating number={props.rating}/>{" "}{props.reviews}</Row>
          <Row className='cardText ml-2 mr-2'><span className='rupeeColor'>₹</span>{props.price}</Row>
       
        {/* <Card.Text className="shortDesc">{props.description}</Card.Text> */}
      </Card.Body>
      {/* <Card.Footer className="footer">
      <Card.Text className="float-left">
        
      </Card.Text>
        <Link to={`/product/${props.id}`}>
          <Button className="btn btn-sm bg-white float-right viewItem">
            View Item
          </Button>
        </Link>
      </Card.Footer> */}
    </Card>
    </Link>
    </>
  );
}
export default Cards;
