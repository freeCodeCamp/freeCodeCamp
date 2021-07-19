/* eslint-disable @typescript-eslint/unbound-method */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  ControlLabel,
  FormControl,
  Alert,
  FormGroup
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '@freecodecamp/react-bootstrap';
import { TFunction, withTranslation } from 'react-i18next';
import type { Dispatch } from 'redux';

import {
  validateUsername,
  usernameValidationSelector,
  submitNewUsername
} from '../../redux/settings';
import FullWidthRow from '../helpers/full-width-row';
import BlockSaveButton from '../helpers/form/block-save-button';
import { isValidUsername } from '../../../../utils/validate';

type UsernameProps = {
  isValidUsername: boolean;
  submitNewUsername: (name: string) => void;
  t: TFunction;
  username: string;
  validateUsername: (name: string) => void;
  validating: boolean;
};

type UsernameState = {
  isFormPristine: boolean;
  formValue: string;
  characterValidation: {
    valid: boolean;
    error: null | string;
  };
  submitClicked: boolean;
  isUserNew: boolean;
};

const mapStateToProps = createSelector(
  usernameValidationSelector,
  ({
    isValidUsername,
    fetchState
  }: {
    isValidUsername: boolean;
    fetchState: {
      pending: boolean;
      complete: boolean;
      errored: boolean;
      error: boolean | null;
    };
  }) => ({
    isValidUsername,
    validating: fetchState.pending
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      submitNewUsername,
      validateUsername
    },
    dispatch
  );

const hex = '[0-9a-f]';
const tempUserRegex = new RegExp(`^fcc${hex}{8}-(${hex}{4}-){3}${hex}{12}$`);

class UsernameSettings extends Component<UsernameProps, UsernameState> {
  static displayName: string;
  constructor(props: UsernameProps) {
    super(props);

    this.state = {
      isFormPristine: true,
      formValue: props.username,
      characterValidation: { valid: false, error: null },
      submitClicked: false,
      isUserNew: tempUserRegex.test(props.username)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
  }

  componentDidUpdate(prevProps: UsernameProps, prevState: UsernameState) {
    const { username: prevUsername } = prevProps;
    const { formValue: prevFormValue } = prevState;
    const { username } = this.props;
    const { formValue } = this.state;
    if (prevUsername !== username && prevFormValue === formValue) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        isFormPristine: username === formValue,
        submitClicked: false,
        isUserNew: tempUserRegex.test(username)
      });
    }
    return null;
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { submitNewUsername } = this.props;
    const {
      formValue,
      characterValidation: { valid }
    } = this.state;

    return this.setState({ submitClicked: true }, () =>
      valid ? submitNewUsername(formValue) : null
    );
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const { username, validateUsername } = this.props;
    const newValue = (e.target as HTMLInputElement).value;
    return this.setState(
      {
        formValue: newValue,
        isFormPristine: username === newValue,
        characterValidation: this.validateFormInput(newValue),
        submitClicked: false
      },
      () =>
        this.state.isFormPristine || this.state.characterValidation.error
          ? null
          : validateUsername(this.state.formValue)
    );
  }

  validateFormInput(formValue: string) {
    return isValidUsername(formValue);
  }

  renderAlerts(
    validating: boolean,
    error: string | null,
    isValidUsername: boolean
  ) {
    const { t } = this.props;

    if (!validating && error) {
      console.log(error);
      return (
        <FullWidthRow>
          <Alert bsStyle='danger'>
            {t(`settings.username.${error}`, {
              username: this.state.formValue
            })}
          </Alert>
        </FullWidthRow>
      );
    }
    if (!validating && !isValidUsername) {
      return (
        <FullWidthRow>
          <Alert bsStyle='warning'>{t('settings.username.unavailable')}</Alert>
        </FullWidthRow>
      );
    }
    if (validating) {
      return (
        <FullWidthRow>
          <Alert bsStyle='info'>{t('settings.username.validating')}</Alert>
        </FullWidthRow>
      );
    }
    if (!validating && isValidUsername && this.state.isUserNew) {
      return (
        <FullWidthRow>
          <Alert bsStyle='success'>{t('settings.username.available')}</Alert>
        </FullWidthRow>
      );
    } else if (!validating && isValidUsername && !this.state.isUserNew) {
      return (
        <FullWidthRow>
          <Alert bsStyle='success'>{t('settings.username.available')}</Alert>
          <Alert bsStyle='info'>{t('settings.username.change')}</Alert>
        </FullWidthRow>
      );
    }
    return null;
  }

  render() {
    const {
      isFormPristine,
      formValue,
      characterValidation: { valid, error },
      submitClicked
    } = this.state;
    const { isValidUsername, t, validating } = this.props;

    return (
      <form id='usernameSettings' onSubmit={this.handleSubmit}>
        <FullWidthRow>
          <FormGroup>
            <ControlLabel htmlFor='username-settings'>
              <strong>{t('settings.labels.username')}</strong>
            </ControlLabel>
            <FormControl
              name='username-settings'
              onChange={this.handleChange}
              value={formValue}
            />
          </FormGroup>
        </FullWidthRow>
        {!isFormPristine &&
          this.renderAlerts(validating, error, isValidUsername)}
        <FullWidthRow>
          <BlockSaveButton
            disabled={
              !(isValidUsername && valid && !isFormPristine) || submitClicked
            }
          />
        </FullWidthRow>
      </form>
    );
  }
}

UsernameSettings.displayName = 'UsernameSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(UsernameSettings));
