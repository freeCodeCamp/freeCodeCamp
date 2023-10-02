import { Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '.';

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
};

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Button'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Button',
  block: true
};

export const AsALink = Template.bind({});
AsALink.args = {
  children: "I'm a link that looks like a button",
  href: 'https://www.freecodecamp.org'
};

export const AsADownloadLink = Template.bind({});
AsALink.args = {
  children: "I'm a link that looks like a button",
  href: 'https://www.freecodecamp.org',
  download: 'download.txt'
};

export default story;
