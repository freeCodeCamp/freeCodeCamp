import React, { useContext } from 'react';
import { FormContext } from '../form-group/form-group';

import { ControlLabelProps } from './types';

const hasSuccess = 'text-foreground-info';
const hasWarning = 'text-foreground-warning';
const hasError = 'text-foreground-danger';

export const ControlLabel = ({
  className,
  htmlFor,
  srOnly,
  ...props
}: ControlLabelProps): JSX.Element => {
  const { controlId, validationState } = useContext(FormContext);

  const labelStyle =
    validationState === 'success'
      ? hasSuccess
      : validationState === 'error'
      ? hasError
      : validationState === 'warning'
      ? hasWarning
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
