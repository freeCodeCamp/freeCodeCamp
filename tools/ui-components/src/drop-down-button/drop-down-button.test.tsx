import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { MenuItems } from '../menu-items/menu-items';
import { DropDownButton } from './drop-down-button';

describe('<DropDownButton>', () => {
  it('should render button with text', () => {
    render(
      <DropDownButton toggleLabel='Some Button'>
        <MenuItems href=''>Option</MenuItems>
        <MenuItems href=''>Option</MenuItems>
        <MenuItems href=''>Option</MenuItems>
      </DropDownButton>
    );
    const dropdown = screen.getByText('Some Button');
    userEvent.click(dropdown);
    const unorderedList = screen.getByRole('menu');
    const MenuItem = within(unorderedList).getAllByText('Option');
    expect(unorderedList).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(MenuItem.length).toBe(3);
  });

  it('should render button with direction to up', () => {
    render(
      <DropDownButton toggleLabel='Some Button' dropup={true}>
        <MenuItems href=''>Option</MenuItems>
        <MenuItems href=''>Option</MenuItems>
        <MenuItems href=''>Option</MenuItems>
      </DropDownButton>
    );
    const dropDown = screen.getByText('Some Button');
    userEvent.click(dropDown);
    const unorderedList = screen.getByRole('menu');
    expect(unorderedList).toHaveClass(
      'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute py-1 transform -translate-y-full top-0'
    );
  });
});
