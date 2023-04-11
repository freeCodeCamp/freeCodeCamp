import React from 'react';
import { Story } from '@storybook/react';
import { MenuItem } from './menu-item/menu-item';
import { DropDown, DropDownProps } from './drop-down';
const story = {
  title: 'Example/DropDown',
  component: DropDown
};

const DropDownChildren = () => (
  <>
    <DropDown.Toggle dropup={true}>Options</DropDown.Toggle>
    <DropDown.Menu dropup={true}>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 3</MenuItem>
    </DropDown.Menu>
  </>
);

const DropUpChildren = () => (
  <>
    <DropDown.Toggle>Options</DropDown.Toggle>
    <DropDown.Menu>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'} disabled>
        Option 3
      </MenuItem>
    </DropDown.Menu>
  </>
);

const Template: Story<DropDownProps> = args => {
  return <DropDown {...args} />;
};

export const MenuWithAction = Template.bind({});
MenuWithAction.args = {
  children: <DropDownChildren />
};

export const RenderMenuItems = Template.bind({});
RenderMenuItems.args = {
  children: <DropDownChildren />
};

const UpTemplate: Story<DropDownProps> = args => {
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
        <DropDown {...args}>{args.children}</DropDown>
      </div>
    </div>
  );
};

export const DropUp = UpTemplate.bind({});
DropUp.args = {
  children: <DropUpChildren />
};
export default story;
