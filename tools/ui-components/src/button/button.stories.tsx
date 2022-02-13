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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};

export default story;
