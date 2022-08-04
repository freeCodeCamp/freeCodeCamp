import React from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ children, className, validationState, controlId }): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    // ToDo: validationState should change when more Form components added.
    // It should account for input value and add class to formgroup, depending on formgroup state
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
