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
    username: PropTypes.string
};

export default function AccountSettings({
    toggleNightMode,
    currentTheme,
    isLocked,
    location,
    toggleIsLocked,
    username,
    name,
    bio,
    picture
}) {
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
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='name'>
            Name
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            disabled={ true }
            id='name'
            placeholder='name'
            type='input'
            value={ name }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='username'>
            Username
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
          <FormControl
              bsSize='sm'
              disabled={ true }
              id='username'
              placeholder='username'
              type='input'
              value={ username }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='location'>
            Location
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            disabled={ true }
            id='location'
            placeholder='location'
            type='input'
            value={ location }
          />
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

AccountSettings.displayName = 'AccountSettings';
AccountSettings.propTypes = propTypes;
