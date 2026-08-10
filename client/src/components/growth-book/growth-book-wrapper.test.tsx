import React from 'react';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import GrowthBookWrapper from './growth-book-wrapper';

interface MinimalUser {
  completedChallenges: unknown[];
  email: string;
  joinDate: string;
}

interface TestWrapperProps {
  user: MinimalUser | null;
  userFetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
    error: string | null;
  };
  children: JSX.Element;
}

const UnconnectedTestWrapper = ({
  children,
  user,
  userFetchState
}: TestWrapperProps) => (
  <GrowthBookWrapper
    {...({ user, userFetchState } as unknown as Record<string, unknown>)}
  >
    {children}
  </GrowthBookWrapper>
);

vi.mock('react-redux', () => ({
  connect: () => (Comp: React.ComponentType) => Comp
}));

vi.mock('./growth-book-redux-connector', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}));

vi.mock('../../../config/env.json', () => ({
  default: {
    clientLocale: 'en',
    growthbookUri: 'https://example.com/api/features/gb_client_123'
  }
}));

vi.mock('../../../config/growthbook-features-default.json', () => ({
  default: {
    mockFeature: { defaultValue: true }
  }
}));

let currentInitImpl: () =>
  | Promise<{ success: boolean; source?: string }>
  | Promise<never> = () => Promise.resolve({ success: true });

const mockInit = vi.fn(() => currentInitImpl());
const mockSetPayload = vi.fn((_arg: Record<string, unknown>) =>
  Promise.resolve()
);
const mockSetAttributes = vi.fn((_arg: Record<string, unknown>) =>
  Promise.resolve()
);

export function setInitImpl(
  impl: () => Promise<{ success: boolean; source?: string }> | Promise<never>
) {
  currentInitImpl = impl;
}

vi.mock('@growthbook/growthbook-react', () => ({
  GrowthBook: class {
    init() {
      return mockInit();
    }
    setPayload(arg: Record<string, unknown>) {
      return mockSetPayload(arg);
    }
    setAttributes(arg: Record<string, unknown>) {
      return mockSetAttributes(arg);
    }
  },

  GrowthBookProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}));

function renderWrapper(initOptions: { complete: boolean }) {
  return render(
    <UnconnectedTestWrapper
      user={{ completedChallenges: [], email: '', joinDate: '' }}
      userFetchState={{
        pending: false,
        complete: initOptions.complete,
        errored: false,
        error: null
      }}
    >
      <div data-testid='child' />
    </UnconnectedTestWrapper>
  );
}

describe('GrowthBookWrapper init effect', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setInitImpl(() => Promise.resolve({ success: true }));
    mockInit.mockImplementation(() => currentInitImpl());
  });

  test('does not apply fallback when init succeeds', async () => {
    setInitImpl(() => Promise.resolve({ success: true }));

    renderWrapper({ complete: false });

    await waitFor(() => expect(mockInit).toHaveBeenCalled());
    expect(mockSetPayload).not.toHaveBeenCalled();
  });

  test('applies fallback when init resolves with success: false', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    setInitImpl(() => Promise.resolve({ success: false, source: 'network' }));

    renderWrapper({ complete: false });

    await waitFor(() => expect(mockInit).toHaveBeenCalled());
    expect(mockSetPayload).toHaveBeenCalledWith({
      features: { mockFeature: { defaultValue: true } }
    });
  });

  test('applies fallback when init rejects', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    setInitImpl(() => Promise.reject(new Error('boom')));

    renderWrapper({ complete: false });

    await waitFor(() => expect(mockInit).toHaveBeenCalled());
    await waitFor(() =>
      expect(mockSetPayload).toHaveBeenCalledWith({
        features: { mockFeature: { defaultValue: true } }
      })
    );
  });
});
