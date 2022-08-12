import React, { ReactNode } from 'react';

export type ValidationStatesProp = 'success' | 'warning' | 'error';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  controlId?: string;
  validationState?: ValidationStatesProp;
}
