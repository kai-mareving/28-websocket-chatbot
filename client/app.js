'use strict';

/* GLOBAL */
const
  loginForm = document.getElementById('welcome-form'),
  messagesSection = document.getElementById('messages-section'),
  messagesList = document.getElementById('messages-list'),
  addMessageForm = document.getElementById('add-messages-form'),
  userNameInput = document.getElementById('username'),
  messageContentInput = document.getElementById('message-content'),
  messageAuthor = document.querySelector('.message__author');

let userName;

/* ACTIONS */
function login(event) {
  event.preventDefault();

  if (userNameInput.value) {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
    messageAuthor.innerHTML = userName;
  } else {
    alert('Name field is empty!');
  }
}

function sendMessage(event) {
  event.preventDefault();

  let message = messageContentInput.value;

  if (message) {
    addMessage(userName, message)
    messageContentInput.value= '';
  } else {
    alert('Message field is empty!');
  }
}

function addMessage(author, message) {
  console.log('addMessage:', author, message);
}

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);
