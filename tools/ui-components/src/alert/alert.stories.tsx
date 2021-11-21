import { Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
    dismissLabel: { control: { type: 'text' } }
  }
};

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello, Alert!',
  className: '',
  variant: 'success',
  dismissLabel: 'Close alert',
  onDismiss: () => console.log('Close alert!')
};

export const LongText = (): JSX.Element => (
  <Alert variant='success'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi
    cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum
    soluta sunt tempora unde, vel voluptas voluptates.
  </Alert>
);

export const WithHeadingAndParagraphs = (): JSX.Element => (
  <Alert variant='info'>
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
  </Alert>
);

export const WithCloseButton = (): JSX.Element => (
  <Alert onDismiss={() => console.log('Alert closed')} variant='success'>
    Hello, Alert!
  </Alert>
);

export const WithoutCloseButton = (): JSX.Element => (
  <Alert variant='success'>Hello, Alert without close button!</Alert>
);

export default story;
