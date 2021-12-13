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
    alert('Please enter your name to join');
  }
}

loginForm.addEventListener('submit', login);
