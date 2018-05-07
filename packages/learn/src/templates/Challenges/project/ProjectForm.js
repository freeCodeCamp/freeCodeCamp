import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Form
  // isValidURL,
  // makeRequired,
  // createFormValidator
} from '../../../components/formHelpers';

const propTypes = {
  isFrontEnd: PropTypes.bool,
  isSubmitting: PropTypes.bool
};

const frontEndFields = ['solution'];
const backEndFields = ['solution', 'githubLink'];

// const fieldValidators = {
//   solution: makeRequired(isValidURL)
// };

// const backEndFieldValidators = {
//   ...fieldValidators,
//   githubLink: makeRequired(isValidURL)
// };

const options = {
  types: {
    solution: 'url',
    githubLink: 'url'
  },
  required: ['solution', 'githubLink']
};

export class ProjectForm extends PureComponent {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    const { isSubmitting, isFrontEnd } = this.props;
    const buttonCopy = isSubmitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    return (
      <Form
        buttonText={`${buttonCopy} (Ctrl + Enter)`}
        formFields={isFrontEnd ? frontEndFields : backEndFields}
        id={isFrontEnd ? 'front-end-form' : 'back-end-form'}
        options={options}
        submit={this.handleSubmit}
        // validate={createFormValidator(
        //   isFrontEnd ? fieldValidators : backEndFieldValidators
        // )}
      />
    );
  }
}

ProjectForm.propTypes = propTypes;

export default ProjectForm;
