import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterAll, afterEach, vi, Mock } from 'vitest';
import i18next from 'i18next';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import {
  ChallengeFiles,
  PrerequisiteChallenge,
  Test,
  Fields,
  Question,
  FileKeyChallenge,
  BilibiliIds
} from '../../../redux/prop-types';
import { isAuditedSuperBlock } from '@freecodecamp/shared/utils/is-audited';
import { BlockLayouts, BlockLabel } from '@freecodecamp/shared/config/blocks';
import { Block } from './block';

vi.mock('@freecodecamp/shared/utils/is-audited', () => ({
  isAuditedSuperBlock: vi.fn().mockReturnValueOnce(true)
}));

vi.mock('../../../utils/get-words');

type KeyFromSelector = <S, T>(selector: ($: S) => T) => unknown;
const isKeyFromSelector = (value: unknown): value is KeyFromSelector =>
  typeof value === 'function';

const selectorToKey = <S, T>(selector: ($: S) => T) => {
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
};

const i18nSpy = vi.spyOn(i18next, 't').mockImplementation((key, options) => {
  const namespace =
    typeof options?.ns === 'string' ? options.ns : String(options?.ns ?? '');

  if (options?.returnObjects && namespace === 'intro') {
    return {};
  }

  const resolvedSelectorKey =
    typeof key === 'function' ? selectorToKey(key) : String(key);
  const resolvedKey = namespace
    ? namespace + ':' + String(resolvedSelectorKey)
    : String(resolvedSelectorKey);

  return resolvedKey;
});

const defaultProps = {
  block: 'test-block',
  blockLabel: null,
  challenges: [
    {
      block: 'testblock',
      blockLabel: BlockLabel.lab,
      blockLayout: BlockLayouts.ChallengeGrid,
      certification: 'mockCertification',
      challengeOrder: 1,
      challengeType: 0,
      dashedName: 'mock-dashed-name',
      description: 'mockDescription',
      challengeFiles: {} as ChallengeFiles,
      fields: {} as Fields,
      forumTopicId: 12345,
      guideUrl: 'https://mockurl.com',
      head: ['mockHead'],
      hasEditableBoundaries: false,
      helpCategory: 'mockHelpCategory',
      id: 'mockId',
      instructions: 'mockInstructions',
      internal: {
        content: 'mockContent',
        contentDigest: 'mockContentDigest',
        description: 'mockInternalDescription',
        fieldOwners: ['mockOwner'],
        ignoreType: null,
        mediaType: 'mockMediaType',
        owner: 'mockOwner',
        type: 'mockType'
      },
      notes: 'mockNotes',
      prerequisites: [] as PrerequisiteChallenge[],
      isLocked: false,
      order: 1,
      questions: [] as Question[],
      assignments: ['mockAssignment'],
      required: [],
      solutions: {
        ['indexhtml']: {} as FileKeyChallenge,
        ['scriptjs']: {} as FileKeyChallenge,
        ['stylescss']: {} as FileKeyChallenge,
        ['indexjsx']: {} as FileKeyChallenge
      },
      sourceInstanceName: 'mockSourceInstanceName',
      superOrder: 1,
      superBlock: SuperBlocks.FullStackDeveloperV9,
      tail: ['mockTail'],
      template: 'mockTemplate',
      tests: [] as Test[],
      title: 'mockTitle',
      translationPending: false,
      url: 'https://mockurl.com',
      usesMultifileEditor: false,
      videoId: 'mockVideoId',
      videoLocaleIds: {},
      bilibiliIds: {} as BilibiliIds,
      videoUrl: 'https://mockvideourl.com'
    }
  ],
  completedChallengeIds: ['testchallengeIds'],
  isExpanded: true,
  t: i18next.t,
  superBlock: SuperBlocks.FullStackDeveloperV9,
  toggleBlock: vi.fn()
};

describe('<Block />', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    i18nSpy.mockRestore();
  });

  it('The "Help us translate" badge does not appear on any English blocks', () => {
    render(<Block {...defaultProps} />);
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does not appear on any i18n blocks when the superblock is audited`, () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(true);
    render(<Block {...defaultProps} />);
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does appear on i18n blocks when the superblock is not audited`, () => {
    (isAuditedSuperBlock as Mock).mockReturnValue(false);
    render(<Block {...defaultProps} />);
    expect(screen.getByText(/misc.translation-pending/)).toBeInTheDocument();
  });
});
