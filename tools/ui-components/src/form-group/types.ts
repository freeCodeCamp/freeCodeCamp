import React from 'react';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: typeof React.Component;
  controlId?: string;
  validationState?: 'success' | 'warning' | 'error' | null;
}
