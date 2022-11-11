import React, { useEffect, useMemo } from 'react';
import { FormContext } from '../form-context';
import { FormGroupProps } from './types';

let variantClass = '';
const hasSuccess = `
[&_.help-block, &_.control-label, &_.radio, &_.checkbox, &_.radio-inline, &_.checkbox-inline, &_.help-block, &_.help-block, &_.help-block,]: color-var(--highlight-color) 
[&.form-control]:bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&.form-control:focus]:bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&.input-group-addon]: color-#3c763d background-color-#dff0d8 border-color-#3c763d
[&.form-control-feedback]: color-#3c763d
`;
const hasWarning = `
[&_.help-block, &_.control-label, &_.radio, &_.checkbox, &_.radio-inline, &_.checkbox-inline, &_.help-block, &_.help-block, &_.help-block,]: color-var(--highlight-color) 
[&.form-control]:bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&.form-control:focus]:bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&.input-group-addon]: color-#3c763d background-color-#dff0d8 border-color-#3c763d
[&.form-control-feedback]: color-#3c763d
`;
const hasError = `
[&_.help-block, &_.control-label, &_.radio, &_.checkbox, &_.radio-inline, &_.checkbox-inline, &_.help-block, &_.help-block, &_.help-block,]: var(--danger-color) 
[&.form-control]:bordercolor-var(--quaternary-background) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075) 
[&.form-control:focus]:bordercolor-var(--tertiary-color) box-shadow-inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168 
[&.input-group-addon]: color-#8a6d3b background-color-#fcf8e3 border-color-#8a6d3b
[&.form-control-feedback]: color-#8a6d3b
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
      const setDefaultClass = (validValue?: string) => {
        if (validValue === 'success') return (variantClass = hasSuccess);
        else if (validValue === 'warning') return (variantClass = hasWarning);
        else if (validValue === 'error') return (variantClass = hasError);
      };
      setDefaultClass(validationState);
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
