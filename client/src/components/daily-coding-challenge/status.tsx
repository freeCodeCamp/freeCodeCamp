import React from 'react';
import { RibbonIcon } from '../../assets/icons/completion-ribbon';

import './status.css';

function DailyCodingChallengeStatus(): JSX.Element {
  return (
    <div className='daily-coding-challenge-status'>
      <p>Daily Challenges Completed: 5</p>
      <p>Daily Challenge Status: Kindling Coder</p>
      <RibbonIcon
        value={0}
        showNumbers={false}
        isCompleted={true}
        isClaimed={true}
      />
    </div>
  );
}

DailyCodingChallengeStatus.displayName = 'DailyCodingChallengeStatus';

export default DailyCodingChallengeStatus;
