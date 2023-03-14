import React, { useMemo, createContext } from 'react';
import { FormGroupProps } from './types';

export type FormContextProps = Pick<
  FormGroupProps,
  'controlId' | 'validationState'
>;
export const FormContext = createContext<FormContextProps>({});

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    { className, validationState, controlId, as, ...props },
    ref
  ): JSX.Element => {
    const controlIdContext = useMemo(() => controlId, [controlId]);
    const validationStateContext = useMemo(
      () => validationState,
      [validationState]
    );
    const context = {
      controlId: controlIdContext,
      validationState: validationStateContext
    };

    const componentClass = as;
    const Component = componentClass || 'div';

    const defaultClasses = 'mb-3.5';
    const classes = [defaultClasses, className].join(' ');

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
