import React from 'react';
import { Story } from '@storybook/react';
import { FormControl, FormControlProps } from '.';

const story = {
  title: 'Example/FormControl',
  component: FormControl
};

const Template: Story<FormControlProps> = args => {
  return <FormControl {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
