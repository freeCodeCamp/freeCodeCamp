import React from 'react';
import { useTranslation } from 'react-i18next';

import Fail from '../../../assets/icons/fail';
import GreenPass from '../../../assets/icons/green-pass';
import Initial from '../../../assets/icons/initial';

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

function TestSuite({ tests }: TestSuiteProps): JSX.Element {
  const { t } = useTranslation();
  const testSuiteTests = tests.filter(isTestSuiteTest);

  return (
    <>
      <h2 className='challenge-test-suite-heading'>
        {t('learn.editor-tabs.tests')}
      </h2>
      <ul className='challenge-test-suite'>
        {testSuiteTests.map(({ err, pass = false, text = '' }, index) => {
          const isInitial = !pass && !err;
          const statusIcon = pass && !err ? <GreenPass /> : <Fail />;
          const initialText = t('icons.waiting');
          const statusText =
            pass && !err ? t('icons.passed') : t('icons.failed');
          // Remove opening/closing <p> so screen reader will read both
          // status message and test text as one block.
          text = text.replace(/^<p>|<\/p>$/g, '');
          return (
            <li className='test-result' key={text.slice(-6) + String(index)}>
              <div className='test-status-icon' aria-hidden='true'>
                {isInitial ? <Initial /> : statusIcon}
              </div>
              <div className='test-output'>
                <span className='sr-only'>
                  {isInitial ? initialText : statusText}:{' '}
                </span>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

TestSuite.displayName = 'TestSuite';

export default TestSuite;
