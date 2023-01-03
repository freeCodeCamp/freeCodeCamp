import React from 'react';
import { Story } from '@storybook/react';
import { ControlLabel, ControlLabelProps } from '.';

const story = {
  title: 'Example/ControlLabel',
  component: ControlLabel
};

const Template: Story<ControlLabelProps> = args => {
  return <ControlLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
