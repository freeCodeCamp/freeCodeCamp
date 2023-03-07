import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HelpBlock,
  FormControl,
  FormGroup,
  ControlLabel
} from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';

import { maybeUrlRE } from '../../utils';

import { FullWidthRow } from '../helpers';
import BlockSaveButton from '../helpers/form/block-save-button';
import SectionHeader from './section-header';

export interface Socials {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  website: string;
}

interface InternetProps extends Socials {
  t: TFunction;
  updateSocials: (formValues: Socials) => void;
}

type InternetState = {
  formValues: Socials;
  originalValues: Socials;
};

class InternetSettings extends Component<InternetProps, InternetState> {
  static displayName: string;
  constructor(props: InternetProps) {
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

  componentDidUpdate() {
    const {
      githubProfile = '',
      linkedin = '',
      twitter = '',
      website = ''
    } = this.props;

    const { originalValues } = this.state;

    if (
      githubProfile !== originalValues.githubProfile ||
      linkedin !== originalValues.linkedin ||
      twitter !== originalValues.twitter ||
      website !== originalValues.website
    ) {
      return this.setState({
        originalValues: { githubProfile, linkedin, twitter, website }
      });
    }
    return null;
  }

  getValidationStateFor(maybeURl = '') {
    const { t } = this.props;
    if (!maybeURl || !maybeUrlRE.test(maybeURl)) {
      return {
        state: null,
        message: ''
      };
    }
    if (isURL(maybeURl)) {
      return {
        state: 'success',
        message: ''
      };
    }
    return {
      state: 'error',
      message: t('validation.invalid-url')
    };
  }

  createHandleChange =
    (key: keyof Socials) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      return this.setState(state => ({
        formValues: {
          ...state.formValues,
          [key]: value
        }
      }));
    };

  isFormPristine = () => {
    const { formValues, originalValues } = this.state;
    return (Object.keys(originalValues) as Array<keyof Socials>)
      .map(key => originalValues[key] === formValues[key])
      .every(bool => bool);
  };

  isFormValid = (): boolean => {
    const { formValues, originalValues } = this.state;
    const valueReducer = (obj: Socials) => {
      return Object.values(obj).reduce(
        (acc, cur): boolean => (acc ? acc : cur !== ''),
        false
      ) as boolean;
    };

    const formHasValues = valueReducer(formValues);
    const OriginalHasValues = valueReducer(originalValues);

    // check if user had values but wants to delete them all
    if (OriginalHasValues && !formHasValues) return true;

    return (Object.keys(formValues) as Array<keyof Socials>).reduce(
      (bool: boolean, key: keyof Socials): boolean => {
        const maybeUrl = formValues[key];
        return maybeUrl ? isURL(maybeUrl) : bool;
      },
      false
    );
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.isFormPristine() && this.isFormValid()) {
      // // Only submit the form if is has changed, and if it is valid
      const { formValues } = this.state;

      const { updateSocials } = this.props;
      return updateSocials({ ...formValues });
    }
    return null;
  };

  renderHelpBlock = (validationMessage: string) =>
    validationMessage ? <HelpBlock>{validationMessage}</HelpBlock> : null;

  renderCheck = (url: string, validation: string | null) =>
    url && validation === 'success' ? (
      <FormControl.Feedback>
        <span>
          <FontAwesomeIcon icon={faCheck} size='1x' />
        </span>
      </FormControl.Feedback>
    ) : null;

  render() {
    const { t } = this.props;
    const {
      formValues: { githubProfile, linkedin, twitter, website }
    } = this.state;

    const {
      state: githubProfileValidation,
      message: githubProfileValidationMessage
    } = this.getValidationStateFor(githubProfile);

    const { state: linkedinValidation, message: linkedinValidationMessage } =
      this.getValidationStateFor(linkedin);

    const { state: twitterValidation, message: twitterValidationMessage } =
      this.getValidationStateFor(twitter);

    const { state: websiteValidation, message: websiteValidationMessage } =
      this.getValidationStateFor(website);
    const isDisabled = this.isFormPristine() || !this.isFormValid();
    return (
      <>
        <SectionHeader>{t('settings.headings.internet')}</SectionHeader>
        <FullWidthRow>
          <form id='internet-presence' onSubmit={this.handleSubmit}>
            <div role='group' aria-label={t('settings.headings.internet')}>
              <FormGroup
                controlId='internet-github'
                validationState={githubProfileValidation}
              >
                <ControlLabel>GitHub</ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('githubProfile')}
                  placeholder='https://github.com/user-name'
                  type='url'
                  value={githubProfile}
                />
                {this.renderCheck(githubProfile, githubProfileValidation)}
                {this.renderHelpBlock(githubProfileValidationMessage)}
              </FormGroup>
              <FormGroup
                controlId='internet-linkedin'
                validationState={linkedinValidation}
              >
                <ControlLabel>LinkedIn</ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('linkedin')}
                  placeholder='https://www.linkedin.com/in/user-name'
                  type='url'
                  value={linkedin}
                />
                {this.renderCheck(linkedin, linkedinValidation)}
                {this.renderHelpBlock(linkedinValidationMessage)}
              </FormGroup>
              <FormGroup
                controlId='internet-picture'
                validationState={twitterValidation}
              >
                <ControlLabel>Twitter</ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('twitter')}
                  placeholder='https://twitter.com/user-name'
                  type='url'
                  value={twitter}
                />
                {this.renderCheck(twitter, twitterValidation)}
                {this.renderHelpBlock(twitterValidationMessage)}
              </FormGroup>
              <FormGroup
                controlId='internet-website'
                validationState={websiteValidation}
              >
                <ControlLabel>{t('settings.labels.personal')}</ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('website')}
                  placeholder='https://example.com'
                  type='url'
                  value={website}
                />
                {this.renderCheck(website, websiteValidation)}
                {this.renderHelpBlock(websiteValidationMessage)}
              </FormGroup>
            </div>
            <BlockSaveButton
              aria-disabled={isDisabled}
              bgSize='lg'
              {...(isDisabled && { tabIndex: -1 })}
            >
              {t('buttons.save')}{' '}
              <span className='sr-only'>{t('settings.headings.internet')}</span>
            </BlockSaveButton>
          </form>
        </FullWidthRow>
      </>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';

export default withTranslation()(InternetSettings);
