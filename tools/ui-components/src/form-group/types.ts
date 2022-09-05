import React, { ReactNode } from 'react';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  controlId?: string;
  validationState?: ['success', 'warning', 'error'];
}
