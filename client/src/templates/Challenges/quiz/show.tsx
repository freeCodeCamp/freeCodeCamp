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
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  // `random` needs to be a ref object so that it won't change between renders.
  const random = useRef(Math.floor(Math.random() * quizzes.length));
  const quiz = quizzes[random.current].questions;

  // Initialize the data passed to `useQuiz`
  const initialQuizData = quiz.map(question => {
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
        <PrismFormatted className='quiz-answer-label' text={question.answer} />
      ),
      value: 4
    };

    return {
      question: <PrismFormatted text={question.question} />,
      // TODO: Shuffle the array
      answers: [...distractors, answer],
      correctAnswer: answer.value
    };
  });

  const {
    questions: quizData,
    validateAnswers,
    correctAnswerCount
  } = useQuiz({
    initialQuestions: initialQuizData,
    validationMessages: {
      correct: t('learn.quiz.correct-answer'),
      incorrect: t('learn.quiz.incorrect-answer')
    }
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

  const handleSubmit = () => {
    if (quizData.some(question => question.selectedAnswer == null)) {
      setErrorMessage(t('learn.quiz.unanswered-questions'));
      return;
    }

    validateAnswers();
    setHasSubmitted(true);
  };

  // Handle error message display on submit.
  useEffect(() => {
    if (!hasSubmitted) return;

    // `correctAnswerCount` is stored as a state in `useQuiz`,
    // and the state setter is called when `validateAnswers` is called.
    // With set state being performed async,
    // the `correctAnswerCount` value cannot be used immediately within `handleSubmit.`
    if (correctAnswerCount === quiz.length) {
      openCompletionModal();
      setErrorMessage('');
    } else {
      setErrorMessage(
        t('learn.quiz.have-n-correct-questions', {
          correctAnswerCount,
          total: quiz.length
        })
      );
    }
  }, [correctAnswerCount, quiz.length, hasSubmitted, openCompletionModal, t]);

  return (
    <Hotkeys
      executeChallenge={handleSubmit}
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
                {/* TODO: Export the useQuiz return type from fcc/ui */}
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Quiz questions={quizData} disabled={hasSubmitted} />
              </ObserveKeys>
              <Spacer size='medium' />
              <div aria-live='polite' aria-atomic='true'>
                {errorMessage}
              </div>
              <Spacer size='medium' />
              <Button
                block={true}
                variant='primary'
                onClick={handleSubmit}
                disabled={hasSubmitted}
              >
                {t('buttons.check-answer')}
              </Button>
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
            question
            answer
          }
        }
        translationPending
      }
    }
  }
`;
