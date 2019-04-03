import React from 'react';

// components
import Day from './Day';

const Board = (props) => { console.log(props)

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
      &nbsp;&nbsp;&nbsp;
      <select onChange={ props.getDates }>
        {
          props.years.map(
            (year,i) => {
              return (<option key = {i} selected = {year == props.dates.year} value={year}> {year} </option>)
            }
          )
        }
      </select>
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