import React from 'react';
import { Story } from '@storybook/react';
import { HelpBlock } from './help-block';

const story = {
  title: 'Example/HelpBlock',
  component: HelpBlock,
  parameters: {
    controls: {
      include: ['className', 'children']
    }
  }
};

const Template: Story<React.ComponentPropsWithRef<'span'>> = args => {
  return <HelpBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'This is a HelpBlock'
};

export default story;
