import React from 'react';

type AlertVariant = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  variant?: AlertVariant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<AlertVariant, string> = {
  // TODO: Use FFC variant specific colors (success, info, etc.)
  success: 'text-green-800 bg-green-100',
  info: 'text-lightBlue-800 bg-lightBlue-100',
  warning: 'text-yellow-800 bg-yellow-100',
  danger: 'text-red-800 bg-red-100'
};

/**
 * Basic UI component that provides contextual feedback
 */
export function Alert({
  variant = 'info',
  className,
  children
}: AlertProps): JSX.Element {
  const classes = [variants[variant], className].join(' ');

  return (
    <div className={classes} role='alert'>
      {children}
    </div>
  );
}
