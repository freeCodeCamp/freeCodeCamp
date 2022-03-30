import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlStatic = ({
  className,
  children,
  testId
}: FormControlVariationProps) => {
  const defaultClasses = 'p-px-7 mb-0 min-h-43-px';

  const classes = [defaultClasses, className].join(' ');
  return (
    <p className={classes} data-testid={testId}>
      {children}
    </p>
  );
};
