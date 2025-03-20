// Package Utilities
import { graphql } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';

// Local Utilities
import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import PrismFormatted from '../components/prism-formatted';
import { challengeTypes } from '../../../../../shared/config/challenge-types';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import Hotkeys from '../components/hotkeys';
import { updateUserToken } from '../../../redux/actions';
import {
  completedChallengesSelector,
  partiallyCompletedChallengesSelector,
  isSignedInSelector,
  userTokenSelector
} from '../../../redux/selectors';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { createFlashMessage } from '../../../components/Flash/redux';
import {
  ChallengeNode,
  ChallengeMeta,
  CompletedChallenge,
  Test
} from '../../../redux/prop-types';
import ProjectToolPanel from '../projects/tool-panel';
import { getChallengePaths } from '../utils/challenge-paths';
import SolutionForm from '../projects/solution-form';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';
import { postUserToken } from '../../../utils/ajax';
import { CodeAllyButton } from '../../../components/growth-book/codeally-button';

import RdbGitpodContinueAlert from './rdb-gitpod-continue-alert';
import RdbGitpodInstructions from './rdb-gitpod-instructions';
import RdbGitpodLogoutAlert from './rdb-gitpod-logout-alert';
import RdbLocalInstructions from './rdb-local-instructions';
import RdbStep1Instructions from './rdb-step-1-instructions';
import RdbStep2Instructions from './rdb-step-2-instructions';

import './codeally.css';

