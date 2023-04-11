import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MenuItem } from './menu-item/menu-item';
import { DropDown } from './drop-down';

describe('<DropDownButton>', () => {
  it('should render button with text', () => {
    render(
      <DropDown>
        <DropDown.Toggle>Some Button</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem onClick={() => alert('hi')}>Option</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );
    const dropdownTrigger = screen.getByText('Some Button');
    userEvent.click(dropdownTrigger);
    const unorderedList = screen.getByRole('menu');
    const item = within(unorderedList).getAllByText('Option');
    expect(unorderedList).toBeInTheDocument();
    expect(dropdownTrigger).toBeInTheDocument();
    expect(item.length).toBe(3);
  });
  it('should render button with direction to up', () => {
    render(
      <DropDown>
        <DropDown.Toggle dropup={true}>Some Button</DropDown.Toggle>
        <DropDown.Menu dropup={true}>
          <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option 3</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );
    const dropdownTrigger = screen.getByText('Some Button');
    userEvent.click(dropdownTrigger);
    const unorderedList = screen.getByRole('menu');
    expect(unorderedList).toHaveClass(
      'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute py-1 transform -translate-y-full top-0'
    );
  });

  it("should have the role 'button' and render the correct text", () => {
    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem>Hello world</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );
    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const item = within(unorderedList).getByText('Hello world');
    expect(item).toBeInTheDocument();
  });

  it('should trigger the onClick prop on click', () => {
    const onClick = jest.fn();

    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem onClick={onClick}>Hello world</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('Hello world');

    userEvent.click(Item);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should reflect the disabled state using the aria-disabled attribute', () => {
    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem disabled>Hello world</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('Hello world');

    expect(Item).toHaveAttribute('aria-disabled', 'true');

    // Ensure that the `disabled` attribute is not used.
    expect(Item).toBeEnabled();
  });

  it('should not trigger the onClick prop if the button is disabled', () => {
    const onClick = jest.fn();

    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem disabled onClick={onClick}>
            Hello world
          </MenuItem>
        </DropDown.Menu>
      </DropDown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('Hello world');
    userEvent.click(Item);

    expect(onClick).not.toBeCalled();
  });

  it('should render an anchor element if the `href` prop is defined', () => {
    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem href='https://www.freecodecamp.org'>freeCodeCamp</MenuItem>
        </DropDown.Menu>
      </DropDown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('freeCodeCamp');

    expect(Item).toBeInTheDocument();
    expect(Item).toHaveAttribute('href', 'https://www.freecodecamp.org');
  });

  it('should render a button element if the `href` and `disabled` props are both defined', () => {
    render(
      <DropDown>
        <DropDown.Toggle>test</DropDown.Toggle>
        <DropDown.Menu>
          <MenuItem href='https://www.freecodecamp.org' disabled>
            freeCodeCamp
          </MenuItem>
        </DropDown.Menu>
      </DropDown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('freeCodeCamp');

    expect(Item).toBeInTheDocument();
    expect(Item).toHaveAttribute('aria-disabled', 'true');
  });
});
