import { graphql, navigate } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { useLocation } from '@reach/router';
import {
  Container,
  Col,
  Row,
  Button,
  Quiz,
  useQuiz,
  Spacer,
  Callout
} from '@freecodecamp/ui';

// Local Utilities
import { shuffleArray } from '../../../../../shared/utils/shuffle-array';
import LearnLayout from '../../../components/layouts/learn';
import {
  ChallengeNode,
  ChallengeMeta,
  Test,
  User
} from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  closeModal,
  updateSolutionFormValues,
  initTests,
  submitQuizAttempt
} from '../redux/actions';
import { isSignedInSelector, userSelector } from '../../../redux/selectors';
import { Link } from '../../../components/helpers';
import superBlockStructure from '../../../../../curriculum/superblock-structure/full-stack.json';
import {
  isChallengeCompletedSelector,
  isQuizAttemptSubmittingSelector
} from '../redux/selectors';
import PrismFormatted from '../components/prism-formatted';
import { usePageLeave } from '../hooks';
import ExitQuizModal from './exit-quiz-modal';
import FinishQuizModal from './finish-quiz-modal';

import './show.css';

const COOL_DOWN_PERIOD_IN_MS = 1000 * 60 * 60; // one hour

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  isSignedInSelector,
  userSelector,
  isQuizAttemptSubmittingSelector,
  (
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    user: User,
    isQuizAttemptSubmitting: boolean
  ) => ({
    isChallengeCompleted,
    isSignedIn,
    user,
    isQuizAttemptSubmitting
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      initTests,
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      submitQuizAttempt,
      openCompletionModal: () => openModal('completion'),
      openExitQuizModal: () => openModal('exitQuiz'),
      closeExitQuizModal: () => closeModal('exitQuiz'),
      openFinishQuizModal: () => openModal('finishQuiz'),
      closeFinishQuizModal: () => closeModal('finishQuiz')
    },
    dispatch
  );

// Types
interface ShowQuizProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  isSignedIn: boolean;
  user: User;
  isQuizAttemptSubmitting: boolean;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
  submitQuizAttempt: ({
    challengeId,
    quizId
  }: {
    challengeId: string;
    quizId: string;
  }) => void;
  openCompletionModal: () => void;
  openExitQuizModal: () => void;
  closeExitQuizModal: () => void;
  openFinishQuizModal: () => void;
  closeFinishQuizModal: () => void;
}

