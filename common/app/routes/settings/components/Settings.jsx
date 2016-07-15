import React, { PropTypes } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';

import LockedSettings from './Locked-Settings.jsx';
import SocialSettings from './Social-Settings.jsx';
import EmailSettings from './Email-Setting.jsx';
import LangaugeSettings from './Language-Settings.jsx';
import DeleteModal from './Delete-Modal.jsx';

export default class Settings extends React.Component {
  static displayName = 'Settings';
  static propTypes = {
    username: PropTypes.string,
    isLocked: PropTypes.bool,
    isGithubCool: PropTypes.bool,
    isTwitter: PropTypes.bool,
    isLinkedIn: PropTypes.bool,
    email: PropTypes.string,
    sendMonthlyEmail: PropTypes.bool,
    sendNotificationEmail: PropTypes.bool,
    sendQuincyEmail: PropTypes.bool
  };

  render() {
    const {
      username,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      email,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail
    } = this.props;
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
            <LockedSettings isLocked={ isLocked } />
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
            />
          </Col>
        </Row>
        <div className='spacer' />
        <h2 className='text-center'>Language Settigns</h2>
        <Row>
          <Col
            md={ 6 }
            mdOffset={ 3 }
            sm={ 8 }
            smOffset={ 2 }
            xs={ 12 }
            >
            <LangaugeSettings />
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
            <DeleteModal />
          </Col>
        </Row>
      </div>
    );
  }
}

