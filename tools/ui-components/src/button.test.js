/* global expect */
/* global jest */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
