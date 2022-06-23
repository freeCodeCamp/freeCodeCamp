import React from 'react';

import Fail from '../../../assets/icons/test-fail';
import GreenPass from '../../../assets/icons/test-pass';
import Initial from '../../../assets/icons/test-initial';

import './test-suite.css';
import { ChallengeTest, Test } from '../../../redux/prop-types';

type TestSuiteTest = {
  err?: string;
  pass?: boolean;
} & ChallengeTest;

function isTestSuiteTest(test: Test): test is TestSuiteTest {
  return 'text' in test;
}

interface TestSuiteProps {
  tests: Test[];
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
  const testSuiteTests = tests.filter(isTestSuiteTest);

  return (
    <div className='challenge-test-suite'>
      {testSuiteTests.map(({ err, pass = false, text = '' }, index) => {
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
