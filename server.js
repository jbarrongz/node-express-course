const express = require('express');
const app = express();

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

app.listen(8000, () => console.log('The server is running'));