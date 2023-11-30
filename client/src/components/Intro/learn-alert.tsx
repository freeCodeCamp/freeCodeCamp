import React from 'react';
import { Alert } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';

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

  if (seasonalMessage.on && !isDonating) return seasonalMessageAlert;
  return null;
};

LearnAlert.displayName = 'LearnAlert';

export default LearnAlert;
