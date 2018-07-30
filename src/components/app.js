import React, { Component } from 'react'
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from "./largeText";
import moment from "moment";


export default class App extends Component {
 
 constructor(props) {
   super (props)

   this.state= {
     active: false,
     startDate: moment(),
   }
 }

 handleChange = function(date) {
  console.log('trying to change date for', date._d);
  this.setState({
    startDate: date
  });
}.bind(this)

handleGenerate = function() {
  this.setState({ active: true })

  var countDownDate = this.state.startDate.toDate().getTime();
     // Update the count down every 1 second
  var x = setInterval(function() {
      // Get todays date and time
  var now = new Date().getTime()

  const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  console.log(time)

  // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}.bind(this)

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
      <Picker callback={(date) => this.handleChange(date)}/>,
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
