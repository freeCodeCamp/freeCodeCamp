import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormControl } from '../form-control';

import { ControlLabel } from '../control-label';
import { FormGroup } from '.';

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
} satisfies Meta<typeof FormGroup>;

type Story = StoryObj<typeof FormGroup>;

const Child = () => {
  return (
    <>
      <ControlLabel>Label</ControlLabel>
      <FormControl type={'text'} placeholder='Hello World' />
    </>
  );
};

export const Default: Story = {
  args: {
    children: <Child />
  }
};

export const Success: Story = {
  args: {
    children: <Child />,
    validationState: 'success'
  }
};

export const Error: Story = {
  args: {
    children: <Child />,
    validationState: 'error'
  }
};

export const Warning: Story = {
  args: {
    children: <Child />,
    validationState: 'warning'
  }
};

export default story;
