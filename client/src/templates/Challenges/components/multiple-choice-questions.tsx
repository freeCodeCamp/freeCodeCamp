import React from 'react';
import { useTranslation } from 'react-i18next';

import { Question } from '../../../redux/prop-types';
import Spacer from '../../../components/helpers/spacer';
import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

type MultipleChoiceQuestionsProps = {
  questions: Question;
  selectedOption: number | null;
  isWrongAnswer: boolean;
  handleOptionChange: (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function MultipleChoiceQuestions({
  questions: { text, answers },
  selectedOption,
  isWrongAnswer,
  handleOptionChange
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  const feedback =
    selectedOption !== null ? answers[selectedOption].feedback : undefined;

  return (
    <>
      <ChallengeHeading heading={t('learn.question')} />
      <PrismFormatted className={'line-numbers'} text={text} />
      <div className='video-quiz-options'>
        {answers.map(({ answer }, index) => (
          <label
            className='video-quiz-option-label'
            key={index}
            htmlFor={`mc-question-${index}`}
          >
            <input
              name='quiz'
              checked={selectedOption === index}
              className='sr-only'
              onChange={handleOptionChange}
              type='radio'
              value={index}
              id={`mc-question-${index}`}
            />{' '}
            <span className='video-quiz-input-visible'>
              {selectedOption === index ? (
                <span className='video-quiz-selected-input' />
              ) : null}
            </span>
            <PrismFormatted
              className={'video-quiz-option'}
              text={answer.replace(/^<p>|<\/p>$/g, '')}
              useSpan
              noAria
            />
          </label>
        ))}
      </div>
      {isWrongAnswer && (
        <>
          <Spacer size='medium' />
          <div className='text-center'>
            {feedback ? (
              <PrismFormatted
                className={'multiple-choice-feedback'}
                text={feedback}
              />
            ) : (
              t('learn.wrong-answer')
            )}
          </div>
        </>
      )}
      <Spacer size='medium' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
