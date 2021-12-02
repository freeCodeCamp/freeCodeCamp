import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CloseButton } from './close-button';

describe('<CloseButton>', () => {
  it('should render', () => {
    render(<CloseButton onClick={jest.fn()} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should set "aria-label" to "label" prop', () => {
    const expectedLabel = 'Close me please';
    render(<CloseButton label={expectedLabel} onClick={jest.fn()} />);

    expect(
      screen.getByRole('button', { name: expectedLabel })
    ).toBeInTheDocument();
  });

  it('should call "onClick" handler on button click', () => {
    const onClick = jest.fn();
    render(<CloseButton onClick={onClick} />);

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
