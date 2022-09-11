import React from 'react';

import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ children, className, validationState, controlId }): JSX.Element => {
    const defaultClasses = 'mb-3.5';

    const formControlId: Node = document
      .querySelector(children)
      ?.getAttribute('htmlFor');

    const config = {
      attributes: true,
      childList: true,
      characterData: true
    };

    const callback = (mutations: MutationRecord[]) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          return null;
        }
      });
    };

    const observer = new MutationObserver(callback);

    observer.observe(formControlId, config);

    const classes = [defaultClasses, className, validationState].join(' ');

    return (
      <div className={classes} id={controlId}>
        {children}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };
