import React from 'react';

export default function Customer(props) {

  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  )

};