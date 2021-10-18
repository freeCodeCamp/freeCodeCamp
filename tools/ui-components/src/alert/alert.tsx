import React from 'react';
import { CloseButton } from '../close-button';

type AlertVariant = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: AlertVariant;
  dismissText?: string;
  onDismiss?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
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
  const variantClass = variantClasses[variant];

  const classes = [
    'relative p-4 mb-6 border border-transparent break-words',
    variantClass,
    isDismissable ? 'pr-10' : '',
    className
  ].join(' ');

  return (
    <div className={classes} role='alert'>
      {isDismissable && (
        <CloseButton
          className='absolute right-4'
          label={dismissText}
          onClick={onDismiss}
        />
      )}
      {children}
    </div>
  );
}
