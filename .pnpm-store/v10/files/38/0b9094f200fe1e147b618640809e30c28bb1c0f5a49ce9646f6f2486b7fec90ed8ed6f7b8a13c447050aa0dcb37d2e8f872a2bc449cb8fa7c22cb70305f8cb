import { runIdentityFunctionCheck } from './devModeChecks/identityFunctionCheck'
import { runInputStabilityCheck } from './devModeChecks/inputStabilityCheck'
import { globalDevModeChecks } from './devModeChecks/setGlobalDevModeChecks'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type {
  DevModeChecks,
  Selector,
  SelectorArray,
  DevModeChecksExecutionInfo
} from './types'

export const NOT_FOUND = /* @__PURE__ */ Symbol('NOT_FOUND')
export type NOT_FOUND_TYPE = typeof NOT_FOUND

/**
 * Assert that the provided value is a function. If the assertion fails,
 * a `TypeError` is thrown with an optional custom error message.
 *
 * @param func - The value to be checked.
 * @param  errorMessage - An optional custom error message to use if the assertion fails.
 * @throws A `TypeError` if the assertion fails.
 */
export function assertIsFunction<FunctionType extends Function>(
  func: unknown,
  errorMessage = `expected a function, instead received ${typeof func}`
): asserts func is FunctionType {
  if (typeof func !== 'function') {
    throw new TypeError(errorMessage)
  }
}

/**
 * Assert that the provided value is an object. If the assertion fails,
 * a `TypeError` is thrown with an optional custom error message.
 *
 * @param object - The value to be checked.
 * @param  errorMessage - An optional custom error message to use if the assertion fails.
 * @throws A `TypeError` if the assertion fails.
 */
export function assertIsObject<ObjectType extends Record<string, unknown>>(
  object: unknown,
  errorMessage = `expected an object, instead received ${typeof object}`
): asserts object is ObjectType {
  if (typeof object !== 'object') {
    throw new TypeError(errorMessage)
  }
}

/**
 * Assert that the provided array is an array of functions. If the assertion fails,
 * a `TypeError` is thrown with an optional custom error message.
 *
 * @param array - The array to be checked.
 * @param  errorMessage - An optional custom error message to use if the assertion fails.
 * @throws A `TypeError` if the assertion fails.
 */
export function assertIsArrayOfFunctions<FunctionType extends Function>(
  array: unknown[],
  errorMessage = `expected all items to be functions, instead received the following types: `
): asserts array is FunctionType[] {
  if (
    !array.every((item): item is FunctionType => typeof item === 'function')
  ) {
    const itemTypes = array
      .map(item =>
        typeof item === 'function'
          ? `function ${item.name || 'unnamed'}()`
          : typeof item
      )
      .join(', ')
    throw new TypeError(`${errorMessage}[${itemTypes}]`)
  }
}

/**
 * Ensure that the input is an array. If it's already an array, it's returned as is.
 * If it's not an array, it will be wrapped in a new array.
 *
 * @param item - The item to be checked.
 * @returns An array containing the input item. If the input is already an array, it's returned without modification.
 */
export const ensureIsArray = (item: unknown) => {
  return Array.isArray(item) ? item : [item]
}

/**
 * Extracts the "dependencies" / "input selectors" from the arguments of `createSelector`.
 *
 * @param createSelectorArgs - Arguments passed to `createSelector` as an array.
 * @returns An array of "input selectors" / "dependencies".
 * @throws A `TypeError` if any of the input selectors is not function.
 */
export function getDependencies(createSelectorArgs: unknown[]) {
  const dependencies = Array.isArray(createSelectorArgs[0])
    ? createSelectorArgs[0]
    : createSelectorArgs

  assertIsArrayOfFunctions<Selector>(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  )

  return dependencies as SelectorArray
}

/**
 * Runs each input selector and returns their collective results as an array.
 *
 * @param dependencies - An array of "dependencies" or "input selectors".
 * @param inputSelectorArgs - An array of arguments being passed to the input selectors.
 * @returns An array of input selector results.
 */
export function collectInputSelectorResults(
  dependencies: SelectorArray,
  inputSelectorArgs: unknown[] | IArguments
) {
  const inputSelectorResults = []
  const { length } = dependencies
  for (let i = 0; i < length; i++) {
    // @ts-ignore
    // apply arguments instead of spreading and mutate a local list of params for performance.
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs))
  }
  return inputSelectorResults
}

/**
 * Retrieves execution information for development mode checks.
 *
 * @param devModeChecks - Custom Settings for development mode checks. These settings will override the global defaults.
 * @param firstRun - Indicates whether it is the first time the selector has run.
 * @returns  An object containing the execution information for each development mode check.
 */
export const getDevModeChecksExecutionInfo = (
  firstRun: boolean,
  devModeChecks: Partial<DevModeChecks>
) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  }
  return {
    identityFunctionCheck: {
      shouldRun:
        identityFunctionCheck === 'always' ||
        (identityFunctionCheck === 'once' && firstRun),
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun:
        inputStabilityCheck === 'always' ||
        (inputStabilityCheck === 'once' && firstRun),
      run: runInputStabilityCheck
    }
  } satisfies DevModeChecksExecutionInfo
}
