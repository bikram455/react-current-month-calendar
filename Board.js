import React from 'react';

// components
import Day from './Day';

const Board = (props) => { 

  return (
    <div className="board">
      <h3> {`${props.dates.month}, ${props.dates.year}`} </h3>
      
      {
        props.days.map(
          (day, i) => {
            return <Day date = {day} key = {i} />;
          }
        )
      }
      {
        props.dates.days.map(
          (date, i) => {
            if(date === 0) return <Day key = {i} />
            else if(date ===  props.dates.today) return <Day date={date} today = {props.dates.today} key = {i} />
            else return <Day date ={date} key = {i} />;
          }
        )
      }
    </div>
  );
}

export default Board;