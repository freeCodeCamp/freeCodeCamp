import React from 'react';
import { Story } from '@storybook/react';
import { MenuItems } from '../menu-items';
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
      <MenuItems onClick={() => console.log('hi')}>Option 1</MenuItems>
      <MenuItems href={'https://www.google.com'}>Option 2</MenuItems>
      <MenuItems href='' disabled>
        Option 3
      </MenuItems>
    </>
  )
};

const ItemsTemplate: Story = () => {
  return (
    <div style={{ width: '220px' }}>
      <DropDownButton toggleLabel={'Some Menu Items'}>
        <MenuItems onClick={() => console.log('hi')}>Option 1</MenuItems>
        <MenuItems href={'https://www.google.com'}>Option 2</MenuItems>
        <MenuItems href=''>Option 3</MenuItems>
      </DropDownButton>
    </div>
  );
};

export const MenuItem = ItemsTemplate.bind({});

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
      <MenuItems onClick={() => alert('hi')}>Option 1</MenuItems>
      <MenuItems href={'https://www.google.com'}>Option 2</MenuItems>
      <MenuItems href={'https://www.google.com'}>Option 3</MenuItems>
    </>
  ),
  dropup: true
};
export default story;
