import normalizeUrl from 'normalize-url';
import { ValidatedValues } from '../../templates/Challenges/projects/solution-form';
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

type validatedValuesType = {
  errors: string[];
  invalidValues: string[];
  values: Record<string, unknown>;
};

export function formatUrlValues(
  values: ValidatedValues,
  options: FormOptions
): validatedValuesType {
  const { isEditorLinkAllowed, isLocalLinkAllowed, types } = options;
  const validatedValues: validatedValuesType = {
    values: {},
    errors: [],
    invalidValues: []
  };
  const urlValues = Object.keys(values).reduce((result, key) => {
    // eslint-disable-next-line
    //@ts-ignore
    let value: string = values[key] as string;
    const nullOrWarning: string = composeValidators(
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
      } catch (err) {
        // Not a valid URL for testing or submission
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        validatedValues.errors.push({ error: err, value }); // eslint-disable-line  @typescript-eslint/no-unsafe-assignment
      }
    }
    return { ...result, [key]: value };
  }, {});
  validatedValues.values = urlValues;
  return validatedValues;
}
