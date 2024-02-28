import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Image } from './image';

// Additional type assertion necessary due to a bug of how Storybook handles the `decorators` property in meta
const story: Meta<typeof Image> = {
  title: 'Example/Image',
  component: Image,
  argTypes: {
    responsive: {
      control: { type: 'boolean' }
    }
  },
  decorators: [
    Story => <div style={{ width: '100px', height: '100px' }}>{Story()}</div>
  ]
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    alt: "camper's avatar",
    src: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
    responsive: false
  }
};

export const Responsive: Story = {
  args: {
    alt: "camper's avatar",
    src: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
    responsive: true
  }
};

export default story;
