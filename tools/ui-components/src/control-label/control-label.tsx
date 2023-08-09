import React, { useContext } from 'react';
import { FormContext } from '../form-group/form-group';

import { ControlLabelProps } from './types';

const validationLabel = {
  success: 'text-background-info',
  warning: 'text-background-warning',
  error: 'text-background-danger'
};

export const ControlLabel = ({
  className,
  htmlFor,
  srOnly,
  ...props
}: ControlLabelProps): JSX.Element => {
  const { controlId, validationState } = useContext(FormContext);

  const labelStyle = validationState
    ? validationLabel[validationState]
    : undefined;
  const screenOnlyClass = srOnly ? 'sr-only' : undefined;
  const defaultClasses = [labelStyle, screenOnlyClass, className].join(' ');

  return (
    <label
      className={defaultClasses}
      htmlFor={htmlFor || controlId}
      {...props}
    />
  );
};
