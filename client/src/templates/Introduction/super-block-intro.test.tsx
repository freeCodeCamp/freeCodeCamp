import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import i18next from 'i18next';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { WindowLocation } from '@gatsbyjs/reach-router';

vi.mock('react-redux', () => ({
  connect: () => (Component: React.ComponentType<unknown>) => Component,
  useDispatch: () => vi.fn(),
  useSelector: () => ({})
}));

vi.mock('react-helmet', () => ({
  __esModule: true,
  default: ({ children }: { children?: React.ReactNode }) => (
    <div>{children}</div>
  )
}));

vi.mock('gatsby', () => ({
  graphql: vi.fn()
}));

vi.mock('@growthbook/growthbook-react', () => ({
  useFeatureValue: () => []
}));

vi.mock('react-scroll', () => ({
  scroller: { scrollTo: vi.fn() }
}));

vi.mock('../../components/Donation/donation-modal', () => ({
  default: () => null
}));

vi.mock('../../components/Header/components/login', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <span>{children}</span>
  )
}));

vi.mock('../../components/Map', () => ({
  default: () => null
}));

vi.mock('./components/block', () => ({
  default: () => null
}));

vi.mock('./components/cert-challenge', () => ({
  default: () => null
}));

vi.mock('./components/help-translate', () => ({
  default: () => null
}));

vi.mock('./components/legacy-links', () => ({
  default: () => null
}));

vi.mock('./components/super-block-accordion', () => ({
  SuperBlockAccordion: () => null
}));

vi.mock('./components/super-block-search', () => ({
  default: () => null
}));

const translationMap: Record<string, unknown> = {
  'intro:full-stack-developer': {
    title: 'Full-Stack Developer',
    intro: ['<strong>Build</strong> and deploy full-stack apps.'],
    note: 'Stay curious.'
  },
  'intro:full-stack-developer-v9': {
    title: 'Certified Full-Stack Developer Curriculum',
    intro: [
      'This certification represents the culmination of your full-stack developer journey.',
      'Pass the exam to earn your Full-Stack Developer Certification.'
    ],
    note: 'Coming soon.'
  },
  'intro:responsive-web-design': {
    title: 'Responsive Web Design',
    intro: ['Create responsive layouts across devices.'],
    note: ''
  },
  'intro:a2-english-for-developers': {
    title: 'A2 English for Developers',
    intro: ['Learn workplace English at the A2 level.'],
    note: 'This certification is currently in beta.'
  },
  'intro:front-end-development-libraries-v9': {
    title: 'Front-End Development Libraries Certification',
    intro: ['Learn the libraries developers use to build webpages.'],
    note: ''
  },
  'misc.fsd-b-cta': 'Start Learning',
  'misc.continue-learning': 'Continue Learning',
  'donate.consider-donating':
    'Please consider donating to support the completion of its development.',
  'donate.consider-donating-2':
    'If you want to help us speed up development of this curriculum, please consider becoming a supporter of our charity.',
  'buttons.donate-now': 'Donate Now'
};

const mockT = vi.fn((key: string, options?: { returnObjects?: boolean }) => {
  const value = translationMap[key];

  if (options?.returnObjects && typeof value === 'object') {
    return value;
  }

  return value ?? key;
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: mockT
  }),
  Trans: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
  withTranslation: () => (Component: React.ComponentType<unknown>) => Component
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

vi.mock('../../assets/superblock-icon', () => ({
  SuperBlockIcon: () => <div />
}));

vi.mock('../../assets/icons/cap', () => ({ default: () => <div /> }));
vi.mock('../../assets/icons/dumbbell', () => ({ default: () => <div /> }));
vi.mock('../../assets/icons/community', () => ({ default: () => <div /> }));
vi.mock('../../components/archived-warning', () => ({
  default: () => <div />
}));

