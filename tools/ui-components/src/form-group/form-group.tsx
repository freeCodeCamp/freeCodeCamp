import React from 'react';

import { FormGroupProps, ValidationStatesProp } from './types';

const ValidationStateClasses: Record<ValidationStatesProp, string> = {
  success: 'text-green-700 bg-green-50 border-green-100',
  warning: 'text-blue-700 bg-blue-50 border-blue-100',
  error: 'text-yellow-700 bg-yellow-50 border-yellow-100'
};

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ children, className, controlId }): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    // ToDo: validationState should change when more Form components added.
    // It should account for input value and add class to formgroup, depending on formgroup state
    const classes = [defaultClasses, className, ValidationStateClasses].join(
      ' '
    );

    return (
      <div className={classes} id={controlId}>
        {children}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
