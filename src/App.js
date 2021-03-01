import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import {db, useDB} from './db';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function Wrap() {
  return <BrowserRouter>
  {/* Switch allows choosing which room to be in; like an if statement. 
  Which route do we want to render? Only render one of the below.
  Either a blank route (no slash), or if there's any route (":" means ANYTHING),
  so then that anything will become the const "room" in the App component; otherwise,
  empty slash will become "home" (see || in const room) */}
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {
  console.log(props)
  /* In case no given parameter in URL, call it home */
  const room = props.match.params.room || 'home'
  console.log("CHAT ROOM", room)
  {/* Use this format to comment in React */}
  {/* useState returns an array that has two items, the first is a special state 
  variable (messages), and the second one is a function that updates that 
  variable (setMessages) */}
  {/* Default starting value for useState goes inside parentheses; in this case,
  start with an empty array (square brackets) for map to populate later */}
  const messages = useDB(room); //Function beginning with "use" is a HOOK
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
    flex direction's column-reverse in App.css.
    
    Also add "room" so that we know which room the sent message should be included in. */}
    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
    />

  </div>
}

/* Note: name doesn't actually matter when using import from statement in another file 
 when using export default since it just means that when exporting FROM this file, 
 refer to "Wrap" as App (e.g., in index.html). Other external files just need to find 
 the App.js file, run it, and can rename whatever import ___ it wants to refer in its own file...
 
 So Wrap is now the top-level component, which uses the App component*/
export default Wrap;
