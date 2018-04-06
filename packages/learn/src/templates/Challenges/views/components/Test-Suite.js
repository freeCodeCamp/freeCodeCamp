import React from 'react';
import PropTypes from 'prop-types';

import GreenPass from '../../icons/GreenPass';
import RedFail from '../../icons/RedFail';

import './test-suite.css';

const propTypes = {
  tests: PropTypes.arrayOf(PropTypes.object)
};

function getAccessibleText(err, pass, text) {
  let accessibleText = 'Waiting';

  // Determine test status (i.e. icon)
  if (err) {
    accessibleText = 'Error';
  } else if (pass) {
    accessibleText = 'Pass';
  }

  // Append the text itself
  return accessibleText + ' - ' + text;
}

function TestSuite({ tests }) {
  return (
    <div className='challenge-test-suite'>
      {tests.map(({ err, pass = false, text = '' }, index) => {
        return (
          <div
            aria-label={getAccessibleText(err, pass, text)}
            className='test-result'
            key={text.slice(-6) + index}
            tabIndex='0'
            >
            <div className='test-status-icon'>
              {pass ? <GreenPass /> : <RedFail />}
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
TestSuite.propTypes = propTypes;

export default TestSuite;
