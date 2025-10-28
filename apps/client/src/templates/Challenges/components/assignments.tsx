import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import ChallengeHeading from './challenge-heading';
import PrismFormatted from './prism-formatted';

import './assignments.css';

type AssignmentsProps = {
  assignments: string[];
  allAssignmentsCompleted: boolean;
  handleAssignmentChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    totalAssignments: number
  ) => void;
};

function Assignments({
  assignments,
  allAssignmentsCompleted,
  handleAssignmentChange
}: AssignmentsProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <ChallengeHeading
        heading={t('learn.assignments', { count: assignments.length })}
      />
      <div className='video-quiz-options'>
        {assignments.map((assignment, index) => (
          <label className='video-quiz-option-label' key={index}>
            <input
              name='assignment'
              type='checkbox'
              onChange={event =>
                handleAssignmentChange(event, assignments.length)
              }
            />
            <PrismFormatted className={'video-quiz-option'} text={assignment} />
            <Spacer size='m' />
          </label>
        ))}
      </div>
      {!allAssignmentsCompleted && (
        <>
          <Spacer size='m' />
          <div className='assignments-not-complete'>
            {t('learn.assignment-not-complete', { count: assignments.length })}
          </div>
        </>
      )}
      <Spacer size='m' />
    </>
  );
}

Assignments.displayName = 'Assignments';

export default Assignments;
