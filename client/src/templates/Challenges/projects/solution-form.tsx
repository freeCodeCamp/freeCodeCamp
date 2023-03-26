import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import type { WithTranslation } from 'react-i18next';

import {
  backend,
  backEndProject,
  codeAllyCert,
  colab,
  frontEndProject,
  pythonProject
} from '../../../../utils/challenge-types';
import {
  StrictSolutionForm,
  ValidatedValues
} from '../../../components/formHelpers/form';

interface SubmitProps {
  showCompletionModal: boolean;
}

interface SolutionFormProps extends WithTranslation {
  challengeType: number;
  description?: string;
  onSubmit: (arg0: SubmitProps) => void;
  updateSolutionForm: (arg0: Record<string, unknown>) => void;
}

export class SolutionForm extends Component<SolutionFormProps> {
  constructor(props: SolutionFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    this.props.updateSolutionForm({});
  }

  handleSubmit = (validatedValues: ValidatedValues): void => {
    // Do not execute challenge, if errors
    if (validatedValues.errors.length === 0) {
      // updates values on store
      this.props.updateSolutionForm(validatedValues.values);
      if (validatedValues.invalidValues.length === 0) {
        this.props.onSubmit({ showCompletionModal: true });
      } else {
        this.props.onSubmit({ showCompletionModal: false });
      }
    }
  };

  render(): JSX.Element {
    const { challengeType, description, t } = this.props;

    // back end challenges and front end projects use a single form field
    const solutionField = [
      { name: 'solution', label: t('learn.solution-link') }
    ];
    const backEndProjectFields = [
      { name: 'solution', label: t('learn.solution-link') },
      { name: 'githubLink', label: t('learn.github-link') }
    ];

    const buttonCopy = t('learn.i-completed');

    const options = {
      types: {
        solution: 'url',
        githubLink: 'url'
      },
      required: ['solution'],
      isEditorLinkAllowed: false,
      isLocalLinkAllowed: false
    };

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
        options.isLocalLinkAllowed = true;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        break;

      case backEndProject:
        formFields = backEndProjectFields;
        solutionLink = solutionLink + 'https://project-name.camperbot.repl.co/';
        solutionFormID = 'back-end-form';
        break;

      case pythonProject:
      case colab:
        formFields = solutionField;
        options.isEditorLinkAllowed = true;
        solutionLink =
          solutionLink +
          (description?.includes('Colaboratory')
            ? 'https://colab.research.google.com/drive/1i5EmInTWi1RFvFr2_aRXky96YxY6sbWy'
            : 'https://replit.com/@camperbot/hello');
        break;

      case codeAllyCert:
        formFields = solutionField;
        options.isEditorLinkAllowed = true;
        solutionLink = solutionLink + 'https://your-git-repo.url/files';
        break;

      default:
        formFields = solutionField;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
    }

    return (
      <StrictSolutionForm
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

export default withTranslation()(SolutionForm);
