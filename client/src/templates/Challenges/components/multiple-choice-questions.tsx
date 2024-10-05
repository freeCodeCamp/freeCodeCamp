import React from 'react';
import { useTranslation } from 'react-i18next';

import { Question } from '../../../redux/prop-types';
import Spacer from '../../../components/helpers/spacer';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
  selectedOptions: (number | null)[];
  handleOptionChange: (questionIndex: number, answerIndex: number) => void;
  submittedMcqAnswers: (number | null)[];
  showFeedback: boolean;
};

function MultipleChoiceQuestions({
  questions,
  selectedOptions,
  handleOptionChange,
  submittedMcqAnswers,
  showFeedback
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ChallengeHeading heading={t('learn.question')} />
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <PrismFormatted className={'line-numbers'} text={question.text} />
          <div className='video-quiz-options'>
            {question.answers.map(({ answer }, answerIndex) => (
              <label
                className='video-quiz-option-label'
                key={answerIndex}
                htmlFor={`mc-question-${questionIndex}-answer-${answerIndex}`}
              >
                <input
                  name='quiz'
                  checked={selectedOptions[questionIndex] === answerIndex}
                  className='sr-only'
                  onChange={() =>
                    handleOptionChange(questionIndex, answerIndex)
                  }
                  type='radio'
                  value={answerIndex}
                  id={`mc-question-${questionIndex}-answer-${answerIndex}`}
                />{' '}
                <span className='video-quiz-input-visible'>
                  {selectedOptions[questionIndex] === answerIndex ? (
                    <span className='video-quiz-selected-input' />
                  ) : null}
                </span>
                <PrismFormatted
                  className={'video-quiz-option'}
                  text={answer.replace(/^<p>|<\/p>$/g, '')}
                  useSpan
                  noAria
                />
                {showFeedback &&
                  submittedMcqAnswers[questionIndex] === answerIndex && (
                    <div>
                      {questions[questionIndex].answers[answerIndex].feedback
                        ? questions[questionIndex].answers[answerIndex].feedback
                        : 'Feedback YO!'}
                    </div>
                  )}
              </label>
            ))}
          </div>
          <Spacer size='medium' />
        </div>
      ))}
      <Spacer size='medium' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
