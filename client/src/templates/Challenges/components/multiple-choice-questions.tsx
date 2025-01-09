import React from 'react';
import { useTranslation } from 'react-i18next';

import { Spacer } from '@freecodecamp/ui';
import { Question } from '../../../redux/prop-types';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
  selectedOptions: (number | null)[];
  handleOptionChange: (questionIndex: number, answerIndex: number) => void;
  submittedMcqAnswers: (number | null)[];
  showFeedback: boolean;
};

function removeParagraphTags(text: string): string {
  return text.replace(/^<p>|<\/p>$/g, '');
}

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
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <PrismFormatted className={'line-numbers'} text={question.text} />
          <div className='video-quiz-options'>
            {question.answers.map(({ answer }, answerIndex) => {
              const isSubmittedAnswer =
                submittedMcqAnswers[questionIndex] === answerIndex;
              const feedback =
                questions[questionIndex].answers[answerIndex].feedback;
              const isCorrect =
                submittedMcqAnswers[questionIndex] ===
                // -1 because the solution is 1-indexed
                questions[questionIndex].solution - 1;

              return (
                <React.Fragment key={answerIndex}>
                  <label
                    className={`video-quiz-option-label 
                      ${showFeedback && isSubmittedAnswer ? 'mcq-hide-border' : ''} 
                      ${showFeedback && isSubmittedAnswer ? (isCorrect ? 'mcq-correct-border' : 'mcq-incorrect-border') : ''}`}
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
                      text={removeParagraphTags(answer)}
                      useSpan
                      noAria
                    />
                  </label>
                  {showFeedback && isSubmittedAnswer && (
                    <div
                      className={`video-quiz-option-label mcq-feedback ${isCorrect ? 'mcq-correct' : 'mcq-incorrect'}`}
                    >
                      <p>
                        {isCorrect
                          ? t('learn.quiz.correct-answer')
                          : t('learn.quiz.incorrect-answer')}
                      </p>
                      {feedback && (
                        <p>
                          <PrismFormatted
                            className={
                              isCorrect
                                ? 'mcq-prism-correct'
                                : 'mcq-prism-incorrect'
                            }
                            text={removeParagraphTags(feedback)}
                            useSpan
                            noAria
                          />
                        </p>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <Spacer size='m' />
        </div>
      ))}
      <Spacer size='m' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
