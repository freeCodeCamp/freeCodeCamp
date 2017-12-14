import PropTypes from 'prop-types';
import React from 'react';
import {
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

const propTypes = {
  githubURL: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  website: PropTypes.string
};

export default function InternetSettings({
  githubURL,
  linkedin,
  twitter,
  website
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
            id='twitter'
            placeholder='username'
            type='input'
            value={ twitter }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 } xs={ 12 }>
          <ControlLabel htmlFor='github'>
            Github
          </ControlLabel>
        </Col>
        <Col sm={ 4 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            disabled = { true }
            id='github'
            placeholder='Github URL'
            type='input'
            value={ githubURL }
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
            id='linkedin'
            placeholder='full profile URL'
            type='input'
            value={ linkedin }
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
            id='personalWebsite'
            placeholder='URL'
            type='input'
            value={ website }
          />
        </Col>
      </Row>
    </div>
  );
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;
