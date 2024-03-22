import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const story = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    controls: {
      include: [
        'children',
        'variant',
        'size',
        'disabled',
        'block',
        'href',
        'download',
        'target',
        'onClick'
      ]
    }
  },
  argTypes: {
    variant: {
      options: ['primary', 'danger', 'info']
    },
    size: {
      options: ['small', 'medium', 'large']
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    block: {
      options: [true, false],
      control: { type: 'radio' }
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top']
    },
    onClick: {
      action: 'clicked'
    },
    href: {
      control: { type: 'text' }
    },
    download: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Button'
  }
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  }
};

export const FullWidth: Story = {
  args: {
    children: 'Button',
    block: true
  }
};

export const AsALink: Story = {
  args: {
    children: "I'm a link that looks like a button",
    href: 'https://www.freecodecamp.org'
  }
};

export const AsADownloadLink: Story = {
  args: {
    children: "I'm a download link",
    href: 'https://www.freecodecamp.org',
    download: 'my_file.txt'
  }
};

export default story;
