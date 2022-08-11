
import React from 'react';
import { Story } from '@storybook/react';
import { TabPane, TabPaneProps } from '.';

const story = {
  title: 'Example/TabPane',
  component: TabPane
};

const Template: Story<TabPaneProps> = args => {
  return <TabPane {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
