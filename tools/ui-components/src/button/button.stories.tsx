import { Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '.';

const story = {
  title: 'Example/Button',
  component: Button
};

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button'
};

export default story;
