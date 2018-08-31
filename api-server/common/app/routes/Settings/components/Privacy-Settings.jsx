import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import { updateMyProfileUI } from '../redux';
import { userSelector } from '../../../redux';

import { FullWidthRow, Spacer } from '../../../helperComponents';
import SectionHeader from './SectionHeader.jsx';
import ToggleSetting from './ToggleSetting.jsx';

const mapStateToProps = createSelector(
  userSelector,
  user => ({
    ...user.profileUI,
    user
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMyProfileUI }, dispatch);

const propTypes = {
  isLocked: PropTypes.bool,
  showAbout: PropTypes.bool,
  showCerts: PropTypes.bool,
  showDonation: PropTypes.bool,
  showHeatMap: PropTypes.bool,
  showLocation: PropTypes.bool,
  showName: PropTypes.bool,
  showPoints: PropTypes.bool,
  showPortfolio: PropTypes.bool,
  showTimeLine: PropTypes.bool,
  updateMyProfileUI: PropTypes.func.isRequired,
  user: PropTypes.object
};

function PrivacySettings(props) {
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
    showTimeLine = false,
    updateMyProfileUI,
    user
  } = props;
  const toggleFlag = flag =>
    () => updateMyProfileUI({ profileUI: { [flag]: !props[flag] } });
  return (
    <div className='privacy-settings'>
      <SectionHeader>Privacy Settings</SectionHeader>
      <FullWidthRow>
      <p>
        The settings in this section enable you to control what is shown on{' '}
        your freeCodeCamp public portfolio.
      </p>
      <p>There is also a button to see what data we hold on your account</p>
      <ToggleSetting
        action='My profile'
        explain={
          'While your profile is completely private, no one will be able to ' +
          'see your certifications'
        }
        flag={ isLocked }
        flagName='isLocked'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('isLocked') }
      />
      <ToggleSetting
        action='My name'
        flag={ !showName }
        flagName='name'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showName') }
      />
      <ToggleSetting
        action='My location'
        flag={ !showLocation }
        flagName='showLocation'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showLocation') }
      />
      <ToggleSetting
        action='My "about me"'
        flag={ !showAbout }
        flagName='showAbout'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showAbout') }
      />
      <ToggleSetting
        action='My points'
        flag={ !showPoints }
        flagName='showPoints'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showPoints') }
      />
      <ToggleSetting
        action='My heat map'
        flag={ !showHeatMap }
        flagName='showHeatMap'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showHeatMap') }
      />
      <ToggleSetting
        action='My certifications'
        explain='Your certifications will be disabled'
        flag={ !showCerts }
        flagName='showCerts'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showCerts') }
      />
      <ToggleSetting
        action='My portfolio'
        flag={ !showPortfolio }
        flagName='showPortfolio'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showPortfolio') }
      />
      <ToggleSetting
        action='My time line'
        explain='Your certifications will be disabled'
        flag={ !showTimeLine }
        flagName='showTimeLine'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showTimeLine') }
      />
      <ToggleSetting
        action='My donations'
        flag={ !showDonation }
        flagName='showPortfolio'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showDonation') }
      />
      </FullWidthRow>
      <FullWidthRow>
        <Spacer />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          download={`${user.username}.json`}
          href={
            `data:text/json;charset=utf-8,${
              encodeURIComponent(JSON.stringify(user))
            }`
          }
          >
          Download all your data
        </Button>
      </FullWidthRow>
    </div>
  );
}

PrivacySettings.displayName = 'PrivacySettings';
PrivacySettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PrivacySettings);
