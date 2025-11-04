import React from 'react';
import { render, screen } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

const translationMap: Record<string, unknown> = {
  'intro:full-stack-developer': {
    title: 'Full Stack Developer',
    intro: ['<strong>Build</strong> and deploy full stack apps.'],
    note: 'Stay curious.'
  },
  'intro:responsive-web-design': {
    title: 'Responsive Web Design',
    intro: ['Create responsive layouts across devices.'],
    note: ''
  },
  'misc.fsd-b-cta': 'Start Learning',
  'misc.continue-learning': 'Continue Learning'
};

const mockT = vi.fn((key: string) => {
  return translationMap[key] ?? key;
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: mockT
  }),
  Trans: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  )
}));

vi.mock('@freecodecamp/ui', () => ({
  Callout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Spacer: () => null,
  Container: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Row: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Col: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

vi.mock('../../../assets/superblock-icon', () => ({
  SuperBlockIcon: () => <div />
}));

vi.mock('../../../assets/icons/cap', () => ({ default: () => <div /> }));
vi.mock('../../../assets/icons/dumbbell', () => ({ default: () => <div /> }));
vi.mock('../../../assets/icons/community', () => ({ default: () => <div /> }));
vi.mock('../../../components/archived-warning', () => ({
  default: () => <div />
}));

vi.mock('../../../components/helpers', () => ({
  Link: ({
    children,
    to,
    ...rest
  }: {
    children: React.ReactNode;
    to: string;
  }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}));

import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import SuperBlockIntro from './super-block-intro';

describe('<SuperBlockIntro /> CTA labels', () => {
  const consoleSpy = vi
    .spyOn(console, 'log')
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  beforeEach(() => {
    mockT.mockClear();
  });

  const createProps = (
    overrides: Partial<React.ComponentProps<typeof SuperBlockIntro>> = {}
  ) => ({
    superBlock: SuperBlocks.FullStackDeveloper,
    onCertificationDonationAlertClick: vi.fn(),
    isDonating: false,
    hasNotstarted: true,
    nextChallengeSlug: '/learn/start',
    ...overrides
  });

  it('renders start-learning CTA for full stack developers with no progress', () => {
    render(<SuperBlockIntro {...createProps()} />);

    expect(
      screen.getByRole('link', {
        name: translationMap['misc.fsd-b-cta'] as string
      })
    ).toHaveAttribute('data-test-label', 'start-learning');
  });

  it('renders continue-learning CTA for full stack developers with progress', () => {
    render(<SuperBlockIntro {...createProps({ hasNotstarted: false })} />);

    expect(
      screen.getByRole('link', {
        name: translationMap['misc.continue-learning'] as string
      })
    ).toHaveAttribute('data-test-label', 'continue-learning');
  });

  it('renders start-learning CTA for non full stack super blocks with no progress', () => {
    render(
      <SuperBlockIntro
        {...createProps({ superBlock: SuperBlocks.RespWebDesign })}
      />
    );

    expect(
      screen.getByRole('link', {
        name: translationMap['misc.fsd-b-cta'] as string
      })
    ).toHaveAttribute('data-test-label', 'start-learning');
  });

  it('renders continue-learning CTA for non full stack super blocks with progress', () => {
    render(
      <SuperBlockIntro
        {...createProps({
          superBlock: SuperBlocks.RespWebDesign,
          hasNotstarted: false
        })}
      />
    );

    expect(
      screen.getByRole('link', {
        name: translationMap['misc.continue-learning'] as string
      })
    ).toHaveAttribute('data-test-label', 'continue-learning');
  });
});
