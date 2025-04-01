import React from 'react';
import './Borderless-button.css';

const BorderlessButton = ({ 
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
      className={`borderlessButton borderlessButton--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="borderlessIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="borderlessIcon">{trailingIcon}</span>}
    </button>
  );
};

export default BorderlessButton;