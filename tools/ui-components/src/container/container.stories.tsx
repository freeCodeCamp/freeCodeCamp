import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Container } from '.';

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
} satisfies Meta<typeof Container>;

const Template: StoryFn<typeof Container> = args => {
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

export const Default: StoryObj<typeof Container> = {
  render: Template,
  args: {}
};

export default story;
