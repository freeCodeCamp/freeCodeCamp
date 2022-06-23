import normalizeUrl from 'normalize-url';
import {
  localhostValidator,
  editorValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';

export { default as BlockSaveButton } from './block-save-button';
export { default as BlockSaveWrapper } from './block-save-wrapper';

const normalizeOptions = {
  stripWWW: false
};

export type FormOptions = {
  ignored?: string[];
  isEditorLinkAllowed?: boolean;
  isLocalLinkAllowed?: boolean;
  required?: string[];
  types?: { [key: string]: string };
  placeholders?: { [key: string]: string };
};

export type URLValues = {
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

export function formatUrlValues(
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
