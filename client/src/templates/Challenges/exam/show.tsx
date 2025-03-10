// Package Utilities
import { graphql, navigate } from 'gatsby';

import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Alert, Row, Button, Spacer } from '@freecodecamp/ui';
import { micromark } from 'micromark';

// Local Utilities
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
import { getChallengePaths } from '../utils/challenge-paths';
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

function convertMd(md: string): string {
  return micromark(md);
}

function ShowExam(props: ShowExamProps) {
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
    t
  } = props;

  let timerInterval: NodeJS.Timeout;

  const container = useRef<HTMLElement>(null);

  const [examTimeInSeconds, setExamTimeInSeconds] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [generatedExamQuestions, setGeneratedExamQuestions] = useState<
    GeneratedExamQuestion[]
  >([]);
  const [userExamQuestions, setUserExamQuestions] = useState<
    UserExamQuestion[]
  >([]);

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

    return () => {
      cleanUp();
      props.stopExam();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Normally you would clear listeners in a useEffect cleanup function, but we
  // need to set them in the runExam function (rather than in a useEffect). The
  // refs make them stable across renders and thus removable.
  const stopWindowCloseRef = useRef((event: Event) => {
    event.preventDefault();
    alert(props.t('misc.navigation-warning'));
  });

  const stopBrowserBackRef = useRef((event: Event) => {
    event.preventDefault();
    window.history.forward();
    // TODO: useTranslation
    alert(props.t('misc.navigation-warning'));
  });

  const runExam = async () => {
    // TODO: show loader
    const {
      createFlashMessage,
      data: {
        challengeNode: {
          challenge: { id: challengeId }
        }
      }
    } = props;

    const generateExamResponse = await getGenerateExam(challengeId);
    const { response, data } = generateExamResponse;

    if (response.status === 200) {
      const { generatedExam = [] } = data as {
        generatedExam: GeneratedExamQuestion[];
      };
      const emptyUserExamQuestions = generatedExam.map(q => {
        return {
          id: q.id,
          question: q.question,
          answer: { id: null, answer: null }
        };
      }) as UserExamQuestion[];

      setGeneratedExamQuestions(generatedExam);
      setUserExamQuestions(emptyUserExamQuestions);

      timerInterval = setInterval(() => {
        setExamTimeInSeconds(t => t + 1);
      }, 1000);

      props.startExam();

      window.addEventListener('beforeunload', stopWindowCloseRef.current);
      window.addEventListener('popstate', stopBrowserBackRef.current);
    } else {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.GenerateExamError
      });
    }
  };

  const selectAnswer = (index: number, id: string, answer: string): void => {
    const newUserExamQuestions = Array.from(userExamQuestions);
    newUserExamQuestions[index].answer.id = id;
    newUserExamQuestions[index].answer.answer = answer;
    setUserExamQuestions(newUserExamQuestions);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const cleanUp = () => {
    clearInterval(timerInterval);

    setExamTimeInSeconds(0);
    setCurrentQuestionIndex(0);

    window.removeEventListener('beforeunload', stopWindowCloseRef.current);
    window.removeEventListener('popstate', stopBrowserBackRef.current);

    props.clearExamResults();
    props.closeExitExamModal();
    props.closeFinishExamModal();
  };

  const finishExam = () => {
    // TODO: show loader
    cleanUp();

    const { setUserCompletedExam, submitChallenge } = props;

    setUserCompletedExam({ userExamQuestions, examTimeInSeconds });
    submitChallenge();
  };

  const exitExam = () => {
    cleanUp();

    const {
      data: {
        challengeNode: {
          challenge: {
            fields: { blockHashSlug }
          }
        }
      },
      stopExam
    } = props;
    stopExam();
    void navigate(blockHashSlug);
  };

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
        <Spacer size='m' />
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={12}>
          {examResults ? (
            <ExamResults
              dashedName={dashedName}
              title={title}
              examResults={examResults}
              exitExam={exitExam}
            />
          ) : (
            <div className='exam-wrapper'>
              <div className='exam-header'>
                <div data-playwright-test-label='exam-show-title'>{title}</div>
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
              <Spacer size='m' />

              <div className='exam-questions'>
                <PrismFormatted
                  text={convertMd(
                    generatedExamQuestions[currentQuestionIndex].question
                  )}
                />

                <Spacer size='l' />
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
                            selectAnswer(currentQuestionIndex, id, answer)
                          }
                          type='radio'
                          value={id}
                        />{' '}
                        <span className='exam-answer-input-visible'>
                          {userExamQuestions[currentQuestionIndex].answer.id ===
                          id ? (
                            <span className='exam-answer-input-selected' />
                          ) : null}
                        </span>
                        <PrismFormatted text={convertMd(answer)} />
                      </label>
                    )
                  )}
                </div>
              </div>
              <Spacer size='l' />

              <div className='exam-buttons'>
                <Button
                  block={true}
                  className='exam-button'
                  disabled={currentQuestionIndex <= 0}
                  variant='primary'
                  onClick={goToPreviousQuestion}
                >
                  {t('buttons.previous-question')}
                </Button>

                {currentQuestionIndex === generatedExamQuestions.length - 1 ? (
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
                    onClick={goToNextQuestion}
                  >
                    {t('buttons.next-question')}
                  </Button>
                )}
              </div>

              <Spacer size='m' />

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
        <ExitExamModal exitExam={exitExam} />
        <FinishExamModal finishExam={finishExam} />
      </Row>
    </Container>
  ) : (
    <Hotkeys containerRef={container}>
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
              <Spacer size='m' />

              {qualifiedForExam ? (
                <Alert variant='info'>
                  <p>{t('learn.exam.qualified')}</p>
                </Alert>
              ) : !prerequisitesComplete ? (
                <MissingPrerequisites
                  missingPrerequisites={missingPrerequisites}
                />
              ) : (
                <FoundationalCSharpSurveyAlert />
              )}
              <PrismFormatted text={description} />
              <Spacer size='m' />
              <PrismFormatted text={instructions} />

              <Button
                block={true}
                variant='primary'
                disabled={!qualifiedForExam}
                // `runExam` being an async callback is acceptable
                //eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={runExam}
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

ShowExam.displayName = 'ShowExam';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowExam));

// GraphQL
export const query = graphql`
  query ExamChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
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
