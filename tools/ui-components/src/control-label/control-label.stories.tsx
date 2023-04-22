import React from 'react';
import { Story } from '@storybook/react';
import { ControlLabel, ControlLabelProps } from '.';

const story = {
  title: 'Example/ControlLabel',
  component: ControlLabel,
  parameters: {
    controls: {
      include: ['className']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    htmlFor: { control: { type: 'text' } },
    srOnly: { options: ['srOnly', ''] }
  }
};

const Template: Story<ControlLabelProps> = args => {
  return <ControlLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Control Label'
};

export default story;
