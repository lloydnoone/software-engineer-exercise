import React, { Component } from 'react'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      carouselIdx: 1
    }
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)
  }

  nextImage() {
    if ( this.state.carouselIdx + 1 < this.props.images.length ) {
      this.setState({ carouselIdx: this.state.carouselIdx + 1 })
    } else {
      this.setState({ carouselIdx: 1})
    }
  }

  prevImage() {
    if ( this.state.carouselIdx - 1 > 0 ) {
      this.setState({ carouselIdx: this.state.carouselIdx - 1 })
    } else {
      this.setState({ carouselIdx: this.props.images.length - 1})
    }
  }

  render() {
    return (
      <div 
        className='carousel' 
        style={{ 
          backgroundImage: `url(${this.props.images[this.state.carouselIdx].link})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        alt={this.props.images[this.state.carouselIdx].alt}
      >
        <div className='leftArrow' onClick={this.prevImage}></div>
        <div className='rightArrow' onClick={this.nextImage}></div>
      </div>
    )
  }
}

  export default Carousel