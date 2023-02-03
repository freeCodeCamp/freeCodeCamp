import React from 'react';
import { CloseButton } from '../close-button';

type AlertVariant = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  children: React.ReactNode;
  className?: string;
  closeLabel?: string;
  onDismiss?: () => void;
  variant: AlertVariant;
}

const variantClasses = {
  success: 'text-green-700 bg-green-50 border-green-100',
  info: 'text-blue-700 bg-blue-50 border-blue-100',
  warning: 'text-yellow-700 bg-yellow-50 border-yellow-100',
  danger: 'text-red-700 bg-red-50 border-red-100'
};

/**
 * `Alert` is used to display a short, important message that does not interrupt the user's workflow.
 *
 * `Alert` is not dismissable.
 */
export const Alert = ({
  children,
  className,
  closeLabel,
  onDismiss,
  variant
}: AlertProps) => {
  const variantClass = variantClasses[variant];
  const canDismiss = !!onDismiss;
  const classes = [
    'p-4 mb-6 border border-transparent break-words',
    variantClass,
    className
  ].join(' ');

  return (
    <div className={classes} role='alert'>
      {canDismiss ? (
        <CloseButton onClick={onDismiss} label={closeLabel ?? 'Close Alert'} />
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};
