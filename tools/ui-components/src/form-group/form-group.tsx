import React, { Component, useEffect } from 'react';

import { FormGroupProps } from './types';
let variantClass = '';

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, className, validationState, controlId }): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    useEffect(() => {
      const setDefaultClass = (validValue?: string) => {
        if (validValue === 'success') return (variantClass = 'has-success');
        else if (validValue === 'warning')
          return (variantClass = 'has-warning');
        else if (validValue === 'error') return (variantClass = 'has-error');
      };
      setDefaultClass(validationState);
    }, [validationState]);

    const classes = [defaultClasses, variantClass, className].join(' ');
    return (
      <Component className={classes} id={controlId} IsValid={validationState}>
        {children}
      </Component>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