// Redux
const mapStateToProps = createSelector(
  completedChallengesSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  partiallyCompletedChallengesSelector,
  userTokenSelector,
  (
    completedChallenges: CompletedChallenge[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    partiallyCompletedChallenges: CompletedChallenge[],
    userToken: string | null
  ) => ({
    completedChallenges,
    isChallengeCompleted,
    isSignedIn,
    partiallyCompletedChallenges,
    userToken
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      challengeMounted,
      createFlashMessage,
      openCompletionModal: () => openModal('completion'),
      initTests,
      updateUserToken,
      updateChallengeMeta,
      updateSolutionFormValues
    },
    dispatch
  );

// Types
interface ShowCodeAllyProps {
  challengeMounted: (arg0: string) => void;
  completedChallenges: CompletedChallenge[];
  createFlashMessage: typeof createFlashMessage;
  data: { challengeNode: ChallengeNode };
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  partiallyCompletedChallenges: CompletedChallenge[];
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateUserToken: (arg0: string) => void;
  updateSolutionFormValues: () => void;
  userToken: string | null;
}

function ShowCodeAlly(props: ShowCodeAllyProps) {
  const container = useRef<HTMLElement>(null);

  const {
    completedChallenges,
    data: {
      challengeNode: {
        challenge: {
          block,
          challengeType,
          description,
          id: challengeId,
          instructions,
          notes,
          superBlock,
          title,
          translationPending,
          url
        }
      }
    },
    isChallengeCompleted,
    isSignedIn,
    partiallyCompletedChallenges,
    t,
    updateSolutionFormValues
  } = props;

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )}: ${title}`;
  const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;

  const isPartiallyCompleted = partiallyCompletedChallenges.some(
    challenge => challenge.id === challengeId
  );

  const isCompleted = completedChallenges.some(
    challenge => challenge.id === challengeId
  );

  useEffect(() => {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: {
            fields: { tests },
            challengeType,
            helpCategory,
            title
          }
        }
      },
      pageContext: { challengeMeta },
      initTests,
      updateChallengeMeta
    } = props;
    initTests(tests);
    const challengePaths = getChallengePaths({
      currentCurriculumPaths: challengeMeta
    });
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory,
      ...challengePaths
    });
    challengeMounted(challengeMeta.id);
    container.current?.focus();
    // This effect should be run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openGitpod = (userToken?: string) => {
    const {
      data: {
        challengeNode: {
          challenge: { url }
        }
      }
    } = props;

    const repoUrl = `https://github.com/${url}`;
    const coderoadTutorial = encodeURIComponent(
      `https://raw.githubusercontent.com/${url}/main/tutorial.json`
    );
    const gitpodDomain = `https://gitpod.io/?autostart=true#CODEROAD_TUTORIAL_URL=${coderoadTutorial},CODEROAD_DISABLE_RUN_ON_SAVE=true`;
    const tokenEnv = userToken ? `,CODEROAD_WEBHOOK_TOKEN=${userToken}` : '';
    const gitpodUrl = `${gitpodDomain}${tokenEnv}/${repoUrl}`;

    window.open(gitpodUrl, '_blank');
  };

  const startCourse = async () => {
    const { isSignedIn, userToken, updateUserToken } = props;

    if (!isSignedIn) {
      openGitpod();
    } else if (!userToken) {
      const createUserTokenResponse = await postUserToken();
      const { data = { userToken: null } } = createUserTokenResponse;

      if (data?.userToken) {
        updateUserToken(data.userToken);
        openGitpod(data.userToken);
      } else {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.StartProjectErr
        });
      }
    } else {
      openGitpod(userToken);
    }
  };

  const handleSubmit = ({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }) => {
    const {
      completedChallenges,
      createFlashMessage,
      data: {
        challengeNode: {
          challenge: { id: challengeId }
        }
      },
      openCompletionModal,
      partiallyCompletedChallenges
    } = props;

    const isPartiallyCompleted = partiallyCompletedChallenges.some(
      challenge => challenge.id === challengeId
    );

    const isCompleted = completedChallenges.some(
      challenge => challenge.id === challengeId
    );

    if (!isPartiallyCompleted && !isCompleted) {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.CompleteProjectFirst
      });
    } else if (showCompletionModal) {
      openCompletionModal();
    }
  };

  const gitpodDeprecated = useFeature('gitpod-deprecated').on;

  return (
    <Hotkeys containerRef={container}>
      <LearnLayout>
        <Helmet title={windowTitle} />
        <Container>
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='m' />
              {superBlock === SuperBlocks.RelationalDb && <CodeAllyDown />}
              <Spacer size='m' />
              <ChallengeTitle
                isCompleted={isChallengeCompleted}
                translationPending={translationPending}
              >
                {title}
              </ChallengeTitle>
              <Spacer size='m' />
              <PrismFormatted text={description} />
              <Spacer size='m' />

              {gitpodDeprecated ? (
                <>
                  <RdbLocalInstructions course={title} url={url} />
                  <Spacer size='m' />
                  {isSignedIn &&
                    challengeType === challengeTypes.codeAllyCert && (
                      <>
                        <div className='ca-description'>
                          {t('learn.complete-both-steps')}
                        </div>
                        <hr />
                        <Spacer size='m' />
                        <RdbStep1Instructions
                          instructions={instructions}
                          isCompleted={isPartiallyCompleted || isCompleted}
                        />
                        <hr />
                        <Spacer size='m' />
                        <RdbStep2Instructions
                          isCompleted={isCompleted}
                          notes={notes}
                        />
                        <Spacer size='m' />
                        <SolutionForm
                          challengeType={challengeType}
                          description={description}
                          onSubmit={handleSubmit}
                          updateSolutionForm={updateSolutionFormValues}
                        />
                      </>
                    )}
                </>
              ) : (
                <>
                  <RdbGitpodInstructions />
                  <Spacer size='m' />
                  {isSignedIn &&
                  challengeType === challengeTypes.codeAllyCert ? (
                    <>
                      <div className='ca-description'>
                        {t('learn.complete-both-steps')}
                      </div>
                      <hr />
                      <Spacer size='m' />
                      <RdbStep1Instructions
                        instructions={instructions}
                        isCompleted={isPartiallyCompleted || isCompleted}
                      />
                      <Spacer size='m' />
                      <RdbGitpodContinueAlert course={title} />
                      {isSignedIn && <RdbGitpodLogoutAlert course={title} />}
                      <CodeAllyButton
                        challengeType={challengeType}
                        //eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onClick={startCourse}
                      />
                      <hr />
                      <Spacer size='m' />
                      <RdbStep2Instructions
                        isCompleted={isCompleted}
                        notes={notes}
                      />
                      <Spacer size='m' />
                      <SolutionForm
                        challengeType={challengeType}
                        description={description}
                        onSubmit={handleSubmit}
                        updateSolutionForm={updateSolutionFormValues}
                      />
                    </>
                  ) : (
                    <>
                      <RdbGitpodContinueAlert course={title} />
                      {isSignedIn && <RdbGitpodLogoutAlert course={title} />}
                      <CodeAllyButton
                        challengeType={challengeType}
                        //eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onClick={startCourse}
                      />
                    </>
                  )}
                  <Spacer size='xxs' />
                </>
              )}

              <ProjectToolPanel />
              <br />
              <Spacer size='m' />
            </Col>
            <CompletionModal />
            <HelpModal challengeTitle={title} challengeBlock={block} />
          </Row>
        </Container>
      </LearnLayout>
    </Hotkeys>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowCodeAlly));

// GraphQL
export const query = graphql`
  query CodeAllyChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        block
        fields {
          tests {
            text
            testString
          }
        }
        challengeType
        description
        helpCategory
        id
        instructions
        notes
        superBlock
        title
        translationPending
        url
      }
    }
  }
`;
