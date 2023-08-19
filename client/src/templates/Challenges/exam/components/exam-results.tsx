import { Button } from '@freecodecamp/react-bootstrap';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
      <div className='exam-results-header'>
        {t('learn.exam.results-header', { title })}
      </div>
      <hr />
      <Spacer size='medium' />

      <div className='exam-results-message'>{examResultsMessage}</div>
      <Spacer size='medium' />
      <div className='exam-results'>
        <div>
          {t('learn.exam.question-results', {
            n: numberOfCorrectAnswers,
            q: numberOfQuestionsInExam
          })}
        </div>
        <div>|</div>
        <div>
          {t('learn.exam.percent-results', {
            p: percentCorrect
          })}
        </div>
        <div>|</div>
        <div>
          {t('learn.exam.time', { t: formatSecondsToTime(examTimeInSeconds) })}
        </div>
      </div>
      <Spacer size='medium' />
      <Spacer size='medium' />
      <div className='exam-results-buttons'>
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          download={`${dashedName}.txt`}
          href={downloadURL}
        >
          {t('learn.download-results')}
        </Button>
        <Button
          block={true}
          bsStyle='primary'
          data-cy='exit-exam'
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
