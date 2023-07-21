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

type Validator = (value: string) => React.ReactElement | null;

// example link: https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8
export const isMicrosoftLearnLink = (value: string): boolean => {
  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const correctDomain = url.hostname === 'learn.microsoft.com';
  const correctPath = !!url.pathname.match(
    /^\/[^/]+\/training\/achievements\/learn\.wwl\.get-started-c-sharp-part-\d\.trophy$/
  );
  const hasSharingId = !!url.searchParams.get('sharingId');
  const hasUsername = !!url.searchParams.get('username');
  return correctDomain && correctPath && hasSharingId && hasUsername;
};

export const microsoftValidator: Validator = value =>
  !isMicrosoftLearnLink(value) ? <Trans>validation.ms-learn-link</Trans> : null;

export const editorValidator: Validator = value =>
  editorRegex.test(value) ? <Trans>validation.editor-url</Trans> : null;

export const fCCValidator: Validator = value =>
  fCCRegex.test(value) ? <Trans>validation.own-work-url</Trans> : null;

export const localhostValidator: Validator = value =>
  localhostRegex.test(value) ? (
    <Trans>validation.publicly-visible-url</Trans>
  ) : null;

export const httpValidator: Validator = value =>
  httpRegex.test(value) ? <Trans>validation.http-url</Trans> : null;

export const pathValidator: Validator = value =>
  isPathRoot(value) ? <Trans>validation.path-url</Trans> : null;

export function composeValidators(...validators: Validator[]) {
  return (value: string): ReturnType<Validator> | null =>
    validators.reduce(
      (error: ReturnType<Validator>, validator) => error ?? validator(value),
      null
    );
}
