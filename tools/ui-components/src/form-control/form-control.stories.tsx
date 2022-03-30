import React from 'react';
import { Story } from '@storybook/react';
import { FormControl, FormControlProps, FormControlVariationProps } from '.';

const story = {
  title: 'Example/FormControl',
  component: FormControl
};

const DefaultTemplate: Story<FormControlProps> = args => {
  return <FormControl {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  // default props go here
};

const StaticTemplate: Story<FormControlVariationProps> = args => {
  return <FormControl.Static {...args} />;
};

export const Static = StaticTemplate.bind({});
Static.args = {
  children: 'foo@bar.com'
};

const FeedBackTemplate: Story<FormControlVariationProps> = args => {
  return <FormControl.Feedback {...args} />;
};

export const Feedback = FeedBackTemplate.bind({});
Feedback.args = {
  children: '✔'
};

export default story;
