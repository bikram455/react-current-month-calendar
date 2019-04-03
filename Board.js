import React from 'react';

// components
import Day from './Day';

const Board = (props) => { 

  return (
    <div className="board">
      
      <select onChange={ props.getDates }>
        {
          props.months.map(
            (month,i) => {
              return (<option key = {i} selected = {month.name === props.dates.month.name} value={month.value}> {month.name} </option>)
            }
          )
        }
      </select>
      <label> {props.dates.year} </label>
      <hr></hr>

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