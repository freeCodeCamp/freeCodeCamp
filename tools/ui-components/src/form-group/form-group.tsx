import React from 'react';

import { ControlLabel } from '../control-label/index';
import { FormControl } from '../form-control/index';
import { FormGroupProps } from './types';

const FormGroup = React.forwardRef<HTMLLabelElement, FormGroupProps>(
  ({ className, validationState, bsSize, bsClass }): JSX.Element => {
    // it isn't giving me error even though, I didn't assign mb-3.5 in tailwind
    const defaultClasses = 'mb-3.5';
    const classes = [defaultClasses, className].join('');

    return (
      <FormGroup
        className={classes}
        validationState={validationState}
        bsClass={bsClass}
        bsSize={bsSize}
      >
        <ControlLabel htmlFor={''} srOnly={false} bsClass={''}>
          label
        </ControlLabel>
        <FormControl></FormControl>
      </FormGroup>
    );
  }
);

FormGroup.displayName = 'FormGroup';
export { FormGroup };

//  How it's implemented

/*

 <FormGroup>
    {type === 'hidden' ? null : (
        <ControlLabel htmlFor={key}>{label}</ControlLabel>
    )}
    <FormControl
        componentClass={type === 'textarea' ? type : 'input'}
        id={key}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required.includes(name)}
        rows={4}
        type={type}
        value={value as string}
    />
    {nullOrWarning(
        value as string,
        !pristine && error,
        isURL,
        name
    )}
</FormGroup>

*/

// <FormGroup controlId='new-email' validationState={newEmailValidation}>
// <ControlLabel>{t('settings.email.new')}</ControlLabel>
// <FormControl
//   onChange={createHandleEmailFormChange('newEmail')}
//   type='email'
//   value={newEmail}
// />
// {newEmailValidationMessage ? (
//   <HelpBlock>{newEmailValidationMessage}</HelpBlock>
// ) : null}
// </FormGroup>
