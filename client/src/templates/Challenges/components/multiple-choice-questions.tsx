import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { Button, Spacer } from '@freecodecamp/ui';
import { openModal } from '../redux/actions';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { initializeMathJax, isMathJaxAllowed } from '../../../utils/math-jax';
import SpeakingModal from './speaking-modal';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';
import { stripHtmlTags } from './speaking-modal-helpers';
import { sounds } from './scene/scene-assets';

export interface PolymorphicAnswer {
  answer?: string;
  label?: string | React.ReactNode;
  feedback?: string | React.ReactNode;
  audioId?: string;
}

export interface PolymorphicQuestion {
  text?: string;
  question?: string | React.ReactNode;
  answers: PolymorphicAnswer[];
  solution?: number;
  correctAnswer?: number;
}

type MultipleChoiceQuestionsProps = {
  questions: PolymorphicQuestion[];
  selectedOptions: (number | null)[];
  handleOptionChange: (questionIndex: number, answerIndex: number) => void;
  submittedMcqAnswers: (number | null)[];
  showFeedback: boolean;
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
  openSpeakingModal,
  superBlock
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  useEffect(() => {
    if (isMathJaxAllowed(superBlock)) {
      initializeMathJax();
    }
  }, [superBlock]);

  const [modalText, setModalText] = useState('');
  const [modalAnswerIndex, setModalAnswerIndex] = useState<number>(0);
  const [modalQuestionIndex, setModalQuestionIndex] = useState<number>(0);

  const handleSpeakingButtonClick = (
    answer: string,
    answerIndex: number,
    questionIndex: number
  ) => {
    setModalText(stripHtmlTags(answer));
    setModalAnswerIndex(answerIndex);
    setModalQuestionIndex(questionIndex);
    openSpeakingModal();
  };

  const constructAudioUrl = (audioId?: string): string | undefined =>
    audioId ? `${sounds}/${audioId}` : undefined;

  const getAudioUrl = (
    questionIndex: number,
    answerIndex: number
  ): string | undefined => {
    const answer = questions[questionIndex]?.answers[answerIndex];
    const audioId = answer?.audioId ?? undefined;
    return constructAudioUrl(audioId);
  };

  return (
    <div
      className={isMathJaxAllowed(superBlock) ? 'mathjax-support' : undefined}
    >
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      {questions.map((question, questionIndex) => (
        <fieldset key={questionIndex}>
          <legend className='mcq-question-text'>
            {(() => {
              const questionContent = question.text || question.question;
              return typeof questionContent === 'string' ? (
                <PrismFormatted
                  className={'line-numbers'}
                  text={questionContent}
                />
              ) : (
                questionContent
              );
            })()}
          </legend>
          <div className='video-quiz-options'>
            {question.answers.map((answerObj, answerIndex) => {
              const answer = answerObj.answer || answerObj.label;
              const isSubmittedAnswer =
                submittedMcqAnswers[questionIndex] === answerIndex;
              const feedback = answerObj.feedback;
              const solution = question.solution || question.correctAnswer;
              const isCorrect =
                solution !== undefined &&
                submittedMcqAnswers[questionIndex] === solution - 1;

              const labelId = `mc-question-${questionIndex}-answer-${answerIndex}-label`;
              const hasAudio = answerObj.audioId;

              return (
                <div key={answerIndex} className='mcq-option-row'>
                  <div className='mcq-option-with-feedback'>
                    <div className='mcq-option-content'>
                      <label
                        id={labelId}
                        className={`video-quiz-option-label mcq-option-label
                            ${showFeedback && isSubmittedAnswer ? 'mcq-hide-border' : ''}
                            ${showFeedback && isSubmittedAnswer ? (isCorrect ? 'mcq-correct-border' : 'mcq-incorrect-border') : ''}`}
                        htmlFor={`mc-question-${questionIndex}-answer-${answerIndex}`}
                      >
                        <input
                          name={`mc-question-${questionIndex}`}
                          checked={
                            selectedOptions[questionIndex] === answerIndex
                          }
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
                        {typeof answer === 'string' ? (
                          <PrismFormatted
                            className={'video-quiz-option'}
                            text={removeParagraphTags(answer)}
                            useSpan
                            noAria
                          />
                        ) : (
                          answer
                        )}
                      </label>
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
                            {typeof feedback === 'string' ? (
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
                            ) : (
                              feedback
                            )}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {hasAudio && (
                    <div className='mcq-speaking-button-wrapper'>
                      <Button
                        size='medium'
                        onClick={() => {
                          if (typeof answer === 'string') {
                            handleSpeakingButtonClick(
                              answer,
                              answerIndex,
                              questionIndex
                            );
                          }
                        }}
                        className='mcq-speaking-button'
                        aria-describedby={labelId}
                        aria-label={t('speaking-modal.speaking-button')}
                      >
                        <FontAwesomeIcon icon={faMicrophone} />
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Spacer size='m' />
        </fieldset>
      ))}

      <Spacer size='m' />
      <SpeakingModal
        sentence={modalText}
        audioUrl={getAudioUrl(modalQuestionIndex, modalAnswerIndex)}
        answerIndex={modalAnswerIndex}
        superBlock={superBlock}
      />
    </div>
  );
}

const mapDispatchToProps = {
  openSpeakingModal: () => openModal('speaking')
};

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default connect(null, mapDispatchToProps)(MultipleChoiceQuestions);
