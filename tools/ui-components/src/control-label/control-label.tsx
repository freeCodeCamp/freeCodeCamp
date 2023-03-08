import React, { useContext } from 'react';
import { FormContext } from '../form-context';

import { ControlLabelProps } from './types';

export const ControlLabel = ({
  htmlFor,
  srOnly,
  ...props
}: ControlLabelProps): JSX.Element => {
  const { controlId } = useContext(FormContext);
  const screenOnlyClass = srOnly ? 'sr-only ' : '';
  return (
    <label
      className={screenOnlyClass}
      htmlFor={htmlFor || controlId}
      {...props}
    />
  );
};
