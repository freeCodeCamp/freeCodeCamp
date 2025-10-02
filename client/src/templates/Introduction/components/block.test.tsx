import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach, vi, Mock } from 'vitest';
import type { TFunction } from 'i18next';
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import {
  ChallengeFiles,
  PrerequisiteChallenge,
  Test,
  Fields,
  Question,
  FileKeyChallenge,
  BilibiliIds
} from '../../../redux/prop-types';
import { isAuditedSuperBlock } from '../../../../../shared-dist/utils/is-audited';
import {
  BlockLayouts,
  BlockTypes
} from '../../../../../shared-dist/config/blocks';
import { Block } from './block';

vi.mock('../../../../../shared-dist/utils/is-audited', () => ({
  isAuditedSuperBlock: vi.fn().mockReturnValueOnce(true)
}));

vi.mock('../../../utils/get-words');

const defaultProps = {
  block: 'test-block',
  blockType: null,
  challenges: [
    {
      block: 'testblock',
      blockType: BlockTypes.lab,
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
      isComingSoon: false,
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
      superBlock: SuperBlocks.FullStackDeveloper,
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
  t: vi.fn((key: string) => [key]) as unknown as TFunction,
  superBlock: SuperBlocks.FullStackDeveloper,
  toggleBlock: vi.fn()
};

describe('<Block />', () => {
  afterEach(() => {
    vi.clearAllMocks();
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
