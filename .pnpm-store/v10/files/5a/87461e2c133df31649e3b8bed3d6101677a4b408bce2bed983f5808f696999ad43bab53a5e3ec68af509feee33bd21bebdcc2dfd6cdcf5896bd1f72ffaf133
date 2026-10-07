# Reselect

[![npm package][npm-badge]][npm][![Coveralls][coveralls-badge]][coveralls][![GitHub Workflow Status][build-badge]][build]![TypeScript][typescript-badge]

A library for creating memoized "selector" functions. Commonly used with Redux, but usable with any plain JS immutable data as well.

- Selectors can compute derived data, allowing [Redux] to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

The **Redux docs usage page on [Deriving Data with Selectors](https://redux.js.org/usage/deriving-data-selectors)** covers the purpose and motivation for selectors, why memoized selectors are useful, typical Reselect usage patterns, and using selectors with [React-Redux].

## Installation

### Redux Toolkit

While Reselect is not exclusive to [Redux], it is already included by default in [the official Redux Toolkit package](https://redux-toolkit.js.org) - no further installation needed.

```ts
import { createSelector } from '@reduxjs/toolkit'
```

### Standalone

For standalone usage, install the `reselect` package:

```bash
# NPM
npm install reselect

# Yarn
yarn add reselect
```

---

## Documentation

The Reselect docs are available at **https://reselect.js.org**, and include usage guides and API references:

- [**Introduction**](#https://reselect.js.org/introduction/getting-started)
- [**How Does Reselect Work?**](#https://reselect.js.org/introduction/how-does-reselect-work)
- **API Reference**:
  - **[`createSelector`]**
  - **[`createSelectorCreator`]**
  - **[`createStructuredSelector`]**
  - [**Development-Only Stability Checks**](#https://reselect.js.org/api/development-only-stability-checks)
  - **[`lruMemoize`]**
  - **[`weakMapMemoize`]**
- [**FAQ**](#https://reselect.js.org/FAQ)

## Basic Usage

Reselect exports a [`createSelector`] API, which generates memoized selector functions. [`createSelector`] accepts one or more [input selectors], which extract values from arguments, and a [result function] function that receives the extracted values and should return a derived value. If the generated [output selector] is called multiple times, the output will only be recalculated when the extracted values have changed.

You can play around with the following **example** in [this CodeSandbox](https://codesandbox.io/s/reselect-example-g3k9gf?file=/src/index.js):

```ts
import { createSelector } from 'reselect'

interface RootState {
  todos: { id: number; completed: boolean }[]
  alerts: { id: number; read: boolean }[]
}

const state: RootState = {
  todos: [
    { id: 0, completed: false },
    { id: 1, completed: true }
  ],
  alerts: [
    { id: 0, read: false },
    { id: 1, read: true }
  ]
}

const selectCompletedTodos = (state: RootState) => {
  console.log('selector ran')
  return state.todos.filter(todo => todo.completed === true)
}

selectCompletedTodos(state) // selector ran
selectCompletedTodos(state) // selector ran
selectCompletedTodos(state) // selector ran

const memoizedSelectCompletedTodos = createSelector(
  [(state: RootState) => state.todos],
  todos => {
    console.log('memoized selector ran')
    return todos.filter(todo => todo.completed === true)
  }
)

memoizedSelectCompletedTodos(state) // memoized selector ran
memoizedSelectCompletedTodos(state)
memoizedSelectCompletedTodos(state)

console.log(selectCompletedTodos(state) === selectCompletedTodos(state)) //=> false

console.log(
  memoizedSelectCompletedTodos(state) === memoizedSelectCompletedTodos(state)
) //=> true
```

As you can see from the example above, `memoizedSelectCompletedTodos` does not run the second or third time, but we still get the same return value as last time.

In addition to skipping unnecessary recalculations, `memoizedSelectCompletedTodos` returns the existing result reference if there is no recalculation. This is important for libraries like [React-Redux] or [React] that often rely on reference equality checks to optimize UI updates.

---

## Terminology

- <a name="selector-function"></a>[**Selector Function**](#selector-function): A function that accepts one or more JavaScript values as arguments, and derives a result. When used with [Redux], the first argument is typically the entire Redux store state.
- <a name="input-selectors"></a>[**input selectors**](#input-selectors): Basic selector functions used as building blocks for creating a memoized selector. They are passed as the first argument(s) to [`createSelector`], and are called with all selector arguments. They are responsible for extracting and providing necessary values to the [result function].
- <a name="output-selector"></a>[**Output Selector**](#output-selector): The actual memoized selectors created by [`createSelector`].
- <a name="result-function"></a>[**Result Function**](#result-function): The function that comes after the [input selectors]. It takes the [input selectors]' return values as arguments and returns a result.
- <a name="dependencies"></a>[**`Dependencies`**](#dependencies): Same as [input selectors]. They are what the [output selector] "depends" on.

The below example serves as a visual aid:

```ts
const outputSelector = createSelector(
  [inputSelector1, inputSelector2, inputSelector3], // synonymous with `dependencies`.
  resultFunc // Result function
)
```

---

## What's New in 5.0.0?

Version 5.0.0 introduces several new features and improvements:

- **Customization Enhancements**:

  - Added the ability to pass an options object to [`createSelectorCreator`], allowing for customized `memoize` and `argsMemoize` functions, alongside their respective options (`memoizeOptions` and `argsMemoizeOptions`).
  - The [`createSelector`] function now supports direct customization of `memoize` and `argsMemoize` within its options object.

- **Memoization Functions**:

  - Introduced new experimental memoization functions: `weakMapMemoize` and `unstable_autotrackMemoize`.
  - Incorporated `memoize` and `argsMemoize` into the [output selector fields] for debugging purposes.

- **TypeScript Support and Performance**:

  - Discontinued support for TypeScript versions below 4.7, aligning with modern TypeScript features.
  - Significantly improved TypeScript performance for nesting [output selectors][output selector]. The nesting limit has increased from approximately 8 to around 30 [output selectors][output selector], greatly reducing the occurrence of the infamous `Type instantiation is excessively deep and possibly infinite` error.

- **Selector API Enhancements**:

  - Removed the second overload of `createStructuredSelector` due to its susceptibility to runtime errors.

- **Additional Functionalities**:

  - Added `dependencyRecomputations` and `resetDependencyRecomputations` to the [output selector fields]. These additions provide greater control and insight over [input selectors], complementing the new `argsMemoize` API.
  - Introduced `inputStabilityCheck`, a development tool that runs the [input selectors] twice using the same arguments and triggers a warning If they return differing results for the same call.
  - Introduced `identityFunctionCheck`, a development tool that checks to see if the [result function] returns its own input.

These updates aim to enhance flexibility, performance, and developer experience. For detailed usage and examples, refer to the updated documentation sections for each feature.

- **Breaking Changes**:

  - Removed `ParametricSelector` and `OutputParametricSelector` types. Their functionalities are now integrated into `Selector` and `OutputSelector` respectively, which inherently support additional parameters.

<div align="right">[ <a href="installation">↑ Back to top ↑</a> ]</div>

---

## License

MIT

## References

<details><summary><b>Click to Expand</b></summary>

Originally inspired by getters in [NuclearJS](https://github.com/optimizely/nuclear-js.git), [subscriptions](https://github.com/Day8/re-frame#just-a-read-only-cursor) in [re-frame](https://github.com/Day8/re-frame) and this [proposal](https://github.com/reduxjs/redux/pull/169) from [speedskater](https://github.com/speedskater).

[typescript-badge]: https://img.shields.io/badge/TypeScript-v4%2E7%2B-007ACC?style=for-the-badge&logo=TypeScript&logoColor=black&labelColor=blue&color=gray
[build-badge]: https://img.shields.io/github/actions/workflow/status/reduxjs/reselect/build-and-test-types.yml?branch=master&style=for-the-badge
[build]: https://github.com/reduxjs/reselect/actions/workflows/build-and-test-types.yml
[npm-badge]: https://img.shields.io/npm/v/reselect.svg?style=for-the-badge
[npm]: https://www.npmjs.org/package/reselect
[coveralls-badge]: https://img.shields.io/coveralls/reduxjs/reselect/master.svg?style=for-the-badge
[coveralls]: https://coveralls.io/github/reduxjs/reselect

<!-- External Links -->

[Redux]: https://redux.js.org 'Redux'
[React]: https://react.dev 'React'
[React-Redux]: https://react-redux.js.org 'React-Redux'

<!-- Internal Links -->

[selector]: #selector-function 'Selector Function'
[input selectors]: #input-selectors 'Input Selectors'
[output selector]: #output-selector 'Output Selector'
[result function]: #result-function 'Result Function'
[output selector fields]: https://reselect.js.org/api/createSelector#output-selector-fields 'Output Selector Fields'
[`createSelector`]: https://reselect.js.org/api/createSelector 'createSelector'
[`createSelectorCreator`]: https://reselect.js.org/api/createSelectorCreator 'createSelectorCreator'
[`lruMemoize`]: https://reselect.js.org/api/lruMemoize 'lruMemoize'
[`weakMapMemoize`]: https://reselect.js.org/api/weakMapMemoize 'weakMapMemoize'
[`createStructuredSelector`]: https://reselect.js.org/api/createStructuredSelector 'createStructuredSelector'

</details>
