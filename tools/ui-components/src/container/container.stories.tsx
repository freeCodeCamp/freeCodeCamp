import React from 'react';
import { Story } from '@storybook/react';
import { Container, ContainerProps } from '.';

const story = {
  title: 'Example/Container',
  component: Container
};

const Template: Story<ContainerProps> = args => {
  return <Container {...args}>test</Container>;
};

export const Default = Template.bind({});
Default.args = {};

export default story;
