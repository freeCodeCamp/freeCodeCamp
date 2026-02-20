import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Alert,
  ControlLabel,
  Modal,
  Spacer
} from '@freecodecamp/ui';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';

import { connect } from 'react-redux';
import { FullWidthRow } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';
import ToggleRadioSetting from '../../settings/toggle-radio-setting';
import { User, ProfileUI } from '../../../redux/prop-types';
import {
  updateMySocials,
  submitNewAbout,
  submitProfileUI
} from '../../../redux/settings/actions';
import UsernameSettings from './username';
import { maybeUrlRE } from '../../../utils';

type AboutProps = {
  user: User;
  t: TFunction;
  submitNewAbout: (formValues: FormValues) => void;
  updateMySocials: (formValues: SocialValues) => void;
  submitProfileUI: (profileUI: ProfileUI) => void;
  open: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  location: string;
  picture: string;
  about: string;
};

type SocialValues = {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  bluesky: string;
  website: string;
};

const mapDispatchToProps = {
  updateMySocials,
  submitNewAbout,
  submitProfileUI
};

const ShowImageValidationWarning = ({
  alertContent
}: {
  alertContent: string;
}) => {
  return (
    <HelpBlock>
      <Alert variant='info'>{alertContent}</Alert>
    </HelpBlock>
  );
};

