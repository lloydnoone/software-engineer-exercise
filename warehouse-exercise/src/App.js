import React, { Component } from 'react';

import { data as product } from './data/product.json'
import { hits as recommendations } from './data/recommendations.json'

import Recommendation from './components/Recommendation'
import LightBox from './components/LightBox'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      displayLightBox: false,
      recId: ''
    }
    this.toggleLightBox = this.toggleLightBox.bind(this)
  }

  toggleLightBox(recId) {
    this.setState({ displayLightBox: !this.state.displayLightBox, recId: recId })
  }

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
                <Recommendation 
                key={rec.product_id} 
                rec={rec}
                toggleLightBox={this.toggleLightBox}
                />
              )
            })}
        </div>
        {this.state.displayLightBox && 
          <LightBox
            recId={this.state.recId} 
            displayLightBox={this.state.displayLightBox} 
            toggleLightBox={this.toggleLightBox}
          />
        }
       
      </div>
    )
  }
  
}

export default App;
