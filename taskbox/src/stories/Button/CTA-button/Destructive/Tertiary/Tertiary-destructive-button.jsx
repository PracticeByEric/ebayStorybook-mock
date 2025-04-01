import React from 'react';
import './Tertiary-destructive-button.css';

const TertiaryDestructiveButton = ({ 
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
      className={`tertiaryDestructive tertiaryDestructive--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="tertiaryDestructiveIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="tertiaryDestructiveIcon">{trailingIcon}</span>}
    </button>
  );
};

export default TertiaryDestructiveButton;