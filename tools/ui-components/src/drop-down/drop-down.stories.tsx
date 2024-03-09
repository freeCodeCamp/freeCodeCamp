import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './menu-item/menu-item';
import { Dropdown } from './drop-down';
const story = {
  title: 'Example/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>;

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
    <Dropdown.Toggle>Options</Dropdown.Toggle>
    <Dropdown.Menu>
      <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
      <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
      <MenuItem href={'https://www.google.com'} disabled>
        Option 3
      </MenuItem>
    </Dropdown.Menu>
  </>
);

export const Menus: StoryObj<typeof Dropdown> = {
  decorators: [
    Story => (
      <div
        style={{
          height: '220px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        {Story()}
      </div>
    )
  ],
  render: () => (
    <Dropdown>
      <DropDownChildren />
    </Dropdown>
  )
};

export const DropUp: StoryObj<typeof Dropdown> = {
  decorators: [
    Story => (
      <div
        style={{
          height: '220px',
          width: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {Story()}
      </div>
    )
  ],
  args: {
    children: <DropUpChildren />,
    dropup: true
  }
};
export default story;
