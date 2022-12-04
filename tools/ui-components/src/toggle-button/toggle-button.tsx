import { Switch } from '@headlessui/react';
import React, { useCallback } from 'react';
import { ButtonSize, ButtonVariant, ToggleButtonProps } from './types';

const defaultClassNames = [
  'relative',
  'border-3',
  'text-center',
  'inline-block',
  'focus:outline-none', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color',
  'ui-checked:cursor-not-allowed', // ui-checked from @headlessui/tailwindcss plugin
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50'
];

const computeClassNames = ({
  size,
  variant
}: {
  size: ButtonSize;
  variant: ButtonVariant;
}) => {
  const classNames = [...defaultClassNames];

  switch (variant) {
    case 'danger':
      classNames.push(
        'border-foreground-danger',
        'bg-background-danger',
        'text-foreground-danger',
        'hover:bg-foreground-danger',
        'hover:text-background-danger',
        'dark:hover:bg-background-danger',
        'dark:hover:text-foreground-danger',
        'ui-checked:bg-foreground-danger',
        'ui-checked:text-background-danger',
        'ui-checked:hover:bg-background-danger',
        'ui-checked:hover:text-foreground-danger'
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-foreground-secondary',
        'bg-background-quaternary',
        'text-foreground-secondary',
        'hover:bg-foreground-primary',
        'hover:text-background-primary',
        'dark:hover:bg-background-primary',
        'dark:hover:text-foreground-primary',
        'ui-checked:bg-foreground-primary',
        'ui-checked:text-background-primary',
        'ui-checked:hover:bg-background-quaternary',
        'ui-checked:hover:text-foreground-secondary'
      );
  }

  switch (size) {
    case 'large':
      classNames.push('px-8 py-2.5 text-lg');
      break;
    case 'small':
      classNames.push('px-5 py-1 text-sm');
      break;
    // default size is 'medium'
    default:
      classNames.push('px-6 py-1.5 text-md');
  }

  return classNames.join(' ');
};

export const ToggleButton = ({
  size = 'medium',
  variant = 'primary',
  disabled,
  children,
  checked,
  onChange
}: ToggleButtonProps) => {
  const classNames = computeClassNames({ size, variant });

  const handleChange = useCallback(
    (checked: boolean) => {
      if (!disabled && onChange) {
        onChange(checked);
      }
    },
    [onChange, disabled]
  );

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      className={classNames}
      aria-disabled={disabled}
    >
      {children}
    </Switch>
  );
};
