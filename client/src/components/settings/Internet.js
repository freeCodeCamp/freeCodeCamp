import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormGroup,
  ControlLabel
} from '@freecodecamp/react-bootstrap';
import isURL from 'validator/lib/isURL';

import { maybeUrlRE } from '../../utils';

import SectionHeader from './SectionHeader';
import { FullWidthRow } from '../helpers';
import BlockSaveButton from '../helpers/form/BlockSaveButton';

const propTypes = {
  githubProfile: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  updateInternetSettings: PropTypes.func.isRequired,
  website: PropTypes.string
};

class InternetSettings extends Component {
  constructor(props) {
    super(props);

    const {
      githubProfile = '',
      linkedin = '',
      twitter = '',
      website = ''
    } = props;

    this.state = {
      formValues: { githubProfile, linkedin, twitter, website },
      originalValues: { githubProfile, linkedin, twitter, website }
    };
  }

  getValidationStateFor(maybeURl = '') {
    if (!maybeURl || !maybeUrlRE.test(maybeURl)) {
      return null;
    }
    if (isURL(maybeURl)) {
      return 'success';
    }
    return 'error';
  }

  createHandleChange = key => e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        [key]: value
      }
    }));
  };

  isFormPristine = () => {
    const { formValues, originalValues } = this.state;
    return Object.keys(originalValues)
      .map(key => originalValues[key] === formValues[key])
      .every(bool => bool);
  };

  isFormValid = () => {
    const { formValues } = this.state;
    return Object.keys(formValues).reduce((bool, key) => {
      const maybeUrl = formValues[key];
      return maybeUrl ? isURL(maybeUrl) : bool;
    }, false);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.isFormPristine() && this.isFormValid()) {
      // Only submit the form if is has changed, and if it is valid
      const { formValues } = this.state;
      const { updateInternetSettings } = this.props;
      return updateInternetSettings(formValues);
    }
    return null;
  };

  render() {
    const {
      formValues: { githubProfile, linkedin, twitter, website }
    } = this.state;
    return (
      <Fragment>
        <SectionHeader>Your Internet Presence</SectionHeader>
        <FullWidthRow>
          <form id='internet-presence' onSubmit={this.handleSubmit}>
            <FormGroup
              controlId='internet-github'
              validationState={this.getValidationStateFor(githubProfile)}
            >
              <ControlLabel>
                <strong>GitHub</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('githubProfile')}
                type='url'
                value={githubProfile}
              />
            </FormGroup>
            <FormGroup
              controlId='internet-linkedin'
              validationState={this.getValidationStateFor(linkedin)}
            >
              <ControlLabel>
                <strong>LinkedIn</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('linkedin')}
                type='url'
                value={linkedin}
              />
            </FormGroup>
            <FormGroup
              controlId='internet-picture'
              validationState={this.getValidationStateFor(twitter)}
            >
              <ControlLabel>
                <strong>Twitter</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('twitter')}
                type='url'
                value={twitter}
              />
            </FormGroup>
            <FormGroup
              controlId='internet-website'
              validationState={this.getValidationStateFor(website)}
            >
              <ControlLabel>
                <strong>Personal Website</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('website')}
                type='url'
                value={website}
              />
            </FormGroup>
            <BlockSaveButton
              disabled={
                this.isFormPristine() ||
                (!this.isFormPristine() && !this.isFormValid())
              }
            />
          </form>
        </FullWidthRow>
      </Fragment>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;

export default InternetSettings;
