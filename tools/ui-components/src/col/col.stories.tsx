import React from 'react';
import { Story } from '@storybook/react';
import { Col, ColProps } from '.';

const story = {
  title: 'Example/Col',
  component: Col
};

const Template: Story<ColProps> = args => {
  return <Col {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
