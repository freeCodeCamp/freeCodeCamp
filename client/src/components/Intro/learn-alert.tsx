import React from 'react';
import { Alert } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';
import { ProgressBar } from '../Progress/progress-bar';

interface LearnAlertProps {
  onDonationAlertClick: () => void;
  isDonating: boolean;
}

const LearnAlert = ({
  onDonationAlertClick,
  isDonating
}: LearnAlertProps): JSX.Element | null => {
  const { t } = useTranslation();
  const seasonalMessage = useFeature('seasonal-alert');

  const progressFlag = useFeature('progress-alert');

  const progressAlert = (
    <Alert variant='info' className='annual-donation-alert'>
      <div aria-hidden='true' className='progress-wrapper'>
        <div>
          <ProgressBar now={Number(progressFlag.value)} />
        </div>
      </div>
      <h3 className='text-center'>{`${progressFlag.value}%`}</h3>
      <p>{t('donate.help-us-reach-goal')}</p>
      <hr />
      <p className={'text-center'}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  const seasonalMessageAlert = (
    <Alert variant='info' className='annual-donation-alert'>
      <p>
        <b>{t('learn.season-greetings-fcc')}</b>
      </p>
      <p>{t('learn.if-getting-value')}</p>
      <hr />
      <p className={'text-center'}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  if (progressFlag.on) return progressAlert;

  if (seasonalMessage.on && !isDonating) return seasonalMessageAlert;
  return null;
};

LearnAlert.displayName = 'LearnAlert';

export default LearnAlert;
