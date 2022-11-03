import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { kebabCase, set } from 'lodash-es';
import normalizeUrl from 'normalize-url';
import React, { Fragment, useState } from 'react';
import { Field } from 'react-final-form';
import Warning from '../../assets/icons/warning';
import {
  editorValidator,
  localhostValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';
import './form-field.css';

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
  const { formFields, options = {} }: FormFieldsProps = props;
  const {
    ignored = [],
    placeholders = {},
    required = [],
    types = {},
    isEditorLinkAllowed = false,
    isLocalLinkAllowed = false
  } = options;

  const [blured, setBlured] = useState<boolean[]>([]);
  const markAsBlured = (index: number) =>
    setBlured(prevState => set([...prevState], index, true));

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
    const validationWarning = composeValidators(
      name === 'githubLink' || isEditorLinkAllowed ? null : editorValidator,
      fCCValidator,
      httpValidator,
      isLocalLinkAllowed ? null : localhostValidator
    )(value);
    const message: string = (error ||
      validationError ||
      validationWarning) as string;

    const hasError = error || validationError;
    const classNames = [
      'input-message',
      hasError && 'is-error',
      !hasError && 'is-warn'
    ]
      .filter(Boolean)
      .join(' ');
    return message ? (
      <HelpBlock className='input-help-box'>
        <div className={classNames}>
          <Warning />
          {message}
        </div>
      </HelpBlock>
    ) : null;
  };
  return (
    <>
      {formFields
        .filter(formField => !ignored.includes(formField.name))
        .map(({ name, label }, i) => (
          // TODO: verify if the value is always a string
          <Field key={`${kebabCase(name)}-field`} name={name}>
            {({ input: { value, onChange }, meta: { pristine, error } }) => {
              const key = kebabCase(name);
              const type = name in types ? types[name] : 'text';
              const placeholder =
                name in placeholders ? placeholders[name] : '';
              const isURL = types[name] === 'url';
              return (
                <Fragment key={key}>
                  <FormGroup className='embedded'>
                    {type === 'hidden' ? null : (
                      <ControlLabel htmlFor={key}>
                        {label}
                        {required.includes(name) && (
                          <span className='required-star'>*</span>
                        )}
                      </ControlLabel>
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
                      onBlur={() => markAsBlured(i)}
                    />
                  </FormGroup>
                  {blured[i] &&
                    nullOrWarning(
                      value as string,
                      !pristine && error,
                      isURL,
                      name
                    )}
                </Fragment>
              );
            }}
          </Field>
        ))}
    </>
  );
}

FormFields.displayName = 'FormFields';

export default FormFields;
