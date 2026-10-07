/** @typedef {import('./index').Logger} Logger */

import fs, { constants } from 'node:fs/promises'
import path from 'node:path'

import { CONFIG_FILE_NAMES } from './configFiles.js'
import { createDebug } from './debug.js'
import { execGit } from './execGit.js'
import { loadConfig } from './loadConfig.js'
import { normalizePath } from './normalizePath.js'
import { parseGitZOutput } from './parseGitZOutput.js'
import { validateConfig } from './validateConfig.js'

const debugLog = createDebug('lint-staged:searchConfigs')

const EXEC_GIT = ['ls-files', '-z', '--full-name', '-t']

const CONFIG_PATHSPEC = CONFIG_FILE_NAMES.map((f) => `:(glob)**/${f}`)

const numberOfLevels = (file) => file.split('/').length

const sortAlphabetically = (a, b) => a.localeCompare(b)

const sortDeepestParth = (a, b) => (numberOfLevels(a) > numberOfLevels(b) ? -1 : 1)

/**
 * Get all possible config files from git
 *
 * @param {object} options
 * @param {string} options.cwd
 * @param {string} options.topLevelDir
 * @returns {Promise<string[]>}
 */
const listConfigFilesFromGit = async ({ cwd, topLevelDir }) =>
  execGit(
    [
      ...EXEC_GIT,
      '--cached', // show all tracked files
      '--others', // show untracked files
      '--exclude-standard', // apply standard git exclusions (.gitignore, etc.)
      '--',
      ...CONFIG_PATHSPEC,
    ],
    { cwd }
  )
    .then(parseGitZOutput)
    .then((lines) => {
      const possibleConfigFiles = lines.flatMap((line) => {
        /**
         * Leave out lines starting with "S " to ignore not-checked-out files in a sparse repo.
         * The "S" status means a tracked file that is "skip-worktree"
         * @see https://git-scm.com/docs/git-ls-files#Documentation/git-ls-files.txt--t
         */
        if (line.startsWith('S ')) {
          return []
        }

        const relativePath = line.replace(/^[HSMRCK?U] /, '')
        const absolutePath = normalizePath(path.join(topLevelDir, relativePath))
        return [absolutePath]
      })

      debugLog('Found possible config files from git:', possibleConfigFiles)

      return possibleConfigFiles
    })

/**
 * Get all possible config files from filesystem, starting from `cwd` and
 * moving upwards if nothing is found.
 *
 * @param {object} options
 * @param {string} options.cwd
 * @param {string[]} [possibleConfigFiles]
 * @returns {Promise<string[]>}
 */
export const listConfigFilesFromFs = async ({ cwd }) => {
  debugLog('Listing possible configs from filesystem starting from "%s"...', cwd)

  const results = await Promise.allSettled(
    CONFIG_FILE_NAMES.map(async (f) => {
      const filepath = path.join(cwd, f)
      await fs.access(filepath, constants.F_OK)
      return filepath
    })
  )

  const possibleConfigFiles = results.flatMap((r) =>
    r.status === 'fulfilled' ? [normalizePath(r.value)] : []
  )

  if (possibleConfigFiles.length > 0) {
    debugLog('Found possible config files from filesystem:', possibleConfigFiles)
    return possibleConfigFiles
  }

  const parentDir = path.dirname(cwd)
  if (parentDir === cwd) {
    return [] /** Root-level / */
  }

  return listConfigFilesFromFs({ cwd: parentDir })
}

/**
 * Search all config files from the git repository, preferring those inside `cwd`.
 *
 * @param {object} options
 * @param {Object} [options.configObject] - Explicit config object from the js API
 * @param {string} [options.configPath] - Explicit path to a config file
 * @param {string} [options.cwd] - Current working directory
 * @param {string} [options.topLevelDir] - Top-level directory of the git repo
 * @param {Logger} logger
 *
 * @returns {Promise<{ [key: string]: { config: *, files: string[] } }>} found configs with filepath as key, and config as value
 */
export const searchConfigs = async (
  { configObject, configPath, cwd = process.cwd(), topLevelDir = cwd },
  logger
) => {
  debugLog('Searching for configuration files...')

  // Return explicit config object from js API
  if (configObject) {
    debugLog('Using single direct configuration object...')

    return { '': validateConfig(configObject, 'config object', logger) }
  }

  // Use only explicit config path instead of discovering multiple
  if (configPath) {
    debugLog('Using single configuration path...')

    const { config, filepath } = await loadConfig(configPath, logger)

    if (!config) return {}
    return { [configPath]: validateConfig(config, filepath, logger) }
  }

  const possibleConfigFiles = new Set()

  const addToSet = (files) => {
    files.forEach((f) => {
      possibleConfigFiles.add(f)
    })
  }

  await Promise.all([
    listConfigFilesFromGit({ cwd, topLevelDir }).then(addToSet),
    listConfigFilesFromFs({ cwd }).then(addToSet),
  ])

  /** Create object with key as config file, and value as null */
  const configs = Array.from(possibleConfigFiles)
    .sort(sortAlphabetically)
    .sort(sortDeepestParth)
    .reduce((acc, configPath) => Object.assign(acc, { [configPath]: null }), {})

  /** Load and validate all configs to the above object */
  await Promise.all(
    Object.keys(configs).map((configPath) =>
      loadConfig(configPath, logger).then(({ config, filepath }) => {
        if (config) {
          if (configPath !== filepath) {
            debugLog('Config file "%s" resolved to "%s"', configPath, filepath)
          }

          configs[configPath] = validateConfig(config, filepath, logger)
        }
      })
    )
  )

  /** Get validated configs from the above object, without any `null` values (not found) */
  const foundConfigs = Object.entries(configs).reduce((acc, [key, value]) => {
    if (value) {
      Object.assign(acc, { [key]: value })
    }

    return acc
  }, {})

  debugLog('Found %d config files', Object.keys(foundConfigs).length)

  return foundConfigs
}
