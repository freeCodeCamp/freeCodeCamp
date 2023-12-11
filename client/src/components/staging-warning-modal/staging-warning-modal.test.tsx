import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import store from 'store';
import StagingWarningModal from '.';

describe('StagingWarningModal', () => {
  it('renders the modal successfully', () => {
    render(<StagingWarningModal />);
    expect(screen.getByTestId('staging-warning-modal')).toBeInTheDocument();
    expect(screen.getByTestId('staging-warning-modal')).toHaveClass('in');
  });

  it('closes the modal when clicking the close button', () => {
    render(<StagingWarningModal />);
    fireEvent.click(screen.getByText('Close'));
    expect(screen.getByTestId('staging-warning-modal')).not.toHaveClass('in');
  });

  it('displays the correct modal content', () => {
    render(<StagingWarningModal />);
    const modalContent = screen.getByTestId('staging-warning-modal');
    expect(modalContent).toHaveTextContent('staging-warning.heading');
    expect(modalContent).toHaveTextContent('staging-warning.p1');
    expect(modalContent).toHaveTextContent('staging-warning.p2');
    expect(modalContent).toHaveTextContent('link');
  });

  it('accepts Warning, stores acceptance key in local storage, and closes the modal', () => {
    render(<StagingWarningModal />);
    fireEvent.click(screen.getByTestId('accepts-warning'));
    expect(store.get('acceptedStagingWarning')).toBe(true);
    expect(screen.queryByTestId('staging-warning-modal')).not.toHaveClass('in');
  });
});