vi.mock('../../components/helpers', () => ({
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

import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import SuperBlockIntroductionPage from './super-block-intro';

type ChallengeNode = {
  challenge: {
    id: string;
    fields: { slug: string; blockName: string };
    block: string;
    blockLabel?: BlockLabel;
    challengeType: number;
    title: string;
    order: number;
    superBlock: SuperBlocks;
    dashedName: string;
    blockLayout: BlockLayouts;
    chapter: string;
    module: string;
  };
};

type TestSetup = {
  challengeNodes: ChallengeNode[];
  challengeByOrder: Map<number, ChallengeNode['challenge']>;
  structureNode: {
    superBlock: SuperBlocks;
    chapters: Array<{
      dashedName: string;
      comingSoon: boolean;
      modules: Array<{
        dashedName: string;
        comingSoon: boolean;
        moduleType: string;
        blocks: string[];
      }>;
    }>;
  };
};

const createSetup = (superBlock: SuperBlocks): TestSetup => {
  const makeChallengeNode = (order: number): ChallengeNode => ({
    challenge: {
      id: `${superBlock}-challenge-${order}`,
      fields: {
        slug: `/learn/${superBlock}/challenge-${order}`,
        blockName: 'Block One'
      },
      block: 'block-one',
      blockLabel: BlockLabel.learn,
      challengeType: 0,
      title: `Challenge ${order}`,
      order,
      superBlock,
      dashedName: `${superBlock}-challenge-${order}`,
      blockLayout: BlockLayouts.LegacyChallengeList,
      chapter: 'chapter-one',
      module: 'module-one'
    }
  });

  const challengeNodes = [1, 2, 3].map(makeChallengeNode);
  const challengeByOrder = new Map(
    challengeNodes.map(node => [node.challenge.order, node.challenge])
  );

  return {
    challengeNodes,
    challengeByOrder,
    structureNode: {
      superBlock,
      chapters: [
        {
          dashedName: 'chapter-one',
          comingSoon: false,
          modules: [
            {
              dashedName: 'module-one',
              comingSoon: false,
              moduleType: 'core',
              blocks: ['block-one']
            }
          ]
        }
      ]
    }
  };
};

const createLocation = () =>
  ({
    hash: '',
    pathname: '/learn/super-block',
    search: '',
    state: undefined
  }) as unknown as WindowLocation<{ breadcrumbBlockClick: string }>;

const createPageProps = (
  setup: TestSetup,
  superBlock: SuperBlocks,
  overrides: Record<string, unknown> = {}
) =>
  ({
    currentChallengeId: setup.challengeNodes[0].challenge.id,
    data: {
      allChallengeNode: { nodes: setup.challengeNodes.slice() },
      allSuperBlockStructure: { nodes: [setup.structureNode] }
    },
    expandedState: {},
    fetchState: { pending: false, complete: true, errored: false },
    isSignedIn: true,
    signInLoading: false,
    location: createLocation(),
    pageContext: {
      superBlock
    },
    resetExpansion: vi.fn(),
    toggleBlock: vi.fn(),
    tryToShowDonationModal: vi.fn(),
    user: {
      completedChallenges: [],
      isDonating: false
    },
    ...overrides
  }) as unknown as React.ComponentProps<typeof SuperBlockIntroductionPage>;

const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

const i18nSpy = vi.spyOn(i18next, 't');

i18nSpy.mockImplementation(((
  key: unknown,
  options?: { returnObjects?: boolean }
) => {
  if (typeof key !== 'string') return '';

  if (options?.returnObjects) {
    const value = translationMap[key];
    if (typeof value === 'object') {
      return value;
    }
  }

  const titleKeySuffix = '.title';
  if (key.endsWith(titleKeySuffix)) {
    const baseKey = key.slice(0, -titleKeySuffix.length);
    const entry = translationMap[baseKey];
    if (
      entry &&
      typeof entry === 'object' &&
      'title' in (entry as Record<string, unknown>)
    ) {
      return (entry as { title: string }).title;
    }
  }

  const value = translationMap[key];
  return typeof value === 'string' ? value : key;
}) as unknown as typeof i18next.t);

afterAll(() => {
  consoleSpy.mockRestore();
  i18nSpy.mockRestore();
});

beforeEach(() => {
  mockT.mockClear();
});

type Scenario = {
  description: string;
  superBlock: SuperBlocks;
  completedOrders: number[];
  expected: {
    labelKey: string | null;
    dataLabel: 'start-learning' | 'continue-learning' | null;
    nextOrder: number | null;
  };
};

const scenarios: Scenario[] = [
  {
    description:
      'For a non full-stack certification with progress it should render the continue button and slug.',
    superBlock: SuperBlocks.RespWebDesign,
    completedOrders: [1],
    expected: {
      labelKey: 'misc.continue-learning',
      dataLabel: 'continue-learning',
      nextOrder: 2
    }
  },
  {
    description:
      'For a non full-stack certification without progress it should render the start button and slug.',
    superBlock: SuperBlocks.RespWebDesign,
    completedOrders: [],
    expected: {
      labelKey: 'misc.fsd-b-cta',
      dataLabel: 'start-learning',
      nextOrder: 1
    }
  },
  {
    description:
      'For a non full-stack certification with full progress it should not render the button.',
    superBlock: SuperBlocks.RespWebDesign,
    completedOrders: [1, 2, 3],
    expected: {
      labelKey: null,
      dataLabel: null,
      nextOrder: null
    }
  },
  {
    description:
      'For the full-stack certification with progress it should not render the start or continue button.',
    superBlock: SuperBlocks.FullStackDeveloperV9,
    completedOrders: [1],
    expected: {
      labelKey: null,
      dataLabel: null,
      nextOrder: null
    }
  },
  {
    description:
      'For the full-stack certification without progress it should not render the start or continue button.',
    superBlock: SuperBlocks.FullStackDeveloperV9,
    completedOrders: [],
    expected: {
      labelKey: null,
      dataLabel: null,
      nextOrder: null
    }
  },
  {
    description:
      'For the full-stack certification with full progress it should not render the button.',
    superBlock: SuperBlocks.FullStackDeveloperV9,
    completedOrders: [1, 2, 3],
    expected: {
      labelKey: null,
      dataLabel: null,
      nextOrder: null
    }
  }
];

const scenariosWithCta = scenarios.filter(
  (
    scenario
  ): scenario is Scenario & {
    expected: {
      labelKey: string;
      dataLabel: 'start-learning' | 'continue-learning';
      nextOrder: number;
    };
  } =>
    scenario.expected.labelKey !== null &&
    scenario.expected.dataLabel !== null &&
    scenario.expected.nextOrder !== null
);

const scenariosWithoutCta = scenarios.filter(
  scenario => scenario.expected.labelKey === null
);

describe('SuperBlockIntroductionPage', () => {
  it.each(scenariosWithCta)('$description', async scenario => {
    const { superBlock, completedOrders, expected } = scenario;
    const setup = createSetup(superBlock);

    const completedChallenges = completedOrders.map(order => {
      const challenge = setup.challengeByOrder.get(order);
      if (!challenge) {
        throw new Error(`Missing challenge for order ${order}`);
      }

      return {
        id: challenge.id,
        completedDate: order * 100
      };
    });

    const props = createPageProps(setup, superBlock, {
      user: {
        completedChallenges,
        isDonating: false
      }
    });

    render(<SuperBlockIntroductionPage {...props} />);

    const expectedText = translationMap[expected.labelKey] as string;
    const cta = await screen.findByRole('link', {
      name: expectedText
    });

    expect(cta).toHaveAttribute('data-test-label', expected.dataLabel);

    const nextChallenge = setup.challengeByOrder.get(expected.nextOrder);
    if (!nextChallenge) {
      throw new Error(`Missing challenge for order ${expected.nextOrder}`);
    }
    expect(cta).toHaveAttribute('href', nextChallenge.fields.slug);
  });

  describe('note and donation callout', () => {
    const renderForSuperBlock = ({
      superBlock,
      isDonating
    }: {
      superBlock: SuperBlocks;
      isDonating: boolean;
    }) => {
      const setup = createSetup(superBlock);
      const props = createPageProps(setup, superBlock, {
        user: {
          completedChallenges: [],
          isDonating
        }
      });
      render(<SuperBlockIntroductionPage {...props} />);
    };

    it('should render the note text for a certification with a note', async () => {
      renderForSuperBlock({
        superBlock: SuperBlocks.A2English,
        isDonating: false
      });

      expect(
        await screen.findByText('This certification is currently in beta.')
      ).toBeInTheDocument();
    });

    it('should render the beta donation copy and Donate Now button for a non-donor on a beta certification', async () => {
      renderForSuperBlock({
        superBlock: SuperBlocks.A2English,
        isDonating: false
      });

      await screen.findByText('This certification is currently in beta.');
      expect(
        screen.getByText(
          'Please consider donating to support the completion of its development.'
        )
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Donate Now' })
      ).toBeInTheDocument();
    });

    it('should not render the donation copy or Donate Now button for a donor on a beta certification', async () => {
      renderForSuperBlock({
        superBlock: SuperBlocks.A2English,
        isDonating: true
      });

      await screen.findByText('This certification is currently in beta.');
      expect(
        screen.queryByText(
          'Please consider donating to support the completion of its development.'
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('link', { name: 'Donate Now' })
      ).not.toBeInTheDocument();
    });

    it('should render the unfinished-certification donation copy and Donate Now button for a non-donor on an unfinished certification', async () => {
      renderForSuperBlock({
        superBlock: SuperBlocks.FrontEndDevLibsV9,
        isDonating: false
      });

      expect(
        await screen.findByRole('link', { name: 'Donate Now' })
      ).toBeInTheDocument();
      expect(screen.getByText('placeholder')).toBeInTheDocument();
      expect(
        screen.queryByText(
          'Please consider donating to support the completion of its development.'
        )
      ).not.toBeInTheDocument();
    });

    it('should not render any callout when the certification has no note and is not eligible for the donation callout', async () => {
      renderForSuperBlock({
        superBlock: SuperBlocks.RespWebDesign,
        isDonating: false
      });

      await waitFor(() => {
        expect(
          screen.queryByRole('link', { name: 'Donate Now' })
        ).not.toBeInTheDocument();
      });
    });
  });

  it.each(scenariosWithoutCta)('$description', async scenario => {
    const { superBlock, completedOrders } = scenario;
    const setup = createSetup(superBlock);

    const completedChallenges = completedOrders.map(order => {
      const challenge = setup.challengeByOrder.get(order);
      if (!challenge) {
        throw new Error(`Missing challenge for order ${order}`);
      }

      return {
        id: challenge.id,
        completedDate: order * 100
      };
    });

    const props = createPageProps(setup, superBlock, {
      user: {
        completedChallenges,
        isDonating: false
      }
    });

    render(<SuperBlockIntroductionPage {...props} />);

    await waitFor(() => {
      expect(
        screen.queryByRole('link', {
          name: translationMap['misc.fsd-b-cta'] as string
        })
      ).toBeNull();
      expect(
        screen.queryByRole('link', {
          name: translationMap['misc.continue-learning'] as string
        })
      ).toBeNull();
    });
  });
});
