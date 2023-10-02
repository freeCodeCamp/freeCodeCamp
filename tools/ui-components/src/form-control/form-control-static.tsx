import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlStatic = ({
  className,
  children,
  testId
}: FormControlVariationProps): JSX.Element => {
  const defaultClasses = 'py-1.5 mb-0 min-h-43-px text-foreground-secondary';

  const classes = [defaultClasses, className].join(' ');
  return (
    <p className={classes} data-testid={testId}>
      {children}
    </p>
  );
};
