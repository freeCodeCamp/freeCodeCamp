import React, { useContext } from 'react';
import { ProvideContext } from '../provide-context';

import { ControlLabelProps } from './types';

export const ControlLabel = ({
  htmlFor,
  srOnly,
  ...props
}: ControlLabelProps): JSX.Element => {
  const { data: controlId } = useContext(ProvideContext);
  const screenOnlyClass = srOnly ? 'sr-only ' : '';
  return (
    <label
      className={screenOnlyClass}
      htmlFor={htmlFor || controlId}
      {...props}
    />
  );
};
