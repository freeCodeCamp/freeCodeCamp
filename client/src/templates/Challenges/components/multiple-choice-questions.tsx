import React from 'react';
import { useTranslation } from 'react-i18next';

import { Quiz, Spacer } from '@freecodecamp/ui';
import { Question } from '@freecodecamp/ui/dist/quiz/types';
import ChallengeHeading from './challenge-heading';

type MultipleChoiceQuestionsProps = {
  questions: Question<number>[];
  disabled: boolean;
};

function MultipleChoiceQuestions({
  questions,
  disabled
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      <Quiz questions={questions} disabled={disabled} />
      <Spacer size='m' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
