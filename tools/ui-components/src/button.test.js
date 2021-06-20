import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
  it("should have the role 'button' and the correct text", () => {
    render(<Button label='Hello world' />);

    expect(
      screen.getByRole('button', { name: /hello world/i })
    ).toBeInTheDocument();
  });

  it('should trigger the onClick prop on click', () => {
    const onClick = jest.fn();
    render(<Button label='Hello world' onClick={onClick} />);

    const button = screen.getByRole('button', { name: /hello world/i });

    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
