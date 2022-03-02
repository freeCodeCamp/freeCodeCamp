import React, { FormEvent } from 'react';
import { Form } from 'react-final-form';

import {
  URLValues,
  ValidatedValues,
  FormFields,
  BlockSaveButton,
  BlockSaveWrapper,
  formatUrlValues
} from '../formHelpers/index';

export type FormOptions = {
  ignored?: string[];
  isEditorLinkAllowed?: boolean;
  isLocalLinkAllowed?: boolean;
  required?: string[];
  types?: { [key: string]: string };
  placeholders?: { [key: string]: string };
};

type FormProps = {
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
