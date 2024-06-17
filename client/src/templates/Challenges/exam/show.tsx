// Package Utilities
import { graphql, navigate } from 'gatsby';

import React, { Component, RefObject } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Alert, Row, Button } from '@freecodecamp/ui';
import { micromark } from 'micromark';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import PrismFormatted from '../components/prism-formatted';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import Hotkeys from '../components/hotkeys';
import { clearExamResults, startExam, stopExam } from '../../../redux/actions';
import {
  completedChallengesSelector,
  completedSurveysSelector,
  isSignedInSelector,
  examInProgressSelector,
  examResultsSelector
} from '../../../redux/selectors';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  closeModal,
  submitChallenge,
  setUserCompletedExam,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { getGenerateExam } from '../../../utils/ajax';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { createFlashMessage } from '../../../components/Flash/redux';
import {
  ChallengeNode,
  ChallengeMeta,
  CompletedChallenge,
  UserExamQuestion,
  UserExam,
  GeneratedExamResults,
  GeneratedExamQuestion,
  PrerequisiteChallenge,
  SurveyResults,
  Test
} from '../../../redux/prop-types';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { formatSecondsToTime } from '../../../utils/format-seconds';
import ExitExamModal from './components/exit-exam-modal';
import FinishExamModal from './components/finish-exam-modal';
import ExamResults from './components/exam-results';
import MissingPrerequisites from './components/missing-prerequisites';
import FoundationalCSharpSurveyAlert from './components/foundational-c-sharp-survey-alert';

import './exam.css';

