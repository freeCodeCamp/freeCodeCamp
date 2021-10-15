import React from 'react';
import { Trans } from 'react-i18next';

// Matches editor links for: Replit, Glitch, CodeSandbox, GitHub
const editorRegex =
  /repl\.?it(\.com)?\/(@|join\/)|glitch\.com\/edit\/#!|codesandbox\.io\/s\/|github\.com/;
const fCCRegex =
  /codepen\.io\/freecodecamp|freecodecamp\.rocks|github\.com\/freecodecamp/i;
const localhostRegex = /localhost:/;
const httpRegex = /http(?!s|([^s]+?localhost))/;

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

export function composeValidators(
  ...validators: (((a: string) => void) | null)[]
) {
  return (value: string): string =>
    // TODO: Fix the types according to the validator type and null condition
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    validators.reduce(
      (error: string, validator: ((a: string) => void) | null) =>
        error ?? validator?.(value),
      null
    );
}
