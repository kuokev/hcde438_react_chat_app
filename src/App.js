import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';


function App() {
  {/* Use this format to comment in React */}
  {/* useState returns an array that has two items, the first is a special state 
  variable (messages), and the second one is a function that updates that 
  variable (setMessages) */}
  {/* Default starting value for useState goes inside parentheses; in this case,
  start with an empty array (square brackets) for map to populate later */}
  const [messages, setMessages] = useState([])
  return <div className="App">

      <header className="header">
        <div className="logo"></div>
          Pinguini
      </header>

    <main className="messages">
      
      {messages.map((m, i)=> {
        console.log("MESSAGE #" + i, m)
        return <Message key={i} {...m} />
      })

      }

    </main>
    
    
    {/* Running the setmessages function and passing it a new value, 
    which is an array, starting with the newest message to the start of 
    all the existing messages (...messages). We use this order because of
    flex direction's column-reverse in App.css*/}
    <TextInput 
      send={(t)=> setMessages([{text:t}, ...messages])}
    />

  </div>
}

export default App;
