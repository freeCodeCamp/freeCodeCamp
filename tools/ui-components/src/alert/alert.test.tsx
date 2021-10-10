import { render, screen } from '@testing-library/react';
import React from 'react';
import { Alert } from './alert';

describe('<Alert>', () => {
  it('should have an "alert" role', () => {
    render(<Alert />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
