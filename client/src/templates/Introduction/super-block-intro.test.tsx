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

type IntroTranslation = {
  title: string;
  intro: string[];
  note: string;
};

type TranslationMap = Record<string, string | IntroTranslation>;

const translationMap: TranslationMap = {
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
  'misc.fsd-b-cta': 'Start Learning',
  'misc.continue-learning': 'Continue Learning'
};

const introTranslations: Record<string, IntroTranslation> = {
  'full-stack-developer': {
    title: 'Full-Stack Developer',
    intro: ['<strong>Build</strong> and deploy full-stack apps.'],
    note: 'Stay curious.'
  },
  'full-stack-developer-v9': {
    title: 'Certified Full-Stack Developer Curriculum',
    intro: [
      'This certification represents the culmination of your full-stack developer journey.',
      'Pass the exam to earn your Full-Stack Developer Certification.'
    ],
    note: 'Coming soon.'
  },
  'responsive-web-design': {
    title: 'Responsive Web Design',
    intro: ['Create responsive layouts across devices.'],
    note: ''
  }
};

type KeyFromSelector = <S, T>(selector: ($: S) => T) => unknown;
const isKeyFromSelector = (value: unknown): value is KeyFromSelector =>
  typeof value === 'function';

const selectorToKey = <S, T>(selector: ($: S) => T) =>
  (() => {
    const keyResolver: unknown = Reflect.get(i18next, 'keyFromSelector');
    if (isKeyFromSelector(keyResolver)) {
      const key = String(keyResolver(selector));
      if (key) return key;
    }

    const path: string[] = [];
    const proxy = new Proxy<Record<string, unknown>>(
      {},
      {
        get(_target, prop) {
          path.push(String(prop));
          return proxy;
        }
      }
    );
    Reflect.apply(selector, undefined, [proxy]);
    return path.join('.');
  })();

const getTranslationText = (key: string) => {
  const value = translationMap[key];
  return typeof value === 'string' ? value : key;
};

const mockT = vi.fn(function <S, T>(
  key: ($: S) => T,
  options?: { returnObjects?: boolean; ns?: string }
) {
  const resolvedKey = options?.ns
    ? `${options.ns}:${selectorToKey(key)}`
    : selectorToKey(key);
  const value = translationMap[resolvedKey];

  if (options?.returnObjects && typeof value === 'object') {
    return value;
  }

  return value ?? resolvedKey;
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
import {
  SuperBlockIntroductionPage,
  type SuperBlockProps
} from './super-block-intro';

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
        moduleType: BlockLabel;
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
              moduleType: BlockLabel.learn,
              blocks: ['block-one']
            }
          ]
        }
      ]
    }
  };
};

const createLocation = (): WindowLocation<{ breadcrumbBlockClick: string }> => {
  return {
    ...window.location,
    hash: '',
    pathname: '/learn/super-block',
    search: '',
    state: { breadcrumbBlockClick: 'block-one' }
  };
};

const createPageProps = (
  setup: TestSetup,
  superBlock: SuperBlocks,
  overrides: Partial<SuperBlockProps> = {}
): SuperBlockProps => {
  return {
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
  };
};

const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

const i18nSpy = vi.spyOn(i18next, 't');

i18nSpy.mockImplementation((key, options) => {
  if (options?.returnObjects) {
    return introTranslations;
  }

  const resolvedSelectorKey =
    typeof key === 'function' ? selectorToKey(key) : String(key);
  const namespace =
    typeof options?.ns === 'string' ? options.ns : String(options?.ns ?? '');
  const resolvedKey = namespace
    ? namespace + ':' + String(resolvedSelectorKey)
    : String(resolvedSelectorKey);
  const value = translationMap[resolvedKey];
  return typeof value === 'string' ? value : resolvedKey;
});

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

describe('SuperBlockIntroductionPage', () => {
  it.each(scenarios)('%s', async scenario => {
    const { superBlock, completedOrders, expected } = scenario;
    const setup = createSetup(superBlock);

    const completedChallenges = completedOrders.map(order => {
      const challenge = setup.challengeByOrder.get(order);
      if (!challenge) {
        throw new Error(`Missing challenge for order ${order}`);
      }

      return {
        id: challenge.id,
        completedDate: order * 100,
        challengeFiles: null
      };
    });

    const props = createPageProps(setup, superBlock, {
      user: {
        completedChallenges,
        isDonating: false
      }
    });

    render(<SuperBlockIntroductionPage {...props} />);

    if (expected.labelKey) {
      const expectedText = getTranslationText(expected.labelKey);
      const cta = await screen.findByRole('link', {
        name: expectedText
      });

      expect(cta).toHaveAttribute('data-test-label', expected.dataLabel);

      const nextChallenge = setup.challengeByOrder.get(expected.nextOrder!);
      expect(nextChallenge).toBeDefined();
      expect(cta).toHaveAttribute('href', nextChallenge?.fields.slug ?? '');
    } else {
      await waitFor(() =>
        expect(
          screen.queryByRole('link', {
            name: getTranslationText('misc.fsd-b-cta')
          })
        ).toBeNull()
      );

      expect(
        screen.queryByRole('link', {
          name: getTranslationText('misc.continue-learning')
        })
      ).toBeNull();
    }
  });
});
