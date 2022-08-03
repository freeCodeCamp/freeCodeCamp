import React, { ReactNode } from 'react';
import { AsProp } from '../helpers';

export interface FormGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AsProp {
  children?: ReactNode;
  className?: string;
  validationState?: ['success', 'warning', 'error', null];
  bsSize?: ['lg', 'large', 'sm', 'small'];
  bsClass?: string;
}
