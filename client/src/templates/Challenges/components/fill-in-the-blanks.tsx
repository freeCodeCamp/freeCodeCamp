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

type BlankInputProps = {
  blankIndex: number;
  answer: string;
  isCorrect: boolean | null;
  className: string;
  onChange: (index: number, value: string) => void;
  ariaLabel: string;
  inputType?: 'pinyin-to-hanzi' | 'pinyin-tone';
};

const BlankInput = ({
  blankIndex,
  answer,
  isCorrect,
  className,
  onChange,
  ariaLabel,
  inputType
}: BlankInputProps) => {
  const parsedAnswer = parseAnswer(answer);
  const answerLength =
    typeof parsedAnswer === 'string'
      ? parsedAnswer.length
      : parsedAnswer.pinyin.length;

  if (inputType === 'pinyin-to-hanzi' && typeof parsedAnswer === 'object') {
    return (
      <PinyinToHanziInput
        index={blankIndex}
        expectedAnswer={parsedAnswer}
        isCorrect={isCorrect}
        onChange={onChange}
        className={className}
        maxLength={answerLength + 3}
        size={answerLength}
        ariaLabel={ariaLabel}
      />
    );
  } else if (inputType === 'pinyin-tone' && typeof parsedAnswer === 'string') {
    return (
      <PinyinToneInput
        index={blankIndex}
        isCorrect={isCorrect}
        onChange={onChange}
        className={className}
        maxLength={answerLength + 3}
        size={answerLength}
        ariaLabel={ariaLabel}
      />
    );
  }

  // Default text input
  return (
    <input
      type='text'
      maxLength={answerLength + 3}
      className={className}
      onChange={e => onChange(blankIndex, e.target.value)}
      size={answerLength}
      autoComplete='off'
      aria-label={ariaLabel}
      {...(isCorrect === false ? { 'aria-invalid': 'true' } : {})}
    />
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
      <p className='sr-only'>{ariaInputDescription}</p>
      <div className='fill-in-the-blank-wrap'>
        {paragraphs.map((p, i) => (
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
              if (answersCorrect[value] === true) {
                return <AnswerText key={j} answer={blankAnswers[value]} />;
              }

              return (
                <BlankInput
                  key={j}
                  blankIndex={value}
                  answer={blankAnswers[value]}
                  isCorrect={answersCorrect[value]}
                  className={getInputClass(value)}
                  onChange={handleInputChange}
                  ariaLabel={t('learn.fill-in-the-blank.blank')}
                  inputType={inputType}
                />
              );
            })}
          </p>
        ))}
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
