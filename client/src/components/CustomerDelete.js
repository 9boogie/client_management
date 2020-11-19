import React from 'react';

export default function CustomerDelete(props) {

  const deleteCustomer = (id) => {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE'
    });
    props.setUpdateData(true);
  };

  return (
    <button onClick={() => {deleteCustomer(props.id)}} >Delete</button>
  )
};
