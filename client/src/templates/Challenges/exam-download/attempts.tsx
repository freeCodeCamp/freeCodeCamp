import React, { useEffect } from 'react';
import { Table } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { Loader } from '../../../components/helpers';
import { examAttempts } from '../../../utils/ajax';

interface AttemptsProps {
  id: string;
}

export function Attempts({ id }: AttemptsProps) {
  const { t } = useTranslation();

  const examIdsQuery = examAttempts.useGetExamIdsByChallengeIdQuery(id);
  const [getAttempts, attemptsMutation] =
    examAttempts.useGetExamAttemptsByExamIdMutation();

  useEffect(() => {
    if (!examIdsQuery.data) {
      return;
    }

    const examId = examIdsQuery.data.at(0)!.examId;
    void getAttempts(examId);
  }, [examIdsQuery.data, getAttempts]);

  if (examIdsQuery.isLoading || attemptsMutation.isLoading) {
    return <Loader />;
  }
  if (examIdsQuery.error || !examIdsQuery.data) {
    console.error(examIdsQuery.error);
    return <p>{t('flash.generic-error')}</p>;
  }

  if (attemptsMutation.error) {
    console.error(attemptsMutation.error);
    return <p>{t('flash.generic-error')}</p>;
  }

  const attempts = attemptsMutation.data;

  if (attempts === undefined) {
    return <Loader />;
  }

  if (attempts.length === 0) {
    return <p>{t('exam.no-attempts-yet')}</p>;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>{t('exam.date-taken')}</th>
          <th>{t('exam.score')} [%]</th>
          <th>{t('exam.status')}</th>
        </tr>
      </thead>
      <tbody>
        {attempts.map(attempt => (
          <tr key={attempt.startTime}>
            <td>{new Date(attempt.startTime).toTimeString()}</td>
            <td>
              {attempt.result
                ? `${attempt.result.percent}%`
                : t('exam.pending')}
            </td>
            <td>
              {attempt.result
                ? attempt.result.passed
                  ? t('exam.passed')
                  : t('exam.failed')
                : t('exam.pending')}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
