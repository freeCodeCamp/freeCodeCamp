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
  success:
    'text-state-foreground-success bg-state-background-success border-state-border-success',
  info: 'text-state-foreground-info bg-state-background-info border-state-border-info',
  warning:
    'text-state-foreground-warning bg-state-background-warning border-state-border-warning',
  danger:
    'text-state-foreground-danger bg-state-background-danger border-state-border-danger'
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
    'p-4 mb-6 border border-transparent break-words',
    variants[variant],
    isDismissable ? 'alert-dismissable pr-10' : '',
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
