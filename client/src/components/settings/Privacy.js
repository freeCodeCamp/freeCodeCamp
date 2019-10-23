import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Form } from '@freecodecamp/react-bootstrap';

import { userSelector } from '../../redux';
import { submitProfileUI } from '../../redux/settings';

import FullWidthRow from '../helpers/FullWidthRow';
import Spacer from '../helpers/Spacer';
import ToggleSetting from './ToggleSetting';
import SectionHeader from './SectionHeader';

const mapStateToProps = createSelector(
  userSelector,
  user => ({
    user
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ submitProfileUI }, dispatch);

const propTypes = {
  submitProfileUI: PropTypes.func.isRequired,
  user: PropTypes.shape({
    profileUI: PropTypes.shape({
      isLocked: PropTypes.bool,
      showAbout: PropTypes.bool,
      showCerts: PropTypes.bool,
      showDonation: PropTypes.bool,
      showHeatMap: PropTypes.bool,
      showLocation: PropTypes.bool,
      showName: PropTypes.bool,
      showPoints: PropTypes.bool,
      showPortfolio: PropTypes.bool,
      showTimeLine: PropTypes.bool
    }),
    username: PropTypes.String
  })
};

class PrivacySettings extends Component {
  handleSubmit = e => e.preventDefault();

  toggleFlag = flag => () => {
    const privacyValues = { ...this.props.user.profileUI };
    privacyValues[flag] = !privacyValues[flag];
    this.props.submitProfileUI(privacyValues);
  };

  render() {
    const { user } = this.props;
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
      <div className='privacy-settings'>
        <SectionHeader>Privacy Settings</SectionHeader>
        <FullWidthRow>
          <p>
            The settings in this section enable you to control what is shown on
            your freeCodeCamp public portfolio.
          </p>
          <Form inline={true} onSubmit={this.handleSubmit}>
            <ToggleSetting
              action='My profile'
              explain='Your certifications will be disabled, if set to private.'
              flag={isLocked}
              flagName='isLocked'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('isLocked')}
            />
            <ToggleSetting
              action='My name'
              flag={!showName}
              flagName='name'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showName')}
            />
            <ToggleSetting
              action='My location'
              flag={!showLocation}
              flagName='showLocation'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showLocation')}
            />
            <ToggleSetting
              action='My "about me"'
              flag={!showAbout}
              flagName='showAbout'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showAbout')}
            />
            <ToggleSetting
              action='My points'
              flag={!showPoints}
              flagName='showPoints'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showPoints')}
            />
            <ToggleSetting
              action='My heat map'
              flag={!showHeatMap}
              flagName='showHeatMap'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showHeatMap')}
            />
            <ToggleSetting
              action='My certifications'
              explain='Your certifications will be disabled, if set to private.'
              flag={!showCerts}
              flagName='showCerts'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showCerts')}
            />
            <ToggleSetting
              action='My portfolio'
              flag={!showPortfolio}
              flagName='showPortfolio'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showPortfolio')}
            />
            <ToggleSetting
              action='My time line'
              explain='Your certifications will be disabled, if set to private.'
              flag={!showTimeLine}
              flagName='showTimeLine'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showTimeLine')}
            />
            <ToggleSetting
              action='My donations'
              flag={!showDonation}
              flagName='showPortfolio'
              offLabel='Public'
              onLabel='Private'
              toggleFlag={this.toggleFlag('showDonation')}
            />
          </Form>
        </FullWidthRow>
        <FullWidthRow>
          <Spacer />
          <p>
            To see what data we hold on your account, click the 'Download your
            data' button below
          </p>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            download={`${user.username}.json`}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(user)
            )}`}
          >
            Download your data
          </Button>
        </FullWidthRow>
      </div>
    );
  }
}

PrivacySettings.displayName = 'PrivacySettings';
PrivacySettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacySettings);
