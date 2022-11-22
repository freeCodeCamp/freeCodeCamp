
import React from 'react';
import { Story } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from '.';

const story = {
  title: 'Example/ToggleButton',
  component: ToggleButton
};

const Template: Story<ToggleButtonProps> = args => {
  return <ToggleButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
