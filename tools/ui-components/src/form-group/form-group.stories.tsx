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

export default story;
