import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import store from 'store';
import StagingWarningModal from '.';
describe('StagingWarningModal', () => {
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the modal successfully', () => {
    render(<StagingWarningModal />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes the modal when clicking the close button', () => {
    render(<StagingWarningModal />);
    fireEvent.click(screen.getByText('Close'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('displays the correct modal content', () => {
    render(<StagingWarningModal />);
    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toHaveTextContent('staging-warning.heading');
    expect(modalContent).toHaveTextContent('staging-warning.p1');
    expect(modalContent).toHaveTextContent('staging-warning.p2');
    expect(modalContent).toHaveTextContent('link');
  });

  it('accepts Warning, stores acceptance key in local storage, and closes the modal', () => {
    render(<StagingWarningModal />);

    fireEvent.click(screen.getByTestId('accepts-warning'));
    expect(store.get('acceptedStagingWarning')).toBe(true);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
