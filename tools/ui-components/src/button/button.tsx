import React, { useCallback, useMemo } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './types';

const defaultClassNames = [
  'relative',
  'cursor-pointer',
  'inline-block',
  'border-3',
  'active:before:w-full',
  'active:before:h-full',
  'active:before:absolute',
  'active:before:inset-0',
  'active:before:border-3',
  'active:before:border-transparent',
  'active:before:bg-gray-900',
  'active:before:opacity-20',
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50'
];

const computeClassNames = ({
  size,
  variant,
  disabled
}: {
  size: ButtonSize;
  variant: ButtonVariant;
  disabled?: boolean;
}) => {
  const classNames = [...defaultClassNames];

  // TODO: support 'link' variant
  switch (variant) {
    case 'danger':
      classNames.push(
        'border-default-foreground-danger',
        'bg-default-background-danger',
        'text-default-foreground-danger',
        ...(disabled
          ? []
          : [
              'hover:bg-default-background-danger-hover',
              'hover:text-default-foreground-danger-hover'
            ])
      );
      break;
    case 'info':
      classNames.push(
        'border-default-foreground-info',
        'bg-default-background-info',
        'text-default-foreground-info',
        ...(disabled
          ? []
          : [
              'hover:bg-default-background-info-hover',
              'hover:text-default-foreground-info-hover'
            ])
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-default-foreground-secondary',
        'bg-default-background-quaternary',
        'text-default-foreground-secondary',
        ...(disabled
          ? []
          : [
              'hover:bg-default-background-primary-hover',
              'hover:text-default-foreground-primary-hover'
            ])
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
      children,
      disabled
    },
    ref
  ) => {
    const classes = useMemo(
      () => computeClassNames({ size, variant, disabled }),
      [size, variant, disabled]
    );

    // Manually prevent click event if the button is disabled
    // as `aria-disabled` marks the element disabled but still registers the click event.
    // Ref: https://css-tricks.com/making-disabled-buttons-more-inclusive/#aa-the-difference-between-disabled-and-aria-disabled
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        const ariaDisabled = event.currentTarget.getAttribute('aria-disabled');

        if (!ariaDisabled && onClick) {
          onClick(event);
        }
      },
      [onClick]
    );

    return (
      <button
        ref={ref}
        className={classes}
        type={type}
        onClick={handleClick}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
