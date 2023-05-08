import React from 'react';
import { Story } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

const story = {
  title: 'Example/Tabs',
  component: Tabs
};

const Template: Story<React.ComponentProps<typeof Tabs>> = args => {
  return (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value='Code'>Code</TabsTrigger>
        <TabsTrigger value='Tests'>Tests</TabsTrigger>
      </TabsList>
      <TabsContent value='Code'>
        <code>here is a code element.</code>
      </TabsContent>
      <TabsContent value='Tests'>Here is the test for the code.</TabsContent>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'uncontrolled-tab-example',
  defaultValue: 'Code',
  onSelect: () => {
    console.log('onSelect');
  }
};

export default story;
