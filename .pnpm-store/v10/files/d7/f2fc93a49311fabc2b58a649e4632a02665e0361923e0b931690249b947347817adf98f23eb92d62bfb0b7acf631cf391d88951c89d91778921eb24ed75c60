import { createRequire } from 'node:module'

/**
 * require() does not exist for ESM, so we must create it to use require.resolve().
 * @see https://nodejs.org/api/module.html#modulecreaterequirefilename
 */
const require = createRequire(import.meta.url)

export function resolveConfig(configPath) {
  try {
    return require.resolve(configPath)
  } catch {
    return configPath
  }
}
