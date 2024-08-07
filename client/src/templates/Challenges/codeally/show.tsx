// Package Utilities
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Alert } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import ChallengeHeading from '../components/challenge-heading';
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
import SolutionForm from '../projects/solution-form';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';
import { postUserToken } from '../../../utils/ajax';

import './codeally.css';
import { CodeAllyButton } from '../../../components/growth-book/codeally-button';

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

class ShowCodeAlly extends Component<ShowCodeAllyProps> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  componentDidMount(): void {
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
    } = this.props;
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this.container.current?.focus();
  }

  handleSubmit = ({
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
    } = this.props;

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

  openGitpod = (userToken?: string) => {
    const {
      data: {
        challengeNode: {
          challenge: { url }
        }
      }
    } = this.props;

    const repoUrl = `https://github.com/${url}`;
    const coderoadTutorial = encodeURIComponent(
      `https://raw.githubusercontent.com/${url}/main/tutorial.json`
    );
    const gitpodDomain = `https://gitpod.io/?autostart=true#CODEROAD_TUTORIAL_URL=${coderoadTutorial},CODEROAD_DISABLE_RUN_ON_SAVE=true`;
    const tokenEnv = userToken ? `,CODEROAD_WEBHOOK_TOKEN=${userToken}` : '';
    const gitpodUrl = `${gitpodDomain}${tokenEnv}/${repoUrl}`;

    window.open(gitpodUrl, '_blank');
  };

  startCourse = async () => {
    const { isSignedIn, userToken, updateUserToken } = this.props;

    if (!isSignedIn) {
      this.openGitpod();
    } else if (!userToken) {
      const createUserTokenResponse = await postUserToken();
      const { data = { userToken: null } } = createUserTokenResponse;

      if (data?.userToken) {
        updateUserToken(data.userToken);
        this.openGitpod(data.userToken);
      } else {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.StartProjectErr
        });
      }
    } else {
      this.openGitpod(userToken);
    }
  };

  render() {
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
            translationPending
          }
        }
      },
      isChallengeCompleted,
      isSignedIn,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      partiallyCompletedChallenges,
      t,
      updateSolutionFormValues
    } = this.props;

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

    return (
      <Hotkeys
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet title={windowTitle} />
          <Container>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer size='medium' />
                {superBlock === SuperBlocks.RelationalDb && <CodeAllyDown />}
                <Spacer size='medium' />
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <Spacer size='medium' />
                <PrismFormatted text={description} />
                <Spacer size='medium' />
                <div className='ca-description'>
                  <p>{t('learn.gitpod.intro')}</p>

                  <ol>
                    <li>
                      <Trans i18nKey='learn.gitpod.step-1'>
                        <a
                          href='https://github.com/join'
                          rel='noopener noreferrer'
                          target='_blank'
                          title={t('learn.source-code-link')}
                        >
                          placeholder
                        </a>
                      </Trans>
                    </li>

                    <li>{t('learn.gitpod.step-2')}</li>
                    <li>{t('learn.gitpod.step-3')}</li>
                    <li>
                      {t('learn.gitpod.step-4')}
                      <ul>
                        <li>{t('learn.gitpod.step-5')}</li>
                        <li>{t('learn.gitpod.step-6')}</li>
                        <li>{t('learn.gitpod.step-7')}</li>
                        <li>{t('learn.gitpod.step-8')}</li>
                      </ul>
                    </li>

                    <li>{t('learn.gitpod.step-9')}</li>
                  </ol>
                </div>

                <Spacer size='medium' />
                {isSignedIn &&
                  challengeType === challengeTypes.codeAllyCert && (
                    <>
                      <div className='ca-description'>
                        {t('learn.complete-both-steps')}
                      </div>
                      <hr />
                      <Spacer size='medium' />
                      <ChallengeHeading
                        heading={t('learn.step-1')}
                        isCompleted={isPartiallyCompleted || isCompleted}
                      />
                      <Spacer size='medium' />
                      <div className='ca-description'>
                        {t('learn.runs-in-vm')}
                      </div>
                      <Spacer size='medium' />
                      <PrismFormatted text={instructions} />
                      <Spacer size='medium' />
                    </>
                  )}
                <Alert variant='info'>
                  <p>
                    <Trans
                      values={{ course: title }}
                      i18nKey='learn.gitpod.continue-project'
                    >
                      <a
                        href='https://gitpod.io/workspaces'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        placeholder
                      </a>
                    </Trans>
                  </p>
                  <Trans i18nKey='learn.gitpod.learn-more'>
                    <a
                      href='https://forum.freecodecamp.org/t/using-gitpod-in-the-curriculum/668669'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      placeholder
                    </a>
                  </Trans>
                </Alert>
                {isSignedIn && (
                  <Alert variant='danger'>
                    {t('learn.gitpod.logout-warning', { course: title })}
                  </Alert>
                )}
                <CodeAllyButton
                  text={
                    challengeType === challengeTypes.codeAllyCert
                      ? t('buttons.click-start-project')
                      : t('buttons.click-start-course')
                  }
                  // `this.startCourse` being an async callback is acceptable
                  //eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={this.startCourse}
                />
                {isSignedIn &&
                  challengeType === challengeTypes.codeAllyCert && (
                    <>
                      <hr />
                      <Spacer size='medium' />
                      <ChallengeHeading
                        heading={t('learn.step-2')}
                        isCompleted={isCompleted}
                      />
                      <Spacer size='medium' />
                      <div className='ca-description'>
                        {t('learn.submit-public-url')}
                      </div>
                      <Spacer size='medium' />
                      <PrismFormatted text={notes} />
                      <Spacer size='medium' />
                      <SolutionForm
                        challengeType={challengeType}
                        description={description}
                        onSubmit={this.handleSubmit}
                        updateSolutionForm={updateSolutionFormValues}
                      />
                    </>
                  )}
                <Spacer size='xxSmall' />
                <ProjectToolPanel />
                <br />
                <Spacer size='medium' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={block} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowCodeAlly.displayName = 'ShowCodeAlly';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowCodeAlly));

// GraphQL
export const query = graphql`
  query CodeAllyChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
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
