import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { Button, Spacer } from '@freecodecamp/ui';
import { Question } from '../../../redux/prop-types';
import { openModal } from '../redux/actions';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import SpeakingModal from './speaking-modal';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
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

  const [modalText, setModalText] = useState('');
  const [modalAnswerIndex, setModalAnswerIndex] = useState<number>(0);
  const [modalQuestionIndex, setModalQuestionIndex] = useState<number>(0);

  function stripCodeTags(text: string): string {
    return text.replace(/<code>(.*?)<\/code>/g, '$1');
  }

  const handleSpeakingButtonClick = (
    answer: string,
    answerIndex: number,
    questionIndex: number
  ) => {
    setModalText(stripCodeTags(removeParagraphTags(answer)));
    setModalAnswerIndex(answerIndex);
    setModalQuestionIndex(questionIndex);
    openSpeakingModal();
  };

  const constructAudioUrl = (audioId?: string): string | undefined =>
    audioId
      ? `https://cdn.freecodecamp.org/curriculum/english/animation-assets/sounds/${audioId}`
      : undefined;

  const getAudioUrl = (
    questionIndex: number,
    answerIndex: number
  ): string | undefined => {
    const answer = questions[questionIndex]?.answers[answerIndex];
    const audioId = answer?.audioId ?? undefined;
    return constructAudioUrl(audioId);
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
              const hasAudio =
                questions[questionIndex]?.answers[answerIndex]?.audioId;

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
                        <PrismFormatted
                          className={'video-quiz-option'}
                          text={removeParagraphTags(answer)}
                          useSpan
                          noAria
                        />
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
                  </div>

                  {hasAudio && (
                    <div className='mcq-speaking-button-wrapper'>
                      <Button
                        size='medium'
                        onClick={() =>
                          handleSpeakingButtonClick(
                            answer,
                            answerIndex,
                            questionIndex
                          )
                        }
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
    </>
  );
}

const mapDispatchToProps = {
  openSpeakingModal: () => openModal('speaking')
};

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default connect(null, mapDispatchToProps)(MultipleChoiceQuestions);
