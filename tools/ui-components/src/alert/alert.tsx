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
  success: 'text-success-900 bg-success-100 border-success-200',
  info: 'text-info-900 bg-info-100 border-info-200',
  warning: 'text-warning-900 bg-warning-100 border-warning-200',
  danger: 'text-danger-900 bg-danger-100 border-danger-200'
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
