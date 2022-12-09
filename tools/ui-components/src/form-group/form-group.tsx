import React, { useEffect, useMemo } from 'react';
import { FormContext } from '../form-context';
import { FormGroupProps } from './types';

let variantClass = '';
const hasSuccess = `
[&_span:has[data-testid='help-block'], &_label]: color-var(--highlight-color) 
[&_input]: bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&_input:focus]: bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&_input_span]: color-#3c763d
`;
const hasWarning = `
[&_span:has[data-testid='help-block'], &_label]: color-var(--highlight-color) 
[&_input]: bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&_input:focus]: bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&_input_span]: color-#3c763d
`;
const hasError = `
[&_span:has[data-testid='help-block'], &_label]: var(--danger-color) 
[&_input]: bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&_input:focus]: bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&_input_span]: color-#8a6d3b
`;

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    {
      className,
      validationState,
      controlId,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      componentClass: Component = 'div',
      ...props
    },
    ref
  ): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    const context = useMemo(() => ({ controlId }), [controlId]);
    // this works on render but the class doesn't change
    useEffect(() => {
      if (validationState !== null) {
        const setDefaultClass = (validValue?: string) => {
          if (validValue === 'success') return (variantClass = hasSuccess);
          else if (validValue === 'warning') return (variantClass = hasWarning);
          else if (validValue === 'error') return (variantClass = hasError);
        };
        setDefaultClass(validationState);
      }
    }, [validationState]);

    const classes = [defaultClasses, variantClass, className].join(' ');
    return (
      <FormContext.Provider value={context}>
        <Component
          ref={ref}
          className={classes}
          id={controlId}
          {...props}
          validationstate={validationState}
        />
      </FormContext.Provider>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
