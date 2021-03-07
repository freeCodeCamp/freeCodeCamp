import React from 'react';
import { Trans } from 'react-i18next';

// Matches editor links for: Repl.it, Glitch, CodeSandbox, GitHub
const editorRegex = /repl\.it\/(@|join\/)|glitch\.com\/edit\/#!|codesandbox\.io\/s\/|github\.com/;
const fCCRegex = /codepen\.io\/freecodecamp|freecodecamp\.rocks|github\.com\/freecodecamp/i;
const localhostRegex = /localhost:/;
const httpRegex = /http(?!s|([^s]+?localhost))/;

export const editorValidator = value =>
  editorRegex.test(value) ? <Trans>validation.editor-url</Trans> : null;

export const fCCValidator = value =>
  fCCRegex.test(value) ? <Trans>validation.own-work-url</Trans> : null;

export const localhostValidator = value =>
  localhostRegex.test(value) ? (
    <Trans>validation.publicly-visible-url</Trans>
  ) : null;

export const httpValidator = value =>
  httpRegex.test(value) ? <Trans>validation.http-url</Trans> : null;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error ?? validator?.(value), null);
