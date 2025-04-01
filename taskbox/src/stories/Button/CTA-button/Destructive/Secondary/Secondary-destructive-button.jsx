import React from 'react';
import './Secondary-destructive-button.css';

const SecondaryDestructiveButton = ({ 
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
      className={`secondaryDestructive secondaryDestructive--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="secondaryDestructiveIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="secondaryDestructiveIcon">{trailingIcon}</span>}
    </button>
  );
};

export default SecondaryDestructiveButton;