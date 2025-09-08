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
  const hasOnlyOneAssignment = assignments.length === 1;
  return (
    <>
      <ChallengeHeading
        heading={t($ =>
          hasOnlyOneAssignment
            ? $.learn.assignments_one
            : $.learn.assignments_other
        )}
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
            {t($ =>
              hasOnlyOneAssignment
                ? $.learn['assignment-not-complete_one']
                : $.learn['assignment-not-complete_other']
            )}
          </div>
        </>
      )}
      <Spacer size='m' />
    </>
  );
}

Assignments.displayName = 'Assignments';

export default Assignments;
