import React from 'react';
import { Story } from '@storybook/react';
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

const Template: Story<FormGroupProps> = ({
  controlId,
  className,
  validationState
}) => {
  return (
    <FormGroup
      controlId={controlId}
      className={className}
      validationState={validationState}
    >
      <FormControl type={'text'} placeholder='Hello World'>
        {' '}
        HelloWorld
      </FormControl>
    </FormGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'FormGroup'
};

export default story;
