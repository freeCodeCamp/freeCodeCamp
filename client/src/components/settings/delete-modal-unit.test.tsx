import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DeleteModal from './delete-modal';

// Run a test suite called `Delete Modal`, group unit tests done for particular component.
describe('DeleteModal', () => {
  // The following was sourced from the file `staging-warning-modal.test.tsx`; must be added in order for tests to run and pass.
  beforeAll(() => {
    // The Modal component uses `ResizeObserver` under the hood.
    // However, this property is not available in JSDOM, so we need to manually add it to the window object.
    // Ref: https://github.com/jsdom/jsdom/issues/3368
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: jest.fn(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn()
      }))
    });
  });
  // End source

  // Begin tests

  // Test 1
  test('Tests for rendering of the modal when `show` is set to true.', () => {
    // Passing in empty functions into Delete and onHide. Test for rendering.
    render(<DeleteModal delete={() => {}} onHide={() => {}} show={true} />);

    // Modal Component has role of dialog, checks if rendered/in the DOM.
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // Test 2
  test('Tests if `show` is false, that the modal will not show up.', () => {
    // Passing in empty functions into Delete and onHide.
    render(<DeleteModal delete={() => {}} onHide={() => {}} show={false} />);

    // Checking to see if modal component is NOT in DOM when `show` is set to false.
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // Test 3
  test('Searches for specific button element based on name', () => {
    // Passing in empty functions into Delete and onHide. Test for rendering.
    render(<DeleteModal delete={() => {}} onHide={() => {}} show={true} />);

    // Searches for a element with a role of button, with a name of `settings.danger.certain`.
    expect(
      screen.getByRole('button', { name: 'settings.danger.certain' })
    ).toBeInTheDocument();
  });

  // Test 4
  test('When the delete button is clicked, it runs the delete function', () => {
    // A mock function for delete.
    const mockDelete = jest.fn();
    // Passing in mock function for delete Param.
    render(<DeleteModal delete={mockDelete} onHide={() => {}} show={true} />);

    // Clicks on the button inside the delete-modal for delete functionality. Simulates a button click.
    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.certain' })
    );
    expect(mockDelete).toHaveBeenCalled();
  });

  // Test 5
  test('When the hide button is clicked, it runs the onHide function', () => {
    // A mock function for onHide.
    const mockOnHide = jest.fn();
    // Passing in mock function for onHide Param.
    render(<DeleteModal delete={() => {}} onHide={mockOnHide} show={true} />);

    // Clicks on the button inside the delete-modal for onHide functionality. Simulates a button click.
    fireEvent.click(
      screen.getByRole('button', { name: 'settings.danger.nevermind' })
    );
    expect(mockOnHide).toHaveBeenCalled();
  });
});
