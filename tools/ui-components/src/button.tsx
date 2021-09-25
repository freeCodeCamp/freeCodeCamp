import React from 'react';
import { ButtonProps } from './button.types';

import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        'fcc-style'
      ].join(' ')}
      style={{ backgroundColor }}
      type='button'
      {...props}
    >
      {label}
    </button>
  );
};
