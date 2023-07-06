import React from 'react';
import { Story } from '@storybook/react';
import { FormControl } from '../form-control';

import { ControlLabel } from '../control-label';
import { FormGroup, FormGroupProps } from '.';

const story = {
  title: 'Example/FormGroup',
  component: FormGroup,
  argTypes: {
    children: { control: { type: 'object' } },
    className: { control: { type: 'text' } },
    controlId: { control: { type: 'text' } },
    as: { control: { type: 'text' } },
    validationState: { options: ['success', 'warning', 'error', null] }
  }
};

const Child = () => {
  return (
    <>
      <ControlLabel>Label</ControlLabel>
      <FormControl type={'text'} placeholder='Hello World' />
    </>
  );
};

const Template: Story<FormGroupProps> = args => {
  return <FormGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <Child />
};

export const Success = Template.bind({});
Success.args = {
  children: <Child />,
  validationState: 'success'
};

export const Error = Template.bind({});
Error.args = {
  children: <Child />,
  validationState: 'error'
};

export const warning = Template.bind({});
warning.args = {
  children: <Child />,
  validationState: 'warning'
};

export default story;
