import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button } from './button';

describe('Button', () => {
  it("should have the role 'button' and render the correct text", () => {
    render(<Button>Hello world</Button>);

    expect(
      screen.getByRole('button', { name: /hello world/i })
    ).toBeInTheDocument();
  });

  it("should have the type 'button' by default", () => {
    render(<Button>Hello world</Button>);

    expect(
      screen.getByRole('button', { name: /hello world/i })
    ).toHaveAttribute('type', 'button');
  });

  it("should have the type 'submit' if it is specified", () => {
    render(<Button type='submit'>Hello world</Button>);

    expect(
      screen.getByRole('button', { name: /hello world/i })
    ).toHaveAttribute('type', 'submit');
  });

  it('should trigger the onClick prop on click', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Hello world</Button>);

    const button = screen.getByRole('button', { name: /hello world/i });

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
