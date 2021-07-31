import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Form } from '@freecodecamp/react-bootstrap';
import { TFunction, withTranslation } from 'react-i18next';
import type { Dispatch } from 'redux';

import { userSelector } from '../../redux';
import { submitProfileUI } from '../../redux/settings';

import FullWidthRow from '../helpers/full-width-row';
import Spacer from '../helpers/spacer';
import ToggleSetting from './toggle-setting';
import SectionHeader from './section-header';

const mapStateToProps = createSelector(userSelector, user => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  user
}));

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ submitProfileUI }, dispatch);

type ProfileUIType = {
  isLocked: boolean;
  showAbout: boolean;
  showCerts: boolean;
  showDonation: boolean;
  showHeatMap: boolean;
  showLocation: boolean;
  showName: boolean;
  showPoints: boolean;
  showPortfolio: boolean;
  showTimeLine: boolean;
};

type PrivacyProps = {
  submitProfileUI: (profileUI: ProfileUIType) => void;
  t: TFunction;
  user: {
    profileUI: ProfileUIType;
    username: string;
  };
};

class PrivacySettings extends Component<PrivacyProps> {
  static displayName: string;

  handleSubmit = (e: React.FormEvent) => e.preventDefault();

  toggleFlag = (flag: string) => () => {
    const privacyValues = { ...this.props.user.profileUI };
    privacyValues[flag as keyof ProfileUIType] =
      !privacyValues[flag as keyof ProfileUIType];
    this.props.submitProfileUI(privacyValues);
  };

  render() {
    const { t, user } = this.props;
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
          <Form inline={true} onSubmit={this.handleSubmit}>
            <ToggleSetting
              action={t('settings.labels.my-profile')}
              explain={t('settings.disabled')}
              flag={isLocked}
              flagName='isLocked'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('isLocked')}
            />
            <ToggleSetting
              action={t('settings.labels.my-name')}
              explain={t('settings.private-name')}
              flag={!showName}
              flagName='name'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showName')}
            />
            <ToggleSetting
              action={t('settings.labels.my-location')}
              flag={!showLocation}
              flagName='showLocation'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showLocation')}
            />
            <ToggleSetting
              action={t('settings.labels.my-about')}
              flag={!showAbout}
              flagName='showAbout'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showAbout')}
            />
            <ToggleSetting
              action={t('settings.labels.my-points')}
              flag={!showPoints}
              flagName='showPoints'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showPoints')}
            />
            <ToggleSetting
              action={t('settings.labels.my-heatmap')}
              flag={!showHeatMap}
              flagName='showHeatMap'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showHeatMap')}
            />
            <ToggleSetting
              action={t('settings.labels.my-certs')}
              explain={t('settings.disabled')}
              flag={!showCerts}
              flagName='showCerts'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showCerts')}
            />
            <ToggleSetting
              action={t('settings.labels.my-portfolio')}
              flag={!showPortfolio}
              flagName='showPortfolio'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showPortfolio')}
            />
            <ToggleSetting
              action={t('settings.labels.my-timeline')}
              flag={!showTimeLine}
              flagName='showTimeLine'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showTimeLine')}
            />
            <ToggleSetting
              action={t('settings.labels.my-donations')}
              flag={!showDonation}
              flagName='showPortfolio'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={this.toggleFlag('showDonation')}
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
}

PrivacySettings.displayName = 'PrivacySettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PrivacySettings));
