import React from 'react';
import CustomerProfile from './CustomerProfile';
import CustomerInfo from './CustomerInfo';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function Customer(props) {

  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell><img src={props.image} alt='profile'/></TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  )

};