// Redux
const mapStateToProps = createSelector(
  completedChallengesSelector,
  completedSurveysSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  examInProgressSelector,
  examResultsSelector,
  (
    completedChallenges: CompletedChallenge[],
    completedSurveys: SurveyResults[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    examInProgress: boolean,
    examResults: GeneratedExamResults | null
  ) => ({
    completedChallenges,
    completedSurveys,
    isChallengeCompleted,
    isSignedIn,
    examInProgress,
    examResults
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      challengeMounted,
      createFlashMessage,
      openExitExamModal: () => openModal('exitExam'),
      closeExitExamModal: () => closeModal('exitExam'),
      openFinishExamModal: () => openModal('finishExam'),
      closeFinishExamModal: () => closeModal('finishExam'),
      startExam,
      stopExam,
      setUserCompletedExam,
      clearExamResults,
      submitChallenge,
      initTests,
      updateChallengeMeta,
      updateSolutionFormValues
    },
    dispatch
  );

// Types
interface ShowExamProps {
  challengeMounted: (arg0: string) => void;
  completedChallenges: CompletedChallenge[];
  completedSurveys: SurveyResults[];
  clearExamResults: () => void;
  createFlashMessage: typeof createFlashMessage;
  data: { challengeNode: ChallengeNode };
  examInProgress: boolean;
  examResults: GeneratedExamResults | null;
  initTests: (arg0: Test[]) => void;
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  openExitExamModal: () => void;
  closeExitExamModal: () => void;
  openFinishExamModal: () => void;
  closeFinishExamModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  startExam: () => void;
  stopExam: () => void;
  submitChallenge: () => void;
  setUserCompletedExam: (arg0: UserExam) => void;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

interface ShowExamState {
  currentQuestionIndex: number;
  examTimeInSeconds: number;
  generatedExamQuestions: GeneratedExamQuestion[];
  userExamQuestions: UserExamQuestion[];
  showResults: boolean;
}

function convertMd(md: string): string {
  return micromark(md);
}

class ShowExam extends Component<ShowExamProps, ShowExamState> {
  static displayName: string;
  private container: RefObject<HTMLElement> | undefined = React.createRef();
  timerInterval!: NodeJS.Timeout;

  constructor(props: ShowExamProps) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      generatedExamQuestions: [],
      examTimeInSeconds: 0,
      userExamQuestions: [],
      showResults: false
    };

    this.runExam = this.runExam.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.finishExam = this.finishExam.bind(this);
    this.exitExam = this.exitExam.bind(this);
    this.cleanUp = this.cleanUp.bind(this);
  }

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

    this.container?.current?.focus();
  }

  componentWillUnmount() {
    this.cleanUp();
    this.props.stopExam();
  }

  stopWindowClose = (event: Event) => {
    event.preventDefault();
    alert(this.props.t('misc.navigation-warning'));
  };

  stopBrowserBack = (event: Event) => {
    event.preventDefault();
    window.history.forward();
    alert(this.props.t('misc.navigation-warning'));
  };

  runExam = async () => {
    // TODO: show loader
    const {
      createFlashMessage,
      data: {
        challengeNode: {
          challenge: { id: challengeId }
        }
      }
    } = this.props;

    const generateExamResponse = await getGenerateExam(challengeId);
    const { response, data } = generateExamResponse;

    if (response.status === 200) {
      const { generatedExam = [] } = data;
      const emptyUserExamQuestions = generatedExam.map(q => {
        return {
          id: q.id,
          question: q.question,
          answer: { id: null, answer: null }
        };
      }) as UserExamQuestion[];

      this.setState(
        {
          generatedExamQuestions: generatedExam,
          userExamQuestions: emptyUserExamQuestions
        },
        () => {
          this.timerInterval = setInterval(() => {
            this.setState({
              examTimeInSeconds: this.state.examTimeInSeconds + 1
            });
          }, 1000);

          this.props.startExam();

          window.addEventListener('beforeunload', this.stopWindowClose);
          window.addEventListener('unload', this.stopWindowClose);
          window.addEventListener('popstate', this.stopBrowserBack);
        }
      );
    } else {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.GenerateExamError
      });
    }
  };

  selectAnswer = (index: number, id: string, answer: string): void => {
    const newUserExamQuestions = Array.from(this.state.userExamQuestions);
    newUserExamQuestions[index].answer.id = id;
    newUserExamQuestions[index].answer.answer = answer;
    this.setState({
      userExamQuestions: newUserExamQuestions
    });
  };

  goToPreviousQuestion = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex - 1
    });
  };

  goToNextQuestion = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });
  };

  cleanUp = () => {
    clearInterval(this.timerInterval);
    this.setState({
      examTimeInSeconds: 0,
      currentQuestionIndex: 0
    });

    window.removeEventListener('beforeunload', this.stopWindowClose);
    window.removeEventListener('unload', this.stopWindowClose);
    window.removeEventListener('popstate', this.stopBrowserBack);

    this.props.clearExamResults();
    this.props.closeExitExamModal();
    this.props.closeFinishExamModal();
  };

  finishExam = () => {
    // TODO: show loader
    this.cleanUp();

    const { setUserCompletedExam, submitChallenge } = this.props;
    const { userExamQuestions, examTimeInSeconds } = this.state;

    setUserCompletedExam({ userExamQuestions, examTimeInSeconds });
    submitChallenge();
  };

  exitExam = () => {
    this.cleanUp();

    const {
      data: {
        challengeNode: {
          challenge: {
            fields: { blockHashSlug }
          }
        }
      },
      stopExam
    } = this.props;
    stopExam();
    void navigate(blockHashSlug);
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            block,
            dashedName,
            description,
            fields: { blockName },
            instructions,
            prerequisites,
            superBlock,
            title,
            translationPending
          }
        }
      },
      examInProgress,
      examResults,
      completedChallenges,
      completedSurveys,
      isChallengeCompleted,
      openExitExamModal,
      openFinishExamModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t
    } = this.props;

    const {
      examTimeInSeconds,
      currentQuestionIndex,
      generatedExamQuestions,
      userExamQuestions
    } = this.state;

    let missingPrerequisites: PrerequisiteChallenge[] = [];
    if (prerequisites) {
      missingPrerequisites = prerequisites?.filter(
        prerequisite =>
          !completedChallenges.find(({ id }) => prerequisite.id === id)
      );
    }

    const surveyCompleted = completedSurveys.some(
      s => s.title === 'Foundational C# with Microsoft Survey'
    );
    const prerequisitesComplete = missingPrerequisites.length === 0;
    const qualifiedForExam = prerequisitesComplete && surveyCompleted;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )}: ${title}`;
    const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;

    // TODO: If already taken exam, show different messages

    return examInProgress ? (
      <Container>
        <Row>
          <Spacer size='medium' />
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={12}>
            {examResults ? (
              <ExamResults
                dashedName={dashedName}
                title={title}
                examResults={examResults}
                exitExam={this.exitExam}
              />
            ) : (
              <div className='exam-wrapper'>
                <div className='exam-header'>
                  <div data-playwright-test-label='exam-show-title'>
                    {title}
                  </div>
                  <span>|</span>
                  <div data-playwright-test-label='exam-show-question-time'>
                    {t('learn.exam.time', {
                      t: formatSecondsToTime(examTimeInSeconds)
                    })}
                  </div>
                  <span>|</span>
                  <div>
                    {t('learn.exam.questions', {
                      n: currentQuestionIndex + 1,
                      t: generatedExamQuestions.length
                    })}
                  </div>
                </div>
                <hr />
                <Spacer size='medium' />

                <div className='exam-questions'>
                  <PrismFormatted
                    text={convertMd(
                      generatedExamQuestions[currentQuestionIndex].question
                    )}
                  />

                  <Spacer size='large' />
                  <div className='exam-answers'>
                    {generatedExamQuestions[currentQuestionIndex].answers.map(
                      ({ answer, id }) => (
                        <label className='exam-answer-label' key={id}>
                          <input
                            checked={
                              userExamQuestions[currentQuestionIndex].answer
                                .id === id
                            }
                            className='sr-only'
                            name={id}
                            onChange={() =>
                              this.selectAnswer(
                                currentQuestionIndex,
                                id,
                                answer
                              )
                            }
                            type='radio'
                            value={id}
                          />{' '}
                          <span className='exam-answer-input-visible'>
                            {userExamQuestions[currentQuestionIndex].answer
                              .id === id ? (
                              <span className='exam-answer-input-selected' />
                            ) : null}
                          </span>
                          <PrismFormatted text={convertMd(answer)} />
                        </label>
                      )
                    )}
                  </div>
                </div>
                <Spacer size='large' />

                <div className='exam-buttons'>
                  <Button
                    block={true}
                    className='exam-button'
                    disabled={currentQuestionIndex <= 0}
                    variant='primary'
                    onClick={this.goToPreviousQuestion}
                  >
                    {t('buttons.previous-question')}
                  </Button>

                  {currentQuestionIndex ===
                  generatedExamQuestions.length - 1 ? (
                    <Button
                      block={true}
                      disabled={
                        !userExamQuestions[currentQuestionIndex].answer.id
                      }
                      className='exam-button'
                      variant='primary'
                      onClick={openFinishExamModal}
                    >
                      {t('buttons.finish-exam')}
                    </Button>
                  ) : (
                    <Button
                      block={true}
                      disabled={
                        !userExamQuestions[currentQuestionIndex].answer.id
                      }
                      className='exam-button'
                      variant='primary'
                      onClick={this.goToNextQuestion}
                    >
                      {t('buttons.next-question')}
                    </Button>
                  )}
                </div>

                <Spacer size='medium' />

                <div className='exam-buttons'>
                  <Button
                    block={true}
                    className='exam-button'
                    variant='primary'
                    onClick={openExitExamModal}
                  >
                    {t('buttons.exit-exam')}
                  </Button>
                </div>
              </div>
            )}
          </Col>
          <ExitExamModal exitExam={this.exitExam} />
          <FinishExamModal finishExam={this.finishExam} />
        </Row>
      </Container>
    ) : (
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
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <Spacer size='medium' />

                {qualifiedForExam ? (
                  <Alert variant='info'>
                    <p>{t('learn.exam.qualified')}</p>
                  </Alert>
                ) : (
                  <>
                    {!prerequisitesComplete ? (
                      <MissingPrerequisites
                        missingPrerequisites={missingPrerequisites}
                      />
                    ) : (
                      <FoundationalCSharpSurveyAlert />
                    )}
                  </>
                )}
                <PrismFormatted text={description} />
                <Spacer size='medium' />
                <PrismFormatted text={instructions} />

                <Button
                  block={true}
                  variant='primary'
                  disabled={!qualifiedForExam}
                  // `this.runExam` being an async callback is acceptable
                  //eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={this.runExam}
                >
                  {t('buttons.click-start-exam')}
                </Button>
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowExam.displayName = 'ShowExam';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowExam));

// GraphQL
export const query = graphql`
  query ExamChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        block
        challengeType
        dashedName
        description
        fields {
          blockHashSlug
          blockName
          tests {
            text
            testString
          }
        }
        helpCategory
        id
        instructions
        prerequisites {
          id
          title
        }
        superBlock
        title
        translationPending
      }
    }
  }
`;
