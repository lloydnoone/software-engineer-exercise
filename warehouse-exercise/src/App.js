import React, { Component } from 'react';

import { data as product } from './data/product.json'
import { hits as recommendations } from './data/recommendations.json'

import './App.css';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      lightBox: true
    }
    this.toggleLightBox = this.toggleLightBox.bind(this)
  }
  
  toggleLightBox() {
    this.setState({ lightBox: false })
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
                <div key={rec.product_id}>
                  <img src={rec.image.link} alt={rec.image.alt} />
                  <h2>{rec.product_name}</h2>
                  <p>£{rec.price}.00</p>
                </div>
              )
            })}
        </div>
        <div className='lightbox' style={{ display: this.state.lightBox ? 'flex' : 'none' }}>
          <div className='modal'>
            <div className='carousel'>
              <img src={product[0].image_groups[0].images[1].link} alt={product[0].image_groups[0].images[0].alt} />
            </div>
            <div className='details'>
              <div className='detailsHeader'>
                <div className='text'>
                  <h3>{product[0].name}</h3>
                  <p>£{product[0].price}.00</p>
                </div>
                <div className='X' onClick={this.toggleLightBox}>
                  <p>X</p>
                </div>
              </div>
              <div className='swatch'>
                {product[0].image_groups[1].images.map(image => {
                  return (
                    <img key={image.alt} src={image.link} alt={image.alt} />
                  )
                })
                }
              </div>
              <div className='sizes'>
                {product[0].variants.map(variant => {
                  return (
                    <div key={variant.product_id} className='size'>
                      <p>{variant.variation_values.size}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App;
