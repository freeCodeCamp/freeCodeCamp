import { Button, Form } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { userSelector } from '../../redux';
import type { ProfileUI } from '../../redux/prop-types';
import { submitProfileUI } from '../../redux/settings';

import FullWidthRow from '../helpers/full-width-row';
import Spacer from '../helpers/spacer';
import SectionHeader from './section-header';
import ToggleSetting from './toggle-setting';

const mapStateToProps = createSelector(userSelector, user => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  user
}));

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ submitProfileUI }, dispatch);

type PrivacyProps = {
  submitProfileUI: (profileUI: ProfileUI) => void;
  t: TFunction;
  user: {
    profileUI: ProfileUI;
    username: string;
  };
};

function PrivacySettings({
  submitProfileUI,
  t,
  user
}: PrivacyProps): JSX.Element {
  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
  }

  function toggleFlag(flag: string): () => void {
    return () => {
      const privacyValues = { ...user.profileUI };
      privacyValues[flag as keyof ProfileUI] =
        !privacyValues[flag as keyof ProfileUI];
      submitProfileUI(privacyValues);
    };
  }

  const {
    isLocked = true,
    showAbout = false,
    showCerts = false,
    showDonation = false,
    showHeatMap = false,
    showLocation = false,
    showName = false,
    showPoints = false,
    showPortfolio = false,
    showTimeLine = false
  } = user.profileUI;

  return (
    <div className='privacy-settings' id='privacy-settings'>
      <SectionHeader>{t('settings.headings.privacy')}</SectionHeader>
      <FullWidthRow>
        <p>{t('settings.privacy')}</p>
        <Form inline={true} onSubmit={handleSubmit}>
          <ToggleSetting
            action={t('settings.labels.my-profile')}
            explain={t('settings.disabled')}
            flag={isLocked}
            flagName='isLocked'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('isLocked')}
          />
          <ToggleSetting
            action={t('settings.labels.my-name')}
            explain={t('settings.private-name')}
            flag={!showName}
            flagName='name'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showName')}
          />
          <ToggleSetting
            action={t('settings.labels.my-location')}
            flag={!showLocation}
            flagName='showLocation'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showLocation')}
          />
          <ToggleSetting
            action={t('settings.labels.my-about')}
            flag={!showAbout}
            flagName='showAbout'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showAbout')}
          />
          <ToggleSetting
            action={t('settings.labels.my-points')}
            flag={!showPoints}
            flagName='showPoints'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showPoints')}
          />
          <ToggleSetting
            action={t('settings.labels.my-heatmap')}
            flag={!showHeatMap}
            flagName='showHeatMap'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showHeatMap')}
          />
          <ToggleSetting
            action={t('settings.labels.my-certs')}
            explain={t('settings.disabled')}
            flag={!showCerts}
            flagName='showCerts'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showCerts')}
          />
          <ToggleSetting
            action={t('settings.labels.my-portfolio')}
            flag={!showPortfolio}
            flagName='showPortfolio'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showPortfolio')}
          />
          <ToggleSetting
            action={t('settings.labels.my-timeline')}
            explain={t('settings.disabled')}
            flag={!showTimeLine}
            flagName='showTimeLine'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showTimeLine')}
          />
          <ToggleSetting
            action={t('settings.labels.my-donations')}
            flag={!showDonation}
            flagName='showPortfolio'
            offLabel={t('buttons.public')}
            onLabel={t('buttons.private')}
            toggleFlag={toggleFlag('showDonation')}
          />
        </Form>
      </FullWidthRow>
      <FullWidthRow>
        <Spacer />
        <p>{t('settings.data')}</p>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          download={`${user.username}.json`}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(user)
          )}`}
        >
          {t('buttons.download-data')}
        </Button>
      </FullWidthRow>
    </div>
  );
}

PrivacySettings.displayName = 'PrivacySettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PrivacySettings));
