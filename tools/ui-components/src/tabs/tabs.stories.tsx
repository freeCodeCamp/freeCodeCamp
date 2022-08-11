import React from 'react';
import { Story } from '@storybook/react';
import { TabPane } from '../tab-pane';
import { Tabs, TabsProps } from '.';

const story = {
  title: 'Example/Tabs',
  component: Tabs
};

const Template: Story<TabsProps> = args => {
  return (
    <Tabs {...args}>
      <TabPane eventKey='Code' title='Code'>
        <div>Code Content</div>
      </TabPane>
      <TabPane eventKey='Tests' title='Tests'>
        Tests Content
      </TabPane>
      <TabPane eventKey='Preview' title='Preview'>
        Preview Content
      </TabPane>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
  id: 'uncontrolled-tab-example',
  defaultActiveKey: 'Tests'
};

export default story;
