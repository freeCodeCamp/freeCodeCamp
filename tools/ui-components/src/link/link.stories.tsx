import { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const story = {
  title: 'Example/Link',
  component: Link
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Go to freeCodeCamp',
    to: 'https://www.freecodecamp.org'
  }
};

export const Block: Story = {
  args: {
    children: 'Go to freeCodeCamp',
    to: 'https://www.freecodecamp.org',
    block: true
  }
};

export default story;
