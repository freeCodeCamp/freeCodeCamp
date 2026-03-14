import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import isURL from 'validator/lib/isURL';
import { createSelector } from 'reselect';
import {
  Alert,
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Spacer
} from '@freecodecamp/ui';

import { userSelector } from '../../redux/selectors';
import type { ProfileUI, User } from '../../redux/prop-types';
import { submitNewAbout, submitProfileUI } from '../../redux/settings/actions';

import FullWidthRow from '../helpers/full-width-row';
import BlockSaveButton from '../helpers/form/block-save-button';
import SectionHeader from './section-header';
import ToggleRadioSetting from './toggle-radio-setting';
import UsernameSettings from '../profile/components/username';

const mapStateToProps = createSelector(userSelector, user => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  user
}));

const mapDispatchToProps = {
  submitNewAbout,
  submitProfileUI
};

type FormValues = {
  name: string;
  location: string;
  picture: string;
  about: string;
};

type PrivacyProps = {
  user: User;
  submitNewAbout: (formValues: FormValues) => void;
  submitProfileUI: (profileUI: ProfileUI) => void;
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

export function PrivacySettings({
  user,
  submitNewAbout,
  submitProfileUI
}: PrivacyProps): JSX.Element {
  const { t } = useTranslation();
  const {
    name = '',
    location = '',
    picture = '',
    about = '',
    profileUI,
    username
  } = user;
  const safeProfileUI: ProfileUI = profileUI ?? {
    isLocked: false,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showExperience: true,
    showTimeLine: true
  };

  const [formValues, setFormValues] = useState<FormValues>({
    name,
    location,
    picture,
    about
  });
  const [privacyValues, setPrivacyValues] = useState({
    showName: safeProfileUI.showName,
    showLocation: safeProfileUI.showLocation,
    showAbout: safeProfileUI.showAbout
  });
  const [isPictureUrlValid, setIsPictureUrlValid] = useState(true);

  const checkIfValidImage = (url: string) => {
    const img = new Image();

    return new Promise(resolve => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
      img.src = url;
    });
  };

  const isAboutPristine = () =>
    formValues.name === name &&
    formValues.location === location &&
    formValues.picture === picture &&
    formValues.about === about;

  const isPrivacyChanged = () =>
    privacyValues.showName !== safeProfileUI.showName ||
    privacyValues.showLocation !== safeProfileUI.showLocation ||
    privacyValues.showAbout !== safeProfileUI.showAbout;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPictureUrlValid && !isAboutPristine()) {
      submitNewAbout(formValues);
    }
    if (isPrivacyChanged()) {
      submitProfileUI({
        ...safeProfileUI,
        ...privacyValues
      });
    }
  };

  const createHandleChange =
    (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.slice(0);
      if (key === 'picture') {
        if (!value) {
          setIsPictureUrlValid(true);
        } else if (isURL(value, { require_protocol: true })) {
          void checkIfValidImage(value).then(isValid =>
            setIsPictureUrlValid(isValid as boolean)
          );
        } else {
          setIsPictureUrlValid(false);
        }
      }
      setFormValues(prev => ({ ...prev, [key]: value }));
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

  const isDisabled =
    (isAboutPristine() && !isPrivacyChanged()) || !isPictureUrlValid;

  return (
    <div className='privacy-settings' id='privacy-settings'>
      <SectionHeader>{t('settings.headings.privacy')}</SectionHeader>
      <FullWidthRow>
        <p>{t('settings.privacy')}</p>
      </FullWidthRow>
      <Spacer size='m' />
      <UsernameSettings username={username} setIsEditing={() => undefined} />
      <Spacer size='m' />
      <FullWidthRow>
        <form id='settings-personal-info' onSubmit={handleSubmit}>
          <div role='group' aria-label={t('settings.headings.personal-info')}>
            <FormGroup controlId='about-name'>
              <ControlLabel htmlFor='about-name-input'>
                <strong>{t('settings.labels.name')}</strong>
              </ControlLabel>
              <FormControl
                onChange={createHandleChange('name')}
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
                onChange={createHandleChange('location')}
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
                onChange={createHandleChange('picture')}
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
                onChange={createHandleChange('about')}
                value={formValues.about}
                id='about-about-input'
              />
            </FormGroup>
          </div>
          <Spacer size='m' />
          <div role='group' aria-label={t('settings.headings.privacy')}>
            <ToggleRadioSetting
              action={t('settings.labels.my-name')}
              explain={t('settings.private-name')}
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
            <span className='sr-only'>{t('settings.headings.privacy')}</span>
          </BlockSaveButton>
        </form>
      </FullWidthRow>
      <FullWidthRow>
        <Spacer size='m' />
        <p>{t('settings.data')}</p>
        <Button
          block={true}
          size='large'
          variant='primary'
          download={`${user.username}.json`}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(user)
          )}`}
        >
          {t('buttons.download-data')}
        </Button>
      </FullWidthRow>
    </div>
  );
}

PrivacySettings.displayName = 'PrivacySettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PrivacySettings));
