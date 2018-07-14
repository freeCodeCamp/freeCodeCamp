import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import ns from './ns.json';
import { FullWidthRow, Spacer, Loader } from '../../helperComponents';
import AboutSettings from './components/About-Settings.jsx';
import InternetSettings from './components/Internet-Settings.jsx';
import EmailSettings from './components/Email-Settings.jsx';
import DangerZone from './components/DangerZone.jsx';
import CertificationSettings from './components/Cert-Settings.jsx';
import PortfolioSettings from './components/Portfolio-Settings.jsx';
import PrivacySettings from './components/Privacy-Settings.jsx';
import Honesty from './components/Honesty.jsx';

import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  usernameSelector,
  themeSelector,
  hardGoTo
} from '../../redux';

const mapStateToProps = createSelector(
  usernameSelector,
  themeSelector,
  signInLoadingSelector,
  (
    username,
    theme,
    showLoading,
  ) => ({
    showLoading,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  toggleNightMode,
  updateTitle
};

const propTypes = {
  hardGoTo: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Settings extends React.Component {

  componentWillMount() {
    this.props.updateTitle('Settings');
  }

  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      showLoading,
      username
    } = this.props;
    if (!username && showLoading) {
      return <Loader />;
    }
    return (
      <div className={ `${ns}-container` }>
        <FullWidthRow>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              className='btn-link-social'
              href={ `/${username}`}
              >
              Show me my public portfolio
            </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className='btn-link-social'
            href={ '/signout' }
            >
            Sign me out of freeCodeCamp
          </Button>
        </FullWidthRow>
        <h1 className='text-center'>{ `Account Settings for ${username}` }</h1>
        <div className='offset-negative-row'>
        <AboutSettings />
        <Spacer />
        <PrivacySettings />
        <Spacer />
        <EmailSettings />
        <Spacer />
        <InternetSettings />
        <Spacer />
        <PortfolioSettings />
        <Spacer />
        <Honesty />
        <Spacer />
        <CertificationSettings />
        <Spacer />
        <DangerZone />
        </div>
      </div>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
