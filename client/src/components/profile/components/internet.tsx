import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
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

interface URLValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

function Info({ message }: { message: string }) {
  return message ? <HelpBlock>{message}</HelpBlock> : null;
}

const InternetSettings = ({
  githubProfile = '',
  linkedin = '',
  twitter = '',
  website = '',
  t,
  updateSocials,
  setIsEditing
}: InternetProps) => {
  const [formValues, setFormValues] = useState<Socials>({
    githubProfile,
    linkedin,
    twitter,
    website
  });
  const [originalValues, setOriginalValues] = useState<Socials>({
    githubProfile,
    linkedin,
    twitter,
    website
  });

  useEffect(() => {
    if (
      githubProfile !== originalValues.githubProfile ||
      linkedin !== originalValues.linkedin ||
      twitter !== originalValues.twitter ||
      website !== originalValues.website
    ) {
      setOriginalValues({ githubProfile, linkedin, twitter, website });
    }
  }, [githubProfile, linkedin, twitter, website, originalValues]);

  const getValidationStateFor = (maybeURl = ''): URLValidation => {
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
  };

  const createHandleChange =
    (key: keyof Socials) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      setFormValues({
        ...formValues,
        [key]: value
      });
    };

  const isFormPristine = () => {
    return (Object.keys(originalValues) as Array<keyof Socials>).every(
      key => originalValues[key] === formValues[key]
    );
  };

  const isFormValid = (): boolean =>
    Object.values(formValues).every(
      (value: string) => value === '' || isURL(value)
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormPristine() && isFormValid()) {
      // Only submit the form if is has changed, and if it is valid
      updateSocials({ ...formValues });
    }
    setIsEditing(false);
  };

  const renderCheck = (
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

  const {
    state: githubProfileValidation,
    message: githubProfileValidationMessage
  } = getValidationStateFor(formValues.githubProfile);

  const { state: linkedinValidation, message: linkedinValidationMessage } =
    getValidationStateFor(formValues.linkedin);

  const { state: twitterValidation, message: twitterValidationMessage } =
    getValidationStateFor(formValues.twitter);

  const { state: websiteValidation, message: websiteValidationMessage } =
    getValidationStateFor(formValues.website);
  const isDisabled = isFormPristine() || !isFormValid();

  return (
    <>
      <SectionHeader>{t('settings.headings.internet')}</SectionHeader>
      <FullWidthRow>
        <form
          id='internet-presence'
          onSubmit={handleSubmit}
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
                onChange={createHandleChange('githubProfile')}
                placeholder=''
                type='url'
                value={formValues.githubProfile}
                id='internet-github-input'
              />
              {renderCheck(
                formValues.githubProfile,
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
                onChange={createHandleChange('linkedin')}
                placeholder=''
                type='url'
                value={formValues.linkedin}
                id='internet-linkedin-input'
              />
              {renderCheck(
                formValues.linkedin,
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
                onChange={createHandleChange('twitter')}
                placeholder=''
                type='url'
                value={formValues.twitter}
                id='internet-twitter-input'
              />
              {renderCheck(
                formValues.twitter,
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
                onChange={createHandleChange('website')}
                placeholder=''
                type='url'
                value={formValues.website}
                id='internet-website-input'
              />
              {renderCheck(
                formValues.website,
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
};

InternetSettings.displayName = 'InternetSettings';

export default withTranslation()(InternetSettings);
