import React from 'react';
import { Story } from '@storybook/react';
import { PanelHeading } from './panel-heading';
import { PanelTitle } from './panel-title';
import { PanelBody } from './panel-body';
import { Panel, PanelProps } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    controls: {
      include: ['className']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    bsStyle: { control: { type: 'text' } }
  }
};

const Child = () => {
  return (
    <>
      <PanelHeading>
        <PanelTitle>Here is panel Heading</PanelTitle>
      </PanelHeading>
      <PanelBody>Here is Panel body</PanelBody>
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
