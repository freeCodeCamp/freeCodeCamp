import React from 'react';
import { CloseButton } from '../close-button';

type AlertVariant = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant: AlertVariant;
  dismissLabel?: string;
  onDismiss?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  success: 'text-green-700 bg-green-50 border-green-100',
  info: 'text-blue-700 bg-blue-50 border-blue-100',
  warning: 'text-yellow-700 bg-yellow-50 border-yellow-100',
  danger: 'text-red-700 bg-red-50 border-red-100'
};

/**
 * Basic UI component that provides contextual feedback
 */
export function Alert({
  children,
  className,
  variant,
  dismissLabel = 'Close',
  onDismiss
}: AlertProps): JSX.Element {
  const isDismissable = !!onDismiss;
  const variantClass = variantClasses[variant];

  const classes = [
    'flex items-start p-4 mb-6 border border-transparent break-words',
    variantClass,
    className
  ].join(' ');

  return (
    <div className={classes} role='alert'>
      <div className='grow'>{children}</div>
      {isDismissable && (
        <CloseButton label={dismissLabel} onClick={onDismiss} />
      )}
    </div>
  );
}
