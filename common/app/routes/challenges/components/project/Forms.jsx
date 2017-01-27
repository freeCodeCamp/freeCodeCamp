import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {
  Button,
  FormGroup,
  FormControl
} from 'react-bootstrap';

import SolutionInput from '../Solution-Input.jsx';
import {
  isValidURL,
  makeRequired,
  createFormValidator,
  getValidationState
} from '../../../../utils/form';
import { submitChallenge, showProjectSubmit } from '../../redux/actions';

const propTypes = {
  isSignedIn: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  showProjectSubmit: PropTypes.func,
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  submitChallenge: PropTypes.func,
  resetForm: PropTypes.func
};

const bindableActions = {
  submitChallenge,
  showProjectSubmit
};
const frontEndFields = [ 'solution' ];
const backEndFields = [
  'solution',
  'githubLink'
];

const fieldValidators = {
  solution: makeRequired(isValidURL)
};

const backEndFieldValidators = {
  ...fieldValidators,
  githubLink: makeRequired(isValidURL)
};

export function _FrontEndForm({
  fields,
  handleSubmit,
  submitChallenge,
  resetForm,
  isSubmitting,
  showProjectSubmit
}) {
  const buttonCopy = isSubmitting ?
    'Submit and go to my next challenge' :
    "I've completed this challenge";
  return (
    <form
      name='NewFrontEndProject'
      onSubmit={
        handleSubmit((value) => {
          submitChallenge(value);
          resetForm('NewFrontEndProject');
        })
      }
      >
      {
        isSubmitting ?
          <SolutionInput
            placeholder='https://codepen/your-project'
            { ...fields }
          /> :
          null
      }
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ isSubmitting ? null : showProjectSubmit }
        type={ isSubmitting ? 'submit' : null }
        >
        { buttonCopy } (ctrl + enter)
      </Button>
    </form>
  );
}

_FrontEndForm.propTypes = propTypes;

export const FrontEndForm = reduxForm(
  {
    form: 'NewFrontEndProject',
    fields: frontEndFields,
    validate: createFormValidator(fieldValidators)
  },
  null,
  bindableActions
)(_FrontEndForm);

export function _BackEndForm({
  fields: { solution, githubLink },
  handleSubmit,
  submitChallenge,
  resetForm,
  isSubmitting,
  showProjectSubmit
}) {
  const buttonCopy = isSubmitting ?
    'Submit and go to my next challenge' :
    "I've completed this challenge";
  return (
    <form
      name='NewBackEndProject'
      onSubmit={
        handleSubmit((values) => {
          submitChallenge(values);
          resetForm('NewBackEndProject');
        })
      }
      >
      {
        isSubmitting ?
          <SolutionInput
            placeholder='https://your-app.com'
            solution={ solution }
          /> :
          null
      }
      { isSubmitting ?
        <FormGroup
          controlId='githubLink'
          validationState={ getValidationState(githubLink) }
          >
          <FormControl
            name='githubLink'
            placeholder='https://github.com/your-username/your-project'
            type='url'
            { ...githubLink }
          />
        </FormGroup> :
        null
      }
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ isSubmitting ? null : showProjectSubmit }
        type={ isSubmitting ? 'submit' : null }
        >
        { buttonCopy } (ctrl + enter)
      </Button>
    </form>
  );
}

_BackEndForm.propTypes = propTypes;

export const BackEndForm = reduxForm(
  {
    form: 'NewBackEndProject',
    fields: backEndFields,
    validate: createFormValidator(backEndFieldValidators)
  },
  null,
  bindableActions
)(_BackEndForm);
