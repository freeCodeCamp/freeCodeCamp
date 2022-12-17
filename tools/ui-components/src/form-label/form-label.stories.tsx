import React from 'react';
import { Story } from '@storybook/react';
import { FormLabel, FormLabelProps } from '.';

const story = {
  title: 'Example/FormLabel',
  component: FormLabel
};

const Template: Story<FormLabelProps> = args => {
  return <FormLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
