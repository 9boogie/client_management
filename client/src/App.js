import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { makeStyles, fade } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    minWidth: 1080
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  TableHead: {
    fontSize: '1.0 rem'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const [state, setState] = useState({
    customers: '',
    searchKeyword: '',
    complete: false
  });
  const classes = useStyles();
  const cellList = ['ID', 'PROFILE IMAGE', 'NAME', 'BIRTHDAY', 'GENDER', 'JOB'];

  const filteredComponents = (data) => {
    data = data.filter((client) => {
      return client.name.indexOf(state.searchKeyword) > -1;
    });
    return data.map((customer) => {
      return <Customer
      key={customer.id}
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      setState={setState}
    />
    });
  };

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  const handleValueChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  };

  useEffect(() => {
      callApi()
        .then(res => setState((prev) =>  ({...prev, customers: res, complete: false})))
        .catch(err => console.log(err));
  }, [state.complete]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            CLIENT MANGEMENT SYSTEM
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search By Name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              name="searchKeyword"
              value={state.searchKeyword}
              onChange={handleValueChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.menu}>
        <CustomerAdd setState={setState}/>
      </div>
      <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            {cellList.map(tag => {
              return <TableCell className={classes.TableHead}>{tag}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.customers ? filteredComponents(state.customers) : 
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress/>
          </TableCell>
        </TableRow>
        }
        </TableBody>
      </Table>
    </Paper>
    </div>
    
  );
}

export default App;