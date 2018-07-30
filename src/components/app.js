import React, { Component } from 'react'
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from "./largeText";


export default class App extends Component {
 
 constructor(props) {
   super (props)

   this.state= {
     active: false
   }
 }


 renderItems = function() {
  if(this.state.active) {
    return [
      <Clock/>, 
      ChangeDate('Change Date', () => this.setState({active: false})),
      LargeText('04/03'), 
      <label className="grid__remaining">Remaning until your 18th birthday</label>
    ]
  } else {
    return [
      <Picker/>,
      Button('Generate Countdown', () => this.setState({active: true}))
    ]
  }
 }.bind(this)

  render() {
    
    return (
   <div className='grid'>

      <div className="grid__skew-dark-one-box"> </div>
      <div className="grid__skew-dark-two"> </div>
      <div className="grid__skew-dark-three"> </div>
      <div className="grid__skew-dark-four"> </div>

      <div className="grid__skew-light-one-box"></div>
      <div className='grid__skew-light-two'></div>
      <div className="grid__skew-light-three"></div>
    
   {this.renderItems() }
      </div>
    );
  }
}
