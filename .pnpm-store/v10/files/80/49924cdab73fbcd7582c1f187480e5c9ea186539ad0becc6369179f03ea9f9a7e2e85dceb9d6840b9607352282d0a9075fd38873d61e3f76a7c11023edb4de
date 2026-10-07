// Manually “tree shaken” from:
// <https://github.com/nodejs/node/blob/81a9a97/lib/internal/modules/esm/utils.js>
// Last checked on: Apr 29, 2024.

import {codes} from './errors.js'

const {ERR_INVALID_ARG_VALUE} = codes

// In Node itself these values are populated from CLI arguments, before any
// user code runs.
// Here we just define the defaults.
const DEFAULT_CONDITIONS = Object.freeze(['node', 'import'])
const DEFAULT_CONDITIONS_SET = new Set(DEFAULT_CONDITIONS)

/**
 * Returns the default conditions for ES module loading.
 */
function getDefaultConditions() {
  return DEFAULT_CONDITIONS
}

/**
 * Returns the default conditions for ES module loading, as a Set.
 */
function getDefaultConditionsSet() {
  return DEFAULT_CONDITIONS_SET
}

/**
 * @param {Array<string>} [conditions]
 * @returns {Set<string>}
 */
export function getConditionsSet(conditions) {
  if (conditions !== undefined && conditions !== getDefaultConditions()) {
    if (!Array.isArray(conditions)) {
      throw new ERR_INVALID_ARG_VALUE(
        'conditions',
        conditions,
        'expected an array'
      )
    }

    return new Set(conditions)
  }

  return getDefaultConditionsSet()
}
