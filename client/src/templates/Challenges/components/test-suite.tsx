import React from 'react';

import Fail from '../../../assets/icons/fail';
import GreenPass from '../../../assets/icons/green-pass';
import Initial from '../../../assets/icons/initial';

import { CertTest, ChallengeTest, Test } from '../../../redux/prop-types';

import './test-suite.css';

function getAccessibleText(
  err: string | undefined,
  pass: boolean,
  text: string
) {
  let accessibleText = 'Waiting';
  const cleanText = text.replace(/<\/?code>/g, '');

  // Determine test status (i.e. icon)
  if (err) {
    accessibleText = 'Error';
  } else if (pass) {
    accessibleText = 'Pass';
  }

  // Append the text itself
  return `${accessibleText}  -  ${cleanText}`;
}

interface TestSuiteProps {
  tests: Test[];
}

const isChallengeTest = (
  test: ChallengeTest | CertTest
): test is ChallengeTest => 'text' in test && 'testString' in test;

function TestSuite({ tests }: TestSuiteProps): JSX.Element {
  return (
    <div className='challenge-test-suite'>
      {tests.map(({ err, pass = false, ...rest }, index) => {
        const isInitial = !pass && !err;
        const statusIcon = pass && !err ? <GreenPass /> : <Fail />;
        const text = isChallengeTest(rest) ? rest.text : '';

        return (
          <div
            aria-label={getAccessibleText(err, pass, text)}
            className='test-result'
            key={`${text.slice(-6)}${index}`}
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
