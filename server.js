const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/client/${name}`));
  };
  next();
});

app.get('/style.css', (req, res) => {
  res.show('style.css');
});

app.get('/app.js', (req, res) => {
  res.show('app.js');
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
