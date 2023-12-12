import React, { useContext } from 'react';
import { FormContext } from '../form-group/form-group';

const defaultClasses = 'block mt-1 mb-2';
const validationLabel = {
  success: 'text-background-info',
  warning: 'text-background-warning',
  error: 'text-background-danger'
};

export const HelpBlock = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<'span'>
>(({ className, children, ...props }, ref): JSX.Element => {
  const { validationState } = useContext(FormContext);

  const labelStyle = validationState
    ? validationLabel[validationState]
    : 'text-foreground-quaternary';
  const classes = [className, defaultClasses, labelStyle].join(' ');
  return (
    <span ref={ref} data-testid='help-block' className={classes} {...props}>
      {children}
    </span>
  );
});

HelpBlock.displayName = 'HelpBlock';
