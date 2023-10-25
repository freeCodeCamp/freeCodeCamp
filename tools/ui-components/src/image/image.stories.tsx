import { Story } from '@storybook/react';
import React from 'react';
import { Image } from './image';
import { ImageProps } from './image.types';

const story = {
  title: 'Example/Image',
  component: Image,
  argTypes: {
    responsive: {
      control: { type: 'boolean' }
    }
  }
};

const Template: Story<ImageProps> = args => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Image {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  alt: "camper's avatar",
  src: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
  responsive: false
};

export const Responsive = Template.bind({});
Responsive.args = {
  alt: "camper's avatar",
  src: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
  responsive: true
};

export default story;
