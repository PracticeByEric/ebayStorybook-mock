import React from 'react';
import './Primary-button.css';

const PrimaryButton = ({ 
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
      className={`primaryButton primaryButton--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
    {leadingIcon && <span className="primaryIcon">{leadingIcon}</span>}
      {children}
    {trailingIcon && <span className="primaryIcon">{trailingIcon}</span>}
    </button>
  );
};

export default PrimaryButton;