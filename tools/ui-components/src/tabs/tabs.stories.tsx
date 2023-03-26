import React from 'react';
import { Story } from '@storybook/react';
import { Tabs, TabsProps } from '.';

const story = {
  title: 'Example/Tabs',
  component: Tabs
};

const Child = () => (
  <div>
    <p>Child1</p>
    <p>Child2</p>
  </div>
);
const Template: Story<TabsProps> = args => {
  return <Tabs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <Child />
};

export default story;
