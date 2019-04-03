import React from 'react';

const Day = (props) => {
  const getClass = ()=> {
    if(props.today) return 'day today';
    else return 'day';
  }

  return(
    <div className={getClass()}>
      <h6>{props.date}</h6>
    </div>
  );
}

export default Day;