import React from 'react';

const Header = ({username, handleSubmit}) =>{
  const handleClick = () => {
    handleSubmit(true)
  }

  return (
    <div className="header">
      <h3>Conectado como: {username}</h3>
      <button 
        className="change-username-button"
        onClick={() => handleClick()}
      >
        Cambiar Nombre de Usuario
      </button>
    </div>
  );
}

export default Header;
