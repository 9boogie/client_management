const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
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
  ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));