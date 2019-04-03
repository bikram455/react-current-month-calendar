import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//components
import Hello from './Hello';
import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    this.months = [
      {name: 'January', value: 0}, 
      {name: 'February', value: 1}, 
      {name: 'March', value: 2}, 
      {name: 'April', value: 3}, 
      {name:'May', value: 4}, 
      {name: 'June', value: 5}, 
      {name: 'July', value: 6}, 
      {name: 'August', value: 7}, 
      {name: 'September', value: 8}, 
      {name: 'October', value: 9}, 
      {name: 'November', value: 10}, 
      {name: 'December', value: 11}
      ];
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.dates = this.getDates(new Date());
  }

  getDates(date) {
    var days = [], month = this.months[date.getMonth()], year = date.getFullYear(), today = date.getDate();
    const lastDate = new Date(date.getFullYear(), 1+date.getMonth(), 0);
    const stop = new Date(lastDate).getDate();
    const firstDate = (date.getFullYear() +' '+ (1+date.getMonth()) +' '+ 1);
    const start = new Date(firstDate).getDay();
    for(var i=0,j=1;i<35;i++) {
        if(i<start) days[i] = 0;
        else if(i <= stop) days[i] = j++;
        else days[i] = 0;
    }
    return {days, month, year, today};
  }

  changeDates(event) { 
    console.log('month changed', event.target.value, new Date(2019, +event.target.value, 1));
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Board days={this.days} dates = {this.dates} months= {this.months} getDates = {this.changeDates} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
