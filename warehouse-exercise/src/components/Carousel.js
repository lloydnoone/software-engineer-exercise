import React, { Component } from 'react'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselIdx: 1
    }
    this.nextImage = this.nextImage.bind(this)
  }

  nextImage() {
    if ( this.state.carouselIdx + 1 < this.props.images.length ) {
      this.setState({ carouselIdx: this.state.carouselIdx + 1 })
    } else {
      this.setState({ carouselIdx: 1})
    }
    
  }

  render() {
    return (
      <div className='carousel'>
        <div className='leftArrow'>{'<'}</div>
        <div className='rightArrow'>{'>'}</div>
        <img
          src={this.props.images[this.state.carouselIdx].link}
          alt={this.props.images[this.state.carouselIdx].alt}
          onClick={this.nextImage}
        />
      </div>
    )
  }
}

  export default Carousel