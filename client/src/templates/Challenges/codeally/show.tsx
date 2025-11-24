// Package Utilities
import { graphql } from 'gatsby';
import React, { Fragment, useEffect, useRef } from 'react';
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
import { challengeTypes } from '../../../../../shared-dist/config/challenge-types';
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
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';
import { postUserToken } from '../../../utils/ajax';
import RdbStep1Instructions from './rdb-step-1-instructions';
import RdbStep2Instructions from './rdb-step-2-instructions';
import { LocalInstructions } from './local-instructions';
import { OnaInstructions } from './ona-instructions';

import './codeally.css';
import { CodespacesInstructions } from './codespaces-instructions';

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

function ShowCodeAlly({
  completedChallenges,
  data,
  isChallengeCompleted,
  isSignedIn,
  partiallyCompletedChallenges,
  t,
  updateSolutionFormValues,
  userToken,
  updateUserToken,
  createFlashMessage,
  challengeMounted,
  initTests,
  pageContext: { challengeMeta },
  updateChallengeMeta,
  openCompletionModal
}: ShowCodeAllyProps) {
  const container = useRef<HTMLElement>(null);

  const {
    challengeNode: {
      challenge: {
        block,
        challengeType,
        tests,
        description,
        helpCategory,
        id: challengeId,
        instructions,
        notes,
        superBlock,
        title,
        translationPending,
        url
      }
    }
  } = data;

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

  const handleSubmit = ({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }) => {
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

  const rdbLocalInstructions = useFeature('rdb-local-instructions');
  const rdbCodespacesInstructions = useFeature('rdb-codespaces-instructions');
  const rdbOnaInstructions = useFeature('rdb-ona-instructions');

  const coderoadTutorial = `https://raw.githubusercontent.com/${url}/main/tutorial.json`;

  async function generateUserToken() {
    const createUserTokenResponse = await postUserToken();
    const { data = { userToken: null } } = createUserTokenResponse;

    if (data?.userToken) {
      updateUserToken(data.userToken);
      createFlashMessage({
        type: 'success',
        message: FlashMessages.UserTokenGenerated
      });
    } else {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.UserTokenGenerateError
      });
    }
  }

  function copyUserToken() {
    navigator.clipboard.writeText(userToken ?? '').then(
      () => {
        createFlashMessage({
          type: 'success',
          message: FlashMessages.UserTokenCopied
        });
      },
      () => {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.UserTokenCopyError
        });
      }
    );
  }

  function copyUrl() {
    navigator.clipboard.writeText(coderoadTutorial ?? '').then(
      () => {
        createFlashMessage({
          type: 'success',
          message: FlashMessages.CourseUrlCopied
        });
      },
      () => {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.CourseUrlCopyError
        });
      }
    );
  }

  const setups = [
    {
      name: t('learn.codespaces.summary'),
      component: CodespacesInstructions,
      on: rdbCodespacesInstructions.on
    },
    {
      name: t('learn.local.summary'),
      component: LocalInstructions,
      on: rdbLocalInstructions.on
    },
    {
      name: t('learn.ona.summary'),
      component: OnaInstructions,
      on: rdbOnaInstructions.on
    }
  ];

  const setupsToShow = setups.filter(setup => {
    return setup.on;
  });

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

              {setupsToShow.map(({ name, component: SetupComponent }, i) => (
                <Fragment key={name}>
                  <details
                    open={i === 0}
                    style={{ border: '1px solid #ccc', padding: '16px' }}
                  >
                    <summary>{name}</summary>
                    <Spacer size='s' />
                    <SetupComponent
                      {...{
                        challengeType,
                        copyUrl,
                        copyUserToken,
                        generateUserToken,
                        isSignedIn,
                        title,
                        userToken
                      }}
                    />
                  </details>
                  <Spacer size='s' />
                </Fragment>
              ))}

              <Spacer size='m' />
              {isSignedIn && challengeType === challengeTypes.codeAllyCert && (
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

              <ProjectToolPanel />
              <br />
              <Spacer size='m' />
            </Col>
            <CompletionModal />
            <HelpModal
              challengeTitle={title}
              challengeBlock={block}
              superBlock={superBlock}
            />
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
        challengeType
        description
        helpCategory
        id
        instructions
        notes
        superBlock
        tests {
          text
          testString
        }
        title
        translationPending
        url
      }
    }
  }
`;
