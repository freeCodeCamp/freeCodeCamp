import React, { useEffect, useMemo } from 'react';
import { FormContext } from '../form-context';
import { FormGroupProps } from './types';

let variantClass = '';

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
        if (validValue === 'success') return (variantClass = 'bg-green');
        else if (validValue === 'warning') return (variantClass = 'bg-blue');
        else if (validValue === 'error') return (variantClass = 'bg-red');
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
