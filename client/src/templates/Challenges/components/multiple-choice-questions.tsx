import React, { useState } from 'react';
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

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  // Helper to strip code tags from answer text
  function stripCodeTags(text: string): string {
    return text.replace(/<code>(.*?)<\/code>/g, '$1');
  }

  // Use CSS for responsive modal/input width
  // ...existing code...

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
                    {/* Speaking button right-aligned, only if showSpeakingButton is true */}
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
      {/* Modal for Speaking button */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(10,10,35,0.95)', // #0a0a23 with opacity
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: '#1b1b32',
              borderRadius: '8px',
              padding: '2rem',
              minWidth: '350px',
              maxWidth: '900px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
              color: 'white',
              boxSizing: 'border-box'
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              aria-label='Close'
            >
              ×
            </button>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <label
                htmlFor='speaking-input'
                style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}
              >
                Practice Speaking:
              </label>
              <input
                id='speaking-input'
                type='text'
                value={modalText}
                readOnly
                style={{
                  width: '100%',
                  minWidth: '350px',
                  maxWidth: '900px',
                  padding: '0.5rem 1.5rem',
                  fontSize: '1rem',
                  textAlign: 'center',
                  background: '#0a0a23',
                  color: 'white',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
