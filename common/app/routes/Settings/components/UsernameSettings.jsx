import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  ControlLabel,
  FormControl,
  Alert
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { createSelector } from 'reselect';

import {
  settingsSelector,
  updateUserBackend,
  validateUsername
} from '../redux';
import { userSelector } from '../../../redux';
import { BlockSaveButton, minLength } from '../formHelpers';
import { FullWidthRow } from '../../../helperComponents';

const minTwoChar = minLength(2);

const propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      error: PropTypes.string,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      pristine: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  handleSubmit: PropTypes.func.isRequired,
  isValidUsername: PropTypes.bool,
  submitAction: PropTypes.func.isRequired,
  username: PropTypes.string,
  validateUsername: PropTypes.func.isRequired,
  validating: PropTypes.bool
};

const mapStateToProps = createSelector(
  userSelector,
  settingsSelector,
  ({ username }, { isValidUsername, validating }) => ({
    initialValues: { username },
    isValidUsername,
    validate: validator,
    validating
  })
);

const mapDispatchToProps = {
  validateUsername,
  submitAction: updateUserBackend
};
function normalise(str = '') {
  return str.toLowerCase().trim();
}

function makeHandleChange(changeFn, validationAction, valid) {
  return function handleChange(e) {
    const { value } = e.target;
    e.target.value = normalise(value);
    if (e.target.value && valid) {
      validationAction(value);
    }
    return changeFn(e);
  };
}

function validator(values) {
  const errors = {};
  const { username } = values;
  const minWarn = minTwoChar(username);
  if (minWarn) {
    errors.username = minWarn;
    return errors;
  }
  if (username.length === 0) {
    errors.username = 'Username cannot be empty';
  }
  return errors;
}

function renderAlerts(validating, error, isValidUsername) {
  if (!validating && error) {
    return (
      <FullWidthRow>
        <Alert bsStyle='danger'>
          { error }
        </Alert>
      </FullWidthRow>
    );
  }
  if (!validating && !isValidUsername) {
    return (
      <FullWidthRow>
        <Alert bsStyle='danger'>
          Username not available
        </Alert>
      </FullWidthRow>
    );
  }
  if (validating) {
    return (
      <FullWidthRow>
        <Alert bsStyle='info'>
          Validating username
        </Alert>
      </FullWidthRow>
    );
  }
  if (!validating && isValidUsername) {
    return (
      <FullWidthRow>
        <Alert bsStyle='success'>
          Username is available
        </Alert>
      </FullWidthRow>
    );
  }
  return null;
}

function UsernameSettings(props) {
  const {
    fields: {
      username: {
        value,
        onChange,
        error,
        pristine,
        valid
      }
    },
    handleSubmit,
    isValidUsername,
    submitAction,
    validateUsername,
    validating
  } = props;
  return (
    <div>
      {
        !pristine && renderAlerts(validating, error, isValidUsername)
      }
      <FullWidthRow>
        <form
          className='inline-form-field'
          id='usernameSettings'
          onSubmit={ handleSubmit(submitAction) }
          >
          <Col className='inline-form' sm={ 3 } xs={ 12 }>
            <ControlLabel htmlFor='username-settings'>
                <strong>Username</strong>
            </ControlLabel>
          </Col>
          <Col sm={ 7 } xs={ 12 }>
            <FormControl
              name='username-settings'
              onChange={ makeHandleChange(onChange, validateUsername, valid) }
              value={ value }
            />
          </Col>
          <Col sm={ 2 } xs={ 12 }>
            <BlockSaveButton disabled={
              !(isValidUsername && valid && !pristine)
              }
            />
          </Col>
        </form>
      </FullWidthRow>
    </div>
  );
}

UsernameSettings.displayName = 'UsernameSettings';
UsernameSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'usernameSettings',
    fields: [ 'username' ]
  },
  mapStateToProps,
  mapDispatchToProps
)(UsernameSettings);
