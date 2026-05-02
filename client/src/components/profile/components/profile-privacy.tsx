import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Button, Spacer } from '@freecodecamp/ui';
import type { ProfileUI } from '../../../redux/prop-types';
import { userSelector } from '../../../redux/selectors';
import { submitProfileUI } from '../../../redux/settings/actions';
import { FullWidthRow } from '../../helpers';
import ToggleRadioSetting from '../../settings/toggle-radio-setting';
import DropDown from '../../../assets/icons/dropdown';
import './profile-privacy.css';

const mapStateToProps = createSelector(userSelector, user => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  user
}));

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ submitProfileUI }, dispatch);

type ProfilePrivacyProps = {
  submitProfileUI: (profileUI: ProfileUI) => void;
  user: { profileUI: ProfileUI };
};

function ProfilePrivacyComponent({
  submitProfileUI,
  user
}: ProfilePrivacyProps): JSX.Element {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(user.profileUI.isLocked);
  // Snapshot of the original values to detect unsaved changes
const [initialPrivacyValues, setInitialPrivacyValues] = useState({ ...user.profileUI });
const [privacyValues, setPrivacyValues] = useState({ ...user.profileUI });
const madeChanges = JSON.stringify(privacyValues) !== JSON.stringify(initialPrivacyValues);

  function toggleFlag(flag: keyof ProfileUI): () => void {
    return () => {
      
      setPrivacyValues({ ...privacyValues, [flag]: !privacyValues[flag] });
    };
  }

  function submitNewProfileSettings(e: React.FormEvent) {
    e.preventDefault();
    if (!madeChanges) return;
    submitProfileUI(privacyValues);
    setInitialPrivacyValues({ ...privacyValues }); // reset baseline after saving
  }

  return (
    <FullWidthRow>
      <div className='profile-privacy'>
        <button
          className='profile-privacy-header'
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          type='button'
        >
          <h2 className='profile-privacy-title'>
            {t('settings.headings.privacy')}
          </h2>
          <span
            className={`profile-privacy-chevron ${isExpanded ? 'expanded' : ''}`}
            aria-hidden='true'
          >
            <DropDown />
          </span>
        </button>
        {isExpanded && (
          <div className='profile-privacy-content'>
            <p>{t('settings.privacy')}</p>
            <form onSubmit={submitNewProfileSettings}>
              <div role='group' aria-label={t('settings.headings.privacy')}>
                <ToggleRadioSetting
                  action={t('settings.labels.my-profile')}
                  explain={t('settings.disabled')}
                  flag={privacyValues['isLocked']}
                  flagName='isLocked'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('isLocked')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-name')}
                  explain={t('settings.private-name')}
                  flag={!privacyValues['showName']}
                  flagName='name'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showName')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-location')}
                  flag={!privacyValues['showLocation']}
                  flagName='showLocation'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showLocation')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-about')}
                  flag={!privacyValues['showAbout']}
                  flagName='showAbout'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showAbout')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-points')}
                  flag={!privacyValues['showPoints']}
                  flagName='showPoints'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showPoints')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-heatmap')}
                  flag={!privacyValues['showHeatMap']}
                  flagName='showHeatMap'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showHeatMap')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-certs')}
                  explain={t('settings.disabled')}
                  flag={!privacyValues['showCerts']}
                  flagName='showCerts'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showCerts')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-portfolio')}
                  flag={!privacyValues['showPortfolio']}
                  flagName='showPortfolio'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showPortfolio')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-experience')}
                  flag={!privacyValues['showExperience']}
                  flagName='showExperience'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showExperience')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-timeline')}
                  explain={t('settings.disabled')}
                  flag={!privacyValues['showTimeLine']}
                  flagName='showTimeLine'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showTimeLine')}
                />
                <ToggleRadioSetting
                  action={t('settings.labels.my-donations')}
                  flag={!privacyValues['showDonation']}
                  flagName='showDonation'
                  offLabel={t('buttons.public')}
                  onLabel={t('buttons.private')}
                  toggleFlag={toggleFlag('showDonation')}
                />
              </div>
              <Spacer size='s' />
              <Button
                type='submit'
                size='large'
                variant='primary'
                block={true}
                disabled={!madeChanges}
                {...(!madeChanges && { tabIndex: -1 })}
              >
                {t('buttons.save')}{' '}
                <span className='sr-only'>
                  {t('settings.headings.privacy')}
                </span>
              </Button>
            </form>
          </div>
        )}
      </div>
      <Spacer size='m' />
    </FullWidthRow>
  );
}


ProfilePrivacyComponent.displayName = 'ProfilePrivacy';

export const ProfilePrivacy = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePrivacyComponent);
