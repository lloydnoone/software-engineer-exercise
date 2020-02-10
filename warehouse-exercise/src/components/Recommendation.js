import React, { Component } from 'react';

import LightBox from './LightBox'

class Recommendation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayLightBox: false
    }
  }

  render() {
    const { product_id, image, product_name, price } = this.props.rec
    return (
      <div key={product_id}>
        <img src={image.link} alt={image.alt} />
        <h2>{product_name}</h2>
        <p>£{price}.00</p>
        <LightBox productId={product_id} displayLightBox={false} />
      </div>
    )
    
  }
}

export default Recommendation