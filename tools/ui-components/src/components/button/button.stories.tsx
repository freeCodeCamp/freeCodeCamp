import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonProps } from '../../types/button.types';
import { Button } from './button';

const story: Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({}) as Meta;
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({}) as Meta;
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({}) as Meta;
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({}) as Meta;
Small.args = {
  size: 'small',
  label: 'Button'
};

export default story;
