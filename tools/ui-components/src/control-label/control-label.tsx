import React, { useContext } from 'react';
import { FormContext } from '../form-context';

import { ControlLabelProps } from './types';

export const ControlLabel = ({
  htmlFor,
  srOnly,
  ...props
}: ControlLabelProps) => {
  const { controlId } = useContext(FormContext);
  let screenReaderClass;
  if (srOnly) screenReaderClass = ' srOnly';
  return (
    <label
      className={screenReaderClass}
      htmlFor={htmlFor || controlId}
      {...props}
    />
  );
};
