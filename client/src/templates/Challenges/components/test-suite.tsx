import React from 'react';

import Fail from '../../../assets/icons/fail';
import GreenPass from '../../../assets/icons/green-pass';
import Initial from '../../../assets/icons/initial';
import { ChallengeTest, Test } from '../../../redux/prop-types';

import './test-suite.css';

interface Props {
  tests?: (Test & ChallengeTest)[]
};

function getAccessibleText(err: string | undefined, pass: boolean, text: string) {
  let accessibleText = 'Waiting';
  const cleanText = text.replace(/<\/?code>/g, '');

  // Determine test status (i.e. icon)
  if (err) {
    accessibleText = 'Error';
  } else if (pass) {
    accessibleText = 'Pass';
  }

  // Append the text itself
  return accessibleText + ' - ' + cleanText;
}

function TestSuite({ tests = [] }: Props) {
  return (
    <div className='challenge-test-suite'>
      {tests.map(({ err, pass = false, text = '' }, index) => {
        const isInitial = !pass && !err;
        const statusIcon = pass && !err ? <GreenPass /> : <Fail />;
        return (
          <div
            aria-label={getAccessibleText(err, pass, text)}
            className='test-result'
            key={text.slice(-6) + index}
          >
            <div className='test-status-icon'>
              {isInitial ? <Initial /> : statusIcon}
            </div>
            <div
              aria-hidden='true'
              className='test-output'
              dangerouslySetInnerHTML={{ __html: text }}
              xs={10}
            />
          </div>
        );
      })}
    </div>
  );
}

TestSuite.displayName = 'TestSuite';

export default TestSuite;
