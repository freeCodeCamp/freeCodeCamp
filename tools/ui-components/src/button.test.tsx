import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './button';

const onClick = jest.fn();

describe('Button', () => {
  it("should have the role 'button' and the correct text", () => {
    render(<Button label='Hello world' onClick={onClick} />);
    expect(
      screen.getByRole('button', { name: /hello world/i })
    ).toBeInTheDocument();
  });

  it('should trigger the onClick prop on click', () => {
    render(<Button label='Hello world' onClick={onClick} />);

    const button = screen.getByRole('button', { name: /hello world/i });

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
