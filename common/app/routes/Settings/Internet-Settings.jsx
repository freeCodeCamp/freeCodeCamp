import PropTypes from 'prop-types';
import React from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

import { Link } from '../../Router';

const propTypes = {
  twitter: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  personalWebsite: PropTypes.string,
};

export default function InternetSettings({

}) {
  return (
    <div className='internet-settings'>
      <Row>
        <Col xs={ 8 }>
          <ControlLabel htmlFor='twitter'>
            Twitter
          </ControlLabel>
        </Col>
        <Col xs={ 4 }>
          <FormControl
            bsSize='sm'
            value=''
            placeholder='username'
            type='input'
            id='twitter'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={ 8 }>
          <ControlLabel htmlFor='github'>
            GitHub
          </ControlLabel>
        </Col>
        <Col xs={ 4 }>
          <FormControl
            bsSize='sm'
            value=''
            placeholder='username'
            type='input'
            id='github'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={ 8 }>
          <ControlLabel htmlFor='linkedin'>
            LinkedIn
          </ControlLabel>
        </Col>
        <Col xs={ 4 }>
          <FormControl
            bsSize='sm'
            value=''
            placeholder='full profile URL'
            type='input'
            id='linkedin'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={ 8 }>
          <ControlLabel htmlFor='personalWebsite'>
            Personal Website
          </ControlLabel>
        </Col>
        <Col xs={ 4 }>
          <FormControl
            bsSize='sm'
            value=''
            placeholder='URL'
            type='input'
            id='personalWebsite'
          />
        </Col>
      </Row>
    </div>
  );
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;
