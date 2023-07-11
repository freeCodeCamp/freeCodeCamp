import React, { useContext } from 'react';
import { FormContext } from '../form-group/form-group';

import { FormControlFeedback } from './form-control-feedback';
import { FormControlStatic } from './form-control-static';
import { FormControlProps } from './types';

// Uses controlId from <FormGroup> if not explicitly specified.
// type Only relevant if componentClass is 'input'.
let variantClass: string;
const defaultClasses =
  'outline-0 block w-full py-1.5 px-2.5 text-md text-foreground-primary ' +
  'bg-background-primary bg-none rounded-none border-1 border-solid ' +
  'border-background-quaternary shadow-none ' +
  'transition ease-in-out duration-150 focus:border-foreground-tertiary';

const FormControl = ({
  id,
  className,
  testId,
  onChange,
  value,
  componentClass,
  placeholder,
  name,
  required,
  type,
  ...restProps
}: FormControlProps): JSX.Element => {
  const { controlId } = useContext(FormContext);

  const Component = componentClass || 'input';
  if (Component !== 'textarea') variantClass = ' h-8';

  //row and componentClass
  const classes = [defaultClasses, variantClass, className].join(' ');

  return (
    <Component
      id={id || controlId}
      data-testid={testId}
      className={classes}
      value={value}
      required={required}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      {...restProps}
    />
  );
};

FormControl.Feedback = FormControlFeedback;
FormControl.Static = FormControlStatic;

export { FormControl };
