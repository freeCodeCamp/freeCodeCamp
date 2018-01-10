import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

import { userSelector } from '../../../redux';
import { updateUserBackend } from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({
    githubURL = '',
    linkedin = '',
    twitter = '',
    website = ''
  }) => ({
    initialValues: {
      githubURL,
      linkedin,
      twitter,
      website
    }
  })
);

function mapoDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  githubURL: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string,
  website: PropTypes.string
};

class InternetSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }

  render() {
    const {
      fields: {
        githubURL,
        linkedin,
        twitter,
        website
      },
      handleSubmit
    } = this.props;
    return (
      <div className='internet-settings'>
        <form
          id='internet-handle-settings'
          onSubmit={ handleSubmit(this.handleSubmit) }
          >
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='twitter'>
                Twitter
              </ControlLabel>
            </Col>
            <Col sm={ 6 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='twitter'
                name='twitter'
                onChange={ twitter.onChange }
                placeholder='username'
                type='text'
                value={ twitter.value }
              />
            </Col>
          </Row>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='github'>
                Github
              </ControlLabel>
            </Col>
            <Col sm={ 6 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='github'
                onChange={ githubURL.onChange }
                placeholder='Github URL'
                required={ true }
                type='url'
                value={ githubURL.value }
              />
            </Col>
          </Row>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='linkedin-url'>
                LinkedIn
              </ControlLabel>
            </Col>
            <Col sm={ 6 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='linkedin-url'
                onChange={ linkedin.onChange }
                placeholder='full profile URL'
                type='url'
                value={ linkedin.value }
              />
            </Col>
          </Row>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='personalWebsite'>
                Personal Website
              </ControlLabel>
            </Col>
            <Col sm={ 6 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='personalWebsite'
                onChange={ website.onChange }
                placeholder='URL'
                type='url'
                value={ website.value }
              />
            </Col>
          </Row>
          <Row>
            <Col md={ 2 } mdPush= { 10 } xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'internet-settings',
    fields: [ 'githubURL', 'linkedin', 'twitter', 'website' ]
  },
  mapStateToProps,
  mapoDispatchToProps
)(InternetSettings);
