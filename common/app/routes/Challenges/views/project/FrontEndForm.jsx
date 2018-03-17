import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

import { showProjectSubmit } from './redux';
import SolutionInput from '../../Solution-Input.jsx';
import { openChallengeModal } from '../../redux';
import { handleKeydown } from '../../utils';
import {
  isValidURL,
  makeRequired,
  createFormValidator
} from '../../../../utils/form';

const propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  isSignedIn: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openChallengeModal: PropTypes.func.isRequired,
  resetForm: PropTypes.func,
  showProjectSubmit: PropTypes.func,
  submitChallenge: PropTypes.func
};

const bindableActions = {
  openChallengeModal,
  showProjectSubmit
};
const frontEndFields = [ 'solution' ];

const fieldValidators = {
  solution: makeRequired(isValidURL)
};

export class _FrontEndForm extends PureComponent {
  state = { isMac: false };

  componentDidMount() {
    const { showProjectSubmit } = this.props;
    document.addEventListener(
      'keydown',
      event => handleKeydown(event, showProjectSubmit)
    );
    const isMac = navigator.userAgent.includes('Mac');
    this.setState({ isMac }); // eslint-disable-line
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', handleKeydown);
  }

  renderButton() {
    const { isSubmitting, showProjectSubmit } = this.props;
    const buttonCopy = isSubmitting ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";

    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ isSubmitting ? null : showProjectSubmit }
        type={ isSubmitting ? 'submit' : null }
        >
        { buttonCopy } ({ this.state.isMac ? 'cmd' : 'ctrl' } + enter)
      </Button>
    );
  }

  render() {
    const {
      fields,
      handleSubmit,
      openChallengeModal,
      isSubmitting
    } = this.props;
    return (
      <form
        name='NewFrontEndProject'
        onSubmit={ handleSubmit(openChallengeModal) }
        >
        {
          isSubmitting ?
            <SolutionInput
              placeholder='https://codepen/your-project'
              { ...fields }
            /> :
            null
        }
        { this.renderButton() }
      </form>
    );
  }
}

_FrontEndForm.propTypes = propTypes;

export default reduxForm(
  {
    form: 'NewFrontEndProject',
    fields: frontEndFields,
    validate: createFormValidator(fieldValidators)
  },
  null,
  bindableActions
)(_FrontEndForm);
