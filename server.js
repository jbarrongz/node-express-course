const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
  {name: 'Mark'},
  {name: 'Jill'}
];

app.get('/users', (req, res)=>{
  res.json({
    success: true,
    message: 'Successfully got users data',
    users: mockUserData
  });
});

app.get('/users/:id', (req, res)=>{
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'Got a user...',
    user: req.params.id
  });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const serverUser = 'antonio';
  const serverPass = '123456';
  if (username === serverUser && password === serverPass) {
    res.json({
			success: true,
			message: 'password and username match!',
			token: 'FWEFregEHtrHETBGE'
		})
  } else {
    res.json({
			success: false,
			message: 'password and username do not match'
		})
  }
});

app.listen(8000, () => console.log('The server is running'));