import React from 'react';
import { Trans } from 'react-i18next';

// Matches editor links for: Replit, Glitch, CodeSandbox, GitHub
const editorRegex =
  /repl\.?it(\.com)?\/(@|join\/)|glitch\.com\/edit\/#!|codesandbox\.io\/s\/|github\.com/;
const fCCRegex =
  /codepen\.io\/freecodecamp|freecodecamp\.rocks|github\.com\/freecodecamp|\.freecodecamp\.org/i;
const localhostRegex = /localhost:/;
const httpRegex = /http(?!s|([^s]+?localhost))/;

function isPathRoot(urlString: string): boolean {
  try {
    return new URL(urlString).pathname !== '/';
  } catch {
    return false;
  }
}

export const editorValidator = (value: string): React.ReactElement | null =>
  editorRegex.test(value) ? <Trans>validation.editor-url</Trans> : null;

export const fCCValidator = (value: string): React.ReactElement | null =>
  fCCRegex.test(value) ? <Trans>validation.own-work-url</Trans> : null;

export const localhostValidator = (value: string): React.ReactElement | null =>
  localhostRegex.test(value) ? (
    <Trans>validation.publicly-visible-url</Trans>
  ) : null;

export const httpValidator = (value: string): React.ReactElement | null =>
  httpRegex.test(value) ? <Trans>validation.http-url</Trans> : null;

export const pathValidator = (value: string): React.ReactElement | null =>
  isPathRoot(value) ? <Trans>validation.path-url</Trans> : null;

type Validator = (value: string) => React.ReactElement | null;
export function composeValidators(...validators: (Validator | null)[]) {
  return (value: string): ReturnType<Validator> | null =>
    validators.reduce(
      (error: ReturnType<Validator>, validator) =>
        error ?? (validator ? validator(value) : null),
      null
    );
}
