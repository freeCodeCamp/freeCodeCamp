import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  type FormGroupProps
} from '@freecodecamp/ui';

import { maybeUrlRE } from '../../../utils';

import { FullWidthRow } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';

export interface Socials {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  website: string;
}

interface InternetProps extends Socials {
  t: TFunction;
  updateSocials: (formValues: Socials) => void;
  setIsEditing: (isEditing: boolean) => void;
}

type InternetState = {
  formValues: Socials;
  originalValues: Socials;
};

interface URLValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

function Info({ message }: { message: string }) {
  return message ? <HelpBlock>{message}</HelpBlock> : null;
}

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

  toggleEditing = () => {
    this.props.setIsEditing(false);
  };

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

  getValidationStateFor(maybeURl = ''): URLValidation {
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
    return (Object.keys(originalValues) as Array<keyof Socials>).every(
      key => originalValues[key] === formValues[key]
    );
  };

  isFormValid = (): boolean =>
    Object.values(this.state.formValues).every(
      (value: string) => value === '' || isURL(value)
    );

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.isFormPristine() && this.isFormValid()) {
      // // Only submit the form if is has changed, and if it is valid
      const { formValues } = this.state;

      const { updateSocials } = this.props;
      this.toggleEditing();
      return updateSocials({ ...formValues });
    }
    this.toggleEditing();
    return null;
  };

  renderCheck = (
    url: string,
    validation: FormGroupProps['validationState'],
    dataPlaywrightTestLabel: string
  ) =>
    url && validation === 'success' ? (
      <FormControl.Feedback>
        <span>
          <FontAwesomeIcon
            data-playwright-test-label={dataPlaywrightTestLabel}
            icon={faCheck}
            size='1x'
          />
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
          <form
            id='internet-presence'
            onSubmit={this.handleSubmit}
            data-playwright-test-label='internet-presence'
          >
            <div role='group' aria-label={t('settings.headings.internet')}>
              <FormGroup
                controlId='internet-github'
                validationState={githubProfileValidation}
              >
                <ControlLabel htmlFor='internet-github-input'>
                  GitHub
                </ControlLabel>
                <FormControl
                  data-playwright-test-label='internet-github-input'
                  onChange={this.createHandleChange('githubProfile')}
                  placeholder='https://github.com/user-name'
                  type='url'
                  value={githubProfile}
                  id='internet-github-input'
                />
                {this.renderCheck(
                  githubProfile,
                  githubProfileValidation,
                  'internet-github-check'
                )}
                <Info message={githubProfileValidationMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-linkedin'
                validationState={linkedinValidation}
              >
                <ControlLabel htmlFor='internet-linkedin-input'>
                  LinkedIn
                </ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('linkedin')}
                  placeholder='https://www.linkedin.com/in/user-name'
                  type='url'
                  value={linkedin}
                  id='internet-linkedin-input'
                />
                {this.renderCheck(
                  linkedin,
                  linkedinValidation,
                  'internet-linkedin-check'
                )}
                <Info message={linkedinValidationMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-twitter'
                validationState={twitterValidation}
              >
                <ControlLabel htmlFor='internet-twitter-input'>
                  Twitter
                </ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('twitter')}
                  placeholder='https://twitter.com/user-name'
                  type='url'
                  value={twitter}
                  id='internet-twitter-input'
                />
                {this.renderCheck(
                  twitter,
                  twitterValidation,
                  'internet-twitter-check'
                )}
                <Info message={twitterValidationMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-website'
                validationState={websiteValidation}
              >
                <ControlLabel htmlFor='internet-website-input'>
                  {t('settings.labels.personal')}
                </ControlLabel>
                <FormControl
                  onChange={this.createHandleChange('website')}
                  placeholder='https://example.com'
                  type='url'
                  value={website}
                  id='internet-website-input'
                />
                {this.renderCheck(
                  website,
                  websiteValidation,
                  'internet-website-check'
                )}
                <Info message={websiteValidationMessage} />
              </FormGroup>
            </div>
            <BlockSaveButton
              disabled={isDisabled}
              bgSize='large'
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
