import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import { parseBlanks } from '../fill-in-the-blank/parse-blanks';
import PrismFormatted from '../components/prism-formatted';
import { FillInTheBlank } from '../../../redux/prop-types';
import ChallengeHeading from './challenge-heading';

type FillInTheBlankProps = {
  fillInTheBlank: FillInTheBlank;
  answersCorrect: (boolean | null)[];
  showFeedback: boolean;
  feedback: string | null;
  showWrong: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FillInTheBlanks({
  fillInTheBlank: { sentence, blanks },
  answersCorrect,
  showFeedback,
  feedback,
  showWrong,
  handleInputChange
}: FillInTheBlankProps): JSX.Element {
  const { t } = useTranslation();

  const getInputClass = (index: number): string => {
    let cls = 'fill-in-the-blank-input';

    if (answersCorrect[index] === false) {
      cls += ' incorrect-blank-answer';
    }

    return cls;
  };

  const paragraphs = parseBlanks(sentence);
  const blankAnswers = blanks.map(b => b.answer);

  return (
    <>
      <ChallengeHeading heading={t('learn.fill-in-the-blank.heading')} />
      <Spacer size='xs' />
      <div className='fill-in-the-blank-wrap'>
        {paragraphs.map((p, i) => {
          return (
            // both keys, i and j, are stable between renders, since
            // the paragraphs are static.
            <p key={i}>
              {p.map((node, j) => {
                const { type, value } = node;
                if (type === 'text') {
                  return value;
                }

                // If a blank is answered correctly, render the answer as part of the sentence.
                if (type === 'blank' && answersCorrect[value] === true) {
                  return (
                    <span key={j} className='correct-blank-answer'>
                      {blankAnswers[value]}
                    </span>
                  );
                }

                return (
                  <input
                    key={j}
                    type='text'
                    maxLength={blankAnswers[value].length + 3}
                    className={getInputClass(value)}
                    onChange={handleInputChange}
                    data-index={node.value}
                    size={blankAnswers[value].length}
                    autoComplete='off'
                    aria-label={t('learn.fill-in-the-blank.blank')}
                    {...(answersCorrect[value] === false
                      ? { 'aria-invalid': 'true' }
                      : {})}
                  />
                );
              })}
            </p>
          );
        })}
      </div>
      <Spacer size='m' />
      <div aria-live='polite'>
        {showWrong && (
          <div className='text-center'>
            <span>{t('learn.wrong-answer')}</span>
            <Spacer size='m' />
          </div>
        )}
        {showFeedback && feedback && <PrismFormatted text={feedback} />}
      </div>
    </>
  );
}

FillInTheBlanks.displayName = 'FillInTheBlanks';

export default FillInTheBlanks;
