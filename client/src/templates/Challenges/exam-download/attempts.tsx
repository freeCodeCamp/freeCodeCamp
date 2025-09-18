import React, { useEffect } from 'react';
import { Table } from '@freecodecamp/ui';

import { Loader } from '../../../components/helpers';
import { examAttempts } from '../../../utils/ajax';

interface AttemptsProps {
  id: string;
}

export function Attempts({ id }: AttemptsProps) {
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
    return <p>{JSON.stringify(examIdsQuery.error)}</p>;
  }

  if (attemptsMutation.error) {
    return <p>{JSON.stringify(attemptsMutation.error)}</p>;
  }

  const attempts = attemptsMutation.data;

  if (!attempts) {
    return <Loader />;
  }

  if (attempts.length === 0) {
    return <p>No attempts yet</p>;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Date Taken</th>
          <th>Score [%]</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {attempts.map(attempt => (
          <tr key={attempt.startTimeInMS}>
            <td>{new Date(attempt.startTimeInMS).toTimeString()}</td>
            <td>{attempt.result ? `${attempt.result.percent}%` : 'Pending'}</td>
            <td>
              {attempt.result
                ? attempt.result.passed
                  ? 'Passed'
                  : 'Failed'
                : 'Pending'}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
