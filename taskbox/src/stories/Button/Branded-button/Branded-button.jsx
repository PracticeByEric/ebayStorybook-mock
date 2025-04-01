import React from 'react';
import './Branded-button.css';

const BrandedButton = ({ 
  children, 
  disabled = false,
  leadingIcon=null,
  onClick,
  ...props 
}) => {
  return (
    <button 
      className={`brandedButton`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leadingIcon && <span className="branded-button_icon">{leadingIcon}</span>}
      {children}
    </button>
  );
};

export default BrandedButton;