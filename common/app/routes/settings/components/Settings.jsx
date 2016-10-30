import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';

import LockedSettings from './Locked-Settings.jsx';
import SocialSettings from './Social-Settings.jsx';
import EmailSettings from './Email-Setting.jsx';
import LanguageSettings from './Language-Settings.jsx';

import { toggleUserFlag } from '../redux/actions';
import { toggleNightMode, updateTitle } from '../../../redux/actions';

const actions = {
  updateTitle,
  toggleNightMode,
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail')
};

const mapStateToProps = state => {
  const {
    app: { user: username },
    entities: { user: userMap }
  } = state;
  const {
    email,
    isLocked,
    isGithubCool,
    isTwitter,
    isLinkedIn,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail
  } = userMap[username] || {};
  return {
    username,
    email,
    isLocked,
    isGithubCool,
    isTwitter,
    isLinkedIn,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail
  };
};

export class Settings extends React.Component {
  constructor(...props) {
    super(...props);
    this.updateMyLang = this.updateMyLang.bind(this);
  }
  static displayName = 'Settings';
  static propTypes = {
    children: PropTypes.element,
    username: PropTypes.string,
    isLocked: PropTypes.bool,
    isGithubCool: PropTypes.bool,
    isTwitter: PropTypes.bool,
    isLinkedIn: PropTypes.bool,
    email: PropTypes.string,
    sendMonthlyEmail: PropTypes.bool,
    sendNotificationEmail: PropTypes.bool,
    sendQuincyEmail: PropTypes.bool,
    updateTitle: PropTypes.func.isRequired,
    toggleNightMode: PropTypes.func.isRequired,
    toggleIsLocked: PropTypes.func.isRequired,
    toggleQuincyEmail: PropTypes.func.isRequired,
    toggleMonthlyEmail: PropTypes.func.isRequired,
    toggleNotificationEmail: PropTypes.func.isRequired,
    lang: PropTypes.string,
    initialLang: PropTypes.string,
    updateMyLang: PropTypes.func
  };

  updateMyLang(e) {
    e.preventDefault();
    const lang = e.target.value;
    this.props.updateMyLang(lang);
  }

  componentWillMount() {
    this.props.updateTitle('Settings');
  }

  render() {
    const {
      children,
      username,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      email,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      toggleNightMode,
      toggleIsLocked,
      toggleQuincyEmail,
      toggleMonthlyEmail,
      toggleNotificationEmail
    } = this.props;
    if (children) {
      return (
        <Row>
          <Col
            sm={ 4 }
            smOffset={ 4 }
            >
            { children }
          </Col>
        </Row>
      );
    }
    return (
      <div>
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
              Sign me out of Free Code Camp
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
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              className='btn-link-social'
              onClick={ toggleNightMode }
              >
              NightMode
            </Button>
          </Col>
        </Row>
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
            <p className='text-center'>
              Our community has translated many of our challenges.
              <br />
              If we don't have a translation for a challenge,
              it will be in English.
            </p>
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
              Delete my Free Code Camp account
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
    );
  }
}

export default connect(mapStateToProps, actions)(Settings);
