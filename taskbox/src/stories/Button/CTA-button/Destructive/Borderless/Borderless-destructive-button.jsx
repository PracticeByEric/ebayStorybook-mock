import React from 'react';
import './Borderless-destructive-button.css';

const BorderlessDestructiveButton = ({ 
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
      className={`borderlessDestructive borderlessDestructive--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="borderlessDestructiveIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="borderlessDestructiveIcon">{trailingIcon}</span>}
    </button>
  );
};

export default BorderlessDestructiveButton;