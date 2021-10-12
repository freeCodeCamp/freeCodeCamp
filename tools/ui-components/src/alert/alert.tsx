import React from 'react';
import './alert.css';

type AlertVariant = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: AlertVariant;
  dismissText?: string;
  onDismiss?: () => void;
}

const variants: Record<AlertVariant, string> = {
  success: 'alert-success',
  info: 'alert-info',
  warning: 'alert-warning',
  danger: 'alert-danger'
};

/**
 * Basic UI component that provides contextual feedback
 */
export function Alert({
  children,
  className,
  variant = 'info',
  dismissText = 'Close',
  onDismiss
}: AlertProps): JSX.Element {
  const isDismissable = !!onDismiss;

  const classes = [
    'alert',
    variants[variant],
    isDismissable ? 'alert-dismissable' : '',
    className
  ].join(' ');

  return (
    <div className={classes} role='alert'>
      {isDismissable && (
        <button
          aria-label={dismissText}
          className='close'
          onClick={onDismiss}
          type='button'
        >
          ×
        </button>
      )}
      {children}
    </div>
  );
}
