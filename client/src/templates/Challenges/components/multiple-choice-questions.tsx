import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, Spacer } from '@freecodecamp/ui';
import { Question } from '../../../redux/prop-types';
import { openModal } from '../redux/actions';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import SpeakingModal from './speaking-modal';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';
import './multiple-choice-questions.css';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
  selectedOptions: (number | null)[];
  handleOptionChange: (questionIndex: number, answerIndex: number) => void;
  submittedMcqAnswers: (number | null)[];
  showFeedback: boolean;
  showSpeakingButton?: boolean;
  challengeData?: {
    challengeId?: string;
    audioIds?: string[] | null;
  };
  openSpeakingModal: () => void;
  superBlock: SuperBlocks;
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
  showSpeakingButton,
  challengeData,
  openSpeakingModal,
  superBlock
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  const [modalText, setModalText] = useState('');
  const [modalAnswerIndex, setModalAnswerIndex] = useState<number>(0);

  function stripCodeTags(text: string): string {
    return text.replace(/<code>(.*?)<\/code>/g, '$1');
  }

  const handleSpeakingButtonClick = (answer: string, answerIndex: number) => {
    setModalText(stripCodeTags(removeParagraphTags(answer)));
    setModalAnswerIndex(answerIndex);
    openSpeakingModal();
  };

  // Construct audio URL from audioId
  const constructAudioUrl = (audioId?: string): string | undefined => {
    if (audioId) {
      return `https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/${audioId}`;
    }
    return undefined;
  };

  const getAudioUrl = (answerIndex: number): string | undefined => {
    const audioIds = challengeData?.audioIds;
    if (audioIds && audioIds[answerIndex]) {
      return constructAudioUrl(audioIds[answerIndex]);
    }
    return undefined;
  };

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

              const labelId = `mc-question-${questionIndex}-answer-${answerIndex}-label`;

              return (
                <React.Fragment key={answerIndex}>
                  <div className='mcq-option-wrapper'>
                    <label
                      id={labelId}
                      className={`video-quiz-option-label mcq-option-label
                        ${showFeedback && isSubmittedAnswer ? 'mcq-hide-border' : ''} 
                        ${showFeedback && isSubmittedAnswer ? (isCorrect ? 'mcq-correct-border' : 'mcq-incorrect-border') : ''}`}
                      htmlFor={`mc-question-${questionIndex}-answer-${answerIndex}`}
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
                    </label>

                    {/* This button is positioned after each radio button, which may be confusing for screen reader users.
                        We hide it from screen readers and provide a separate set of screen reader accessible buttons outside of the fieldset.
                    */}
                    {showSpeakingButton && (
                      <Button
                        size='medium'
                        onClick={() =>
                          handleSpeakingButtonClick(answer, answerIndex)
                        }
                        className='mcq-speaking-button'
                        aria-hidden='true'
                      >
                        Speaking
                      </Button>
                    )}
                  </div>
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

      {/* Screen reader accessible speaking buttons. 
          Keep the functionality of these in sync with the ones inside the fieldset. */}
      {showSpeakingButton && (
        <div className='sr-only'>
          {questions.map((question, questionIndex) =>
            question.answers.map(({ answer }, answerIndex) => {
              const labelId = `mc-question-${questionIndex}-answer-${answerIndex}-label`;

              return (
                <Button
                  key={`sr-speaking-${questionIndex}-${answerIndex}`}
                  size='medium'
                  onClick={() => handleSpeakingButtonClick(answer, answerIndex)}
                  aria-describedby={labelId}
                >
                  Speaking
                </Button>
              );
            })
          )}
        </div>
      )}

      <Spacer size='m' />
      <SpeakingModal
        sentence={modalText}
        audioUrl={getAudioUrl(modalAnswerIndex)}
        answerIndex={modalAnswerIndex}
        superBlock={superBlock}
      />
    </>
  );
}

const mapDispatchToProps = {
  openSpeakingModal: () => openModal('speaking')
};

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default connect(null, mapDispatchToProps)(MultipleChoiceQuestions);
