import { Switch } from '@headlessui/react';
import React from 'react';
import { ButtonSize, ButtonStyle, ToggleButtonProps } from './types';

const defaultClassNames = [
  'relative',
  'border-3',
  'text-center',
  'inline-block',
  'active:before:w-full',
  'active:before:h-full',
  'active:before:absolute',
  'active:before:inset-0',
  'active:before:border-3',
  'active:before:border-transparent',
  'active:before:bg-gray-900',
  'active:before:opacity-20',
  'focus:outline-none', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color',
  'ui-checked:cursor-not-allowed', // ui-checked from @headlessui/tailwindcss plugin
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50'
];

const computeClassNames = ({
  bsSize,
  bsStyle,
  disabled
}: {
  bsSize: ButtonSize;
  bsStyle: ButtonStyle;
  disabled?: boolean;
}) => {
  const classNames = [...defaultClassNames];

  switch (bsStyle) {
    case 'danger':
      classNames.push(
        'border-foreground-danger',
        'bg-background-danger',
        'text-foreground-danger',
        'ui-checked:bg-foreground-danger',
        'ui-checked:text-background-danger',
        ...(disabled
          ? ['active:before:hidden']
          : [
              'hover:bg-foreground-danger',
              'hover:text-background-danger',
              'dark:hover:bg-background-danger',
              'dark:hover:text-foreground-danger',
              'ui-checked:hover:bg-background-danger',
              'ui-checked:hover:text-foreground-danger'
            ])
      );
      break;
    // default variant is 'primary'
    default:
      classNames.push(
        'border-foreground-secondary',
        'bg-background-quaternary',
        'text-foreground-secondary',
        'ui-checked:bg-foreground-primary',
        'ui-checked:text-background-primary',
        ...(disabled
          ? ['active:before:hidden']
          : [
              'hover:bg-foreground-primary',
              'hover:text-background-primary',
              'dark:hover:bg-background-primary',
              'dark:hover:text-foreground-primary',
              'ui-checked:hover:bg-background-quaternary',
              'ui-checked:hover:text-foreground-secondary'
            ])
      );
  }

  switch (bsSize) {
    case 'large':
      classNames.push('px-8 py-2.5 text-lg');
      break;
    case 'medium':
      classNames.push('px-6 py-1.5 text-md');
      break;
    // default size is 'small'
    default:
      classNames.push('px-5 py-1 text-sm');
  }

  return classNames.join(' ');
};

export const ToggleButton = ({
  bsSize = 'small',
  bsStyle = 'primary',
  disabled,
  children,
  checked,
  onChange,
  value,
  name
}: ToggleButtonProps) => {
  const classNames = computeClassNames({ bsSize, bsStyle, disabled });

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(true);
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      className={classNames}
      aria-disabled={disabled}
      value={value}
      name={name}
    >
      {children}
    </Switch>
  );
};
