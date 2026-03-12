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

vi.mock('react-redux', () => ({
  useSelector: vi.fn().mockReturnValue(false)
}));

import { useSelector } from 'react-redux';
import MobileAppModal from './mobile-app-modal';

const mockUseSelector = useSelector as Mock;

const MOBILE_SUPERBLOCK = 'responsive-web-design-v9';
const NON_MOBILE_SUPERBLOCK = 'coding-interview-prep';
const STORE_KEY = 'mobileAppModalDismissedAt';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const ANDROID_UA =
  'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36';
const IOS_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15';
const DESKTOP_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

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
    mockUseSelector.mockReturnValue(false); // default: project preview closed
    store.remove(STORE_KEY);
    Object.defineProperty(navigator, 'userAgent', {
      value: ANDROID_UA,
      configurable: true
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    store.remove(STORE_KEY);
  });

  it('renders the modal on mobile for a public superblock', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render on a desktop OS', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: DESKTOP_UA,
      configurable: true
    });
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not render for a non-public superblock', () => {
    render(<MobileAppModal superBlock={NON_MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not render when the project preview is open', () => {
    mockUseSelector.mockReturnValue(true);
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not render when dismissed within 30 days', () => {
    store.set(STORE_KEY, Date.now() - THIRTY_DAYS_MS + 1000);
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders again after 30 days have passed', () => {
    store.set(STORE_KEY, Date.now() - THIRTY_DAYS_MS - 1000);
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('displays the correct modal content', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveTextContent('mobile-app-modal.heading');
    expect(dialog).toHaveTextContent('mobile-app-modal.body');
  });

  it('closes the modal without persisting when X is clicked', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(store.get(STORE_KEY)).toBeUndefined();
  });

  it('closes the modal without persisting when the store link is clicked', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    fireEvent.click(screen.getByRole('link'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(store.get(STORE_KEY)).toBeUndefined();
  });

  it('closes the modal and stores a timestamp when "do not show" is clicked', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    fireEvent.click(screen.getByText('mobile-app-modal.do-not-show'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    const stored = store.get(STORE_KEY) as number;
    expect(stored).toBeGreaterThan(0);
    expect(Date.now() - stored).toBeLessThan(1000);
  });

  it('shows the correct app store link for iOS', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: IOS_UA,
      configurable: true
    });
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'
    );
    expect(screen.getByRole('link')).toHaveTextContent('mobile-app-modal.ios');
  });

  it('shows the correct app store link for Android', () => {
    render(<MobileAppModal superBlock={MOBILE_SUPERBLOCK} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=org.freecodecamp'
    );
    expect(screen.getByRole('link')).toHaveTextContent(
      'mobile-app-modal.android'
    );
  });
});
