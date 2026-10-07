import path from 'node:path'

import { createDebug } from './debug.js'
import { normalizePath } from './normalizePath.js'

const debugLog = createDebug('lint-staged:chunkFiles')

/**
 * Chunk array into sub-arrays
 * @param {Array} arr
 * @param {Number} chunkCount
 * @returns {Array<Array>}
 */
const chunkArray = (arr, chunkCount) => {
  if (chunkCount === 1) return [arr]
  const chunked = []
  let position = 0
  for (let i = 0; i < chunkCount; i++) {
    const chunkLength = Math.ceil((arr.length - position) / (chunkCount - i))
    chunked.push([])
    chunked[i] = arr.slice(position, chunkLength + position)
    position += chunkLength
  }
  return chunked
}

/**
 * Chunk files into sub-arrays based on the length of the resulting argument string
 *
 * @typedef {import('./getStagedFiles.js').StagedFile[]} StagedFile
 *
 * @param {Object} opts
 * @param {Array<StagedFile>} opts.files
 * @param {String} [opts.baseDir] The optional base directory to resolve relative paths.
 * @param {number} [opts.maxArgLength] the maximum argument string length
 * @param {Boolean} [opts.relative] whether files are relative to `topLevelDir` or should be resolved as absolute
 * @returns {Array<Array<StagedFile>>}
 */
export const chunkFiles = ({ files, baseDir, maxArgLength = null, relative = false }) => {
  const normalizedFiles = files.map((file) => {
    return {
      filepath: normalizePath(
        relative || !baseDir ? file.filepath : path.resolve(baseDir, file.filepath)
      ),
      status: file.status,
    }
  })

  if (!maxArgLength) {
    debugLog('Skip chunking files because of undefined maxArgLength')
    return [normalizedFiles] // wrap in an array to return a single chunk
  }

  /** Calculate total character length of all filepaths, with added spaces in between */
  const fileListLength =
    normalizedFiles.reduce((sum, file) => sum + file.filepath.length, 0) +
    Math.max(normalizedFiles.length - 1, 0)

  debugLog(
    `Resolved an argument string length of ${fileListLength} characters from ${normalizedFiles.length} files`
  )
  const chunkCount = Math.min(Math.ceil(fileListLength / maxArgLength), normalizedFiles.length)
  debugLog(`Creating ${chunkCount} chunks for maxArgLength of ${maxArgLength}`)
  return chunkArray(normalizedFiles, chunkCount)
}
