import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DeleteModal from './delete-modal';

test('renders modal', () => {
  // Passing in empty functions into Delete and onHide. Test for rendering.
  render(<DeleteModal delete={() => {}} onHide={() => {}} show={true} />);

  // Logs the output
  expect(screen.getByText('Close')).toBeInTheDocument();
});
