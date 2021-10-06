import { Story } from '@storybook/react';
import React from 'react';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
// import { DropdownButtonProps } from './DropdownButton.types';

const story = {
  title: 'Example/DropdownButton',
  component: DropdownButton,
};

const Template: Story<DropdownButtonProps> = args => {
  return (
    <div
      className={`flex h-screen justify-center items-center`}
    >
      <DropdownButton {...args} />
    </div>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  block: true,
  bsStyle: 'primary',
  className: 'btn-invert',
  id: 'dropdown-for-1',
  title: 'View',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'DropdownButton'
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'DropdownButton'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'DropdownButton'
// };

export default story;
