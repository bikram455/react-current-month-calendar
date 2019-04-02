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
    //this.days = [];
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.dates = this.getDates();
  }

  getDates() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = [], date = new Date(), month = months[date.getMonth()], year = date.getFullYear();
    const lastDate = new Date(date.getFullYear(), 1+date.getMonth(), 0);
    const stop = new Date(lastDate).getDate();
    const firstDate = (date.getFullYear() +' '+ (1+date.getMonth()) +' '+ 1);
    const start = new Date(firstDate).getDay();
    for(var i=0,j=1;i<35;i++) {
        if(i<start) days[i] = 0;
        else if(i <= stop) days[i] = j++;
        else days[i] = 0;
    }
    return {days, month, year};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Board days={this.days} dates = {this.dates.days} month = {this.dates.month} year = {this.dates.year} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
