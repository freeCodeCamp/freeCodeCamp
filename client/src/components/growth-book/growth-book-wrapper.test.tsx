import React from 'react';
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

jest.mock('react-redux', () => ({
  connect: () => (Comp: React.ComponentType) => Comp
}));

jest.mock('./growth-book-redux-connector', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}));

jest.mock('../../../config/env.json', () => ({
  clientLocale: 'en',
  growthbookUri: 'https://example.com/api/features/gb_client_123'
}));

jest.mock('../../../config/growthbook-features-default.json', () => ({
  mockFeature: { defaultValue: true }
}));

let currentInitImpl: () =>
  | Promise<{ success: boolean; source?: string }>
  | Promise<never> = () => Promise.resolve({ success: true });

const mockInit = jest.fn(() => currentInitImpl());
const mockSetPayload = jest.fn((_arg: Record<string, unknown>) =>
  Promise.resolve()
);
const mockSetAttributes = jest.fn((_arg: Record<string, unknown>) =>
  Promise.resolve()
);

export function setInitImpl(
  impl: () => Promise<{ success: boolean; source?: string }> | Promise<never>
) {
  currentInitImpl = impl;
}

jest.mock('@growthbook/growthbook-react', () => ({
  GrowthBook: jest.fn().mockImplementation(() => ({
    init: () => mockInit(),
    setPayload: (arg: Record<string, unknown>) => mockSetPayload(arg),
    setAttributes: (arg: Record<string, unknown>) => mockSetAttributes(arg)
  })),
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
    jest.clearAllMocks();
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
    setInitImpl(() => Promise.resolve({ success: false, source: 'network' }));

    renderWrapper({ complete: false });

    await waitFor(() => expect(mockInit).toHaveBeenCalled());
    expect(mockSetPayload).toHaveBeenCalledWith({
      features: { mockFeature: { defaultValue: true } }
    });
  });

  test('applies fallback when init rejects', async () => {
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
