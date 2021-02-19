// Matches editor links for: Repl.it, Glitch, CodeSandbox, GitHub
const editorRegex = /repl\.it\/(@|join\/)|glitch\.com\/edit\/#!|codesandbox\.io\/s\/|github\.com/;
const fCCRegex = /codepen\.io\/freecodecamp|freecodecamp\.rocks|github\.com\/freecodecamp/i;
const localhostRegex = /localhost:/;

export const editorValidator = value =>
  editorRegex.test(value) ? 'Remember to submit the Live App URL.' : null;

export const fCCValidator = value =>
  fCCRegex.test(value) ? 'Remember to submit your own work.' : null;

export const localhostValidator = value =>
  localhostRegex.test(value)
    ? 'Remember to submit a publicly visible app URL.'
    : null;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error ?? validator?.(value), null);
