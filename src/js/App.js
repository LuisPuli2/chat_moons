import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form' 
import Header from './Header'
import Messages from './Messages'
import Message from './Message'
import UserNameForm from './UserNameForm'
import socketIOClient from "socket.io-client";


const ENDPOINT = "http://localhost:3001"
const socket = socketIOClient(ENDPOINT);

const parseMessage = (message, isReceived, sender) => {
  return (
    <Message message={message} isReceived={isReceived} username={sender} />
  )
}

function App() {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState(null)
  const [showUserForm, setShowUserForm] = useState(true)

  const handleMessage = (message) =>{
    socket.emit('new message', {message: message});
  }

  useEffect(() => {
    socket.on('new message', (data) =>{
      let {sender, message}  = data;
      let isReceived = username != sender
      let parsedMessage = parseMessage(message, isReceived, sender)
      setMessages(messages.concat([parsedMessage]))
    })
  });

  useEffect(() => {
    socket.emit('add user', username);
  }, [username]);

  const chat = (
    <div>
      <Header username={username} handleSubmit={setShowUserForm}/>
      <div class="main-container">
        <Messages messages={messages} />
        <Form handleMessage={handleMessage}/>
      </div>
    </div>
  )

  const userForm = <UserNameForm username={username} setUsername={setUsername} handleSubmit={setShowUserForm}/>

  return ( showUserForm ? userForm : chat);
}

export default App;

ReactDOM.render(<App />, document.getElementById("app")) ;