/* eslint-disable react-hooks/exhaustive-deps */

import React, { Component, useEffect } from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ children, className, validationState, controlId }): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    let variantClass = '';
    useEffect(() => {
      const setDefaultClass = (validValue?: string) => {
        if (validValue === 'success') return (variantClass = 'success');
        else if (validValue === 'warning') return (variantClass = 'warning');
        else if (validValue === 'error') return (variantClass = 'error');
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
