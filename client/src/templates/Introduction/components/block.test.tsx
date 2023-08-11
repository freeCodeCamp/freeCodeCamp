import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  SuperBlocks,
  getAuditedSuperBlocks
} from '../../../../../config/superblocks';
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
import { Languages } from '../../../../../config/i18n';
import * as getEnvData from '../../../utils/get-envdata';
import Block from './block';
const defaultProps = {
  blockDashedName: 'test-block',
  challenges: [
    {
      challenge: {
        block: 'testblock',
        certification: 'mockCertification',
        challengeOrder: 1,
        challengeType: 2,
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
        removeComments: false,
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
        time: 'mockTime',
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
  toggleBlock: jest.fn()
};

const mockedEnvData = {
  curriculumLocale: 'english',
  showUpcomingChanges: false,
  showNewCurriculum: false,
  homeLocation: '',
  apiLocation: '',
  forumLocation: '',
  newsLocation: '',
  radioLocation: '',
  clientLocale: 'english',
  showLocaleDropdownMenu: false,
  deploymentEnv: '',
  environment: '',
  algoliaAppId: '',
  algoliaAPIKey: '',
  stripePublicKey: null,
  paypalClientId: null,
  patreonClientId: null,
  sentryClientDSN: null,
  growthbookUri: null
};

describe('<Block />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const langaugesArr = Object.values(Languages);
  const superBlocksArr = Object.values(SuperBlocks);
  it('The "Help us translate" badge does not appear on any English blocks', () => {
    jest.spyOn(getEnvData, 'getEnvData').mockReturnValue({ ...mockedEnvData });
    render(
      <Provider store={createStore()}>
        <Block {...defaultProps} superBlock={SuperBlocks.RespWebDesign} />
      </Provider>
    );
    expect(
      screen.queryByText(/misc.translation-pending/)
    ).not.toBeInTheDocument();
  });

  langaugesArr.forEach(language => {
    superBlocksArr.forEach(superBlock => {
      if (
        getAuditedSuperBlocks({
          language,
          showNewCurriculum: mockedEnvData.showNewCurriculum.toString(),
          showUpcomingChanges: mockedEnvData.showUpcomingChanges.toString()
        }).includes(superBlock)
      ) {
        it(`Help us translate badge does not appear on i18n blocks for language: ${language} and superBlock: ${superBlock} when the superblock is audited`, () => {
          jest
            .spyOn(getEnvData, 'getEnvData')
            .mockReturnValue({ ...mockedEnvData, curriculumLocale: language });
          render(
            <Provider store={createStore()}>
              <Block {...defaultProps} superBlock={superBlock} />
            </Provider>
          );
          expect(
            screen.queryByText(/misc.translation-pending/)
          ).not.toBeInTheDocument();
        });
      }
    });
  });

  langaugesArr.forEach(language => {
    superBlocksArr.forEach(superBlock => {
      if (
        !getAuditedSuperBlocks({
          language,
          showNewCurriculum: mockedEnvData.showNewCurriculum.toString(),
          showUpcomingChanges: mockedEnvData.showUpcomingChanges.toString()
        }).includes(superBlock)
      ) {
        it(`Help us translate badge does appear on i18n blocks for language: ${language} and superBlock: ${superBlock} when the superblock is not audited`, () => {
          jest
            .spyOn(getEnvData, 'getEnvData')
            .mockReturnValue({ ...mockedEnvData, curriculumLocale: language });
          render(
            <Provider store={createStore()}>
              <Block {...defaultProps} superBlock={superBlock} />
            </Provider>
          );
          expect(
            screen.getByText(/misc.translation-pending/)
          ).toBeInTheDocument();
        });
      }
    });
  });
});
