import React from 'react';

export interface CloseButtonProps {
  className?: string;
  label?: string;
  onClick: () => void;
}

/**
 * Basic UI component for closing modals, alerts, etc.
 */
export function CloseButton({
  className,
  label,
  onClick
}: CloseButtonProps): JSX.Element {
  const classes = [
    'text-xl font-bold leading-none appearance-none opacity-20',
    'hover:opacity-50 focus:opacity-50',
    className
  ].join(' ');
  return (
    <button
      aria-label={label ?? 'Close'}
      className={classes}
      onClick={onClick}
      type='button'
    >
      ×
    </button>
  );
}
