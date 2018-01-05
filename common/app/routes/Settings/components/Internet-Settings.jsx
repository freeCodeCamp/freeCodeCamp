import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

import { userSelector } from '../../../redux';
import {
  editUserFlag,
  updateUserBackend
} from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({
    githubURL,
    linkedin,
    twitter,
    username,
    website
  }) => ({
    githubURL,
    linkedin,
    twitter,
    username,
    website
  })
);

function mapoDispatchToProps(dispatch) {
  return bindActionCreators({
    editUserFlag,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  editUserFlag: PropTypes.func.isRequired,
  githubURL: PropTypes.string,
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

  handleSubmit(e) {
    e.preventDefault();
    const flag = e.target.id;
    this.props.updateUserBackend({flag, newValue: this.props[flag] });
  }

  render() {
    const {
      editUserFlag,
      githubURL = '',
      linkedin = '',
      twitter = '',
      username,
      website = ''
    } = this.props;

    const updateTwitter = event =>
      editUserFlag('twitter', username, event.target.value);
    const updateGithub = event =>
      editUserFlag('githubURL', username, event.target.value);
    const updateLinkedin = event =>
      editUserFlag('linkedin', username, event.target.value);
    const updateWebsite = event =>
      editUserFlag('website', username, event.target.value);
    return (
      <div className='internet-settings'>
        <form id='twitter' onSubmit={ this.handleSubmit }>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='twitter-handle'>
                Twitter
              </ControlLabel>
            </Col>
            <Col sm={ 5 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='twitter-handle'
                onChange={ updateTwitter }
                placeholder='username'
                required={ true }
                type='text'
                value={ twitter }
              />
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </Row>
        </form>
        <form id='githubURL' onSubmit={ this.handleSubmit }>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='github'>
                Github
              </ControlLabel>
            </Col>
            <Col sm={ 5 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='github'
                onChange={ updateGithub }
                placeholder='Github URL'
                required={ true }
                type='url'
                value={ githubURL }
              />
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </Row>
        </form>
        <form id='linkedin' onSubmit={ this.handleSubmit }>
          <Row className='editable-content-container'>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='linkedin-url'>
                LinkedIn
              </ControlLabel>
            </Col>
            <Col sm={ 5 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='linkedin-url'
                onChange={ updateLinkedin }
                placeholder='full profile URL'
                required={ true }
                type='url'
                value={ linkedin }
              />
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </Row>
        </form>
        <form id='website' onSubmit={ this.handleSubmit }>
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
                onChange={ updateWebsite }
                placeholder='URL'
                required={ true }
                type='url'
                value={ website }
              />
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
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

export default connect(mapStateToProps, mapoDispatchToProps)(InternetSettings);
