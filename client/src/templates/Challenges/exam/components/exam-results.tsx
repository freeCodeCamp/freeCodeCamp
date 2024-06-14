import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

import Spacer from '../../../../components/helpers/spacer';
import { formatSecondsToTime } from '../../../../utils/format-seconds';
import { GeneratedExamResults } from '../../../../redux/prop-types';

interface ExamResultsProps {
  dashedName: string;
  examResults: GeneratedExamResults;
  exitExam: () => void;
  title: string;
}

function ExamResults({
  dashedName,
  examResults,
  exitExam,
  title
}: ExamResultsProps): JSX.Element {
  const { t } = useTranslation();

  const {
    numberOfCorrectAnswers,
    examTimeInSeconds,
    numberOfQuestionsInExam,
    passed,
    percentCorrect
  } = examResults;

  // keep this formatting
  const downloadContent = `${title}: ${
    passed ? t('learn.exam.passed') : t('learn.exam.not-passed')
  }

${t('learn.exam.number-of-questions', { n: numberOfQuestionsInExam })}
${t('learn.exam.correct-answers', { n: numberOfCorrectAnswers })}
${t('learn.exam.percent-correct', { n: percentCorrect })}
${t('learn.exam.time', { t: formatSecondsToTime(examTimeInSeconds) })}
`;

  const blob = new Blob([downloadContent], {
    type: 'text/plain'
  });
  const downloadURL = URL.createObjectURL(blob);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(downloadURL);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const examResultsMessage = passed
    ? t('learn.exam.passed-message')
    : t('learn.exam.not-passed-message');

  // TODO: Add share button
  return (
    <div className='exam-results-wrapper'>
      <div
        className='exam-results-header'
        data-playwright-test-label='exam-results-header'
      >
        {t('learn.exam.results-header', { title })}
      </div>
      <hr />
      <Spacer size='medium' />

      <div
        className='exam-results-message'
        data-playwright-test-label='exam-results-message'
      >
        {examResultsMessage}
      </div>
      <Spacer size='medium' />
      <div className='exam-results'>
        <div data-playwright-test-label='exam-results-question-results'>
          {t('learn.exam.question-results', {
            n: numberOfCorrectAnswers,
            q: numberOfQuestionsInExam
          })}
        </div>
        <div>|</div>
        <div data-playwright-test-label='exam-results-percent-results'>
          {t('learn.exam.percent-results', {
            p: percentCorrect
          })}
        </div>
        <div>|</div>
        <div data-playwright-test-label='exam-time'>
          {t('learn.exam.time', { t: formatSecondsToTime(examTimeInSeconds) })}
        </div>
      </div>
      <Spacer size='medium' />
      <Spacer size='medium' />
      <div>
        <Button
          block={true}
          variant='primary'
          data-playwright-test-label='download-exam-results'
          download={`${dashedName}.txt`}
          href={downloadURL}
        >
          {t('learn.download-results')}
        </Button>
        <Spacer size='xxSmall' />
        <Button
          block={true}
          variant='primary'
          data-playwright-test-label='exit-exam'
          onClick={exitExam}
        >
          {t('buttons.exit')}
        </Button>
      </div>
    </div>
  );
}

ExamResults.displayName = 'ExamResults';

export default ExamResults;
