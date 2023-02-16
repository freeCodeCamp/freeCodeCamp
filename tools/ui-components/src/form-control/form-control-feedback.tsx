import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlFeedback = ({
  children,
  className,
  testId
}: FormControlVariationProps): JSX.Element => {
  const defaultClasses =
    'absolute top-0 right-0 z-2 block w-8 h-8 leading-8 ' +
    'text-center pointer-events-none text-green-700';

  const classes = [defaultClasses, className].join(' ');
  return (
    <span className={classes} data-testid={testId}>
      {children}
    </span>
  );
};
