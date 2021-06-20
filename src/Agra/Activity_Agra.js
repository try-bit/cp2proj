import React, { Component } from 'react';
import img1 from './HOTEL1AGRA.jpg'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import imgCard1 from "./AgraImage1.jpg";
import imgCard2 from "./AgraImage2.jpg";
import imgCard3 from "./AgraImage3.jpg"
import imgCard4 from "./AgraImage6.jpg"
import imgCard5 from "./AgraImage8.jpg"
import imgCard6 from "./AgraImage7.jpg"

class Hotel_Agra extends Component {
  render() {
    return (
      <div>
        <CardGroup>
  <Card>
    
    <Card.Body>
      <Card.Title>TAJ MAHAL</Card.Title>
      <Card.Img variant="top" src={imgCard4} />
      <Card.Text align="left">
      The most famous of the monuments of Agra, India is the TajMahal.
       TajMahal is a symbol of the devotion and dedication of love. TajMahal of Agra is a monument built by emperor Shah Jahan In the memory of her wife Mumtaz Mahal. 
       TajMahal expresses the magnificence of Mughal architecture. The Taj has done wonders to Agra Tourism. 
       Taj is a must in each one of the Agra packages offered by us. Agra to Jaipur is an interesting package option
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
    
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>FATEPUR SIKRI</Card.Title>
      <Card.Img variant="top" src={imgCard1} />
      <Card.Text style={{ fontFamily: "Spicy Rice", color: "pink" }}>
      Famously known as the city of Ghosts, it was built by the Great Mughal Emperor. Fatehpur Sikri is a place worth visiting to discover how once the city could have been which has now turned into ruins. many a Agra packages include a trip to Fatehpur Sikri also
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>SIKANDRA</Card.Title>
      <Card.Img variant="top" src={imgCard6}  style={{ height: '9.2rem' }}/>
      <Card.Text>
        Write hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>AGRA FORT</Card.Title>
      <Card.Img variant="top" src={imgCard2} />
      <Card.Text>
        Write Hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>ITMA UD DALAH</Card.Title>
      <Card.Img variant="top" src={imgCard5} />
      <Card.Text>
        Write about hotel and amenities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }
}
//linking problem needs to be solved.
export default Hotel_Agra;