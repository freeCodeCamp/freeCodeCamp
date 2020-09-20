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

// back end challenges and front end projects use a single form field
const solutionField = [{ name: 'solution', label: 'Solution Link' }];
const backEndProjectFields = [
  { name: 'solution', label: 'Solution Link' },
  { name: 'githubLink', label: 'GitHub Link' }
];

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

    let formFields = solutionField;
    let solutionLink = 'ex: ';
    let solutionFormID = 'front-end-form';

    switch (challengeType) {
      case frontEndProject:
        formFields = solutionField;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
        break;

      case backend:
        formFields = solutionField;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        break;

      case backEndProject:
        formFields = backEndProjectFields;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        solutionFormID = 'back-end-form';
        break;

      case pythonProject:
        formFields = solutionField;
        solutionLink =
          solutionLink +
          (description.includes('Colaboratory')
            ? 'https://colab.research.google.com/drive/1i5EmInTWi1RFvFr2_aRXky96YxY6sbWy'
            : 'https://repl.it/@camperbot/hello');
        break;

      default:
        formFields = solutionField;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
    }

    return (
      <Form
        buttonText={`${buttonCopy}`}
        formFields={formFields}
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
