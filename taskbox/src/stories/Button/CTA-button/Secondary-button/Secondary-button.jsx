import React from 'react';
import './Secondary-button.css';

const SecondaryButton = ({ 
  children, 
  disabled = false,
  size='large',
  onClick,
  leadingIcon = null,
  trailingIcon = null,
  ...props 
}) => {
  return (
    <button 
      className={`secondaryButton secondaryButton--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="secondaryIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="secondaryIcon">{trailingIcon}</span>}
    </button>
  );
};

export default SecondaryButton;