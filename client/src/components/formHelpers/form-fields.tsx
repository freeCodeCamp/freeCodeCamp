import {
  Alert,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { kebabCase } from 'lodash-es';
import normalizeUrl from 'normalize-url';
import React from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import {
  editorValidator,
  localhostValidator,
  composeValidators,
  fCCValidator,
  httpValidator,
  pathValidator
} from './form-validators';

export type FormOptions = {
  ignored?: string[];
  isEditorLinkAllowed?: boolean;
  isLocalLinkAllowed?: boolean;
  required?: string[];
  types?: { [key: string]: string };
  placeholders?: { [key: string]: string };
};

type FormFieldsProps = {
  formFields: { name: string; label: string }[];
  options: FormOptions;
};

function FormFields(props: FormFieldsProps): JSX.Element {
  const { t } = useTranslation();
  const { formFields, options = {} }: FormFieldsProps = props;
  const {
    ignored = [],
    placeholders = {},
    required = [],
    types = {},
    isEditorLinkAllowed = false,
    isLocalLinkAllowed = false
  } = options;

  const nullOrWarning = (
    value: string,
    error: unknown,
    isURL: boolean,
    name: string
  ) => {
    let validationError: string | undefined;
    if (value && isURL) {
      try {
        normalizeUrl(value, { stripWWW: false });
      } catch (err: unknown) {
        validationError = (err as { message?: string })?.message;
      }
    }

    const validators = [fCCValidator, httpValidator];
    const isSolutionLink = name !== 'githubLink';
    if (isSolutionLink && !isEditorLinkAllowed) {
      validators.push(editorValidator);
      if (isLocalLinkAllowed) {
        validators.push(pathValidator);
      }
    }
    if (!isLocalLinkAllowed) {
      validators.push(localhostValidator);
    }
    const validationWarning = composeValidators(...validators)(value);
    const message: string = (error ||
      validationError ||
      validationWarning) as string;
    return message ? (
      <HelpBlock>
        <Alert
          bsStyle={error || validationError ? 'danger' : 'info'}
          closeLabel={t('buttons.close')}
        >
          {message}
        </Alert>
      </HelpBlock>
    ) : null;
  };
  return (
    <>
      {formFields
        .filter(formField => !ignored.includes(formField.name))
        .map(({ name, label }) => (
          // TODO: verify if the value is always a string
          <Field key={`${kebabCase(name)}-field`} name={name}>
            {({ input: { value, onChange }, meta: { pristine, error } }) => {
              const key = kebabCase(name);
              const type = name in types ? types[name] : 'text';
              const placeholder =
                name in placeholders ? placeholders[name] : '';
              const isURL = types[name] === 'url';
              return (
                <FormGroup key={key}>
                  {type === 'hidden' ? null : (
                    <ControlLabel htmlFor={key}>{label}</ControlLabel>
                  )}
                  <FormControl
                    componentClass={type === 'textarea' ? type : 'input'}
                    id={key}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required.includes(name)}
                    rows={4}
                    type={type}
                    value={value as string}
                  />
                  {nullOrWarning(
                    value as string,
                    !pristine && error,
                    isURL,
                    name
                  )}
                </FormGroup>
              );
            }}
          </Field>
        ))}
    </>
  );
}

FormFields.displayName = 'FormFields';

export default FormFields;
