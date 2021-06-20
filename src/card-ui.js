import React from 'react';

import img from "./Jaipur/Hawa_Mahal_Final_1.jpg"

import img4 from "./Agra/AgraImage2.jpg"
import img5 from "./Agra/AgraImage3.jpg"
import img6 from "./Agra/AgraImage4.jpg"
import img7 from "./Agra/AgraImage5.jpg"
import img8 from "./Agra/AgraImage6.jpg"
import img3 from "./Jaipur/CityPalace.jpg"

function Card(props) {
  return (
  
    <div>
      <h1 style={{ color: 'white' }}>.</h1>
    <ul>
      <li className="card-container">
      <img className="card-image" src={props.src} alt="" />
				
        <div className="card-container--content">
          <h3 className="card-header--title">{props.heading}</h3>
         
         
          <a href={props.link} class="btn btn-outline-warning">
            Explore
          </a>
        </div>
       
      </li>
    </ul>
    </div>

  );
}

export default function CardList(props) {
  return (
    <div>
    <div className="card-masonry">
      <Card
        heading="AGRA"
        
        src={img8}
        link="/agra"
        style={{ height: '22rem' }}
      />
      <Card
        heading="JAIPUR"
        src={img}
        link="/jaipur"
      />
       <Card
        heading="Ladakh"
       src={img3}
        
      />
      <Card
        heading="Goa"
        src={img4}
      />
    </div>
     <div className="card-masonry">
     <Card
       heading="Andaman and Nicobar"
       
       src={img5}
       
     />
     <Card
       heading="Assam"
       src={img6}
     />
      <Card
       heading="Darjeeling"
       
       src={img7}
       
     />
     <Card
       heading="Hyderabad"
       src={img8}
       style={{ height: '22rem' }}
     />
   </div>
   </div>
  );
}