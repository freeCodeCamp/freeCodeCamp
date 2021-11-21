import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it(`renders a button when "onDismiss" prop is present, and calls "onDismiss" when the button is clicked`, () => {
    const onDismiss = jest.fn();
    render(
      <Alert onDismiss={onDismiss} variant='info'>
        Hello
      </Alert>
    );
    const closeButton = screen.getByRole('button');

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    userEvent.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('does NOT render a close button, when "onDismiss" prop is NOT used', () => {
    render(<Alert variant='info'>Hello</Alert>);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('sets "aria-label" of close button to "dismissText" prop', () => {
    const expectedLabel = 'custom dismiss alert message';
    render(
      <Alert dismissLabel={expectedLabel} onDismiss={jest.fn()} variant='info'>
        Hello
      </Alert>
    );

    expect(
      screen.getByRole('button', { name: expectedLabel })
    ).toBeInTheDocument();
  });
});
