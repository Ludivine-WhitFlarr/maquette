import React , { Component } from 'react';
import img1 from '../img/rosevert.jpeg';
import img2 from '../img/Endora.png';


export default class Galerie extends Component {
  render(){
    return (
      <section>
        <ul className="galerie">
          <li><img src={img1}/></li>
          <li><img src={img1}/></li>
          <li><img src={img2}/></li>
          <li><img src={img1}/></li>

          <li><img src={img1}/></li>
          <li><img src={img2}/></li>
          <li><img src={img1}/></li>
          <li><img src={img1}/></li>

          <li><img src={img1}/></li>
          <li><img src={img1}/></li>
          <li><img src={img1}/></li>
          <li><img src={img2}/></li>

          <li><img src={img2}/></li>
          <li><img src={img1}/></li>
          <li><img src={img1}/></li>
          <li><img src={img1}/></li>
        </ul>
      </section>
    );
  }
}
