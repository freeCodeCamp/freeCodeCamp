import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../components/formHelpers';

const propTypes = {
  isFrontEnd: PropTypes.bool,
  isProject: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  updateSolutionForm: PropTypes.func.isRequired
};

const challengeFields = ['solution'];
const backEndProjectFields = ['solution', 'githubLink'];

const options = {
  types: {
    solution: 'url',
    githubLink: 'url'
  },
  required: ['solution']
};

export class SolutionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.updateSolutionForm({});
  }
  handleSubmit(values) {
    this.props.updateSolutionForm(values);
    this.props.onSubmit();
  }
  render() {
    const { isSubmitting, isFrontEnd, isProject } = this.props;
    const buttonCopy = isSubmitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    return (
      <Form
        buttonText={`${buttonCopy}`}
        formFields={
          isProject && !isFrontEnd ? backEndProjectFields : challengeFields
        }
        id={isFrontEnd ? 'front-end-form' : 'back-end-form'}
        options={{
          ...options,
          placeholders: {
            solution:
              'Link, ex: ' +
              (isFrontEnd
                ? 'https://codepen.io/camperbot/full/oNvPqqo'
                : 'https://camperbot.glitch.me'),
            githubLink: 'ex: https://github.com/camperbot/hello'
          }
        }}
        submit={this.handleSubmit}
      />
    );
  }
}

SolutionForm.propTypes = propTypes;

export default SolutionForm;
