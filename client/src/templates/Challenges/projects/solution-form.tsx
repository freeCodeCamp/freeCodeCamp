import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import type { WithTranslation } from 'react-i18next';

import { challengeTypes } from '../../../../../shared/config/challenge-types';
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
      { name: 'githubLink', label: t('learn.source-code-link') }
    ];

    const buttonCopy = t('learn.i-completed');

    const options = {
      types: {
        solution: 'url',
        githubLink: 'url'
      },
      required: ['solution'],
      isEditorLinkAllowed: false,
      isLocalLinkAllowed: false,
      isSourceCodeLinkRequired: false
    };

    let formFields = solutionField;
    let solutionLink = 'ex: ';
    let solutionFormID = 'front-end-form';

    switch (challengeType) {
      case challengeTypes.frontEndProject:
        formFields = solutionField;
        solutionLink =
          solutionLink + 'https://codepen.io/camperbot/full/oNvPqqo';
        break;

      case challengeTypes.backend:
        formFields = solutionField;
        options.isLocalLinkAllowed = true;
        solutionLink = solutionLink + 'https://3000-project-url.gitpod.io/';
        break;

      case challengeTypes.backEndProject:
        formFields = backEndProjectFields;
        // options.required.push('githubLink');
        options.isSourceCodeLinkRequired = true;
        options.isLocalLinkAllowed = true;
        solutionLink = solutionLink + 'https://3000-project-url.gitpod.io/';
        solutionFormID = 'back-end-form';
        break;

      case challengeTypes.pythonProject:
      case challengeTypes.colab:
        formFields = solutionField;
        options.isEditorLinkAllowed = true;
        solutionLink =
          solutionLink +
          (description?.includes('Colaboratory')
            ? 'https://colab.research.google.com/drive/1i5EmInTWi1RFvFr2_aRXky96YxY6sbWy'
            : 'https://replit.com/@camperbot/hello');
        break;

      case challengeTypes.codeAllyCert:
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
            githubLink: 'ex: https://your-git-repo.url/files'
          }
        }}
        submit={this.handleSubmit}
      />
    );
  }
}

export default withTranslation()(SolutionForm);
