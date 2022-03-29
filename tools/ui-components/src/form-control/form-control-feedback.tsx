import React from 'react';

import { FormControlVariationProps } from './types';

export const FormControlFeedback = ({
  children,
  className,
  testId
}: FormControlVariationProps) => {
  return (
    <span className={className} data-testid={testId}>
      {children}
    </span>
  );
};
