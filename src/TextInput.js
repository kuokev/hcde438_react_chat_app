import {useState} from 'react';
import { IoSendOutline } from "react-icons/io5";


function TextInput(props) {
    const [text, setText] = useState('')

function sendMessage(){
    if(text==='') return // skip the function if user enters no text (disallow blank messages)
    props.send(text)
    setText('')
}

function keyPressed(e){
    if(e.key==="Enter"){
        sendMessage()
    }
}

    return <footer className="text-input">
        <input 
            className="text-box"
            placeholder="Add your message"
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={keyPressed}
        />
        <button
            className="send-button"
            onClick={sendMessage}
            disabled={!text}
        > 
            <IoSendOutline title="Send Buton" style={{minWidth:"0.8rem", marginLeft:2.2}}/>
        </button>
    </footer>
}

export default TextInput