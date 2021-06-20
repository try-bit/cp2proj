import React, { Component } from 'react';
import img1 from './HOTEL1AGRA.jpg'
import img2 from './Lemeridian.jpg'
import img3 from './Vivanta.jpg'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
class Hotel_Agra extends Component {
  render() {
    return (
      <div>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} style={{ height: '22rem' }}/>  
    <Card.Body>
      <Card.Title>Radisson Blue</Card.Title>
      <Card.Text>
        Write hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/radisson">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"  src={img2} style={{ height: '22rem' }}/> 
    <Card.Body>
      <Card.Title> LE Meridian</Card.Title>
      <Card.Text>
        Write Hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/lemeridian">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} style={{ height: '22rem' }}/>
    <Card.Body>
      <Card.Title>Vivanta By Taj</Card.Title>
      <Card.Text>
        Write about hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/vivanta">Book your stay</Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }
}

export default Hotel_Agra;