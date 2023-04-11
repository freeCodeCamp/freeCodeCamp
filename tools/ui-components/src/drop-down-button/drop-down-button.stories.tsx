import React from 'react';
import { Story } from '@storybook/react';
import { MenuItem } from '../menu-item';
import { DropDownButton, DropDownButtonProps } from './drop-down-button';
const story = {
  title: 'Example/DropDownButton',
  component: DropDownButton
};

const Template: Story<DropDownButtonProps> = args => {
  return (
    <div style={{ width: '220px' }}>
      <DropDownButton {...args}>{args.children}</DropDownButton>
    </div>
  );
};

export const MenuWithAction = Template.bind({});
MenuWithAction.args = {
  toggleLabel: 'Options',
  children: (
    <>
      <MenuItem onClick={() => console.log('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href='' disabled>
        Option 3
      </MenuItem>
    </>
  )
};

export const RenderMenuItems = Template.bind({});
RenderMenuItems.args = {
  toggleLabel: 'Some Menu Items',
  children: (
    <>
      <MenuItem onClick={() => console.log('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href=''>Option 3</MenuItem>
    </>
  )
};

const UpTemplate: Story<DropDownButtonProps> = args => {
  return (
    <div
      style={{
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <div style={{ width: '220px' }}>
        <DropDownButton {...args}>{args.children}</DropDownButton>
      </div>
    </div>
  );
};

export const DropUp = UpTemplate.bind({});
DropUp.args = {
  toggleLabel: 'Drop Up',
  children: (
    <>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 3</MenuItem>
    </>
  ),
  dropup: true
};
export default story;
