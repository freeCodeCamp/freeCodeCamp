import React from 'react';
import { Story } from '@storybook/react';
import { HelpBlock } from './helpblock';
import { HelpBlockProps } from './helpblock.types';

const story = {
  title: 'Example/HelpBlock',
  component: HelpBlock
};

const ref = React.createRef<HTMLSpanElement>();

const Template: Story<HelpBlockProps> = args => {
  return <HelpBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ref: ref
};

export default story;
