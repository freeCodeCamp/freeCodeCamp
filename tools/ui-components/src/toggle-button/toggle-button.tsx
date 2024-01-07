import React from 'react';
import { ButtonSize, ToggleButtonProps } from './types';

const defaultClassNames = [
  'relative',
  'border-3',
  'text-center',
  'inline-block',
  'cursor-pointer',
  'border-foreground-secondary',
  'focus:outline-none', // Hide the default browser outline
  'focus:ring',
  'focus:ring-focus-outline-color',
  'focus-within:ring',
  'focus-within:ring-focus-outline-color',
  'aria-disabled:cursor-not-allowed',
  'aria-disabled:opacity-50',
  'ml-[-3px]',
  'first:ml-0'
];

const computeClassNames = ({
  bsSize,
  checked,
  disabled
}: {
  bsSize: ButtonSize;
  checked?: boolean;
  disabled?: boolean;
}) => {
  const classNames = [
    ...defaultClassNames,
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
        ])
  ];

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
  type = 'button',
  disabled,
  children,
  checked,
  onChange,
  value,
  name
}: ToggleButtonProps): JSX.Element => {
  const classNames = computeClassNames({ bsSize, disabled, checked });

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(true);
    }
  };

  if (type === 'radio') {
    return (
      <label htmlFor='toggle-btn-radio' className={classNames}>
        <input
          type='radio'
          id='toggle-btn-radio'
          name={name}
          value={value}
          onChange={handleChange}
          checked={checked}
          aria-disabled={disabled}
          className='absolute h-0 w-0 opacity-0'
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
