/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ children, className, validationState, controlId }): JSX.Element => {
    const classes = [defaultClasses, className];
    useEffect(() => {
      let defaultClasses = 'mb-3.5';
      if (validationState === 'success') defaultClasses = 'mb-3.5 success';
      else if (validationState === 'warning') defaultClasses = 'mb-3.5 warning';
      else if (validationState === 'error') defaultClasses = 'mb-3.5 error';
      else defaultClasses = 'mb-3.5';
    }, [classes]);

    return (
      <div className={classes.join()} id={controlId}>
        {children}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
