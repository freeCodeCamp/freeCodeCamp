import React from 'react';
import { Story } from '@storybook/react';
import { Panel, PanelProps } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel
};

const Template: Story<PanelProps> = args => {
  return <Panel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
