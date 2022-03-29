import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlStatic = ({
  className,
  children,
  testId
}: FormControlVariationProps) => {
  return (
    <p className={className} data-testid={testId}>
      {children}
    </p>
  );
};
