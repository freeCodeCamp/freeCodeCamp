import React from 'react';
import { useTranslation } from 'react-i18next';

import { Spacer, Quiz } from '@freecodecamp/ui';
import { Question } from '@freecodecamp/ui/dist/quiz/types';
import ChallengeHeading from './challenge-heading';

type MultipleChoiceQuestionsProps = {
  questions: Question<number>[];
};

function MultipleChoiceQuestions({
  questions
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      <Quiz questions={questions} disabled={false}></Quiz>
      <Spacer size='m' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
