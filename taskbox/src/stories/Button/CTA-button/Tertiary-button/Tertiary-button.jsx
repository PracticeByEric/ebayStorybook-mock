import React from 'react';
import './Tertiary-button.css';

const TertiaryButton = ({ 
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
      className={`tertiaryButton tertiaryButton--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="tertiaryIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="tertiaryIcon">{trailingIcon}</span>}
    </button>
  );
};

export default TertiaryButton;