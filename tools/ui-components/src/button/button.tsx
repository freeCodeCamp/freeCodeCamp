import React, { useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

const defaultClassNames = ['cursor-pointer', 'inline-block', 'border-3'];

const computeClassNames = ({
  size,
  variant
}: {
  size: ButtonSize;
  variant: ButtonVariant;
}) => {
  const classNames = [...defaultClassNames];

  // TODO: support 'link' variant
  switch (variant) {
    case 'danger':
      classNames.push(
        'border-default-foreground-danger',
        'bg-default-background-danger',
        'text-default-foreground-danger'
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-default-foreground-secondary',
        'bg-default-background-quaternary',
        'text-default-foreground-secondary'
      );
  }

  switch (size) {
    case 'large':
      classNames.push('px-4 py-2.5 text-lg');
      break;
    case 'small':
      classNames.push('px-2.5 py-1 text-sm');
      break;
    // default size is 'medium'
    default:
      classNames.push('px-3 py-1.5 text-md');
  }

  return classNames.join(' ');
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  onClick,
  children
}: ButtonProps) => {
  const classes = useMemo(
    () => computeClassNames({ size, variant }),
    [size, variant]
  );

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
