import { Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert
};

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello, Alert!',
  className: 'basic',
  variant: 'success'
};

export default story;
