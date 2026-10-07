// @flow strict-local

import fs from 'fs';

/**
 * Creates an object that contains both source and minified (using the source as a fallback).
 * e.g. builtins.min.js and builtins.js.
 */
export default function getExisting(
  minifiedPath: string,
  sourcePath: string,
): {|minified: string, source: string|} {
  let source = fs.readFileSync(sourcePath, 'utf8').trim();
  return {
    source,
    minified: fs.existsSync(minifiedPath)
      ? fs.readFileSync(minifiedPath, 'utf8').trim().replace(/;$/, '')
      : source,
  };
}
