import React from 'react';
import { Story } from '@storybook/react';
import { TabPane, TabPaneProps } from '.';

const story = {
  title: 'Example/TabPane',
  component: TabPane,
  parameters: {
    controls: { include: ['title', 'eventKey'] }
  },
  argType: {
    title: { control: { type: 'text' } },
    eventKey: { control: { type: 'text' } }
  }
};

const Template: Story<TabPaneProps> = args => {
  return <TabPane {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'test'
};

export default story;
