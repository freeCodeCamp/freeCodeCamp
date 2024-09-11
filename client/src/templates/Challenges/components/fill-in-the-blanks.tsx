import React from 'react';
import { useTranslation } from 'react-i18next';

import { parseBlanks } from '../fill-in-the-blank/parse-blanks';
import Spacer from '../../../components/helpers/spacer';
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

  const addInputClass = (index: number): string => {
    if (answersCorrect[index] === true) return 'green-underline';
    if (answersCorrect[index] === false) return 'red-underline';
    return '';
  };

  const paragraphs = parseBlanks(sentence);
  const blankAnswers = blanks.map(b => b.answer);

  return (
    <>
      <ChallengeHeading heading={t('learn.fill-in-the-blank')} />
      <Spacer size='small' />
      <div className='fill-in-the-blank-wrap'>
        {paragraphs.map((p, i) => {
          return (
            // both keys, i and j, are stable between renders, since
            // the paragraphs are static.
            <p key={i}>
              {p.map((node, j) => {
                const { type, value } = node;
                if (type === 'text') return value;
                if (type === 'blank')
                  return (
                    <input
                      key={j}
                      type='text'
                      maxLength={blankAnswers[value].length + 3}
                      className={`fill-in-the-blank-input ${addInputClass(
                        value
                      )}`}
                      onChange={handleInputChange}
                      data-index={node.value}
                      size={blankAnswers[value].length}
                      aria-label={t('learn.blank')}
                    />
                  );
              })}
            </p>
          );
        })}
      </div>
      <Spacer size='medium' />
      {showFeedback && feedback && (
        <>
          <PrismFormatted text={feedback} />
          <Spacer size='medium' />
        </>
      )}
      <div className='text-center'>
        {showWrong && <span>{t('learn.wrong-answer')}</span>}
      </div>
    </>
  );
}

FillInTheBlanks.displayName = 'FillInTheBlanks';

export default FillInTheBlanks;
