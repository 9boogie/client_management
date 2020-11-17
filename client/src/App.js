import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto",
    color: 'red'
  },
  table: {
    minWidth: 1080
  }
}));

function App() {
  const [state, setState] = useState({
    customers: []
  });
  const classes = useStyles();

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  useEffect(() => {
    callApi()
      .then(res => setState({customers: res}))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>BIRTHDAY</TableCell>
            <TableCell>GENDER</TableCell>
            <TableCell>JOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.customers ? state.customers.map(customer => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          )
        }) : 
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress/>
          </TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
    </Paper>

    <CustomerAdd/>
    </div>
    
  );
}

export default App;