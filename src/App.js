import './App.css';
import Customer from './components/Customer';

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
  birthday: '94129',
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
  return (
    <div>
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
    </div>
  );
}

export default App;
