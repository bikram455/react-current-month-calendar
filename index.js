import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//components
import Hello from './Hello';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      flag: true
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
    this.years = [];
    for(var i=0; i<=40; i++) this.years[this.years.length] = 1990 + i;
  }

  getDates = (date) => {
    var days = [], month = this.months[date.getMonth()], year = date.getFullYear(), today = new Date().getDate();
    const lastDate = new Date(date.getFullYear(), 1+date.getMonth(), 0);
    const stop = new Date(lastDate).getDate();
    const firstDate = (date.getFullYear() +' '+ (1+date.getMonth()) +' '+ 1);
    const start = new Date(firstDate).getDay();
    for(var i=0,j=1;i<42;i++) {
        if(i < start) days[i] = 0;
        else if(j <= stop) days[i] = j++;
        else days[i] = 0;
    }
    if(new Date().getMonth() === date.getMonth()) return {days, month, year, today};
    else return {days, month, year};
  }

  changeDates = (event) => {console.log(event.target.value, this.dates.month.value, this.dates.year)
    const value = event.target.value;
    var newDate;
    if(value < 1990){
      newDate = new Date(this.dates.year, value, 1);console.log('newDate: ',newDate)
      this.dates = this.getDates(newDate);
    } else {
      newDate = new Date(value, this.dates.month.value, 1);console.log(newDate)
      this.dates = this.getDates(newDate);
    }
    this.setState({
      flag: !this.state.flag
    });
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Board days={this.days} dates = {this.dates} months= {this.months} getDates = {this.changeDates} years= {this.years} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
