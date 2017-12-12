import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Button, Row, Col, FormControl, ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

import LockedSettings from './Locked-Settings.jsx';
import JobSettings from './Job-Settings.jsx';
import SocialSettings from './Social-Settings.jsx';
import EmailSettings from './Email-Setting.jsx';
import LanguageSettings from './Language-Settings.jsx';
import SettingsSkeleton from './Settings-Skeleton.jsx';
import UpdateEmail from './routes/update-email';

import { toggleUserFlag, showUpdateEmailViewSelector } from './redux';
import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  userSelector,
  themeSelector,
  hardGoTo
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = createSelector(
  userSelector,
  themeSelector,
  signInLoadingSelector,
  showUpdateEmailViewSelector,
  (
    {
      username,
      email,
      isAvailableForHire,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail
    },
    theme,
    showLoading,
    showUpdateEmailView
  ) => ({
    currentTheme: theme,
    email,
    isAvailableForHire,
    isGithubCool,
    isLinkedIn,
    isLocked,
    isTwitter,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    showLoading,
    showUpdateEmailView,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail'),
  toggleNightMode,
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  updateTitle
};

const propTypes = {
  children: PropTypes.element,
  currentTheme: PropTypes.string,
  email: PropTypes.string,
  hardGoTo: PropTypes.func.isRequired,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  showUpdateEmailView: PropTypes.bool,
  toggleIsAvailableForHire: PropTypes.func.isRequired,
  toggleIsLocked: PropTypes.func.isRequired,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired,
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
      currentTheme,
      email,
      isAvailableForHire,
      isGithubCool,
      isLinkedIn,
      isLocked,
      isTwitter,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      showLoading,
      showUpdateEmailView,
      toggleIsAvailableForHire,
      toggleIsLocked,
      toggleMonthlyEmail,
      toggleNightMode,
      toggleNotificationEmail,
      toggleQuincyEmail,
      username
    } = this.props;
    if (!username && showLoading) {
      return <SettingsSkeleton />;
    }
    if (showUpdateEmailView) {
      return <UpdateEmail />;
    }
    // TEMP PROPS - IMPORT PROPERLY
    let privateProfile = false;
    let togglePrivateProfile = () => {};
    let nightMode = false;
    // TEMP PROPS - IMPORT PROPERLY
    return (
      <ChildContainer>
        <div className='container'>
          { /* BIO ROW */ } { /* PROFILE PICTURE, TITLE, UPDATE FROM GITHUB, BIO TEXTAREA */ }
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='name'>
                Name
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='name'
                type='input'
                id='name'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='username'>
                Username
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='username'
                type='input'
                id='username'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 8 }>
              <ControlLabel htmlFor='location'>
                Location
              </ControlLabel>
            </Col>
            <Col xs={ 4 }>
              <FormControl
                bsSize='sm'
                value=''
                placeholder='location'
                type='input'
                id='location'
              />
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p className='large-p'>
                Make my profile private
                <br />
                (this disables your certificates)
              </p>
            </Col>
            <Col sm={ 4 }>
              <ToggleButtonGroup
                className='toggle-btn-group'
                name='profile-private'
                onChange={ togglePrivateProfile }
                type='radio'
              >
                <ToggleButton
                  bsSize='lg'
                  bsStyle='primary'
                  className={
                    classnames(
                      'positive-20',
                      { active: privateProfile },
                      'btn-toggle'
                    )
                  }
                  disabled={ privateProfile }
                  type='radio'
                  value={ 1 }
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  bsSize='lg'
                  bsStyle='primary'
                  className={
                    classnames(
                      'positive-20',
                      { active: !privateProfile },
                      'btn-toggle'
                    )
                  }
                  disabled={ !privateProfile }
                  type='radio'
                  value={ 2 }
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={ 8 }>
              <p className='large-p'>
                Night mode
              </p>
            </Col>
            <Col sm={ 4 }>
              <ToggleButtonGroup
                className='toggle-btn-group'
                name='night-mode'
                onChange={ toggleNightMode }
                type='radio'
              >
                <ToggleButton
                  bsSize='lg'
                  bsStyle='primary'
                  className={
                    classnames(
                      'positive-20',
                      { active: nightMode },
                      'btn-toggle'
                    )
                  }
                  disabled={ nightMode }
                  type='radio'
                  value={ 1 }
                >
                  On
                </ToggleButton>
                <ToggleButton
                  bsSize='lg'
                  bsStyle='primary'
                  className={
                    classnames(
                      'positive-20',
                      { active: !nightMode },
                      'btn-toggle'
                    )
                  }
                  disabled={ !nightMode }
                  type='radio'
                  value={ 2 }
                >
                  Off
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>












          <Row>
            <Col xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href={ `/${username}` }
                >
                <FA name='user' />
                Show me my public profile
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
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href={ 'mail:team@freecodecamp.com' }
                >
                Email us at team@freecodecamp.com
              </Button>
            </Col>
          </Row>
          <h1 className='text-center'>Settings for your Account</h1>
          <h2 className='text-center'>Actions</h2>
          <Row>
            <Col xs={ 12 }>
              <SocialSettings
                isGithubCool={ isGithubCool }
                isLinkedIn={ isLinkedIn }
                isTwitter={ isTwitter }
              />
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Account Settings</h2>
          <Row>
            <Col xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href='/commit'
                >
                Edit my pledge
              </Button>
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Privacy Settings</h2>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }
              >
              <LockedSettings
                isLocked={ isLocked }
                toggle={ toggleIsLocked }
              />
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Job Search Settings</h2>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }
              >
              <JobSettings
                isAvailableForHire={ isAvailableForHire }
                toggle={ toggleIsAvailableForHire }
              />
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Email Settings</h2>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }
              >
              <EmailSettings
                email={ email }
                sendMonthlyEmail={ sendMonthlyEmail }
                sendNotificationEmail={ sendNotificationEmail }
                sendQuincyEmail={ sendQuincyEmail }
                toggleMonthlyEmail={ toggleMonthlyEmail }
                toggleNotificationEmail={ toggleNotificationEmail }
                toggleQuincyEmail={ toggleQuincyEmail }
              />
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Display challenges in:</h2>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }
              >
              <LanguageSettings />
            </Col>
          </Row>
          <div className='spacer' />
          <h2 className='text-center'>Danger Zone</h2>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }
              >
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='danger'
                className='btn-link-social'
                href='/delete-my-account'
                >
                Delete my freeCodeCamp account
              </Button>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='danger'
                className='btn-link-social'
                href='/reset-my-progress'
                >
                Reset all of my progress and brownie points
              </Button>
            </Col>
          </Row>
      </div>
      </ChildContainer>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
