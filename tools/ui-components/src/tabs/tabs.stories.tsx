import React from 'react';
import { Story } from '@storybook/react';
import { Tabs, TabsProps } from '.';

const story = {
  title: 'Example/Tabs',
  component: Tabs
};

const Template: Story<TabsProps> = args => {
  return <Tabs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
