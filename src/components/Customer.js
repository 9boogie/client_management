import React from 'react';
import CustomerProfile from './CustomerProfile';
import CustomerInfo from './CustomerInfo';

export default function Customer(props) {

  return (
    <div>
      <CustomerProfile image={props.image} name={props.name} id={props.id}  />
      <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job} />
    </div>
  )

};