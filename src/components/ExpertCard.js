import React from 'react'
import { Card ,Button} from 'react-bootstrap';
import './ExpertCard.css';
const ExpertCard = (props) => {
    return (
        <Card style={{ width: '10rem' }} className="expertCard col-md-2">
            <div className="imageWrapper mt-2">
                <Card.Img variant="top" src={props.profilePic}/>
            </div>
            <div className="cardText">
                <h6 className="nameText">{props.title}{props.name}</h6>
                <p className="degreText">{props.qualification}</p>
            </div>
        </Card>
    )
}

export default ExpertCard;
