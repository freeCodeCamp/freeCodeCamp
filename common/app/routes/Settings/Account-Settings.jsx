import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';
import classnames from 'classnames';

import LockedSettings from './Locked-Settings.jsx';

const propTypes = {
    bio: PropTypes.string,
    currentTheme: PropTypes.string,
    isLocked: PropTypes.bool,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    toggleIsLocked: PropTypes.func.isRequired,
    toggleNightMode: PropTypes.func.isRequired,
    updateFlag: PropTypes.func.isRequired,
    username: PropTypes.string
};

export default class AccountSettings extends React.Component {
  render() {
    const {
      toggleNightMode,
      updateFlag,
      currentTheme,
      isLocked,
      location,
      toggleIsLocked,
      username,
      name,
      bio,
      picture
    } = this.props;

    return (
      <div className='account-settings'>
        <Row>
          <Col md={ 3 } mdPush={ 9 } xs={ 12 }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href='/link/github'
              >
              Update from GitHub
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={ 2 } xs={ 12 }>
            <Image className='avatar' src={ picture } thumbnail={ true } />
          </Col>
          <Col md={ 10 } xs = { 12 }>
            <FormControl
              className='about-me'
              componentClass='textarea'
              disabled={ true }
              placeholder='About me'
              value={ bio }
            />
          </Col>
        </Row>
        <br />
        <Row className='editable-content-container'>
          <Col sm={ 6 } xs={ 12 }>
            <ControlLabel htmlFor='name'>
              Name
            </ControlLabel>
          </Col>
          <Col sm={ 5 } xs={ 12 }>
            <FormControl
              bsSize='sm'
              id='name'
              placeholder='name'
              type='input'
              value={ name }
            />
          </Col>
          <Col sm={ 1 } xs={ 12 }>
            <Button
              bsStyle='primary'
              onClick={() => updateFlag({ flag: 'name', newValue: name })}
              type='submit'
              >
              Save
            </Button>
          </Col>
        </Row>
        <Row className='editable-content-container'>
          <Col sm={ 6 } xs={ 12 }>
            <ControlLabel htmlFor='username'>
              Username
            </ControlLabel>
          </Col>
          <Col sm={ 5 } xs={ 12 }>
            <FormControl
              bsSize='sm'
              id='username'
              placeholder='username'
              type='input'
              value={ username }
            />
          </Col>
          <Col sm={ 1 } xs={ 12 }>
            <Button
              bsStyle='primary'
              onClick={() => updateFlag({
                flag: 'username', newValue: username
              })}
              type='submit'
              >
              Save
            </Button>
          </Col>
        </Row>
        <Row className='editable-content-container'>
          <Col sm={ 6 } xs={ 12 }>
            <ControlLabel htmlFor='location'>
              Location
            </ControlLabel>
          </Col>
          <Col sm={ 5 } xs={ 12 }>
            <FormControl
              bsSize='sm'
              id='location'
              placeholder='location'
              type='input'
              value={ location }
            />
          </Col>
          <Col sm={ 1 } xs={ 12 }>
            <Button
              bsStyle='primary'
              onClick={() => updateFlag({
                flag: 'location', newValue: location
              })}
              type='submit'
              >
              Save
            </Button>
          </Col>
        </Row>
        <LockedSettings
          isLocked={ isLocked }
          toggleIsLocked={ toggleIsLocked }
        />
        <Row>
          <Col sm={ 8 } xs={ 12 }>
            <p className='settings-title'>
              <strong>Night Mode</strong>
            </p>
          </Col>
          <Col sm={ 4 } xs={ 12 }>
            <ToggleButtonGroup
              className='toggle-btn-group'
              name='night-mode'
              onChange={ () => toggleNightMode(username, currentTheme) }
              type='radio'
              >
              <ToggleButton
                bsSize='lg'
                bsStyle='primary'
                className={
                  classnames(
                    'positive-20',
                    { active: currentTheme === 'night' },
                    'btn-toggle'
                  )
                }
                disabled={ currentTheme === 'night' }
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
                    { active: currentTheme === 'default' },
                    'btn-toggle'
                  )
                }
                disabled={ currentTheme === 'default' }
                type='radio'
                value={ 2 }
                >
                Off
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

AccountSettings.displayName = 'AccountSettings';
AccountSettings.propTypes = propTypes;
