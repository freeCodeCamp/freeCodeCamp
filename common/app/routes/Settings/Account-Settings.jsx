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
import FA from 'react-fontawesome';
import classnames from 'classnames';

import LockedSettings from './Locked-Settings.jsx';

import { Link } from '../../Router';

const propTypes = {
    toggleNightMode: PropTypes.func.isRequired,
    theme: PropTypes.string,
    isLocked: PropTypes.bool,
    toggleIsLocked: PropTypes.func.isRequired,
    username: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    picture: PropTypes.string
};

export default function AccountSettings({
    toggleNightMode,
    theme,
    isLocked,
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
          <Image src={ picture }  className='avatar' thumbnail />
        </Col>
        <Col md={ 10 } xs = { 12 }>
          <FormControl
            componentClass='textarea'
            placeholder='About me'
            className='about-me'
            value={ bio }
            disabled
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
            value={ name }
            placeholder='name'
            type='input'
            id='name'
            disabled
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
              value={ username }
              placeholder='username'
              type='input'
              id='username'
              disabled
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
            value=''
            placeholder='location'
            type='input'
            id='location'
          />
        </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
        <LockedSettings
          isLocked={ isLocked }
          toggleIsLocked={ toggleIsLocked }
        />
        <Row>
          <Col sm={ 8 } xs={ 12 }>
            <p className='settings-title'>
              <strong>Night mode</strong>
            </p>
          </Col>
          <Col sm={ 4 } xs={ 12 }>
            <ToggleButtonGroup
              className='toggle-btn-group'
              name='monthly-email'
              onChange={ toggleNightMode }
              type='radio'
              >
              <ToggleButton
                bsSize='lg'
                bsStyle='primary'
                className={
                  classnames(
                    'positive-20',
                    { active: theme == 'night' },
                    'btn-toggle'
                  )
                }
                disabled={ theme == 'night' }
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
                    { active: theme == 'default' },
                    'btn-toggle'
                  )
                }
                disabled={ theme == 'default' }
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
