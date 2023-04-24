import React from 'react';
import { useTranslation } from 'react-i18next';
import LightBulb from '../../../../assets/icons/lightbulb';
import Fail from '../../../../assets/icons/fail';

interface LowerJawTipsProps {
  learnEncouragementText: string;
  htmlDescription: string;
  showFeedback: boolean;
}

const LowerJawTips: React.FC<LowerJawTipsProps> = ({
  learnEncouragementText,
  showFeedback,
  htmlDescription
}: LowerJawTipsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        data-cy='failing-test-feedback'
        className='test-status fade-in'
        aria-hidden={showFeedback}
      >
        <Fail aria-hidden='true' />
        <h2>{t('learn.test')}</h2>
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