const AboutSettings = ({
  user,
  t,
  updateMySocials,
  submitNewAbout,
  submitProfileUI,
  open,
  onClose
}: AboutProps) => {
  const {
    name = '',
    location = '',
    picture = '',
    about = '',
    githubProfile = '',
    linkedin = '',
    twitter = '',
    bluesky = '',
    website = '',
    username,
    profileUI
  } = user;

  const [formValues, setFormValues] = useState<FormValues>({
    name,
    location,
    picture,
    about
  });
  const [originalValues, setOriginalValues] = useState<FormValues>({
    name,
    location,
    picture,
    about
  });
  const [formClicked, setFormClicked] = useState(false);
  const [isPictureUrlValid, setIsPictureUrlValid] = useState(true);
  const [socialValues, setSocialValues] = useState<SocialValues>({
    githubProfile,
    linkedin,
    twitter,
    bluesky,
    website
  });
  const [originalSocialValues, setOriginalSocialValues] =
    useState<SocialValues>({
      githubProfile,
      linkedin,
      twitter,
      bluesky,
      website
    });
  const [privacyValues, setPrivacyValues] = useState({
    showName: profileUI.showName,
    showLocation: profileUI.showLocation,
    showAbout: profileUI.showAbout
  });

  const checkIfValidImage = (url: string) => {
    const img = new Image();

    return new Promise(resolve => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
      img.src = url;
    });
  };

  useEffect(() => {
    if (
      formClicked &&
      name === formValues.name &&
      location === formValues.location &&
      picture === formValues.picture &&
      about === formValues.about
    ) {
      setOriginalValues({
        name,
        location,
        picture,
        about
      });
      setOriginalSocialValues({
        githubProfile,
        linkedin,
        twitter,
        bluesky,
        website
      });
      setFormClicked(false);
    }
  }, [
    about,
    bluesky,
    formClicked,
    formValues,
    githubProfile,
    linkedin,
    location,
    name,
    picture,
    socialValues,
    twitter,
    website
  ]);

  const isAboutPristine = () => {
    return (
      isPictureUrlValid === false ||
      (Object.keys(originalValues) as Array<keyof FormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool)
    );
  };

  const isSocialsPristine = () =>
    (Object.keys(originalSocialValues) as Array<keyof SocialValues>).every(
      key => originalSocialValues[key] === socialValues[key]
    );

  const isSocialsValid = () =>
    Object.values(socialValues).every(
      (value: string) => value === '' || isURL(value)
    );

  const isPrivacyChanged = () => {
    return (
      privacyValues.showName !== profileUI.showName ||
      privacyValues.showLocation !== profileUI.showLocation ||
      privacyValues.showAbout !== profileUI.showAbout
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPictureUrlValid === true && !isAboutPristine()) {
      setFormClicked(true);
      submitNewAbout(formValues);
    }
    if (!isSocialsPristine() && isSocialsValid()) {
      setFormClicked(true);
      updateMySocials(socialValues);
    }
    if (isPrivacyChanged()) {
      submitProfileUI({
        ...profileUI,
        ...privacyValues
      });
    }
    onClose();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0);
    setFormValues(state => ({
      ...state,
      name: value
    }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0);
    setFormValues(state => ({
      ...state,
      location: value
    }));
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0);
    if (!value) {
      setIsPictureUrlValid(true);
    } else if (isURL(value, { require_protocol: true })) {
      void checkIfValidImage(value).then(isValid => {
        setIsPictureUrlValid(isValid as boolean);
      });
    } else {
      setIsPictureUrlValid(false);
    }
    setFormValues(state => ({
      ...state,
      picture: value
    }));
  };

  const handleAboutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0);
    setFormValues(state => ({
      ...state,
      about: value
    }));
  };

  const getValidationStateFor = (maybeUrl = '') => {
    if (!maybeUrl || !maybeUrlRE.test(maybeUrl)) {
      return {
        state: null,
        message: ''
      };
    }
    if (isURL(maybeUrl)) {
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

  const createHandleSocialChange =
    (key: keyof SocialValues) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      setSocialValues(current => ({
        ...current,
        [key]: value
      }));
    };

  const togglePrivacyFlag = (
    flag: 'showName' | 'showLocation' | 'showAbout'
  ) => {
    return () => {
      setPrivacyValues(prev => ({
        ...prev,
        [flag]: !prev[flag]
      }));
    };
  };

  const { state: githubProfileValidation, message: githubProfileMessage } =
    getValidationStateFor(socialValues.githubProfile);
  const { state: linkedinValidation, message: linkedinMessage } =
    getValidationStateFor(socialValues.linkedin);
  const { state: twitterValidation, message: twitterMessage } =
    getValidationStateFor(socialValues.twitter);
  const { state: blueskyValidation, message: blueskyMessage } =
    getValidationStateFor(socialValues.bluesky);
  const { state: websiteValidation, message: websiteMessage } =
    getValidationStateFor(socialValues.website);

  const isDisabled =
    (isAboutPristine() && isSocialsPristine() && !isPrivacyChanged()) ||
    !isPictureUrlValid ||
    !isSocialsValid();

  return (
    <Modal onClose={onClose} open={open} size='large'>
      <Modal.Header>{t('profile.edit-personal-info')}</Modal.Header>
      <Modal.Body alignment='left'>
        <UsernameSettings username={username} setIsEditing={() => onClose()} />
        <Spacer size='m' />
        <SectionHeader>{t('settings.headings.personal-info')}</SectionHeader>
        <FullWidthRow>
          <form
            id='camper-identity'
            onSubmit={handleSubmit}
            data-playwright-test-label='camper-identity'
          >
            <div role='group' aria-label={t('settings.headings.personal-info')}>
              <FormGroup controlId='about-name'>
                <ControlLabel htmlFor='about-name-input'>
                  <strong>{t('settings.labels.name')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={handleNameChange}
                  type='text'
                  value={formValues.name}
                  id='about-name-input'
                />
              </FormGroup>
              <FormGroup controlId='about-location'>
                <ControlLabel htmlFor='about-location-input'>
                  <strong>{t('settings.labels.location')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={handleLocationChange}
                  type='text'
                  value={formValues.location}
                  id='about-location-input'
                />
              </FormGroup>
              <FormGroup controlId='about-picture'>
                <ControlLabel htmlFor='about-picture-input'>
                  <strong>{t('settings.labels.picture')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={handlePictureChange}
                  type='url'
                  value={formValues.picture}
                  id='about-picture-input'
                />
                {!isPictureUrlValid && (
                  <ShowImageValidationWarning
                    alertContent={t('validation.url-not-image')}
                  />
                )}
              </FormGroup>
              <FormGroup controlId='about-about'>
                <ControlLabel htmlFor='about-about-input'>
                  <strong>{t('settings.labels.about')}</strong>
                </ControlLabel>
                <FormControl
                  componentClass='textarea'
                  onChange={handleAboutChange}
                  value={formValues.about}
                  id='about-about-input'
                />
              </FormGroup>
            </div>
            <Spacer size='m' />
            <SectionHeader>{t('profile.internet-presence')}</SectionHeader>
            <div
              role='group'
              aria-label={t('profile.internet-presence')}
              data-playwright-test-label='internet-presence'
            >
              <FormGroup
                controlId='internet-github'
                validationState={githubProfileValidation}
              >
                <ControlLabel htmlFor='internet-github-input'>
                  GitHub
                </ControlLabel>
                <FormControl
                  data-playwright-test-label='internet-github-input'
                  onChange={createHandleSocialChange('githubProfile')}
                  placeholder='https://github.com/user-name'
                  type='url'
                  value={socialValues.githubProfile}
                  id='internet-github-input'
                />
                <Check
                  url={socialValues.githubProfile}
                  validation={githubProfileValidation}
                  dataPlaywrightTestLabel='internet-github-check'
                />
                <Info message={githubProfileMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-linkedin'
                validationState={linkedinValidation}
              >
                <ControlLabel htmlFor='internet-linkedin-input'>
                  LinkedIn
                </ControlLabel>
                <FormControl
                  onChange={createHandleSocialChange('linkedin')}
                  placeholder='https://www.linkedin.com/in/user-name'
                  type='url'
                  value={socialValues.linkedin}
                  id='internet-linkedin-input'
                />
                <Check
                  url={socialValues.linkedin}
                  validation={linkedinValidation}
                  dataPlaywrightTestLabel='internet-linkedin-check'
                />
                <Info message={linkedinMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-twitter'
                validationState={twitterValidation}
              >
                <ControlLabel htmlFor='internet-twitter-input'>X</ControlLabel>
                <FormControl
                  onChange={createHandleSocialChange('twitter')}
                  placeholder='https://x.com/user-name'
                  type='url'
                  value={socialValues.twitter}
                  id='internet-twitter-input'
                />
                <Check
                  url={socialValues.twitter}
                  validation={twitterValidation}
                  dataPlaywrightTestLabel='internet-twitter-check'
                />
                <Info message={twitterMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-bluesky'
                validationState={blueskyValidation}
              >
                <ControlLabel htmlFor='internet-bluesky-input'>
                  Bluesky
                </ControlLabel>
                <FormControl
                  onChange={createHandleSocialChange('bluesky')}
                  placeholder='https://bsky.app/profile/user-name.bsky.social'
                  type='url'
                  value={socialValues.bluesky}
                  id='internet-bluesky-input'
                />
                <Check
                  url={socialValues.bluesky}
                  validation={blueskyValidation}
                  dataPlaywrightTestLabel='internet-bluesky-check'
                />
                <Info message={blueskyMessage} />
              </FormGroup>
              <FormGroup
                controlId='internet-website'
                validationState={websiteValidation}
              >
                <ControlLabel htmlFor='internet-website-input'>
                  {t('settings.labels.personal')}
                </ControlLabel>
                <FormControl
                  onChange={createHandleSocialChange('website')}
                  placeholder='https://example.com'
                  type='url'
                  value={socialValues.website}
                  id='internet-website-input'
                />
                <Check
                  url={socialValues.website}
                  validation={websiteValidation}
                  dataPlaywrightTestLabel='internet-website-check'
                />
                <Info message={websiteMessage} />
              </FormGroup>
            </div>
            <Spacer size='m' />
            <SectionHeader>{t('settings.headings.privacy')}</SectionHeader>
            <div role='group' aria-label={t('settings.headings.privacy')}>
              <ToggleRadioSetting
                action={t('settings.labels.my-name')}
                flag={!privacyValues.showName}
                flagName='showName'
                offLabel={t('buttons.public')}
                onLabel={t('buttons.private')}
                toggleFlag={togglePrivacyFlag('showName')}
              />
              <ToggleRadioSetting
                action={t('settings.labels.my-location')}
                flag={!privacyValues.showLocation}
                flagName='showLocation'
                offLabel={t('buttons.public')}
                onLabel={t('buttons.private')}
                toggleFlag={togglePrivacyFlag('showLocation')}
              />
              <ToggleRadioSetting
                action={t('settings.labels.my-about')}
                flag={!privacyValues.showAbout}
                flagName='showAbout'
                offLabel={t('buttons.public')}
                onLabel={t('buttons.private')}
                toggleFlag={togglePrivacyFlag('showAbout')}
              />
            </div>
            <Spacer size='m' />
            <BlockSaveButton
              disabled={isDisabled}
              bgSize='large'
              {...(isDisabled && { tabIndex: -1 })}
            >
              {t('buttons.save')}{' '}
              <span className='sr-only'>{t('profile.edit-personal-info')}</span>
            </BlockSaveButton>
          </form>
        </FullWidthRow>
      </Modal.Body>
    </Modal>
  );
};

AboutSettings.displayName = 'AboutSettings';

const Info = ({ message }: { message: string }) => {
  return message ? <HelpBlock>{message}</HelpBlock> : null;
};

const Check = ({
  url,
  validation,
  dataPlaywrightTestLabel
}: {
  url: string;
  validation: 'error' | 'success' | null;
  dataPlaywrightTestLabel: string;
}) =>
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

export default withTranslation()(
  connect(null, mapDispatchToProps)(AboutSettings)
);
