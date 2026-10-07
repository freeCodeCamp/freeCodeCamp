/** @typedef {import('./index').Logger} Logger */

import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { CONFIG_NAME, PACKAGE_JSON_FILE, PACKAGE_YAML_FILES } from './configFiles.js'
import { createDebug } from './debug.js'
import { failedToLoadConfig } from './messages.js'
import { resolveConfig } from './resolveConfig.js'

const debugLog = createDebug('lint-staged:loadConfig')

const readFile = async (filename) => fs.readFile(path.resolve(filename), 'utf-8')

const jsonParse = async (filename) => {
  const isPackageFile = PACKAGE_JSON_FILE.includes(path.basename(filename))
  try {
    const content = await readFile(filename)
    const json = JSON.parse(content)
    return isPackageFile ? json[CONFIG_NAME] : json
  } catch (error) {
    if (path.basename(filename) === PACKAGE_JSON_FILE) {
      debugLog('Ignoring invalid JSON file %s', filename)
      return undefined
    }

    throw error
  }
}

const yamlParse = async (filename) => {
  const isPackageFile = PACKAGE_YAML_FILES.includes(path.basename(filename))
  try {
    const [YAML, content] = await Promise.all([import('yaml'), readFile(filename)])
    const yaml = YAML.parse(content)
    return isPackageFile ? yaml[CONFIG_NAME] : yaml
  } catch (error) {
    if (isPackageFile) {
      debugLog('Ignoring invalid YAML file %s', filename)
      return undefined
    }

    throw error
  }
}

export const dynamicImport = (path) => import(pathToFileURL(path)).then((module) => module.default)

const NO_EXT = 'noExt'

/**
 * `lilconfig` doesn't support yaml files by default,
 * so we add custom loaders for those. Files without
 * an extensions are assumed to be yaml — this
 * assumption is in `cosmiconfig` as well.
 */
const loaders = {
  [NO_EXT]: yamlParse,
  '.cjs': dynamicImport,
  '.cts': dynamicImport,
  '.js': dynamicImport,
  '.json': jsonParse,
  '.mjs': dynamicImport,
  '.mts': dynamicImport,
  '.ts': dynamicImport,
  '.yaml': yamlParse,
  '.yml': yamlParse,
}

const loadConfigByExt = async (filename) => {
  const filepath = path.resolve(filename)
  const ext = path.extname(filepath) || NO_EXT
  const loader = loaders[ext]
  const config = await loader(filepath)

  return { config, filepath }
}

/** @param {string} configPath */
export const loadConfig = async (configPath, logger) => {
  try {
    debugLog('Loading configuration from `%s`...', configPath)
    const result = await loadConfigByExt(resolveConfig(configPath))

    // config is a promise when using the `dynamicImport` loader
    const config = (await result.config) ?? null
    const filepath = result.filepath

    if (config) {
      debugLog('Successfully loaded config from `%s`:\n%O', filepath, config)
    } else {
      debugLog('Found no config in %s', filepath)
    }

    return { config, filepath }
  } catch (error) {
    debugLog('Failed to load configuration from `%s` with error:\n', configPath, error)
    logger.error(failedToLoadConfig(configPath))
    return {}
  }
}
