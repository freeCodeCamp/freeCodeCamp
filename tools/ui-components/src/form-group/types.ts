import React from 'react';
import { AsProp } from '../helpers';

export interface FormGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AsProp {
  children: React.ReactChild;
  className?: string;
  validationState?: ['success', 'warning', 'error', null];
  bsSize?: ['lg', 'large', 'sm', 'small'];
  bsClass?: string;
}
