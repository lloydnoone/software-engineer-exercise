import React, { Component } from 'react';

class Recommendation extends Component {
  render() {
    const { product_id, image, product_name, price } = this.props.rec
    return (
      <div key={product_id} onClick={() => this.props.toggleLightBox(product_id)} className='recommendation'>
        <img src={image.link} alt={image.alt} />
        <h2>{product_name}</h2>
        <p>£{price}.00</p>
      </div>
    )
    
  }
}

export default Recommendation