import React from 'react';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  componentClass?: typeof React.Component;
  controlId?: string;
  validationState?: 'success' | 'warning' | 'error' | null;
}
