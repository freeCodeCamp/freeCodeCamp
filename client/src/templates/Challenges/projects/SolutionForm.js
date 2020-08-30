import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../components/formHelpers';
import {
  backend,
  backEndProject,
  frontEndProject,
  pythonProject
} from '../../../../utils/challengeTypes';

const propTypes = {
  challengeType: PropTypes.number,
  description: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  updateSolutionForm: PropTypes.func.isRequired
};

const challengeAndFrontEndFields = ['solution'];
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
    const { isSubmitting, challengeType, description } = this.props;
    const buttonCopy = isSubmitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";

    let solutionFormFields = challengeAndFrontEndFields;
    let solutionLink = 'Link, ex: ';
    let solutionFormID = 'front-end-form';

    switch (challengeType) {
      case frontEndProject:
        solutionFormFields = challengeAndFrontEndFields;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
        break;

      case backend:
        solutionFormFields = challengeAndFrontEndFields;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        break;

      case backEndProject:
        solutionFormFields = backEndProjectFields;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        solutionFormID = 'back-end-form';
        break;

      case pythonProject:
        solutionFormFields = challengeAndFrontEndFields;
        solutionLink =
          solutionLink +
          (description.includes('Colaboratory')
            ? 'https://colab.research.google.com/drive/1i5EmInTWi1RFvFr2_aRXky96YxY6sbWy'
            : 'https://repl.it/@camperbot/hello');
        break;

      default:
        solutionFormFields = challengeAndFrontEndFields;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
    }

    return (
      <Form
        buttonText={`${buttonCopy}`}
        formFields={solutionFormFields}
        id={solutionFormID}
        options={{
          ...options,
          placeholders: {
            solution: solutionLink,
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
