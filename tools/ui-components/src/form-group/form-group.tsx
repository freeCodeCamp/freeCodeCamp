import React, { useEffect, useMemo } from 'react';
import { FormContext } from '../form-context';
import { FormGroupProps } from './types';

let variantClass = '';
const hasSuccess =
  "[&_span:has[data-testid='help-block']]: text-foreground-info [&_label]: text-foreground-info";
const hasWarning =
  "[&_span:has[data-testid='help-block']]: text-foreground-warning [&_label]: text-foreground-warning";
const hasError =
  "[&_span:has[data-testid='help-block']]: text-foreground-danger [&_label]: text-foreground-danger";

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    { className, validationState, controlId, as, ...props },
    ref
  ): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    const context = useMemo(() => ({ controlId }), [controlId]);
    const componentClass = as;
    const Component = componentClass || 'div';

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
          as={as}
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
