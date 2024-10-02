import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Alert,
  ControlLabel
} from '@freecodecamp/ui';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';

import { FullWidthRow, Spacer } from '../helpers';
import BlockSaveButton from '../helpers/form/block-save-button';
import type { CamperProps } from '../profile/components/camper';
import SoundSettings from './sound';
import ThemeSettings, { type ThemeProps } from './theme';
import UsernameSettings from './username';
import KeyboardShortcutsSettings from './keyboard-shortcuts';
import SectionHeader from './section-header';
import ScrollbarWidthSettings from './scrollbar-width';

type AboutProps = ThemeProps &
  Omit<
    CamperProps,
    | 'linkedin'
    | 'joinDate'
    | 'isDonating'
    | 'githubProfile'
    | 'twitter'
    | 'website'
    | 'yearsTopContributor'
  > & {
    sound: boolean;
    keyboardShortcuts: boolean;
    submitNewAbout: (formValues: FormValues) => void;
    t: TFunction;
    toggleSoundMode: (sound: boolean) => void;
    toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  };

type FormValues = Pick<AboutProps, 'name' | 'location' | 'picture' | 'about'>;

type AboutState = {
  formValues: FormValues;
  originalValues: FormValues;
  formClicked: boolean;
  isPictureUrlValid: boolean;
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

class AboutSettings extends Component<AboutProps, AboutState> {
  validationImage: HTMLImageElement;
  static displayName: string;
  constructor(props: AboutProps) {
    super(props);
    this.validationImage = new Image();
    const { name = '', location = '', picture = '', about = '' } = props;
    const values = {
      name,
      location,
      picture,
      about
    };
    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      isPictureUrlValid: true
    };
  }

  componentDidUpdate() {
    const { name, location, picture, about } = this.props;
    const { formValues, formClicked } = this.state;
    if (
      formClicked &&
      name === formValues.name &&
      location === formValues.location &&
      picture === formValues.picture &&
      about === formValues.about
    ) {
      return this.setState({
        originalValues: {
          name,
          location,
          picture,
          about
        },
        formClicked: false
      });
    }
    return null;
  }

  isFormPristine = () => {
    const { formValues, originalValues } = this.state;
    return (
      this.state.isPictureUrlValid === false ||
      (Object.keys(originalValues) as Array<keyof FormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool)
    );
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formValues } = this.state;
    const { submitNewAbout } = this.props;
    if (this.state.isPictureUrlValid === true && !this.isFormPristine()) {
      return this.setState({ formClicked: true }, () =>
        submitNewAbout(formValues)
      );
    } else {
      return false;
    }
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        name: value
      }
    }));
  };

  handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        location: value
      }
    }));
  };

  componentDidMount() {
    this.validationImage.addEventListener('error', this.errorEvent);
    this.validationImage.addEventListener('load', this.loadEvent);
  }

  componentWillUnmount() {
    this.validationImage.removeEventListener('load', this.loadEvent);
    this.validationImage.removeEventListener('error', this.errorEvent);
  }

  loadEvent = () => this.setState({ isPictureUrlValid: true });
  errorEvent = () =>
    this.setState(state => ({
      isPictureUrlValid: state.formValues.picture === ''
    }));

  handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);
    if (!value) {
      this.setState({
        isPictureUrlValid: true
      });
    } else if (isURL(value, { require_protocol: true })) {
      this.validationImage.src = encodeURI(value);
    } else {
      this.setState({
        isPictureUrlValid: false
      });
    }
    this.setState(state => ({
      formValues: {
        ...state.formValues,
        picture: value
      }
    }));
  };

  handleAboutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        about: value
      }
    }));
  };

  render() {
    const {
      formValues: { name, location, picture, about }
    } = this.state;
    const {
      currentTheme,
      sound,
      keyboardShortcuts,
      username,
      t,
      toggleNightMode,
      toggleSoundMode,
      toggleKeyboardShortcuts
    } = this.props;
    return (
      <>
        <UsernameSettings username={username} />
        <Spacer size='medium' />
        <SectionHeader>{t('settings.headings.personal-info')}</SectionHeader>
        <FullWidthRow>
          <form
            id='camper-identity'
            onSubmit={this.handleSubmit}
            data-playwright-test-label='camper-identity'
          >
            <div role='group' aria-label={t('settings.headings.personal-info')}>
              <FormGroup controlId='about-name'>
                <ControlLabel htmlFor='about-name-input'>
                  <strong>{t('settings.labels.name')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={this.handleNameChange}
                  type='text'
                  value={name}
                  id='about-name-input'
                />
              </FormGroup>
              <FormGroup controlId='about-location'>
                <ControlLabel htmlFor='about-location-input'>
                  <strong>{t('settings.labels.location')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={this.handleLocationChange}
                  type='text'
                  value={location}
                  id='about-location-input'
                />
              </FormGroup>
              <FormGroup controlId='about-picture'>
                <ControlLabel htmlFor='about-picture-input'>
                  <strong>{t('settings.labels.picture')}</strong>
                </ControlLabel>
                <FormControl
                  onChange={this.handlePictureChange}
                  type='url'
                  value={picture}
                  id='about-picture-input'
                />
                {!this.state.isPictureUrlValid && (
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
                  onChange={this.handleAboutChange}
                  value={about}
                  id='about-about-input'
                />
              </FormGroup>
            </div>
            <BlockSaveButton
              disabled={this.isFormPristine()}
              bgSize='large'
              {...(this.isFormPristine() && { tabIndex: -1 })}
            >
              {t('buttons.save')}{' '}
              <span className='sr-only'>
                {t('settings.headings.personal-info')}
              </span>
            </BlockSaveButton>
          </form>
        </FullWidthRow>
        <Spacer size='medium' />
        <FullWidthRow>
          <ThemeSettings
            currentTheme={currentTheme}
            toggleNightMode={toggleNightMode}
          />
          <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
          <KeyboardShortcutsSettings
            keyboardShortcuts={keyboardShortcuts}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            explain={t('settings.shortcuts-explained')}
          />
          <ScrollbarWidthSettings />
        </FullWidthRow>
      </>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';

export default withTranslation()(AboutSettings);
