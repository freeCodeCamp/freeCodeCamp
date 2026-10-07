// @flow strict-local
import type {FilePath} from '@parcel/types';
import path from 'path';
import {relativePath, normalizeSeparators} from '@parcel/utils';

/**
 * A path that's relative to the project root.
 */
export opaque type ProjectPath = string;

function toProjectPath_(projectRoot: FilePath, p: FilePath): ProjectPath {
  if (p == null) {
    return p;
  }

  // If the file is outside the project root, store an absolute path rather
  // than a relative one. This way if the project root is moved, the file
  // references still work. Accessing files outside the project root is not
  // portable anyway.
  let relative = relativePath(projectRoot, p, false);
  if (relative.startsWith('..')) {
    return process.platform === 'win32' ? normalizeSeparators(p) : p;
  }

  return relative;
}

export const toProjectPath: ((
  projectRoot: FilePath,
  p: FilePath,
) => ProjectPath) &
  ((projectRoot: FilePath, p: FilePath | void) => ProjectPath | void) &
  // $FlowFixMe Not sure how to type properly
  ((projectRoot: FilePath, p: ?FilePath) => ?ProjectPath) = toProjectPath_;

function fromProjectPath_(projectRoot: FilePath, p: ?ProjectPath): ?FilePath {
  if (p == null) {
    return null;
  }

  // Project paths use normalized unix separators, so we only need to
  // convert them on Windows.
  let projectPath = process.platform === 'win32' ? path.normalize(p) : p;

  // If the path is absolute (e.g. outside the project root), just return it.
  if (path.isAbsolute(projectPath)) {
    return projectPath;
  }

  // Add separator if needed. Doing this manunally is much faster than path.join.
  if (projectRoot[projectRoot.length - 1] !== path.sep) {
    return projectRoot + path.sep + projectPath;
  }

  return projectRoot + projectPath;
}

export const fromProjectPath: ((
  projectRoot: FilePath,
  p: ProjectPath,
) => FilePath) &
  // $FlowFixMe Not sure how to type properly
  ((projectRoot: FilePath, p: ?ProjectPath) => ?FilePath) = fromProjectPath_;

/**
 * Returns a path relative to the project root. This should be used when computing cache keys
 */
export function fromProjectPathRelative(p: ProjectPath): FilePath {
  return p;
}

/**
 * This function should be avoided, it doesn't change the actual value.
 */
export function toProjectPathUnsafe(p: FilePath): ProjectPath {
  return p;
}

/**
 * Joins a project root with relative paths (similar to `path.join`)
 */
export function joinProjectPath(
  a: ProjectPath,
  ...b: Array<FilePath>
): ProjectPath {
  return path.posix.join(a, ...b);
}