const ShowQuiz = ({
  challengeMounted,
  data: {
    challengeNode: {
      challenge: {
        fields: { tests, blockHashSlug },
        id: challengeId,
        title,
        description,
        challengeType,
        helpCategory,
        superBlock,
        chapter,
        module,
        block,
        translationPending,
        quizzes
      }
    }
  },
  pageContext: { challengeMeta },
  initTests,
  updateChallengeMeta,
  isChallengeCompleted,
  user: { quizAttempts = [] },
  isQuizAttemptSubmitting,
  submitQuizAttempt,
  openCompletionModal,
  openExitQuizModal,
  closeExitQuizModal,
  openFinishQuizModal,
  closeFinishQuizModal
}: ShowQuizProps) => {
  const { t } = useTranslation();
  const curLocation = useLocation();

  const { nextChallengePath, prevChallengePath } = challengeMeta;
  const container = useRef<HTMLElement | null>(null);

  // `isPassed` is used as a flag to conditionally render the test or submit button.
  const [isPassed, setIsPassed] = useState(false);

  const [showUnanswered, setShowUnanswered] = useState(false);

  const [exitConfirmed, setExitConfirmed] = useState(false);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  const [quizId] = useState(Math.floor(Math.random() * quizzes.length));
  const quiz = quizzes[quizId].questions;

  const attemptedQuiz = quizAttempts.find(
    attempt => attempt.challengeId === challengeId
  );

  const timeUntilCooldownExpires = attemptedQuiz
    ? attemptedQuiz.timestamp + COOL_DOWN_PERIOD_IN_MS - Date.now()
    : null;

  const isNotAllowedToStartQuiz =
    !isChallengeCompleted &&
    timeUntilCooldownExpires &&
    timeUntilCooldownExpires > 0;

  const isQuizDisabled = isNotAllowedToStartQuiz || isQuizAttemptSubmitting;

  // Find the corresponding review block.
  const currentChapter = superBlockStructure.chapters.find(
    c => c.dashedName === chapter
  );
  const currentModule = currentChapter?.modules.find(
    m => m.dashedName === module
  );
  const reviewBlock = currentModule?.blocks.find(b =>
    b.dashedName.startsWith('review')
  );

  // Initialize the data passed to `useQuiz`
  const [initialQuizData] = useState(
    quiz.map(question => {
      const distractors = question.distractors.map((distractor, index) => {
        return {
          label: (
            <PrismFormatted className='quiz-answer-label' text={distractor} />
          ),
          value: index + 1
        };
      });

      const answer = {
        label: (
          <PrismFormatted
            className='quiz-answer-label'
            text={question.answer}
          />
        ),
        value: 4
      };

      return {
        question: <PrismFormatted text={question.text} />,
        answers: shuffleArray([...distractors, answer]),
        correctAnswer: answer.value
      };
    })
  );

  const {
    questions: quizData,
    validateAnswers,
    validated,
    correctAnswerCount
  } = useQuiz({
    initialQuestions: initialQuizData,
    validationMessages: {
      correct: t('learn.quiz.correct-answer'),
      incorrect: t('learn.quiz.incorrect-answer')
    },
    passingGrade: 85,
    onSuccess: () => {
      openCompletionModal();
      setIsPassed(true);
    },
    onFailure: () => setIsPassed(false)
  });

  const unanswered = quizData.reduce<number[]>(
    (acc, curr, id) => (curr.selectedAnswer == null ? [...acc, id + 1] : acc),
    []
  );

  useEffect(() => {
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    container.current?.focus();
    // This effect should be run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
  }, [
    title,
    challengeMeta,
    challengeType,
    helpCategory,
    challengeMounted,
    updateChallengeMeta
  ]);

  const handleFinishQuiz = () => {
    setShowUnanswered(true);

    if (unanswered.length === 0) {
      openFinishQuizModal();
    }
  };

  const handleFinishQuizModalBtnClick = () => {
    validateAnswers();
    closeFinishQuizModal();
    submitQuizAttempt({
      challengeId,
      quizId: quizId.toString()
    });
  };

  const handleSubmitAndGo = () => {
    openCompletionModal();
  };

  const handleExitQuiz = () => {
    openExitQuizModal();
  };

  const handleExitQuizModalBtnClick = () => {
    setExitConfirmed(true);
    void navigate(blockHashSlug);
    closeExitQuizModal();
  };

  const onWindowClose = useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      window.confirm(t('misc.navigation-warning'));
    },
    [t]
  );

  const onHistoryChange = useCallback(() => {
    // We don't block navigation in the following cases.
    // - When campers have submitted the quiz:
    //   - If they don't pass, the Finish Quiz button is disabled, there isn't anything for them to do other than leaving the page
    //   - If they pass, the Submit-and-go button shows up, and campers should be allowed to leave the page
    // - When they have clicked the exit button on the exit modal
    if (isQuizDisabled || exitConfirmed) {
      return;
    }

    void navigate(`${curLocation.pathname}`);
    openExitQuizModal();
  }, [curLocation.pathname, isQuizDisabled, exitConfirmed, openExitQuizModal]);

  usePageLeave({
    onWindowClose,
    onHistoryChange
  });

  function getErrorMessage() {
    if (showUnanswered && unanswered.length > 0) {
      return t('learn.quiz.unanswered-questions', {
        unansweredQuestions: unanswered.join(', ')
      });
    }

    if (validated && isPassed) {
      return t('learn.quiz.have-n-correct-questions', {
        correctAnswerCount,
        total: quiz.length
      });
    }

    if (validated && !isPassed) {
      return (
        <>
          <p>
            {t('learn.quiz.have-n-correct-questions', {
              correctAnswerCount,
              total: quiz.length
            })}
          </p>
          {reviewBlock && (
            <p>
              <Trans i18nKey='learn.quiz.review-material-and-try-again-later'>
                <Link to={`/learn/${superBlock}/#${reviewBlock.dashedName}`}>
                  placeholder
                </Link>
              </Trans>
            </p>
          )}
        </>
      );
    }

    return '';
  }

  const errorMessage = getErrorMessage();

  return (
    <Hotkeys
      executeChallenge={!isPassed ? handleFinishQuiz : handleSubmitAndGo}
      containerRef={container}
      nextChallengePath={nextChallengePath}
      prevChallengePath={prevChallengePath}
    >
      <LearnLayout>
        <Helmet
          title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
        />
        <Container className='quiz-challenge-container'>
          <Row>
            <Spacer size='m' />
            <ChallengeTitle
              isCompleted={isChallengeCompleted}
              translationPending={translationPending}
            >
              {title}
            </ChallengeTitle>

            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='m' />
              {isNotAllowedToStartQuiz && reviewBlock && (
                <Callout variant='danger'>
                  {
                    <Trans i18nKey='learn.quiz.review-material-and-try-again-later'>
                      <Link
                        to={`/learn/${superBlock}/#${reviewBlock.dashedName}`}
                      >
                        placeholder
                      </Link>
                    </Trans>
                  }
                </Callout>
              )}
              <Spacer size='m' />
              <ChallengeDescription description={description} />
              <Spacer size='l' />
              <ObserveKeys>
                <Quiz questions={quizData} disabled={isQuizDisabled} />
              </ObserveKeys>
              <Spacer size='m' />
              <div aria-live='polite' aria-atomic='true'>
                {errorMessage}
              </div>
              <Spacer size='m' />
              {!isPassed ? (
                <>
                  <Button
                    block={true}
                    variant='primary'
                    onClick={handleFinishQuiz}
                    disabled={isQuizDisabled}
                  >
                    {t('buttons.finish-quiz')}
                  </Button>
                </>
              ) : (
                <Button
                  block={true}
                  variant='primary'
                  onClick={handleSubmitAndGo}
                >
                  {t('buttons.submit-and-go')}
                </Button>
              )}
              <Spacer size='xxs' />
              <Button block={true} variant='primary' onClick={handleExitQuiz}>
                {t('buttons.exit-quiz')}
              </Button>
              <Spacer size='l' />
            </Col>
          </Row>
        </Container>
        <CompletionModal />
        <ExitQuizModal onExit={handleExitQuizModalBtnClick} />
        <FinishQuizModal onFinish={handleFinishQuizModalBtnClick} />
      </LearnLayout>
    </Hotkeys>
  );
};

ShowQuiz.displayName = 'ShowQuiz';

export default connect(mapStateToProps, mapDispatchToProps)(ShowQuiz);

export const query = graphql`
  query QuizChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        id
        title
        description
        challengeType
        helpCategory
        superBlock
        chapter
        module
        block
        fields {
          blockHashSlug
          blockName
          slug
          tests {
            text
            testString
          }
        }
        quizzes {
          questions {
            distractors
            text
            answer
          }
        }
        translationPending
      }
    }
  }
`;
