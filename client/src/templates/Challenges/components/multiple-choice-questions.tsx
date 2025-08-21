import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Spacer } from '@freecodecamp/ui';
import { Question } from '../../../redux/prop-types';
import SpeakingModal from './speaking-modal';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
  selectedOptions: (number | null)[];
  handleOptionChange: (questionIndex: number, answerIndex: number) => void;
  submittedMcqAnswers: (number | null)[];
  showFeedback: boolean;
  showSpeakingButton?: boolean;
};

function removeParagraphTags(text: string): string {
  return text.replace(/^<p>|<\/p>$/g, '');
}

function MultipleChoiceQuestions({
  questions,
  selectedOptions,
  handleOptionChange,
  submittedMcqAnswers,
  showFeedback,
  showSpeakingButton
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  function stripCodeTags(text: string): string {
    return text.replace(/<code>(.*?)<\/code>/g, '$1');
  }

  return (
    <>
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      {questions.map((question, questionIndex) => (
        <fieldset key={questionIndex}>
          <legend className='mcq-question-text'>
            <PrismFormatted className={'line-numbers'} text={question.text} />
          </legend>
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
                    style={{
                      margin: 0,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      style={{ flex: 1, display: 'flex', alignItems: 'center' }}
                    >
                      <input
                        name={`mc-question-${questionIndex}`}
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
                    </span>
                    {showSpeakingButton && (
                      <span
                        style={{
                          marginRight: '8px',
                          marginTop: '2px',
                          marginBottom: '2px'
                        }}
                      >
                        <button
                          type='button'
                          className='btn btn-info'
                          style={{ minWidth: '120px' }}
                          onClick={() => {
                            setModalText(
                              stripCodeTags(removeParagraphTags(answer))
                            );
                            setModalOpen(true);
                          }}
                        >
                          Speaking
                        </button>
                      </span>
                    )}
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
        </fieldset>
      ))}
      <Spacer size='m' />
      <SpeakingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sentence={modalText}
      />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
