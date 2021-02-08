import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import {db, useDB} from './db';


function App() {
  {/* Use this format to comment in React */}
  {/* useState returns an array that has two items, the first is a special state 
  variable (messages), and the second one is a function that updates that 
  variable (setMessages) */}
  {/* Default starting value for useState goes inside parentheses; in this case,
  start with an empty array (square brackets) for map to populate later */}
  const messages = useDB(); //Function beginning with "use" is a HOOK
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  console.log(messages)

  return <div className="App">

      <header className="header">
          <div className="logo">
            <h2 className="logo-name">Pinguini</h2>
          </div>

          
          <NamePicker saveName={setUsername} />
      </header>

    <main className="messages">
      {messages.map((msg, i)=> {
        const isMe = msg.name===username;
        console.log("MESSAGE #" + i, msg)
        return <Message key={i} {...msg} isMe={isMe}/>
      })

      }

    </main>
    
    
    {/* Running the setmessages function and passing it a new value, 
    which is an array, starting with the newest message to the start of 
    all the existing messages (...messages). We use this order because of
    flex direction's column-reverse in App.css*/}
    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date()})}
    />

  </div>
}

export default App;
