import React from 'react';
import { Story } from '@storybook/react';
import { Row, RowProps } from '.';

const story = {
  title: 'Example/Row',
  component: Row
};

const Template: Story<RowProps> = args => {
  return <Row {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <p>Random text to test the element width</p>
};

export default story;
