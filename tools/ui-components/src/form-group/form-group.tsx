import React from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ className, validationState, bsSize, controlId }): JSX.Element => {
    // it isn't giving me error even though, I didn't assign mb-3.5 in tailwind
    const defaultClasses = 'mb-3.5';
    const classes = [defaultClasses, className, validationState, bsSize].join(
      ''
    );

    return <div className={classes} id={controlId}></div>;
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
