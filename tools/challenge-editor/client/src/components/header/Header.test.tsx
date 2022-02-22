import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders root link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/freeCodeCamp Challenge Editor/i);
  expect(linkElement).toBeInTheDocument();
});
