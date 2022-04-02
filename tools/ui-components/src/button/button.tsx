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
        'text-default-foreground-danger',
        'hover:bg-default-background-danger-hover',
        'hover:text-default-foreground-danger-hover'
      );
      break;
    case 'info':
      classNames.push(
        'border-default-foreground-info',
        'bg-default-background-info',
        'text-default-foreground-info',
        'hover:bg-default-background-info-hover',
        'hover:text-default-foreground-info-hover'
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-default-foreground-secondary',
        'bg-default-background-quaternary',
        'text-default-foreground-secondary',
        'hover:bg-default-background-primary-hover',
        'hover:text-default-foreground-primary-hover'
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      type = 'button',
      onClick,
      children
    },
    ref
  ) => {
    const classes = useMemo(
      () => computeClassNames({ size, variant }),
      [size, variant]
    );

    return (
      <button ref={ref} className={classes} type={type} onClick={onClick}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
