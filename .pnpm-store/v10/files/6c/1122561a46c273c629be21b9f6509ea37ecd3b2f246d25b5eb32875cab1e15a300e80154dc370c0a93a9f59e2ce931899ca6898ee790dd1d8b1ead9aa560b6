import type { CreateSelectorOptions, UnknownMemoizer } from '../types'

/**
 * Runs a stability check to ensure the input selector results remain stable
 * when provided with the same arguments. This function is designed to detect
 * changes in the output of input selectors, which can impact the performance of memoized selectors.
 *
 * @param inputSelectorResultsObject - An object containing two arrays: `inputSelectorResults` and `inputSelectorResultsCopy`, representing the results of input selectors.
 * @param options - Options object consisting of a `memoize` function and a `memoizeOptions` object.
 * @param inputSelectorArgs - List of arguments being passed to the input selectors.
 *
 * @see {@link https://reselect.js.org/api/development-only-stability-checks/#inputstabilitycheck `inputStabilityCheck`}
 *
 * @since 5.0.0
 * @internal
 */
export const runInputStabilityCheck = (
  inputSelectorResultsObject: {
    inputSelectorResults: unknown[]
    inputSelectorResultsCopy: unknown[]
  },
  options: Required<
    Pick<
      CreateSelectorOptions<UnknownMemoizer, UnknownMemoizer>,
      'memoize' | 'memoizeOptions'
    >
  >,
  inputSelectorArgs: unknown[] | IArguments
) => {
  const { memoize, memoizeOptions } = options
  const { inputSelectorResults, inputSelectorResultsCopy } =
    inputSelectorResultsObject
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions)
  // if the memoize method thinks the parameters are equal, these *should* be the same reference
  const areInputSelectorResultsEqual =
    createAnEmptyObject.apply(null, inputSelectorResults) ===
    createAnEmptyObject.apply(null, inputSelectorResultsCopy)
  if (!areInputSelectorResultsEqual) {
    let stack: string | undefined = undefined
    try {
      throw new Error()
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi, no-extra-semi
      ;({ stack } = e as Error)
    }
    console.warn(
      'An input selector returned a different result when passed same arguments.' +
        '\nThis means your output selector will likely run more frequently than intended.' +
        '\nAvoid returning a new reference inside your input selector, e.g.' +
        '\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`',
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    )
  }
}
