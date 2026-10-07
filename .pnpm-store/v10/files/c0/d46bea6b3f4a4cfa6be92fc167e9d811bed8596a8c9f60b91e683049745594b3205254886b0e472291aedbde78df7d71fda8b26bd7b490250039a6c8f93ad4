import picomatch from 'picomatch'

/**
 * Match list of files against a pattern.
 *
 * @param {string} pattern
 * @param {import('./getStagedFiles.js').StagedFile[]} files
 */
export const matchFiles = (files, pattern, cwd = process.cwd()) => {
  const isMatch = picomatch(pattern, {
    cwd,
    dot: true,
    // If the pattern doesn't look like a path, enable `matchBase` to
    // match against filenames in every directory. This makes `*.js`
    // match both `test.js` and `subdirectory/test.js`.
    matchBase: !pattern.includes('/'),
    posixSlashes: true,
    strictBrackets: true,
  })

  return files.filter((file) => isMatch(file.filepath))
}
