import React, { useState } from 'react';

const Form = ({handleMessage}) =>{
  const [message, setMesssage] = useState("")

  const handleChange = (event) => {
    setMesssage(event.target.value)
  }

  const handleClick = () => {
    handleMessage(message);
    setMesssage("")
  }

  const handleOnKeyPress = (event) => {
    if(event.which == 13 || event.keyCode == 13){
      handleMessage(message);
      setMesssage("")
    }
  }

  return (
    <div className="input">
        <div className="text-input-div">
            <input 
                type="text" 
                placeholder="Escribe un mensaje..." 
                className="text-input"
                onChange={handleChange}
                value={message}
                onKeyPress={handleOnKeyPress}
            />
        </div>
        <div className="send-button-div">
            <button 
              className="submit-button"
              onClick={() => handleClick()}
              disabled={!message}
            >
              ENVIAR
            </button>
        </div>
    </div>
  );
}

export default Form;
