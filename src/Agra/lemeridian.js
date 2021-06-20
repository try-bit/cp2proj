import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from './leme4.jpg'
import img2 from './leme5.jpg'
import img3 from './leme6.jpg'
import Table from 'react-bootstrap/Table' 
import Button from 'react-bootstrap/Button' 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Row, Col,} from "reactstrap";
class App extends Component {
  render() {
    return (
      <div>
        <h1>........</h1>
          <h1 align="centre">LE MERIDIAN</h1>
          <div>
            <Container>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{ height: '35rem' }}
    />
    <Carousel.Caption>
      <h3>SUITE</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      style={{ height: '35rem' }}
    />

    <Carousel.Caption>
      <h3>ECONOMY</h3>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      style={{ height: '35rem' }}
    />

    <Carousel.Caption>
      <h3>DELUXE</h3>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>  
      </div>
      <div>
          
          <br/>
          <br/>
      <div className="Table">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Type of Room</th>
      <th>Amenities</th>
      <th>Price</th>
      <th>People Staying</th>
      <th>Days</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Economy</td>
      <td>XYZ<br/>ABC</td>
      <td>3450</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
      </td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </td>
      
      <td><Button as="input" type="button" value="Confirm Booking" /></td>
    </tr>
    <tr>
      <td>Deluxe</td>
      <td>ABC</td>
      <td>2100</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
      </td>
      <td><Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select></td>
     
      <td><Button as="input" type="button" value="Confirm Booking" /></td>
    </tr>
    <tr>
    <td>Suite</td>
      <td>ABC</td>
      <td>2450</td>
      <td>
      <Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          
        </Select>
      </td>
      <td><Select
          labelId="demo-simple-select-label"
          name="a_description"
          id="demo-simple-select"
          defaultValue="Choose"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select></td>
      
      <td><Button as="input" type="button" value="Confirm Booking" /></td>
    </tr>
  </tbody>
</Table>
      </div>
      </div>
          
      </div>
    );
  }
}

export default App;