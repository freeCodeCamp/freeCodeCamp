import normalizeUrl from 'normalize-url';
import { FormOptions } from './form';
import {
  localhostValidator,
  editorValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';

export { default as BlockSaveButton } from './block-save-button';
export { default as BlockSaveWrapper } from './block-save-wrapper';
export { default as Form } from './form';
export { default as FormFields } from './form-fields';

const normalizeOptions = {
  stripWWW: false
};

type URLValuesType = {
  [key: string]: string;
};

type validationErrorType = {
  error: { message?: string };
  value: string;
};

type validatedValuesType = {
  values: URLValuesType;
  errors: validationErrorType[];
  invalidValues: (JSX.Element | null)[];
};

export function formatUrlValues(
  values: URLValuesType,
  options: FormOptions
): validatedValuesType {
  const { isEditorLinkAllowed, isLocalLinkAllowed, types } = options;
  const validatedValues: validatedValuesType = {
    values: {},
    errors: [],
    invalidValues: []
  };
  const urlValues = Object.keys(values).reduce((result, key) => {
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
