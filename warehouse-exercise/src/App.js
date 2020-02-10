import React, { Component } from 'react';

import { data as product } from './data/product.json'
import { hits as recommendations } from './data/recommendations.json'

import Recommendation from './components/Recommendation'

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
                <Recommendation key={rec.product_id} rec={rec}/>
              )
            })}
        </div>
       
      </div>
    )
  }
  
}

export default App;
