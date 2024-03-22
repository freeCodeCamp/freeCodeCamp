import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Row } from '.';

const story = {
  title: 'Example/Row',
  component: Row
} satisfies Meta<typeof Row>;

type Story = StoryObj<typeof Row>;

export const Default: Story = {
  args: {
    children: <p>Random text to test the element width</p>
  }
};

export default story;
