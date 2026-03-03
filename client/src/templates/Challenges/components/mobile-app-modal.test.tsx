import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  vi,
  type Mock
} from 'vitest';
import store from 'store';

vi.mock('react-responsive', () => ({
  useMediaQuery: vi.fn()
}));

import { useMediaQuery } from 'react-responsive';
import MobileAppModal from './mobile-app-modal';

const mockUseMediaQuery = useMediaQuery as Mock;

const MOBILE_SUPERBLOCK = 'responsive-web-design-v9';
const NON_MOBILE_SUPERBLOCK = 'coding-interview-prep';
const STORE_KEY = 'hideMobileAppModal';

describe('MobileAppModal', () => {
  beforeAll(() => {
    // The Modal component uses `ResizeObserver` under the hood.
    // However, this property is not available in JSDOM, so we need to manually add it to the window object.
    // Ref: https://github.com/jsdom/jsdom/issues/3368
    type ResizeObserverMockInstance = {
      observe: ResizeObserver['observe'];
      unobserve: ResizeObserver['unobserve'];
      disconnect: ResizeObserver['disconnect'];
    };
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: vi.fn(function (
        this: ResizeObserverMockInstance,
        _cb: ResizeObserverCallback
      ) {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
      })
    });
  });

  beforeEach(() => {
    mockUseMediaQuery.mockReturnValue(true); // default: mobile viewport
    store.remove(STORE_KEY);
  });

  afterEach(() => {
    vi.clearAllMocks();
    store.remove(STORE_KEY);
  });

  it('renders the modal on mobile for a public superblock', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render on a desktop viewport', () => {
    mockUseMediaQuery.mockReturnValue(false);
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not render for a non-public superblock', () => {
    render(<MobileAppModal superBlock={NON_MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not render when the user has previously dismissed it', () => {
    store.set(STORE_KEY, true);
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('displays the correct modal content', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveTextContent('mobile-app-modal.heading');
    expect(dialog).toHaveTextContent('mobile-app-modal.body');
    expect(dialog).toHaveTextContent('mobile-app-modal.do-not-show');
  });

  it('contains links to the iOS App Store and Google Play', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(
      screen.getByRole('link', { name: 'mobile-app-modal.ios' })
    ).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'
    );
    expect(
      screen.getByRole('link', { name: 'mobile-app-modal.android' })
    ).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=org.freecodecamp'
    );
  });

  it('closes the modal without persisting when the X button is clicked', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(store.get(STORE_KEY)).toBeFalsy();
  });

  it('closes the modal and persists dismissal when "do not show me again" is clicked', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    fireEvent.click(screen.getByText('mobile-app-modal.do-not-show'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(store.get(STORE_KEY)).toBe(true);
  });
});
