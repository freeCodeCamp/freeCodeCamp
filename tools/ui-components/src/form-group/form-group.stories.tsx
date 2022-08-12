import React from 'react';
import { Story } from '@storybook/react';
import { FormGroup, FormGroupProps } from '.';

const story = {
  title: 'Example/FormGroup',
  component: FormGroup,
  argTypes: {
    children: { control: { type: 'object' } },
    className: { control: { type: 'text' } },
    controlId: { control: { type: 'text' } },
    validationState: { options: ['success', 'warning', 'error', null] }
  }
};

const Template: Story<FormGroupProps> = args => {
  return <FormGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'FormGroup'
};

//ToDo:
// create a story that has `feedback` class that works as `control-label`
// create a function that change the `valdiationState` depend on the `feedback`
// that story should show how `feedback` change `valdiationState` in the formGroup

export default story;
