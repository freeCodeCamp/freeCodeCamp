import PropTypes from 'prop-types';
import React from 'react';
import {
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
    isLocked: PropTypes.bool,
    toggleIsLocked: PropTypes.func.isRequired
};

export default function AccountSettings({
    toggleNightMode,
    isLocked,
    toggleIsLocked
}) {
  return (
    <div className='account-settings'>
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
          toggle={ toggleIsLocked }
        />
        <Row>
          <Col sm={ 8 }>
            <ControlLabel>
              Night mode
            </ControlLabel>
          </Col>
          <Col sm={ 4 }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              className='btn-link-social'
              onClick={ toggleNightMode }
              >
              Toggle
            </Button>
          </Col>
        </Row>
    </div>
  );
}

AccountSettings.displayName = 'AccountSettings';
AccountSettings.propTypes = propTypes;
