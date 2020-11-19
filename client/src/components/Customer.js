import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

export default function Customer(props) {

  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell><img src={props.image} alt='profile'/></TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
      <TableCell><CustomerDelete id={props.id} setUpdateData={props.setUpdateData}/></TableCell>
    </TableRow>
  )

};