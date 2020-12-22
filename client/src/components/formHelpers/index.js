import normalizeUrl from 'normalize-url';

export { default as BlockSaveButton } from './BlockSaveButton.js';
export { default as BlockSaveWrapper } from './BlockSaveWrapper.js';
export { default as Form } from './Form.js';
export { default as FormFields } from './FormFields.js';

const normalizeOptions = {
  stripWWW: false
};

export function formatUrlValues(values, options) {
  return Object.keys(values).reduce((result, key) => {
    let value = values[key];
    if (value && options.types[key] === 'url') {
      value = normalizeUrl(value, normalizeOptions);
    }
    return { ...result, [key]: value };
  }, {});
}
