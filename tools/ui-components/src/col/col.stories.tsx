import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Col } from '.';

const story = {
  title: 'Example/Col',
  component: Col,
  argTypes: {
    className: { control: { type: 'text' } },
    xs: { options: [8, 12, undefined] },
    sm: { options: [2, 4, 6, 8, 10, 12, undefined] },
    md: { options: [4, 6, 8, 10, undefined] },
    lg: { options: [6, 8, 10, undefined] },
    xsOffset: { options: [2, 3, undefined] },
    smOffset: { options: [1, 2, 3, 4, undefined] },
    mdOffset: { options: [1, 2, 3, 4, undefined] },
    lgOffset: { options: [0, 1, 2, undefined] },
    smPush: { options: [1, undefined] }
  }
} satisfies Meta<typeof Col>;

const Template: StoryFn<typeof Col> = args => {
  return (
    <Col className='bg-gray-700' {...args}>
      <p>Random text to test the element width</p>
    </Col>
  );
};

export const Default: StoryObj<typeof Col> = {
  render: Template,

  args: {
    // default props go here
  }
};

export default story;
