import { Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    className: { control: { type: 'text' } }
  }
};

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'Hello, Alert!',
  variant: 'success'
};

export const Info = Template.bind({});
Info.args = {
  children: 'Hello, Alert!',
  variant: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Hello, Alert!',
  variant: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Hello, Alert!',
  variant: 'danger'
};

export const LongText = Template.bind({});
LongText.args = {
  variant: 'success',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.'
};

export const WithHeadingAndParagraphs = Template.bind({});
WithHeadingAndParagraphs.args = {
  variant: 'info',
  children: (
    <>
      <h4>
        <strong>Some Heading Text</strong>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
        commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas
        quod rerum soluta sunt tempora unde, vel voluptas voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
        commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas
        quod rerum soluta sunt tempora unde, vel voluptas voluptates.
      </p>
    </>
  )
};

export default story;
