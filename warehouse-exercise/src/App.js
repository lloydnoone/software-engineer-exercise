import React, { Component } from 'react';

import { data as product } from './data/product.json'
import { hits as recommendations } from './data/recommendations.json'

import LightBox from './components/LightBox'

import './App.css';


class App extends Component {
  render() {
    console.log(product)
    console.log(recommendations)
    return (
      <div className="App">
        <h1>WE RECOMMEND</h1>
        <div className='recommendations'>
          {recommendations
            .filter(rec => rec.image) // filter out rec with no images
            .map(rec => {
              return (
                <div key={rec.product_id}>
                  <img src={rec.image.link} alt={rec.image.alt} />
                  <h2>{rec.product_name}</h2>
                  <p>£{rec.price}.00</p>
                  <LightBox productId={rec.product_id} displayLightBox={false}/>
                </div>
              )
            })}
        </div>
       
      </div>
    )
  }
  
}

export default App;
