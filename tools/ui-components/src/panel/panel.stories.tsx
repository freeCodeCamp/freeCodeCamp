import React from 'react';
import { Story } from '@storybook/react';
import { Panel, PanelProps } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    controls: {
      include: ['className', 'bsStyle']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    bsStyle: { option: ['primary', 'danger', 'info', undefined] }
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
  bsStyle: 'primary'
};

export const Info = Template.bind({});
Info.args = {
  children: <Child />,
  bsStyle: 'info'
};

export const Danger = Template.bind({});
Danger.args = {
  children: <Child />,
  bsStyle: 'danger'
};

export default story;
