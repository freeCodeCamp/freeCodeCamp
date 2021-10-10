import { Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert
};

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Children = Template.bind({});
Children.args = {
  children: 'Hello, Alert!'
};

export default story;
