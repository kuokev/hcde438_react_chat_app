import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false);
    {/* When you refresh, attempt to get name if there's something in local storage, 
    otherwise have an empty string. Must also have this in App.js*/}
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    
    
    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username)
    }

    {/* If we're going to show the input, then... otherwise, runs second part.
    wouldn't run second block if first block runs because of the return */}
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            {/*Uses helper function called "save" that is above the if block. Can omit function
            name because there are no arguments to declare on initialization*/}
            <button onClick={save}>OK</button>
        </div>
    }

    return <div className="name-picker">
        <div className="name-hello">Hello, {username}! </div>
        <button onClick={()=> setShowInput(true)}>
            EDIT
        </button>
    </div>
}

export default NamePicker