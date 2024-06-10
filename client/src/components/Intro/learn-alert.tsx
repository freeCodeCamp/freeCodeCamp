import React from 'react';
import { Alert } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Link, Spacer } from '../helpers';
import { ProgressBar } from '../Progress/progress-bar';

interface LearnAlertProps {
  onLearnDonationAlertClick: () => void;
  isDonating: boolean;
}

const LearnAlert = ({
  onLearnDonationAlertClick,
  isDonating
}: LearnAlertProps): JSX.Element | null => {
  const { t } = useTranslation();
  const seasonalAlertFlag = useFeature('seasonal-alert');
  const progressAlertFlag2024 = useFeature('progress-alert-2024');
  const createUniversityFlag = useFeature('university-alert');
  const progressAlertDefault = (text: string, value?: number) => (
    <Alert variant='info' className='annual-donation-alert'>
      {value && (
        <>
          <div className='text-center'>
            <h2>{t('learn.donation-heading')}</h2>
            <Spacer size='small' />
            <b className='m-0 progress-percent-value'>{`${value}%`}</b>
          </div>
          <div aria-hidden='true' className='progress-wrapper'>
            <div>
              <ProgressBar now={value} />
            </div>
          </div>
        </>
      )}
      <p>{text}</p>
      <Spacer size='medium' />
      <div className={'text-center'}>
        <Link
          className='btn donate-button'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onLearnDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </div>
    </Alert>
  );

  const seasonalAlertFlagAlert = (
    <Alert variant='info' className='annual-donation-alert'>
      <p>
        <b>{t('learn.season-greetings-fcc')}</b>
      </p>
      <p>{t('learn.if-getting-value')}</p>
      <hr />
      <p className='btn-container'>
        <Link
          className='btn donate-button'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onLearnDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  const progressAlert2024 = progressAlertDefault(
    t('donate.help-us-reach-20k'),
    Number(progressAlertFlag2024.value)
  );

  const universityAlert = (
    <Alert variant='info' className='university-alert'>
      <p>
        <b>{t('learn.building-a-university')}</b>
      </p>
      <p>{t('learn.if-help-university')}</p>
      <Spacer size='medium' />
      <p className={'text-center'}>
        <Link
          className='btn donate-button'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onLearnDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  if (!isDonating) {
    if (createUniversityFlag.on) return universityAlert;
    if (progressAlertFlag2024.on) return progressAlert2024;
    if (seasonalAlertFlag.on) return seasonalAlertFlagAlert;
  }
  return null;
};

LearnAlert.displayName = 'LearnAlert';

export default LearnAlert;
