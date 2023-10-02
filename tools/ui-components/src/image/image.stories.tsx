import { Story } from '@storybook/react';
import React from 'react';
import { Image } from './image';
import { ImageProps } from './image.types';
const story = {
  title: 'Example/Image',
  component: Image
};

const ref = React.createRef<HTMLImageElement>();

const Template: Story<ImageProps> = args => {
  return <Image {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  alt: "Quincy Larson's signature",
  ref: ref,
  src: 'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
};

export const Avatar = Template.bind({});
Avatar.args = {
  ref: ref,
  alt: "camper's avatar",
  src: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
  className: 'object-cover img-fluid max-w-full h-auto'
};

export default story;
