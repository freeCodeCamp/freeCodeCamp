import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { createStore } from '../../../redux/create-store';
import {
  ChallengeFiles,
  PrerequisiteChallenge,
  Test,
  Fields,
  Question,
  FileKeyChallenge,
  BilibiliIds
} from '../../../redux/prop-types';
import { isAuditedSuperBlock } from '../../../../../shared/utils/is-audited';
import Block from './block';

jest.mock('../../../../../shared/utils/is-audited', () => ({
  isAuditedSuperBlock: jest.fn().mockReturnValueOnce(true)
}));

const defaultProps = {
  blockDashedName: 'test-block',
  challenges: [
    {
      challenge: {
        block: 'testblock',
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
        isPrivate: false,
        order: 1,
        question: {} as Question,
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
        superBlock: SuperBlocks.UpcomingPython,
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
    }
  ],
  completedChallengeIds: ['testchallengeIds'],
  isExpanded: false,
  t: jest.fn((key: string) => [key]),
  superBlock: SuperBlocks.RespWebDesign,
  toggleBlock: jest.fn()
};

describe('<Block />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('The "Help us translate" badge does not appear on any English blocks', () => {
    render(
      <Provider store={createStore()}>
        <Block {...defaultProps} />
      </Provider>
    );
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does not appear on any i18n blocks when the superblock is audited`, () => {
    (isAuditedSuperBlock as jest.Mock).mockReturnValue(true);
    render(
      <Provider store={createStore()}>
        <Block {...defaultProps} />
      </Provider>
    );
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  it(`The "Help us translate" badge does appear on i18n blocks when the superblock is not audited`, () => {
    (isAuditedSuperBlock as jest.Mock).mockReturnValue(false);
    render(
      <Provider store={createStore()}>
        <Block {...defaultProps} />
      </Provider>
    );
    expect(screen.getByText(/misc.translation-pending/)).toBeInTheDocument();
  });
});
