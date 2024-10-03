import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Button, Quiz, useQuiz } from '@freecodecamp/ui';

// Local Utilities
import { shuffleArray } from '../../../../../shared/utils/shuffle-array';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
// import { challengeTypes } from '../../../../../shared/config/challenge-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import PrismFormatted from '../components/prism-formatted';

import './show.css';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  (isChallengeCompleted: boolean) => ({
    isChallengeCompleted
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      initTests,
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion')
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
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

const ShowQuiz = ({
  challengeMounted,
  data: {
    challengeNode: {
      challenge: {
        fields: { tests },
        title,
        description,
        challengeType,
        helpCategory,
        superBlock,
        block,
        translationPending,
        quizzes
      }
    }
  },
  pageContext: { challengeMeta },
  initTests,
  updateChallengeMeta,
  openCompletionModal,
  isChallengeCompleted
}: ShowQuizProps) => {
  const { t } = useTranslation();
  const { nextChallengePath, prevChallengePath } = challengeMeta;
  const container = useRef<HTMLElement | null>(null);

  // Campers are not allowed to change their answers once the quiz is submitted.
  // `hasSubmitted` is used as a flag to disable the quiz.
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // `isPassed` is used as a flag to conditionally render the test or submit button.
  const [isPassed, setIsPassed] = useState(false);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  const [quizId] = useState(Math.floor(Math.random() * quizzes.length));
  const quiz = quizzes[quizId].questions;

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
    correctAnswerCount
  } = useQuiz({
    initialQuestions: initialQuizData,
    validationMessages: {
      correct: t('learn.quiz.correct-answer'),
      incorrect: t('learn.quiz.incorrect-answer')
    },
    onSuccess: () => {
      openCompletionModal();
      setIsPassed(true);
    },
    onFailure: () => setIsPassed(false)
  });

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

  const handleAnswersCheck = () => {
    validateAnswers();
    setHasSubmitted(true);
  };

  const handleSubmitAndGo = () => {
    openCompletionModal();
  };

  function getErrorMessage() {
    if (!hasSubmitted) return '';

    const unansweredList = quizData.reduce<number[]>(
      (acc, curr, id) => (curr.selectedAnswer == null ? [...acc, id + 1] : acc),
      []
    );

    if (unansweredList.length > 0) {
      return t('learn.quiz.unanswered-questions', {
        unansweredQuestions: unansweredList.join(', ')
      });
    }

    return t('learn.quiz.have-n-correct-questions', {
      correctAnswerCount,
      total: quiz.length
    });
  }

  const errorMessage = getErrorMessage();

  return (
    <Hotkeys
      executeChallenge={!isPassed ? handleAnswersCheck : handleSubmitAndGo}
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
            <Spacer size='medium' />
            <ChallengeTitle
              isCompleted={isChallengeCompleted}
              translationPending={translationPending}
            >
              {title}
            </ChallengeTitle>

            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <ChallengeDescription description={description} />
              <ObserveKeys>
                <Quiz questions={quizData} disabled={hasSubmitted} />
              </ObserveKeys>
              <Spacer size='medium' />
              <div aria-live='polite' aria-atomic='true'>
                {errorMessage}
              </div>
              <Spacer size='medium' />
              {/*
                 There are three cases for the button display:
                 1. Campers submit the answers but don't pass
                 2. Campers submit the answers and pass, click the submit button on the completion modal
                 3. Campers submit the answers and pass, but they close the completion modal

                 This rendering logic is only handling (2) and (3).
                 TODO: Update the logic to handle (1).
                 The code should render a link that points campers to the module's review block.
               */}
              {!isPassed ? (
                <Button
                  block={true}
                  variant='primary'
                  onClick={handleAnswersCheck}
                >
                  {t('buttons.check-answer')}
                </Button>
              ) : (
                <Button
                  block={true}
                  variant='primary'
                  onClick={handleSubmitAndGo}
                >
                  {t('buttons.submit-and-go')}
                </Button>
              )}
              <Spacer size='large' />
            </Col>
            <CompletionModal />
          </Row>
        </Container>
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
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
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
