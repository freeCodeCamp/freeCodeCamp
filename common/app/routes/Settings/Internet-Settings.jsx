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
  githubURL: PropTypes.string
};

export default function InternetSettings({
  githubURL
}) {
  return (
    <div className='internet-settings'>
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='twitter'>
            Twitter
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
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
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='github'>
            GitHub
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            value={ githubURL }
            placeholder='GitHub URL'
            type='input'
            id='github'
            disabled
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='linkedin'>
            LinkedIn
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
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
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='personalWebsite'>
            Personal Website
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
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
