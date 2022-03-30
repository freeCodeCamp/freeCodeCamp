import React from 'react';

import { FormControlFeedback as Feedback } from './form-control-feedback';
import { FormControlStatic as Static } from './form-control-static';
import { FormControlProps } from './types';

const FormControl = React.forwardRef<HTMLInputElement, FormControlProps>(
  ({ className, id, testId }, ref): JSX.Element => {
    const defaultClasses =
      'outline-0 block w-full h-39 p-px-6-12 text-md text-default-foreground-primary ' +
      'bg-default-background-primary bg-none rounded-none border-1 border-solid ' +
      'border-default-background-quaternary shadow-none ' +
      'transition ease-in-out duration-150 focus:border-default-foreground-tertiary';

    const classes = [defaultClasses, className].join(' ');
    return <input ref={ref} id={id} data-testid={testId} className={classes} />;
  }
);
const MainFormControl = Object.assign(FormControl, { Feedback, Static });

FormControl.displayName = 'FormControl';
export { MainFormControl as FormControl };
