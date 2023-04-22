import React from 'react';
import { Story } from '@storybook/react';
import { MenuItem } from './menu-item/menu-item';
import { Dropdown, DropdownProps } from './drop-down';
const story = {
  title: 'Example/Dropdown',
  component: Dropdown
};

const DropDownChildren = () => (
  <>
    <Dropdown.Toggle>Options</Dropdown.Toggle>
    <Dropdown.Menu>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 3</MenuItem>
    </Dropdown.Menu>
  </>
);

const DropUpChildren = () => (
  <>
    <Dropdown.Toggle dropup={true}>Options</Dropdown.Toggle>
    <Dropdown.Menu dropup={true}>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'} disabled>
        Option 3
      </MenuItem>
    </Dropdown.Menu>
  </>
);

export const Menus = (): JSX.Element => (
  <>
    <Dropdown>
      <DropDownChildren />
    </Dropdown>
    <Dropdown>
      <DropDownChildren />
    </Dropdown>
  </>
);

const UpTemplate: Story<DropdownProps> = args => {
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
        <Dropdown {...args} />
      </div>
    </div>
  );
};

export const DropUp = UpTemplate.bind({});
DropUp.args = {
  children: <DropUpChildren />
};
export default story;
