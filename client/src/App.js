import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    color: 'red'
  },
  table: {
    minWidth: 1080
  }
}));

const customers = [
  {
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'Harry',
  birthday: '961222',
  gender: 'Male',
  job: 'Laywer'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'Ron',
  birthday: '940129',
  gender: 'Male',
  job: 'Doctor'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: 'Miz',
  birthday: '980722',
  gender: 'Female',
  job: 'student'
}
]

function App() {
  const classes = useStyles();

  return (
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
          {customers.map(customer => {
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
        })}
        </TableBody>
      </Table>
      
    </Paper>
  );
}

export default App;
