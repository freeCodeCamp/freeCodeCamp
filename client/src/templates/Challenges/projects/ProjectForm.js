import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../components/formHelpers';

const propTypes = {
  externalSite: PropTypes.string,
  isFrontEnd: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  updateProjectForm: PropTypes.func.isRequired
};

const frontEndFields = ['solution'];
const backEndFields = ['solution', 'githubLink'];

const options = {
  types: {
    solution: 'url',
    githubLink: 'url'
  },
  required: ['solution']
};

export class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.updateProjectForm({});
  }
  handleSubmit(values) {
    this.props.updateProjectForm(values);
    this.props.onSubmit();
  }
  render() {
    const { isSubmitting, isFrontEnd, externalSite } = this.props;
    const buttonCopy = isSubmitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";

    let solutionPlaceholder = '';
    if (externalSite) {
      if (externalSite === 'replit') {
        solutionPlaceholder = 'https://repl.it/camperbot/solution';
      } else {
        solutionPlaceholder =
          'https://colab.research.google.com/drive/1UCHiRuBLxo013aMuiDXlaP54LsxzrXH3';
      }
    } else if (isFrontEnd) {
      solutionPlaceholder = 'https://codepen.io/camperbot/full/oNvPqqo';
    } else {
      solutionPlaceholder = 'https://camperbot.glitch.me';
    }

    return (
      <Form
        buttonText={`${buttonCopy}`}
        formFields={isFrontEnd ? frontEndFields : backEndFields}
        id={isFrontEnd ? 'front-end-form' : 'back-end-form'}
        options={{
          ...options,
          placeholders: {
            solution: 'Link to solution, ex: ' + solutionPlaceholder,
            githubLink:
              'Link to GitHub repo, ex: https://github.com/camperbot/hello'
          }
        }}
        submit={this.handleSubmit}
      />
    );
  }
}

ProjectForm.propTypes = propTypes;

export default ProjectForm;
