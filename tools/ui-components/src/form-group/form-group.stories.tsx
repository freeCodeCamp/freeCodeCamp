import React from 'react';
import { Story } from '@storybook/react';
import { FormGroup, FormGroupProps } from '.';

const story = {
  title: 'Example/FormGroup'
  // component: FormGroup
};

const Template: Story<FormGroupProps> = args => {
  return <FormGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
