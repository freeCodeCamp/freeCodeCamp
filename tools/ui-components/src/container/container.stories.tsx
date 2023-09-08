import React from 'react';
import { Story } from '@storybook/react';
import { Container, ContainerProps } from '.';

const story = {
  title: 'Example/Container',
  component: Container,
  argTypes: {
    fluid: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template: Story<ContainerProps> = args => {
  return (
    <Container {...args}>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
      <p>Random text to test the element width</p>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default story;
