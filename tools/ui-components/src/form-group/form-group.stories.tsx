import React from 'react';
import { Story } from '@storybook/react';
import { Button } from '../button';
import { FormControl } from '../form-control';
import { FormGroup, FormGroupProps } from '.';

const story = {
  title: 'Example/FormGroup',
  component: FormGroup,
  argTypes: {
    children: { control: { type: 'object' } },
    className: { control: { type: 'text' } },
    controlId: { control: { type: 'text' } },
    validationState: { options: ['success', 'warning', 'error'] }
  }
};

// function getValidationForConfirmEmail() {
//   const { confirmNewEmail, newEmail } = emailForm;
//   if (!maybeEmailRE.test(newEmail)) {
//     return {
//       state: null,
//       message: ''
//     };
//   }
//   const isMatch = newEmail === confirmNewEmail;
//   if (maybeEmailRE.test(confirmNewEmail)) {
//     return {
//       state: isMatch ? 'success' : 'error',
//       message: isMatch ? '' : t('validation.email-mismatch')
//     };
//   } else {
//     return {
//       state: null,
//       message: ''
//     };
//   }
// }
const Template: Story<FormGroupProps> = ({
  controlId,
  className,
  validationState
}) => {
  return (
    <div>
      {/* when a function runs and confirm a value it should push vaidation state into formGroup */}
      <Button onClick={() => (validationState = 'success')}>Success</Button>
      <Button onClick={() => (validationState = 'warning')}>Warning</Button>
      <Button onClick={() => (validationState = 'error')}>Error</Button>
      <FormGroup
        controlId={controlId}
        className={className}
        validationState={validationState}
      >
        <FormControl
          type={'text'}
          placeholder='Hello World'
          value='Hello World'
          required={true}
        />
      </FormGroup>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'FormGroup'
};

export default story;
