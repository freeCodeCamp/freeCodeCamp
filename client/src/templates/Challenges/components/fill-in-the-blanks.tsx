import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import { parseBlanks, parseAnswer } from '../fill-in-the-blank/parse-blanks';
import PrismFormatted from '../components/prism-formatted';
import { FillInTheBlank } from '../../../redux/prop-types';
import ChallengeHeading from './challenge-heading';
import PinyinToHanziInput from './pinyin-to-hanzi-input';
import PinyinToneInput from './pinyin-tone-input';

type FillInTheBlankProps = {
  fillInTheBlank: FillInTheBlank;
  answersCorrect: (boolean | null)[];
  showFeedback: boolean;
  feedback: string | null;
  showWrong: boolean;
  handleInputChange: (inputIndex: number, value: string) => void;
};

const AnswerText = ({ answer }: { answer: string }) => {
  const parsedAnswer = parseAnswer(answer);

  if (typeof parsedAnswer === 'string') {
    return <span className='correct-blank-answer'>{parsedAnswer}</span>;
  }

  return (
    <ruby className='correct-blank-answer'>
      {parsedAnswer.hanzi}
      <rp>(</rp>
      <rt>{parsedAnswer.pinyin}</rt>
      <rp>)</rp>
    </ruby>
  );
};

function FillInTheBlanks({
  fillInTheBlank: { sentence, blanks, inputType },
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

  const getAnswerLength = (answer: string): number => {
    const parsedAnswer = parseAnswer(answer);

    if (typeof parsedAnswer === 'string') {
      return parsedAnswer.length;
    }

    return parsedAnswer.pinyin.length;
  };

  const paragraphs = parseBlanks(sentence);
  const blankAnswers = blanks.map(b => b.answer);

  const ariaInputDescription =
    inputType === 'pinyin-to-hanzi'
      ? t('aria.pinyin-to-hanzi-input-desc')
      : inputType === 'pinyin-tone'
        ? t('aria.pinyin-tone-input-desc')
        : '';

  return (
    <>
      <ChallengeHeading heading={t('learn.fill-in-the-blank.heading')} />
      <Spacer size='xs' />
      <p className='sr-only'>{t(ariaInputDescription)}</p>
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

                if (type === 'hanzi-pinyin') {
                  const { hanzi, pinyin } = value;
                  return (
                    <ruby key={j}>
                      {hanzi}
                      <rp>(</rp>
                      <rt>{pinyin}</rt>
                      <rp>)</rp>
                    </ruby>
                  );
                }

                // If a blank is answered correctly, render the answer as part of the sentence.
                if (type === 'blank' && answersCorrect[value] === true) {
                  return <AnswerText key={j} answer={blankAnswers[value]} />;
                }

                const answerLength = getAnswerLength(blankAnswers[value]);

                if (inputType === 'pinyin-to-hanzi') {
                  const parsedAnswer = parseAnswer(blankAnswers[value]);
                  const expectedAnswer =
                    typeof parsedAnswer === 'string'
                      ? { hanzi: parsedAnswer, pinyin: parsedAnswer }
                      : parsedAnswer;

                  return (
                    <PinyinToHanziInput
                      key={j}
                      index={value}
                      expectedAnswer={expectedAnswer}
                      isCorrect={answersCorrect[value]}
                      onChange={handleInputChange}
                      className={getInputClass(value)}
                      maxLength={answerLength + 3}
                      size={answerLength}
                      ariaLabel={t('learn.fill-in-the-blank.blank')}
                    />
                  );
                }

                if (inputType === 'pinyin-tone') {
                  return (
                    <PinyinToneInput
                      key={j}
                      index={value}
                      isCorrect={answersCorrect[value]}
                      onChange={handleInputChange}
                      className={getInputClass(value)}
                      maxLength={answerLength + 3}
                      size={answerLength}
                      ariaLabel={t('learn.fill-in-the-blank.blank')}
                    />
                  );
                }

                return (
                  <input
                    key={j}
                    type='text'
                    maxLength={answerLength + 3}
                    className={getInputClass(value)}
                    onChange={e =>
                      handleInputChange(node.value, e.target.value)
                    }
                    size={answerLength}
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
