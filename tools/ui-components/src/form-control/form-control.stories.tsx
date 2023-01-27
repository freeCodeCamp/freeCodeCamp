import React from 'react';
import { Story } from '@storybook/react';
import { FormControl, FormControlProps, FormControlVariationProps } from '.';

const story = {
  title: 'Example/FormControl',
  component: FormControl,
  parameters: {
    controls: {
      include: [
        'className',
        'id',
        'onChange',
        'value',
        'componentClass',
        'placeholder',
        'required',
        'type'
      ]
    }
  },
  argTypes: {
    className: { control: { type: 'text' } },
    id: { control: { type: 'text' } },
    onChange: { action: 'changed' },
    value: { control: { type: 'text' } },
    componentClass: {
      options: ['input', 'textarea']
    },
    placeholder: { control: { type: 'text' } },
    required: { control: 'boolean' },
    type: { options: ['text', 'email', 'url'] }
  }
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

const checkMark = (
  <svg
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='check'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
    ></path>
  </svg>
);

export const Feedback = FeedBackTemplate.bind({});
Feedback.args = {
  children: checkMark
};

export default story;
