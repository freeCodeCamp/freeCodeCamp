// Matches editor links for: Repl.it, Glitch, CodeSandbox
const editorRegex = /repl\.it\/@|glitch\.com\/edit\/#!|codesandbox\.io\/s\//;
const localhostRegex = /localhost:/;

export const editorValidator = value =>
  editorRegex.test(value) ? 'Remember to submit the Live App URL.' : null;

export const localhostValidator = value =>
  localhostRegex.test(value)
    ? 'Remember to submit a publicly visible app URL.'
    : null;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error ?? validator(value), null);
