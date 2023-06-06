import React from 'react';
import { render, act, screen } from '@testing-library/react';

import OfflineWarning from './offline-warning';

jest.useFakeTimers();

describe('<OfflineWarning />', () => {
  it('renders null when isOnline, isServerOnline and isSignedIn are true', () => {
    const { container } = render(
      <OfflineWarning isOnline={true} isServerOnline={true} isSignedIn={true} />
    );
    act(() => jest.runAllTimers());
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the misc.offline message when isOnline is false', () => {
    render(
      <OfflineWarning
        isOnline={false}
        isServerOnline={true}
        isSignedIn={true}
      />
    );
    act(() => jest.runAllTimers());
    expect(screen.getByText('misc.offline')).toBeInTheDocument();
  });

  it('renders the placeholder anchor tag if isServerOnline is false', () => {
    render(
      <OfflineWarning
        isOnline={true}
        isServerOnline={false}
        isSignedIn={true}
      />
    );
    act(() => jest.runAllTimers());
    expect(screen.getByText('placeholder').tagName).toBe('A');
    expect(screen.getByText('placeholder')).toHaveAttribute(
      'href',
      'mailto:support@freecodecamp.org'
    );
  });

  it('renders null when isSignedIn is false', () => {
    const { container } = render(
      <OfflineWarning
        isOnline={true}
        isServerOnline={true}
        isSignedIn={false}
      />
    );
    act(() => jest.runAllTimers());
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the misc.offline message when isOnline and isServerOnline are false', () => {
    render(
      <OfflineWarning
        isOnline={false}
        isServerOnline={false}
        isSignedIn={true}
      />
    );
    act(() => jest.runAllTimers());
    expect(screen.getByText('misc.offline')).toBeInTheDocument();
  });
});
