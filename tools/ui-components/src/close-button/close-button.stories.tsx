import { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './close-button';

const story = {
  title: 'Example/CloseButton',
  component: CloseButton
} satisfies Meta<typeof CloseButton>;

type Story = StoryObj<typeof CloseButton>;

export const Basic: Story = {
  args: {
    className: '',
    label: ''
  }
};

export default story;
