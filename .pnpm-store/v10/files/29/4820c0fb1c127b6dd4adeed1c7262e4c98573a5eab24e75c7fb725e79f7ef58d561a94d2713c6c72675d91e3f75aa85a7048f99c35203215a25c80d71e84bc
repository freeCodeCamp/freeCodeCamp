// @flow strict-local
import type {FilePath} from '@parcel/types';
import path from 'path';

const ABSOLUTE_PATH_REGEX = /^([a-zA-Z]:){0,1}[\\/]+/;
const SEPARATOR_REGEX = /[\\]+/g;

export function isAbsolute(filepath: string): boolean {
  return ABSOLUTE_PATH_REGEX.test(filepath);
}

export function normalizeSeparators(filePath: FilePath): FilePath {
  return filePath.replace(SEPARATOR_REGEX, '/');
}

export type PathOptions = {
  noLeadingDotSlash?: boolean,
  ...
};

export function normalizePath(
  filePath: FilePath,
  leadingDotSlash: boolean = true,
): FilePath {
  if (
    leadingDotSlash &&
    (filePath[0] !== '.' ||
      (filePath[1] !== '.' && filePath[1] !== '/' && filePath[1] !== '\\')) &&
    !path.isAbsolute(filePath)
  ) {
    return normalizeSeparators('./' + filePath);
  } else {
    return normalizeSeparators(filePath);
  }
}

export function relativePath(
  from: string,
  to: string,
  leadingDotSlash: boolean = true,
): FilePath {
  // Fast path
  if (to.startsWith(from + '/')) {
    return (leadingDotSlash ? './' : '') + to.slice(from.length + 1);
  }

  return normalizePath(path.relative(from, to), leadingDotSlash);
}
