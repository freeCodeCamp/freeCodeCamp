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
  className: '',
  variant: 'success'
};

export const LongText = Template.bind({});
LongText.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusant ' +
    'architecto consequatur cupiditate et ex id maxime nihil porro quisquam ' +
    'saepe tempore. Consequuntur doloremque ex expedita iure natus nostrum',
  className: '',
  variant: 'info'
};

export const WithHeadingAndParagraphs = Template.bind({});
WithHeadingAndParagraphs.args = {
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
  ),
  className: '',
  variant: 'info'
};

export default story;
