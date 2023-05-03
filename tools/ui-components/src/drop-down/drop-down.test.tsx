import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MenuItem } from './menu-item/menu-item';
import { Dropdown } from './drop-down';

describe('<DropDownButton>', () => {
  it('should render button with text', () => {
    render(
      <Dropdown>
        <Dropdown.Toggle>Some Button</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem onClick={() => alert('hi')}>Option</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown dropup={true}>
        <Dropdown.Toggle>Some Button</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem onClick={() => alert('hi')}>Option 1</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option 2</MenuItem>
          <MenuItem href={'https://www.google.com'}>Option 3</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    );
    const dropdownTrigger = screen.getByText('Some Button');
    userEvent.click(dropdownTrigger);
    const unorderedList = screen.getByRole('menu');
    expect(unorderedList).toHaveClass(
      'shadow-lg bg-foreground-primary text-background-primary text-center ring-1 ring-black ring-opacity-5 focus:outline-transparent origin-top-right absolute min-w-full py-1 z-10 transform -translate-y-full top-0'
    );
  });

  it("should have the role 'button' and render the correct text", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem>Hello world</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem onClick={onClick}>Hello world</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem disabled>Hello world</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem disabled onClick={onClick}>
            Hello world
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem href='https://www.freecodecamp.org'>freeCodeCamp</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
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
      <Dropdown>
        <Dropdown.Toggle>test</Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem href='https://www.freecodecamp.org' disabled>
            freeCodeCamp
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    );

    const dropDownTrigger = screen.getByText('test');
    userEvent.click(dropDownTrigger);
    const unorderedList = screen.getByRole('menu');
    const Item = within(unorderedList).getByText('freeCodeCamp');

    expect(Item).toBeInTheDocument();
    expect(Item).toHaveAttribute('aria-disabled', 'true');
  });
});
