import { Meta, StoryObj } from '@storybook/react';
import { HelpBlock } from './help-block';

const story = {
  title: 'Example/HelpBlock',
  component: HelpBlock,
  parameters: {
    controls: {
      include: ['className', 'children']
    }
  }
} satisfies Meta<typeof HelpBlock>;

type Story = StoryObj<typeof HelpBlock>;

export const Default: Story = {
  args: {
    children: 'This is a HelpBlock'
  }
};

export default story;
