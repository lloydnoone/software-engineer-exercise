import React, { Component } from 'react';

import { data as productData } from '../data/product.json'

class LightBox extends Component {
  render() {
     // find in product data using recommendation ID 
    const recId = this.props.recId.slice(0, 6) //recommendation ID
    const product = productData.find(prod => prod.id === recId) //product details of the same ID
    console.log('recId', recId)
    console.log('product', product)
    return (
      <div className='lightbox' style={{ display: this.props.displayLightBox ? 'flex' : 'none' }}>
        <div className='modal'>
          <div className='carousel'>
            <img src={product.image_groups[0].images[1].link} alt={product.image_groups[0].images[0].alt} />
          </div>
          <div className='details'>
            <div className='detailsHeader'>
              <div className='text'>
                <h3>{product.name}</h3>
                <p>£{product.price}.00</p>
              </div>
              <div className='X' onClick={this.props.toggleLightBox}>
                <p>X</p>
              </div>
            </div>
            <div className='swatch'>
              {product.image_groups[1].images.map((image, i) => {
                return (
                  <img key={`${i} swatch`} src={image.link} alt={image.alt} />
                )
              })
              }
            </div>
            <div className='sizes'>
              {product.variants.map((variant, i) => {
                return (
                  <div key={`${i} sizes`} className='size'>
                    <p>{variant.variation_values.size}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LightBox