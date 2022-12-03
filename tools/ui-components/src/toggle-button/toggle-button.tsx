import { Switch } from '@headlessui/react';
import React from 'react';
import { ToggleButtonProps } from './types';

const classNames = [
  'relative',
  'px-[30px]',
  'py-[5px]',
  'border-3',
  'border-foreground-tertiary',
  'bg-background-quaternary',
  'text-center',
  'text-sm',
  'flex',
  'items-center',
  'hover:bg-foreground-secondary',
  'hover:text-background-secondary',
  'focus:outline-none', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color'
];

export const ToggleButton = ({
  children,
  checked,
  onChange
}: ToggleButtonProps) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames.join(' ')}
    >
      {children}
    </Switch>
  );
};
