import { Story } from '@storybook/react';
import React from 'react';
import { Alert } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert
};

const Template: Story = args => <Alert {...args} />;

export const Simple = Template.bind({});

export default story;
