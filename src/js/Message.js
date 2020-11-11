import React from 'react';

const Message = ({message, isReceived, username}) =>{
    const className = isReceived ? "received-message" : "sent-message"
    return (
        <div className="message">
            <p className={className}>
                <b>
                    {isReceived ? username : "Tú"}:
                </b>
                {message}
            </p>
        </div>
    
    );
}

export default Message;
