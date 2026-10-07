// @flow strict-local

import type {FilePath, NamedBundle} from '@parcel/types';

import path from 'path';
import {relativePath} from './path';

export function relativeBundlePath(
  from: NamedBundle,
  to: NamedBundle,
  opts: {|leadingDotSlash: boolean|} = {leadingDotSlash: true},
): FilePath {
  let fromPath = path.join(from.target.distDir, from.name);
  let toPath = path.join(to.target.distDir, to.name);
  return relativePath(path.dirname(fromPath), toPath, opts.leadingDotSlash);
}
