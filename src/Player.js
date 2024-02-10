import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//just for the "use of comments"

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px', textAlign: 'center' }}>
            <Card.Img variant="top" src={image} alt={name} style={{ height: '200px' }} />
            <Card.Body>
                <Card.Title style={{fontFamily:'fantasy' , color:'#D4AF37'}}>{name}</Card.Title>
                <Card.Text>
                    <p><strong>Team:</strong> {team}</p>
                    <p><strong>Nationality:</strong> {nationality}</p>
                    <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
                    <p><strong>Age:</strong> {age}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

//just for the "use of comments"

export default Player;