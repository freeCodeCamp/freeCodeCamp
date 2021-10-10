import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
}

/**
 * Basic UI component that provides contextual feedback
 */
export function Alert({ children }: AlertProps): JSX.Element {
  return <div role='alert'>{children}</div>;
}
