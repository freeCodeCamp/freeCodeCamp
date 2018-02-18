import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Button } from 'react-bootstrap';
import FA from 'react-fontawesome';

import ns from './ns.json';
import { FullWidthRow, Spacer, Loader } from '../../helperComponents';
import { Link } from '../../Router';
import AboutSettings from './components/About-Settings.jsx';
import InternetSettings from './components/Internet-Settings.jsx';
import EmailSettings from './components/Email-Settings.jsx';
import DangerZone from './components/DangerZone.jsx';
import LanguageSettings from './components/Language-Settings.jsx';
import CertificationSettings from './components/Cert-Settings.jsx';
import PortfolioSettings from './components/Portfolio-Settings.jsx';
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
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Settings extends React.Component {
  constructor(...props) {
    super(...props);
    this.updateMyLang = this.updateMyLang.bind(this);
  }

  updateMyLang(e) {
    e.preventDefault();
    const lang = e.target.value;
    this.props.updateMyLang(lang);
  }

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
          <Link to={ `/${username}` }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              className='btn-link-social'
              >
              <FA name='user' />
              Show me my public profile
            </Button>
          </Link>
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
        <AboutSettings />
        <Spacer />
        <EmailSettings />
        <Spacer />
        <LanguageSettings />
        <Spacer />
        <InternetSettings />
        <Spacer />
        <PortfolioSettings />
        <Spacer />
        <CertificationSettings />
        <Spacer />
        <Honesty />
        <Spacer />
        <DangerZone />
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
