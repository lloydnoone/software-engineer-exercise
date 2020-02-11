import React, { Component } from 'react';

import { hits as recommendations } from './../data/recommendations'

import Recommendation from './Recommendation'

class Recommendations extends Component {
  render() {
    return (
      <>
        <h1>WE RECOMMEND</h1>
        <div className='recommendations'>
          {recommendations
            .filter(rec => rec.image) // filter out rec with no images
            .map(rec => {
              return (
                <Recommendation
                  key={rec.product_id}
                  rec={rec}
                  toggleLightBox={this.props.toggleLightBox}
                />
              )
            })}
        </div>
      </>
    )
  }
}

export default Recommendations