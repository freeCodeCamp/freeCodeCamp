/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  (
    { children, className, validationState, controlId },
    isValid
  ): JSX.Element => {
    const defaultClasses = 'mb-3.5';

    useEffect(() => {
      const controlLabel = document
        .querySelector('input')
        ?.getAttribute('value');
      if (controlLabel === isValid) {
        validationState = ['success'];
      } else {
        validationState = ['warning'];
      }
    }, [validationState]);

    const classes = [defaultClasses, className, validationState].join(' ');

    return (
      <div className={classes} id={controlId}>
        {children}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
