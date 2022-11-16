import React from 'react';
import { Alert } from '@freecodecamp/react-bootstrap';
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
  const researchRecruitment = useFeature('show-research-recruitment-alert');
  const universityCreation = useFeature('university-creation-alert');
  const seasonalMessage = useFeature('seasonal-alert');

  const researchRecruitmentAlert = (
    <Alert>
      <p>
        <b>Launching Oct 19</b>: freeCodeCamp is teaming up with researchers
        from Stanford and UPenn to study how to help people build strong coding
        habits.
      </p>
      <p style={{ marginBottom: 20, marginTop: 14 }}>
        Would you like to get involved? You’ll get free coaching from our
        scientists.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='https://wharton.qualtrics.com/jfe/form/SV_57rJfXROkQDDU2y'
        >
          Learn about HabitLab
        </Link>
      </div>
    </Alert>
  );

  const seasonalMessageAlert = (
    <Alert bsStyle='info' className='annual-donation-alert'>
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

  const universityCreationAlert = (
    <Alert bsStyle='info' className='annual-donation-alert'>
      <p>
        <b>{t('learn.building-a-university')}</b>
      </p>
      <p>{t('learn.if-help-university')}</p>
      <hr />
      <p className={'text-center'}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onDonationAlertClick}
        >
          {t('donate.become-supporter')}
        </Link>
      </p>
    </Alert>
  );

  if (researchRecruitment.on) return researchRecruitmentAlert;
  if (universityCreation.on && !isDonating) return universityCreationAlert;
  if (seasonalMessage.on) return seasonalMessageAlert;
  return null;
};

LearnAlert.displayName = 'LearnAlert';

export default LearnAlert;
