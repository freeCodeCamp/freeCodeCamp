import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form
  // isValidURL,
  // makeRequired,
  // createFormValidator
} from '../../../components/formHelpers';

const propTypes = {
  isFrontEnd: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  updateProjectForm: PropTypes.func.isRequired
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

export class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keysDown: {
        Control: false,
        Enter: false
      }
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.updateProjectForm({});
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }
  componentDidUpdate() {
    this.props.updateProjectForm({});
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
  handleKeyDown(e) {
    if (e.key === 'Control') {
      this.setState(state => ({
        ...state,
        keysDown: { ...state.keysDown, Control: true }
      }));
    }
    if (e.key === 'Enter') {
      this.setState(state => ({
        ...state,
        keysDown: { ...state.keysDown, Enter: true }
      }));
    }
  }
  handleKeyUp(e) {
    if (e.key === 'Control') {
      this.setState(state => ({
        ...state,
        keysDown: { ...state.keysDown, Control: false }
      }));
    }
    if (e.key === 'Enter') {
      this.setState(state => ({
        ...state,
        keysDown: { ...state.keysDown, Enter: false }
      }));
    }
  }
  handleSubmit(values) {
    const { keysDown: { Control, Enter } } = this.state;
    if ((Control && Enter) || !Enter) {
      this.props.openModal('completion');
      this.props.updateProjectForm(values);
    }
  }
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
