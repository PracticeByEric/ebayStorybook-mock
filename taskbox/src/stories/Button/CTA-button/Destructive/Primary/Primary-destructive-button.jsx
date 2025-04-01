import React from 'react';
import './Primary-destructive-button.css';

const PrimaryDestructiveButton = ({ 
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
      className={`primaryDestructive primaryDestructive--${size}`}
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

export default PrimaryDestructiveButton;