import React from 'react';
import { Story } from '@storybook/react';
import { Link, LinkProps } from '.';

const story = {
  title: 'Example/Link',
  component: Link
};

const Template: Story<LinkProps> = args => {
  return <Link {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Go to freeCodeCamp',
  to: 'https://www.freecodecamp.org'
};

export const Block = Template.bind({});
Block.args = {
  children: 'Go to freeCodeCamp',
  to: 'https://www.freecodecamp.org',
  block: true
};

export default story;
