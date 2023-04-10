import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DropDownButton } from '../drop-down-button';
import { MenuItems } from '.';

describe('MenuItems', () => {
  it("should have the role 'button' and render the correct text", () => {
    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems>Hello world</MenuItems>
      </DropDownButton>
    );
    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('Hello world');
    expect(MenuItem).toBeInTheDocument();
  });

  it('should trigger the onClick prop on click', () => {
    const onClick = jest.fn();

    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems onClick={onClick}>Hello world</MenuItems>
      </DropDownButton>
    );

    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('Hello world');

    userEvent.click(MenuItem);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should reflect the disabled state using the aria-disabled attribute', () => {
    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems disabled>Hello world</MenuItems>
      </DropDownButton>
    );

    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('Hello world');

    expect(MenuItem).toHaveAttribute('aria-disabled', 'true');

    // Ensure that the `disabled` attribute is not used.
    expect(MenuItem).toBeEnabled();
  });

  it('should not trigger the onClick prop if the button is disabled', () => {
    const onClick = jest.fn();

    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems disabled onClick={onClick}>
          Hello world
        </MenuItems>
      </DropDownButton>
    );

    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('Hello world');
    userEvent.click(MenuItem);

    expect(onClick).not.toBeCalled();
  });

  it('should render an anchor element if the `href` prop is defined', () => {
    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems href='https://www.freecodecamp.org'>freeCodeCamp</MenuItems>
      </DropDownButton>
    );

    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('freeCodeCamp');

    expect(MenuItem).toBeInTheDocument();
    expect(MenuItem).toHaveAttribute('href', 'https://www.freecodecamp.org');
  });

  it('should render a button element if the `href` and `disabled` props are both defined', () => {
    render(
      <DropDownButton toggleLabel='test'>
        <MenuItems href='https://www.freecodecamp.org' disabled>
          freeCodeCamp
        </MenuItems>
      </DropDownButton>
    );

    const dropDown = screen.getByText('test');
    userEvent.click(dropDown);
    const menuItems = screen.getAllByRole('menuitem');
    const unorderedList = menuItems[0];
    const MenuItem = within(unorderedList).getByText('freeCodeCamp');

    expect(MenuItem).toBeInTheDocument();
    expect(MenuItem).toHaveAttribute('aria-disabled', 'true');
  });
});
