
function Message(props){
    return <div className="message-row" style={{justifyContent: props.isMe ? 'flex-end' : 'flex-start'}}>
          <div className="message">
            {/* Putting message sender name in the message box because we want 
            the name to be associated with each individual message box. */}
            <div className="message-name">{props.name}</div>
            {props.text}
          </div>
        </div>
}

export default Message