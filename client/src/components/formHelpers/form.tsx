import React from 'react';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import normalizeUrl from 'normalize-url';

import BlockSaveButton from '../helpers/form/block-save-button';
import {
  localhostValidator,
  editorValidator,
  composeValidators,
  fCCValidator,
  httpValidator,
  sourceCodeLinkExistsValidator,
  sourceCodeLinkPublicValidator
} from './form-validators';
import FormFields, { FormOptions } from './form-fields';

type FormValues = {
  [key: string]: string;
};

type ValidationError = {
  error: { message?: string };
  value: string;
};

export type ValidatedValues = {
  values: FormValues;
  errors: ValidationError[];
  invalidValues: (JSX.Element | null)[];
};

const normalizeOptions = {
  stripWWW: false
};

function validateFormValues(
  formValues: FormValues,
  options: FormOptions
): ValidatedValues {
  const {
    isEditorLinkAllowed,
    isLocalLinkAllowed,
    isSourceCodeLinkRequired,
    types
  } = options;
  const validatedValues: ValidatedValues = {
    values: {},
    errors: [],
    invalidValues: []
  };

  const formFields = Object.entries(formValues);
  // We don't always get a githubLink field in formValues, so we can't simply
  // validate that field like the others. We have to handle it separately.
  if (isSourceCodeLinkRequired) {
    const githubLink = formValues['githubLink'];
    if (!githubLink) {
      validatedValues.invalidValues.push(sourceCodeLinkExistsValidator(''));
    }
  }

  const urlValues = formFields.reduce((result, [key, value]) => {
    // NOTE: pathValidator is not used here, because it is only used as a
    // suggestion - should not prevent form submission
    const validators = [fCCValidator, httpValidator];
    const isSolutionLink = key !== 'githubLink';
    if (isSolutionLink && !isEditorLinkAllowed) {
      validators.push(editorValidator);
    }
    if (!isLocalLinkAllowed) {
      validators.push(localhostValidator);
    }
    if (key === 'githubLink') {
      if (isSourceCodeLinkRequired) {
        validators.push(sourceCodeLinkExistsValidator);
      }
      validators.push(sourceCodeLinkPublicValidator);
    }

    const nullOrWarning = composeValidators(...validators)(value);
    if (nullOrWarning) {
      validatedValues.invalidValues.push(nullOrWarning);
    }
    if (value && types && types[key] === 'url') {
      try {
        value = normalizeUrl(value, normalizeOptions);
      } catch (err: unknown) {
        validatedValues.errors.push({
          error: err as { message?: string },
          value
        });
      }
    }
    return { ...result, [key]: value };
  }, {});
  validatedValues.values = urlValues;
  return validatedValues;
}

// Reports upwards from an effect rather than during render, so that parents can
// hold the flag in state without React complaining about a render-phase update.
const UnsavedChangesReporter = ({
  hasUnsavedChanges,
  onUnsavedChanges
}: {
  hasUnsavedChanges: boolean;
  onUnsavedChanges: (hasUnsavedChanges: boolean) => void;
}): null => {
  React.useEffect(() => {
    onUnsavedChanges(hasUnsavedChanges);
  }, [hasUnsavedChanges, onUnsavedChanges]);

  return null;
};

export type StrictSolutionFormProps = {
  buttonText?: string;
  enableSubmit?: boolean;
  formFields: { name: string; label: string }[];
  id: string;
  initialValues?: Record<string, unknown>;
  onUnsavedChanges?: (hasUnsavedChanges: boolean) => void;
  options: FormOptions;
  submit: (values: ValidatedValues) => void;
};

export const StrictSolutionForm = ({
  id,
  formFields,
  initialValues,
  onUnsavedChanges,
  options,
  submit,
  buttonText,
  enableSubmit
}: StrictSolutionFormProps): JSX.Element => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values: FormValues) => {
        const validatedValues = validateFormValues(values, options);
        submit(validatedValues);
        // Values that fail to normalize are never persisted, so report the
        // submission as failed to keep them flagged as unsaved.
        if (validatedValues.errors.length > 0) {
          return { [FORM_ERROR]: 'unnormalizable-values' };
        }
      }}
    >
      {({
        handleSubmit,
        pristine,
        error,
        dirty,
        submitSucceeded,
        dirtySinceLastSubmit
      }) => (
        <form
          id={`dynamic-${id}`}
          onSubmit={event => {
            void handleSubmit(event);
          }}
          style={{ width: '100%' }}
          data-playwright-test-label='form-helper-form'
        >
          {onUnsavedChanges && (
            <UnsavedChangesReporter
              hasUnsavedChanges={
                dirty && (!submitSucceeded || dirtySinceLastSubmit)
              }
              onUnsavedChanges={onUnsavedChanges}
            />
          )}
          <FormFields formFields={formFields} options={options} />
          <BlockSaveButton
            disabled={(pristine && !enableSubmit) || Boolean(error)}
          >
            {buttonText}
          </BlockSaveButton>
        </form>
      )}
    </Form>
  );
};
