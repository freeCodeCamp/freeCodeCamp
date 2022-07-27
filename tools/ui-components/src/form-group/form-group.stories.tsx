import React from 'react';
import { Story } from '@storybook/react';
import { FormGroup, FormGroupProps } from '.';

//  removed htmlfor because in newer version it isn't included

const story = {
  title: 'Example/FormGroup',
  component: FormGroup,
  argTypes: {
    className: { control: { type: 'text' } },
    validationState: { action: ['success', 'warning', 'error', null] },
    bsClass: { control: { type: 'text' } },
    bsSize: { control: { type: ['lg', 'large', 'sm', 'small'] } }
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
