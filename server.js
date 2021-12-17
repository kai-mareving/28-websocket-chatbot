const express = require('express');
const path = require('path');
const socket = require('socket.io');

const app = express();

const messages = [];
let users = [];

app.use(express.static(path.join(__dirname, '/client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

/* can only be called on an instance (const server) of a created server (not on app) */
const io = socket(server);

io.on('connection', (socket) => {
  console.log('New client with ID: ', socket.id);
  socket.on('message', (message) => {
    let user = {};
    console.log('I\'ve got a message from ' + socket.id);
    user.name = message.author;
    user.id = socket.id;
    if (users.some(user => user.id === socket.id)) {
      console.log('users already contains this id');
    } else {
      users.push(user);
    }
    messages.push(message);
    socket.broadcast.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('Oh, socket ' + socket.id + ' has left');
    users = users.filter(user => user.id !== socket.id);
  });
  console.log('I\'ve added a listener on message event \n');
});
