import { render, screen } from '@testing-library/react';
import React from 'react';
import { Alert } from './alert';

describe('<Alert>', () => {
  it('should have an "alert" role', () => {
    render(<Alert variant='info'>Hello</Alert>);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders children', () => {
    const expectedText = 'Hello';
    render(
      <Alert variant='info'>
        <p>{expectedText}</p>
      </Alert>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('appends className', () => {
    const expectedClass = 'basic';
    render(
      <Alert className={expectedClass} variant='info'>
        Hello
      </Alert>
    );

    expect(screen.getByRole('alert')).toHaveClass(expectedClass);
  });
});
