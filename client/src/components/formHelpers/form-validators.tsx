import React, { ReactElement } from 'react';
import { Trans } from 'react-i18next';

// Matches editor links for: Replit, Glitch, CodeSandbox, GitHub
const editorRegex =
  /repl\.?it(\.com)?\/(@|join\/)|glitch\.com\/edit\/#!|codesandbox\.io\/s\/|github\.com/;
const fCCRegex =
  /codepen\.io\/freecodecamp|freecodecamp\.rocks|github\.com\/freecodecamp/i;
const localhostRegex = /localhost:/;
const httpRegex = /http(?!s|([^s]+?localhost))/;

export const editorValidator = (value: string): ReactElement | null =>
  editorRegex.test(value) ? <Trans>validation.editor-url</Trans> : null;

export const fCCValidator = (value: string): ReactElement | null =>
  fCCRegex.test(value) ? <Trans>validation.own-work-url</Trans> : null;

export const localhostValidator = (value: string): ReactElement | null =>
  localhostRegex.test(value) ? (
    <Trans>validation.publicly-visible-url</Trans>
  ) : null;

export const httpValidator = (value: string): ReactElement | null =>
  httpRegex.test(value) ? <Trans>validation.http-url</Trans> : null;

export type Validator = (value: string) => ReactElement | null;
export function composeValidators(...validators: (Validator | null)[]) {
  return (value: string): ReturnType<Validator> | null =>
    validators.reduce(
      (error: ReturnType<Validator>, validator) =>
        error ?? (validator ? validator(value) : null),
      null
    );
}
