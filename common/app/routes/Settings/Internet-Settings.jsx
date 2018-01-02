import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

const propTypes = {
  githubURL: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  updateFlag: PropTypes.func.isRequired,
  website: PropTypes.string
};

export default function InternetSettings({
  githubURL,
  linkedin,
  twitter,
  updateFlag,
  website
}) {
  return (
    <div className='internet-settings'>
      <Row className='editable-content-container'>
        <Col sm={ 6 } xs={ 12 }>
          <ControlLabel htmlFor='twitter'>
            Twitter
          </ControlLabel>
        </Col>
        <Col sm={ 5 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            id='twitter'
            placeholder='username'
            type='input'
            value={ twitter }
          />
        </Col>
        <Col sm={ 1 } xs={ 12 }>
          <Button
            bsStyle='primary'
            onClick={() => updateFlag({ flag: 'twitter', newValue: twitter })}
            type='submit'
            >
            Save
          </Button>
        </Col>
      </Row>
      <Row className='editable-content-container'>
        <Col sm={ 6 } xs={ 12 }>
          <ControlLabel htmlFor='github'>
            Github
          </ControlLabel>
        </Col>
        <Col sm={ 5 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            disabled = { true }
            id='github'
            placeholder='Github URL'
            type='input'
            value={ githubURL }
          />
        </Col>
        <Col sm={ 1 } xs={ 12 }>
          <Button
            bsStyle='primary'
            onClick={() => updateFlag({
              flag: 'githubURL',
              newValue: githubURL
            })}
            type='submit'
            >
            Save
          </Button>
        </Col>
      </Row>
      <Row className='editable-content-container'>
        <Col sm={ 6 } xs={ 12 }>
          <ControlLabel htmlFor='linkedin'>
            LinkedIn
          </ControlLabel>
        </Col>
        <Col sm={ 5 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            id='linkedin'
            placeholder='full profile URL'
            type='input'
            value={ linkedin }
          />
        </Col>
        <Col sm={ 1 } xs={ 12 }>
          <Button
            bsStyle='primary'
            onClick={() => updateFlag({ flag: 'linkedin', newValue: linkedin })}
            type='submit'
            >
            Save
          </Button>
        </Col>
      </Row>
      <Row className='editable-content-container'>
        <Col sm={ 6 } xs={ 12 }>
          <ControlLabel htmlFor='personalWebsite'>
            Personal Website
          </ControlLabel>
        </Col>
        <Col sm={ 5 } xs={ 12 }>
          <FormControl
            bsSize='sm'
            id='personalWebsite'
            placeholder='URL'
            type='input'
            value={ website }
          />
        </Col>
        <Col sm={ 1 } xs={ 12 }>
          <Button
            bsStyle='primary'
            onClick={() => updateFlag({ flag: 'website', newValue: website })}
            type='submit'
            >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;
