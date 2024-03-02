import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

const story = {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    className: { control: { type: 'text' } }
  }
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    children: 'Hello, Alert!',
    variant: 'success'
  }
};

export const Info: Story = {
  args: {
    children: 'Hello, Alert!',
    variant: 'info'
  }
};

export const Warning: Story = {
  args: {
    children: 'Hello, Alert!',
    variant: 'warning'
  }
};

export const Danger: Story = {
  args: {
    children: 'Hello, Alert!',
    variant: 'danger'
  }
};

export const LongText: Story = {
  args: {
    variant: 'success',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.'
  }
};

export const WithHeadingAndParagraphs: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <h4>
          <strong>Some Heading Text</strong>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro
          quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          commodi cumque dicta ducimus eum iure, maiores mollitia, odit porro
          quas quod rerum soluta sunt tempora unde, vel voluptas voluptates.
        </p>
      </>
    )
  }
};

export default story;
