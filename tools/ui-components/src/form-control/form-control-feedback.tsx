import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlFeedback = ({
  children,
  className,
  testId
}: FormControlVariationProps) => {
  const defaultClasses =
    'absolute top-0 right-0 z-2 block w-39 h-39 leading-39 text-center pointer-events-none';

  const classes = [defaultClasses, className].join(' ');
  return (
    <span className={classes} data-testid={testId}>
      {children}
    </span>
  );
};
