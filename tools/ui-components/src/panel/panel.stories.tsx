import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Panel } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    controls: {
      include: ['className', 'variant']
    }
  },
  argTypes: {
    className: { control: { type: 'text' } },
    variant: { option: ['primary', 'danger', 'info', undefined] }
  }
} satisfies Meta<typeof Panel>;

const Child = () => {
  return (
    <>
      <Panel.Heading>
        <Panel.Title>Here is panel Heading</Panel.Title>
      </Panel.Heading>
      <Panel.Body>Here is Panel body</Panel.Body>
    </>
  );
};

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    children: <Child />
  }
};

export const Primary: Story = {
  args: {
    children: <Child />,
    variant: 'primary'
  }
};

export const Info: Story = {
  args: {
    children: <Child />,
    variant: 'info'
  }
};

export const Danger: Story = {
  args: {
    children: <Child />,
    variant: 'danger'
  }
};

export default story;
