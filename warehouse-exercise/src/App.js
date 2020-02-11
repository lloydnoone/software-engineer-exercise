import React, { Component } from 'react';

import Recommendations from './components/Recommendations'
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
    return (
      <div className="App">
        <Recommendations toggleLightBox={this.toggleLightBox}/>
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
