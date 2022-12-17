import React, { useContext } from 'react';
import { FormContext } from '../form-context';

import { FormLabelProps } from './types';

export const FormLabel = ({ htmlFor, srOnly, ...props }: FormLabelProps) => {
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
