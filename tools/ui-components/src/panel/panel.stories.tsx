import React from 'react';
import { Story } from '@storybook/react';
import { Panel, PanelProps } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    controls: {
      include: ['className', 'variant']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    variant: { option: ['primary', 'danger', 'info', undefined] }
  }
};

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

const Template: Story<PanelProps> = args => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Child />
};

export const Primary = Template.bind({});
Primary.args = {
  children: <Child />,
  variant: 'primary'
};

export const Info = Template.bind({});
Info.args = {
  children: <Child />,
  variant: 'info'
};

export const Danger = Template.bind({});
Danger.args = {
  children: <Child />,
  variant: 'danger'
};

export default story;
