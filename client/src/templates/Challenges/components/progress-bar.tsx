import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProgressBar: React.FC<{
  completedPercent: number;
}> = ({ completedPercent }) => {
  const [shownPercent, setShownPercent] = useState(0);
  const { t } = useTranslation();

  return (
    <div
      className='progress-bar-wrap'
      aria-label={t('learn.percent-complete', {
        percent: completedPercent
      })}
    >
      <div className='progress-bar-background' aria-hidden='true'>
        {t('learn.percent-complete', {
          percent: shownPercent
        })}
      </div>
      <div
        aria-hidden='true'
        className='progress-bar-percent'
        data-testid='fcc-progress-bar-percent'
        style={{ width: `${shownPercent}%` }}
      >
        <div className='progress-bar-foreground'>
          {t('learn.percent-complete', {
            percent: shownPercent
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
