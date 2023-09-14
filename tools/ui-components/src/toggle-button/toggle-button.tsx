import React from 'react';
import { ToggleButtonProps } from './types';

const defaultClassNames = [
  'px-[5px]',
  'py-6',
  'whitespace-nowrap',
  'grid',
  'items-baseline',
  'justify-center',
  'min-w-[6rem]',
  'cursor-pointer',
  'border-3',
  'border-foreground-secondary',
  'focus:outline-transparent', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color',
  'focus-within:ring',
  'focus-within:ring-focus-outline-color',
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50',
  'aria-pressed:bg-foreground-secondary',
  'aria-pressed:text-background-secondary'
];

const computeClassNames = ({
  checked,
  disabled
}: {
  checked?: boolean;
  disabled?: boolean;
}) => {
  const classNames = [
    ...(checked
      ? ['cursor-default', 'bg-foreground-primary', 'text-background-primary']
      : ['bg-background-quaternary', 'text-foreground-secondary']),
    ...(disabled
      ? ['active:before:hidden']
      : [
          'active:before:w-full',
          'active:before:h-full',
          'active:before:absolute',
          'active:before:inset-0',
          'active:before:border-3',
          'active:before:border-transparent',
          'active:before:bg-gray-900',
          'active:before:opacity-20',
          'dark:hover:bg-background-primary',
          'dark:hover:text-foreground-primary',
          ...(checked
            ? [
                'hover:bg-background-quaternary',
                'hover:text-foreground-secondary'
              ]
            : ['hover:bg-foreground-primary', 'hover:text-background-primary'])
        ]),
    ...defaultClassNames
  ];

  return classNames.join(' ');
};

export const ToggleButton = ({
  type,
  disabled,
  children,
  checked,
  onChange,
  value,
  name,
  id
}: ToggleButtonProps): JSX.Element => {
  const classNames = computeClassNames({ disabled, checked });

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(true);
    }
  };

  if (type === 'radio') {
    return (
      <label htmlFor={`${id ? id : 'toggle-radio'}`} className={classNames}>
        <input
          type='radio'
          id={`${id ? id : 'toggle-radio'}`}
          name={name}
          value={value}
          onChange={handleChange}
          checked={checked}
          aria-disabled={disabled}
          className='h-0 w-0 opacity-0'
        />
        {children}
      </label>
    );
  }

  return (
    <button
      aria-pressed={checked}
      aria-disabled={disabled}
      className={classNames}
      onClick={handleChange}
    >
      {children}
    </button>
  );
};
