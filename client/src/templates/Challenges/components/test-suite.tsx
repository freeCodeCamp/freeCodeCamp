import React from 'react';

import Fail from '../../../assets/icons/fail';
import GreenPass from '../../../assets/icons/green-pass';
import Initial from '../../../assets/icons/initial';

import './test-suite.css';
import { Test } from '../../../redux/prop-types';

interface TestSuiteProps {
  tests?: Test[];
}

function getAccessibleText(text: string, err?: string, pass?: boolean) {
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

function TestSuite({ tests }: TestSuiteProps): JSX.Element {
  return (
    <div className='challenge-test-suite'>
      {tests?.map(({ err, pass = false, text = '' }, index) => {
        const isInitial = !pass && !err;
        const statusIcon = pass && !err ? <GreenPass /> : <Fail />;
        return (
          <div
            aria-label={getAccessibleText(text, err, pass)}
            className='test-result'
            key={text.slice(-6) + String(index)}
          >
            <div className='test-status-icon'>
              {isInitial ? <Initial /> : statusIcon}
            </div>
            <div
              aria-hidden='true'
              className='test-output'
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        );
      })}
    </div>
  );
}

TestSuite.displayName = 'TestSuite';

export default TestSuite;
