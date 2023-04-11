import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { MenuItem } from '../menu-item/menu-item';
import { DropDownButton } from './drop-down-button';

describe('<DropDownButton>', () => {
  it('should render button with text', () => {
    render(
      <DropDownButton toggleLabel='Some Button'>
        <MenuItem href=''>Option</MenuItem>
        <MenuItem href=''>Option</MenuItem>
        <MenuItem href=''>Option</MenuItem>
      </DropDownButton>
    );
    const dropdown = screen.getByText('Some Button');
    userEvent.click(dropdown);
    const unorderedList = screen.getByRole('menu');
    const item = within(unorderedList).getAllByText('Option');
    expect(unorderedList).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(item.length).toBe(3);
  });

  it('should render button with direction to up', () => {
    render(
      <DropDownButton toggleLabel='Some Button' dropup={true}>
        <MenuItem href=''>Option</MenuItem>
        <MenuItem href=''>Option</MenuItem>
        <MenuItem href=''>Option</MenuItem>
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
