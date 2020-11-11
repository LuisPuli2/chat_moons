import React, { useState } from 'react';

const UserNameForm = ({ username, setUsername, handleSubmit}) =>{
    const [newName, setNewName] = useState(username);

    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    const handleClick = () => {
        setUsername(newName);
        handleSubmit(false);
    }

    const handleOnKeyPress = (event) => {
        if(event.which == 13 || event.keyCode == 13){
            setUsername(newName)
            handleSubmit(false);
        }
    }


    return (
        <div className="user-name-form">
            <div className="user-name-input-label">
                Nombre:
                <input 
                    type="text" 
                    placeholder="Ej: El Pepe" 
                    onChange={handleChange}
                    value={newName}
                    onKeyPress={handleOnKeyPress}
                />
            </div>
            <button 
              className="submit-new-name-button"
              onClick={() => handleClick()}
              disabled={!newName}
            >
              CAMBIAR NOMBRE
            </button>
        </div>
    );
}

export default UserNameForm;
