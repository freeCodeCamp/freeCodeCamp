import React, { useEffect } from 'react';
import { FormGroupProps } from './types';

let variantClass = '';

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({
    className,
    validationState,
    controlId,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    componentClass: Component = 'div',
    ...props
  }): JSX.Element => {
    const defaultClasses = 'mb-3.5';
    // this works on render but the class doesn't change
    useEffect(() => {
      const setDefaultClass = (validValue?: string) => {
        console.log('it works!');
        if (validValue === 'success') return (variantClass = 'bg-green');
        else if (validValue === 'warning') return (variantClass = 'bg-blue');
        else if (validValue === 'error') return (variantClass = 'bg-red');
      };
      setDefaultClass(validationState);
    }, [validationState]);

    const classes = [defaultClasses, variantClass, className].join(' ');
    return (
      <Component
        className={classes}
        id={controlId}
        {...props}
        validationstate={validationState}
      />
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
