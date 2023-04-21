import React from 'react';
import LightBulb from '../../../../assets/icons/lightbulb';
import Fail from '../../../../assets/icons/fail';

interface LowerJawTipsProps {
  testText: string;
  learnEncouragementText: string;
  htmlDescription: string;
  showFeedback: boolean;
}

const LowerJawTips: React.FC<LowerJawTipsProps> = ({
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
        <Fail aria-hidden='true' />
        <h2>{testText}</h2>
        <p>{learnEncouragementText}</p>
      </div>
      <div className='hint-status fade-in' aria-hidden={showFeedback}>
        <LightBulb aria-hidden='true' />
        <div
          className='hint-description'
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
      </div>
    </>
  );
};

export default LowerJawTips;
