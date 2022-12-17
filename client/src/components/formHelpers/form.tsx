import React, { FormEvent } from 'react';
import { Form } from 'react-final-form';
import normalizeUrl from 'normalize-url';

import {
  localhostValidator,
  editorValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';
import FormFields, { FormOptions } from './form-fields';

import { default as BlockSaveButton } from './block-save-button';
import { default as BlockSaveWrapper } from './block-save-wrapper';

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
    let value: string = values[key];
    const nullOrWarning: JSX.Element | null = composeValidators(
      fCCValidator,
      httpValidator,
      isLocalLinkAllowed ? null : localhostValidator,
      key === 'githubLink' || isEditorLinkAllowed ? null : editorValidator
    )(value);
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

export type FormProps = {
  buttonText?: string;
  enableSubmit?: boolean;
  formFields: { name: string; label: string }[];
  hideButton?: boolean;
  id: string;
  initialValues?: Record<string, unknown>;
  options: FormOptions;
  submit: (values: ValidatedValues, ...args: unknown[]) => void;
};

function DynamicForm({
  id,
  formFields,
  initialValues,
  options,
  submit,
  buttonText,
  enableSubmit,
  hideButton
}: FormProps): JSX.Element {
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
          <BlockSaveWrapper>
            {hideButton ? null : (
              <BlockSaveButton
                disabled={(pristine && !enableSubmit) || (error as boolean)}
              >
                {buttonText ? buttonText : null}
              </BlockSaveButton>
            )}
          </BlockSaveWrapper>
        </form>
      )}
    </Form>
  );
}

DynamicForm.displayName = 'DynamicForm';

export default DynamicForm;
