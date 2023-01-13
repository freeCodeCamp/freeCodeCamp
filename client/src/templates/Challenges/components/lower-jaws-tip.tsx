import React from 'react';
import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';

interface LowerJawTipsProps {
  testText: string;
  learnEncouragementText: string;
  htmlDescription: string;
  showFeedback: boolean;
}

export const LowerJawTips = ({
  testText,
  learnEncouragementText,
  showFeedback,
  htmlDescription
}: LowerJawTipsProps) => {
  return (
    <>
      <div
        data-cy='failing-test-feedback'
        className='test-status fade-in'
        aria-hidden={showFeedback}
      >
        <div className='status-icon' aria-hidden='true'>
          <span>
            <Fail />
          </span>
        </div>
        <div className='test-status-description'>
          <h2>{testText}</h2>
          <p>{learnEncouragementText}</p>
        </div>
      </div>
      <div className='hint-status fade-in' aria-hidden={showFeedback}>
        <div className='hint-icon' aria-hidden='true'>
          <span>
            <LightBulb />
          </span>
        </div>
        <div
          className='hint-description'
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    </>
  );
};
