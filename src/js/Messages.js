import React from 'react';

const Messages = ({messages}) =>{
    return (
        <div className="messages-div">
            <div className="messages-content">
                {messages}
            </div>
        </div>
    );
}

export default Messages;
