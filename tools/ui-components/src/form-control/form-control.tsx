import React from 'react';

import { FormControlFeedback as Feedback } from './form-control-feedback';
import { FormControlStatic as Static } from './form-control-static';
import { FormControlProps } from './types';

const FormControl = React.forwardRef<HTMLInputElement, FormControlProps>(
  ({ className, id, testId }, ref): JSX.Element => {
    const classes = [className].join('');
    return <input ref={ref} id={id} data-testid={testId} className={classes} />;
  }
);
const MainFormControl = Object.assign(FormControl, { Feedback, Static });

FormControl.displayName = 'FormControl';
export { MainFormControl as FormControl };
