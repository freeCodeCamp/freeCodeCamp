import { Meta, StoryObj } from '@storybook/react';
import { ControlLabel } from '.';

const story = {
  title: 'Example/ControlLabel',
  component: ControlLabel,
  parameters: {
    controls: {
      include: ['className']
    }
  },
  argTypes: {
    className: { control: { type: 'text' } },
    htmlFor: { control: { type: 'text' } },
    srOnly: { options: ['srOnly', ''] }
  }
} satisfies Meta<typeof ControlLabel>;

type Story = StoryObj<typeof ControlLabel>;

export const Default: Story = {
  args: {
    children: 'Control Label'
  }
};

export default story;
