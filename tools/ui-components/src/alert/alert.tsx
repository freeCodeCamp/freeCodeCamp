import React from 'react';

export interface AlertProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Basic UI component that provides contextual feedback
 */
export function Alert({ className, children }: AlertProps): JSX.Element {
  return (
    <div className={className} role='alert'>
      {children}
    </div>
  );
}
