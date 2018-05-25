import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { updateMyProfileUI } from '../redux';
import { userSelector } from '../../../redux';

import { FullWidthRow } from '../../../helperComponents';
import SectionHeader from './SectionHeader.jsx';
import ToggleSetting from './ToggleSetting.jsx';

const mapStateToProps = createSelector(
  userSelector,
  ({
    profileUI = {}
  }) => ({
    ...profileUI
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMyProfileUI }, dispatch);

const propTypes = {
  isLocked: PropTypes.bool,
  showAbout: PropTypes.bool,
  showCerts: PropTypes.bool,
  showHeatMap: PropTypes.bool,
  showLocation: PropTypes.bool,
  showName: PropTypes.bool,
  showPoints: PropTypes.bool,
  showPortfolio: PropTypes.bool,
  showTimeLine: PropTypes.bool,
  updateMyProfileUI: PropTypes.func.isRequired
};

function PrivacySettings(props) {
  const {
    isLocked,
    showAbout,
    showCerts,
    showHeatMap,
    showLocation,
    showName,
    showPoints,
    showPortfolio,
    showTimeLine,
    updateMyProfileUI
  } = props;
  const toggleFlag = flag =>
    () => updateMyProfileUI({ profileUI: { [flag]: !props[flag] } });
  return (
    <div className='privacy-settings'>
      <SectionHeader>Privacy Settings</SectionHeader>
      <FullWidthRow>
      <p>
        The settings in this section enable you to control what is show on{' '}
        your freeCodeCamp public portfolio.
      </p>
      <ToggleSetting
        action='Make my profile completely private'
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
        action='Make my name completely private'
        flag={ !showName }
        flagName='name'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showName') }
      />
      <ToggleSetting
        action='Make my location completely private'
        flag={ !showLocation }
        flagName='showLocation'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showLocation') }
      />
      <ToggleSetting
        action='Make my "about me" completely private'
        flag={ !showAbout }
        flagName='showAbout'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showAbout') }
      />
      <ToggleSetting
        action='Make my points completely private'
        flag={ !showPoints }
        flagName='showPoints'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showPoints') }
      />
      <ToggleSetting
        action='Make my heat map completely private'
        flag={ !showHeatMap }
        flagName='showHeatMap'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showHeatMap') }
      />
      <ToggleSetting
        action='Make my certifications completely private'
        explain='Your certifications will be disabled'
        flag={ !showCerts }
        flagName='showCerts'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showCerts') }
      />
      <ToggleSetting
        action='Make my portfolio completely private'
        flag={ !showPortfolio }
        flagName='showPortfolio'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showPortfolio') }
      />
      <ToggleSetting
        action='Make my time line completely private'
        flag={ !showTimeLine }
        flagName='showTimeLine'
        offLabel='Public'
        onLabel='Private'
        toggleFlag={ toggleFlag('showTimeLine') }
      />
      </FullWidthRow>
    </div>
  );
}

PrivacySettings.displayName = 'PrivacySettings';
PrivacySettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PrivacySettings);
