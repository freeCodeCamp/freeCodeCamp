// @flow strict-local
import path from 'path';

import {normalizeSeparators} from './path';

/**
 * Returns the package name and the optional subpath
 */
export default function getModuleParts(_name: string): [string, ?string] {
  let name = path.normalize(_name);
  let splitOn = name.indexOf(path.sep);
  if (name.charAt(0) === '@') {
    splitOn = name.indexOf(path.sep, splitOn + 1);
  }
  if (splitOn < 0) {
    return [normalizeSeparators(name), undefined];
  } else {
    return [
      normalizeSeparators(name.substring(0, splitOn)),
      name.substring(splitOn + 1) || undefined,
    ];
  }
}
