import React, { useEffect } from 'react';
import { Table } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { Loader } from '../../../components/helpers';
import { Attempt, examAttempts } from '../../../utils/ajax';

interface AttemptsProps {
  examChallengeId: string;
}

export function Attempts({ examChallengeId }: AttemptsProps) {
  const { t } = useTranslation();

  const examIdsQuery =
    examAttempts.useGetExamIdsByChallengeIdQuery(examChallengeId);
  const [getAttempts, attemptsMutation] =
    examAttempts.useGetExamAttemptsByExamIdMutation();

  useEffect(() => {
    if (!examIdsQuery.data) {
      return;
    }

    const examId = examIdsQuery.data.at(0)?.examId;
    if (examId === undefined) {
      return;
    }

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

  if (attempts === undefined || attempts.length === 0) {
    return <p>{t('exam.no-attempts-yet')}</p>;
  }

  function renderScore(attempt: Attempt) {
    switch (attempt.status) {
      case 'Approved':
        return `${attempt.result.score.toFixed(2)}%`;
      case 'Denied':
        return t('exam.denied');
      case 'InProgress':
        return t('exam.in-progress');
      case 'PendingModeration':
      case 'AwaitingChallenges':
        return t('exam.pending');
      case 'Expired':
        return t('exam.pending');
    }
  }

  function renderStatus(attempt: Attempt) {
    switch (attempt.status) {
      case 'Approved':
        return attempt.result.score >= attempt.result.passingPercent
          ? t('exam.passed')
          : t('exam.failed');
      case 'Denied':
        return t('exam.denied');
      case 'InProgress':
        return t('exam.in-progress');
      case 'PendingModeration':
      case 'AwaitingChallenges':
        return t('exam.pending');
      case 'Expired':
        return t('exam.pending');
    }
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
            <td>{new Date(attempt.startTime).toLocaleString()}</td>
            <td>{renderScore(attempt)}</td>
            <td>{renderStatus(attempt)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
