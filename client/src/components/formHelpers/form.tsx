import React, { FormEvent } from 'react';
import { Form } from 'react-final-form';
import normalizeUrl from 'normalize-url';

import BlockSaveButton from '../helpers/form/block-save-button';
import {
  localhostValidator,
  editorValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';
import FormFields, { FormOptions } from './form-fields';

type URLValues = {
  [key: string]: string;
};

type ValidationError = {
  error: { message?: string };
  value: string;
};

export type ValidatedValues = {
  values: URLValues;
  errors: ValidationError[];
  invalidValues: (JSX.Element | null)[];
};

const normalizeOptions = {
  stripWWW: false
};

function formatUrlValues(
  values: URLValues,
  options: FormOptions
): ValidatedValues {
  const { isEditorLinkAllowed, isLocalLinkAllowed, types } = options;
  const validatedValues: ValidatedValues = {
    values: {},
    errors: [],
    invalidValues: []
  };
  const urlValues = Object.keys(values).reduce((result, key: string) => {
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

    let value: string = values[key];
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

export type StrictSolutionFormProps = {
  buttonText?: string;
  enableSubmit?: boolean;
  formFields: { name: string; label: string }[];
  id: string;
  initialValues?: Record<string, unknown>;
  options: FormOptions;
  submit: (values: ValidatedValues, ...args: unknown[]) => void;
};

export const StrictSolutionForm = ({
  id,
  formFields,
  initialValues,
  options,
  submit,
  buttonText,
  enableSubmit
}: StrictSolutionFormProps): JSX.Element => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values: URLValues, ...args: unknown[]) => {
        submit(formatUrlValues(values, options), ...args);
      }}
    >
      {({ handleSubmit, pristine, error }) => (
        <form
          id={`dynamic-${id}`}
          onSubmit={handleSubmit as (e: FormEvent) => void}
          style={{ width: '100%' }}
        >
          <FormFields formFields={formFields} options={options} />
          <BlockSaveButton
            disabled={(pristine && !enableSubmit) || (error as boolean)}
          >
            {buttonText}
          </BlockSaveButton>
        </form>
      )}
    </Form>
  );
};
