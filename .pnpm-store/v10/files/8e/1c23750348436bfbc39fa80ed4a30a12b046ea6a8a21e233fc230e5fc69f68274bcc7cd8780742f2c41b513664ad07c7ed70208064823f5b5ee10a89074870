# Reselect

A library for creating memoized "selector" functions. Commonly used with Redux, but usable with any plain JS immutable data as well.

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

The **Redux docs usage page on [Deriving Data with Selectors](https://redux.js.org/usage/deriving-data-selectors)** covers the purpose and motivation for selectors, why memoized selectors are useful, typical Reselect usage patterns, and using selectors with React-Redux.

[![GitHub Workflow Status][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

### Redux Toolkit

While Reselect is not exclusive to Redux, it is already included by default in [the official Redux Toolkit package](https://redux-toolkit.js.org) - no further installation needed.

```js
import { createSelector } from '@reduxjs/toolkit'
```

### Standalone

For standalone usage, install the `reselect` package:

```bash
npm install reselect

yarn add reselect
```

## Basic Usage

Reselect exports a `createSelector` API, which generates memoized selector functions. `createSelector` accepts one or more "input" selectors, which extract values from arguments, and an "output" selector that receives the extracted values and should return a derived value. If the generated selector is called multiple times, the output will only be recalculated when the extracted values have changed.

You can play around with the following **example** in [this CodeSandbox](https://codesandbox.io/s/objective-waterfall-1z5y8?file=/src/index.js):

```js
import { createSelector } from 'reselect'

const selectShopItems = state => state.shop.items
const selectTaxPercent = state => state.shop.taxPercent

const selectSubtotal = createSelector(selectShopItems, items =>
  items.reduce((subtotal, item) => subtotal + item.value, 0)
)

const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const selectTotal = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
)

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.2 },
      { name: 'orange', value: 0.95 }
    ]
  }
}

console.log(selectSubtotal(exampleState)) // 2.15
console.log(selectTax(exampleState)) // 0.172
console.log(selectTotal(exampleState)) // { total: 2.322 }
```

## Table of Contents

- [Installation](#installation)
  - [Redux Toolkit](#redux-toolkit)
  - [Standalone](#standalone)
- [Basic Usage](#basic-usage)
- [API](#api)
  - [createSelector(...inputSelectors | [inputSelectors], resultFunc, selectorOptions?)](#createselectorinputselectors--inputselectors-resultfunc-selectoroptions)
  - [defaultMemoize(func, equalityCheckOrOptions = defaultEqualityCheck)](#defaultmemoizefunc-equalitycheckoroptions--defaultequalitycheck)
  - [createSelectorCreator(memoize, ...memoizeOptions)](#createselectorcreatormemoize-memoizeoptions)
    - [Customize `equalityCheck` for `defaultMemoize`](#customize-equalitycheck-for-defaultmemoize)
    - [Use memoize function from Lodash for an unbounded cache](#use-memoize-function-from-lodash-for-an-unbounded-cache)
  - [createStructuredSelector({inputSelectors}, selectorCreator = createSelector)](#createstructuredselectorinputselectors-selectorcreator--createselector)
- [FAQ](#faq)
  - [Q: Why isn’t my selector recomputing when the input state changes?](#q-why-isnt-my-selector-recomputing-when-the-input-state-changes)
  - [Q: Why is my selector recomputing when the input state stays the same?](#q-why-is-my-selector-recomputing-when-the-input-state-stays-the-same)
  - [Q: Can I use Reselect without Redux?](#q-can-i-use-reselect-without-redux)
  - [Q: How do I create a selector that takes an argument?](#q-how-do-i-create-a-selector-that-takes-an-argument)
  - [Q: The default memoization function is no good, can I use a different one?](#q-the-default-memoization-function-is-no-good-can-i-use-a-different-one)
  - [Q: How do I test a selector?](#q-how-do-i-test-a-selector)
  - [Q: Can I share a selector across multiple component instances?](#q-can-i-share-a-selector-across-multiple-component-instances)
  - [Q: Are there TypeScript Typings?](#q-are-there-typescript-typings)
  - [Q: How can I make a curried selector?](#q-how-can-i-make-a-curried-selector)
- [Related Projects](#related-projects)
  - [re-reselect](#re-reselect)
  - [reselect-tools](#reselect-tools)
  - [reselect-debugger](#reselect-debugger)
- [License](#license)
- [Prior Art and Inspiration](#prior-art-and-inspiration)

## API

### createSelector(...inputSelectors | [inputSelectors], resultFunc, selectorOptions?)

Accepts one or more "input selectors" (either as separate arguments or a single array), a single "output selector" / "result function", and an optional options object, and generates a memoized selector function.

When the selector is called, each input selector will be called with all of the provided arguments. The extracted values are then passed as separate arguments to the output selector, which should calculate and return a final result. The inputs and result are cached for later use.

If the selector is called again with the same arguments, the previously cached result is returned instead of recalculating a new result.

`createSelector` determines if the value returned by an input-selector has changed between calls using reference equality (`===`). Inputs to selectors created with `createSelector` should be immutable.

By default, selectors created with `createSelector` have a cache size of 1. This means they always recalculate when the value of an input-selector changes, as a selector only stores the preceding value of each input-selector. This can be customized by passing a `selectorOptions` object with a `memoizeOptions` field containing options for the built-in `defaultMemoize` memoization function .

```js
const selectValue = createSelector(
  state => state.values.value1,
  state => state.values.value2,
  (value1, value2) => value1 + value2
)

// You can also pass an array of selectors
const selectTotal = createSelector(
  [state => state.values.value1, state => state.values.value2],
  (value1, value2) => value1 + value2
)

// Selector behavior can be customized
const customizedSelector = createSelector(
  state => state.a,
  state => state.b,
  (a, b) => a + b,
  {
    // New in 4.1: Pass options through to the built-in `defaultMemoize` function
    memoizeOptions: {
      equalityCheck: (a, b) => a === b,
      maxSize: 10,
      resultEqualityCheck: shallowEqual
    }
  }
)
```

Selectors are typically called with a Redux `state` value as the first argument, and the input selectors extract pieces of the `state` object for use in calculations. However, it's also common to want to pass additional arguments, such as a value to filter by. Since input selectors are given all arguments, they can extract the additional arguments and pass them to the output selector:

```js
const selectItemsByCategory = createSelector(
  [
    // Usual first input - extract value from `state`
    state => state.items,
    // Take the second arg, `category`, and forward to the output selector
    (state, category) => category
  ],
  // Output selector gets (`items, category)` as args
  (items, category) => items.filter(item => item.category === category)
)
```

### defaultMemoize(func, equalityCheckOrOptions = defaultEqualityCheck)

`defaultMemoize` memoizes the function passed in the func parameter. It is the standard memoize function used by `createSelector`.

`defaultMemoize` has a default cache size of 1. This means it always recalculates when the value of an argument changes. However, this can be customized as needed with a specific max cache size (new in 4.1).

`defaultMemoize` determines if an argument has changed by calling the `equalityCheck` function. As `defaultMemoize` is designed to be used with immutable data, the default `equalityCheck` function checks for changes using reference equality:

```js
function defaultEqualityCheck(previousVal, currentVal) {
  return currentVal === previousVal
}
```

As of Reselect 4.1, `defaultMemoize` also accepts an options object as its first argument instead of `equalityCheck`. The options object may contain:

```ts
interface DefaultMemoizeOptions {
  equalityCheck?: EqualityFn
  resultEqualityCheck?: EqualityFn
  maxSize?: number
}
```

Available options are:

- `equalityCheck`: used to compare the individual arguments of the provided calculation function
- `resultEqualityCheck`: if provided, used to compare a newly generated output value against previous values in the cache. If a match is found, the old value is returned. This address the common `todos.map(todo => todo.id)` use case, where an update to another field in the original data causes a recalculate due to changed references, but the output is still effectively the same.
- `maxSize`: the cache size for the selector. If `maxSize` is greater than 1, the selector will use an LRU cache internally

The returned memoized function will have a `.clearCache()` method attached.

`defaultMemoize` can also be used with `createSelectorCreator` to create a new selector factory that always has the same settings for each selector.

### createSelectorCreator(memoize, ...memoizeOptions)

`createSelectorCreator` can be used to make a customized version of `createSelector`.

The `memoize` argument is a memoization function to replace `defaultMemoize`.

The `...memoizeOptions` rest parameters are zero or more configuration options to be passed to `memoizeFunc`. The selectors `resultFunc` is passed as the first argument to `memoize` and the `memoizeOptions` are passed as the second argument onwards:

```js
const customSelectorCreator = createSelectorCreator(
  customMemoize, // function to be used to memoize resultFunc
  option1, // option1 will be passed as second argument to customMemoize
  option2, // option2 will be passed as third argument to customMemoize
  option3 // option3 will be passed as fourth argument to customMemoize
)

const customSelector = customSelectorCreator(
  input1,
  input2,
  resultFunc // resultFunc will be passed as first argument to customMemoize
)
```

Internally `customSelector` calls the memoize function as follows:

```js
customMemoize(resultFunc, option1, option2, option3)
```

Here are some examples of how you might use `createSelectorCreator`:

#### Customize `equalityCheck` for `defaultMemoize`

```js
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isequal'

// create a "selector creator" that uses lodash.isequal instead of ===
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)

// use the new "selector creator" to create a selector
const selectSum = createDeepEqualSelector(
  state => state.values.filter(val => val < 5),
  values => values.reduce((acc, val) => acc + val, 0)
)
```

#### Use memoize function from Lodash for an unbounded cache

```js
import { createSelectorCreator } from 'reselect'
import memoize from 'lodash.memoize'

let called = 0
const hashFn = (...args) =>
  args.reduce((acc, val) => acc + '-' + JSON.stringify(val), '')
const customSelectorCreator = createSelectorCreator(memoize, hashFn)
const selector = customSelectorCreator(
  state => state.a,
  state => state.b,
  (a, b) => {
    called++
    return a + b
  }
)
```

### createStructuredSelector({inputSelectors}, selectorCreator = createSelector)

`createStructuredSelector` is a convenience function for a common pattern that arises when using Reselect. The selector passed to a `connect` decorator often just takes the values of its input-selectors and maps them to keys in an object:

```js
const selectA = state => state.a
const selectB = state => state.b

// The result function in the following selector
// is simply building an object from the input selectors
const structuredSelector = createSelector(selectA, selectB, (a, b) => ({
  a,
  b
}))
```

`createStructuredSelector` takes an object whose properties are input-selectors and returns a structured selector. The structured selector returns an object with the same keys as the `inputSelectors` argument, but with the selectors replaced with their values.

```js
const selectA = state => state.a
const selectB = state => state.b

const structuredSelector = createStructuredSelector({
  x: selectA,
  y: selectB
})

const result = structuredSelector({ a: 1, b: 2 }) // will produce { x: 1, y: 2 }
```

Structured selectors can be nested:

```js
const nestedSelector = createStructuredSelector({
  subA: createStructuredSelector({
    selectorA,
    selectorB
  }),
  subB: createStructuredSelector({
    selectorC,
    selectorD
  })
})
```

## FAQ

### Q: Why isn’t my selector recomputing when the input state changes?

A: Check that your memoization function is compatible with your state update function (i.e. the reducer if you are using Redux). For example, a selector created with `createSelector` will not work with a state update function that mutates an existing object instead of creating a new one each time. `createSelector` uses an identity check (`===`) to detect that an input has changed, so mutating an existing object will not trigger the selector to recompute because mutating an object does not change its identity. Note that if you are using Redux, mutating the state object is [almost certainly a mistake](http://redux.js.org/docs/Troubleshooting.html).

The following example defines a simple selector that determines if the first todo item in an array of todos has been completed:

```js
const selectIsFirstTodoComplete = createSelector(
  state => state.todos[0],
  todo => todo && todo.completed
)
```

The following state update function **will not** work with `selectIsFirstTodoComplete`:

```js
export default function todos(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      // BAD: mutating an existing object
      return state.map(todo => {
        todo.completed = !areAllMarked
        return todo
      })

    default:
      return state
  }
}
```

The following state update function **will** work with `selectIsFirstTodoComplete`:

```js
export default function todos(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      // GOOD: returning a new object each time with Object.assign
      return state.map(todo =>
        Object.assign({}, todo, {
          completed: !areAllMarked
        })
      )

    default:
      return state
  }
}
```

If you are not using Redux and have a requirement to work with mutable data, you can use `createSelectorCreator` to replace the default memoization function and/or use a different equality check function. See [here](#use-memoize-function-from-lodash-for-an-unbounded-cache) and [here](#customize-equalitycheck-for-defaultmemoize) for examples.

### Q: Why is my selector recomputing when the input state stays the same?

A: Check that your memoization function is compatible with your state update function (i.e. the reducer if you are using Redux). For example, a selector created with `createSelector` that recomputes unexpectedly may be receiving a new object on each update whether the values it contains have changed or not. `createSelector` uses an identity check (`===`) to detect that an input has changed, so returning a new object on each update means that the selector will recompute on each update.

```js
import { REMOVE_OLD } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
    timestamp: Date.now()
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case REMOVE_OLD:
      return state.filter(todo => {
        return todo.timestamp + 30 * 24 * 60 * 60 * 1000 > Date.now()
      })
    default:
      return state
  }
}
```

The following selector is going to recompute every time REMOVE_OLD is invoked because Array.filter always returns a new object. However, in the majority of cases the REMOVE_OLD action will not change the list of todos so the recomputation is unnecessary.

```js
import { createSelector } from 'reselect'

const todosSelector = state => state.todos

export const selectVisibleTodos = createSelector(
  todosSelector,
  (todos) => {
    ...
  }
)
```

You can eliminate unnecessary recomputations by returning a new object from the state update function only when a deep equality check has found that the list of todos has actually changed:

```js
import { REMOVE_OLD } from '../constants/ActionTypes'
import isEqual from 'lodash.isequal'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
    timestamp: Date.now()
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case REMOVE_OLD:
      const updatedState = state.filter(todo => {
        return todo.timestamp + 30 * 24 * 60 * 60 * 1000 > Date.now()
      })
      return isEqual(updatedState, state) ? state : updatedState
    default:
      return state
  }
}
```

Alternatively, the default `equalityCheck` function in the selector can be replaced by a deep equality check:

```js
import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isequal'

const selectTodos = state => state.todos

// create a "selector creator" that uses lodash.isequal instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

// use the new "selector creator" to create a selector
const mySelector = createDeepEqualSelector(
  todosSelector,
  (todos) => {
    ...
  }
)
```

Always check that the cost of an alternative `equalityCheck` function or deep equality check in the state update function is not greater than the cost of recomputing every time. If recomputing every time does work out to be the cheaper option, it may be that for this case Reselect is not giving you any benefit over passing a plain `mapStateToProps` function to `connect`.

### Q: Can I use Reselect without Redux?

A: Yes. Reselect has no dependencies on any other package, so although it was designed to be used with Redux it can be used independently. It can be used with any plain JS data, such as typical React state values, as long as that data is being updated immutably.

### Q: How do I create a selector that takes an argument?

As shown in the API reference section above, provide input selectors that extract the arguments and forward them to the output selector for calculation:

```js
const selectItemsByCategory = createSelector(
  [
    // Usual first input - extract value from `state`
    state => state.items,
    // Take the second arg, `category`, and forward to the output selector
    (state, category) => category
  ],
  // Output selector gets (`items, category)` as args
  (items, category) => items.filter(item => item.category === category)
)
```

### Q: The default memoization function is no good, can I use a different one?

A: We think it works great for a lot of use cases, but sure. See [these examples](#customize-equalitycheck-for-defaultmemoize).

### Q: How do I test a selector?

A: For a given input, a selector should always produce the same output. For this reason they are simple to unit test.

```js
const selector = createSelector(
  state => state.a,
  state => state.b,
  (a, b) => ({
    c: a * 2,
    d: b * 3
  })
)

test('selector unit test', () => {
  assert.deepEqual(selector({ a: 1, b: 2 }), { c: 2, d: 6 })
  assert.deepEqual(selector({ a: 2, b: 3 }), { c: 4, d: 9 })
})
```

It may also be useful to check that the memoization function for a selector works correctly with the state update function (i.e. the reducer if you are using Redux). Each selector has a `recomputations` method that will return the number of times it has been recomputed:

```js
suite('selector', () => {
  let state = { a: 1, b: 2 }

  const reducer = (state, action) => ({
    a: action(state.a),
    b: action(state.b)
  })

  const selector = createSelector(
    state => state.a,
    state => state.b,
    (a, b) => ({
      c: a * 2,
      d: b * 3
    })
  )

  const plusOne = x => x + 1
  const id = x => x

  test('selector unit test', () => {
    state = reducer(state, plusOne)
    assert.deepEqual(selector(state), { c: 4, d: 9 })
    state = reducer(state, id)
    assert.deepEqual(selector(state), { c: 4, d: 9 })
    assert.equal(selector.recomputations(), 1)
    state = reducer(state, plusOne)
    assert.deepEqual(selector(state), { c: 6, d: 12 })
    assert.equal(selector.recomputations(), 2)
  })
})
```

Additionally, selectors keep a reference to the last result function as `.resultFunc`. If you have selectors composed of many other selectors this can help you test each selector without coupling all of your tests to the shape of your state.

For example if you have a set of selectors like this:

**selectors.js**

```js
export const selectFirst = createSelector( ... )
export const selectSecond = createSelector( ... )
export const selectThird = createSelector( ... )

export const myComposedSelector = createSelector(
  selectFirst,
  selectSecond,
  selectThird,
  (first, second, third) => first * second < third
)
```

And then a set of unit tests like this:

**test/selectors.js**

```js
// tests for the first three selectors...
test("selectFirst unit test", () => { ... })
test("selectSecond unit test", () => { ... })
test("selectThird unit test", () => { ... })

// We have already tested the previous
// three selector outputs so we can just call `.resultFunc`
// with the values we want to test directly:
test("myComposedSelector unit test", () => {
  // here instead of calling selector()
  // we just call selector.resultFunc()
  assert(myComposedSelector.resultFunc(1, 2, 3), true)
  assert(myComposedSelector.resultFunc(2, 2, 1), false)
})
```

Finally, each selector has a `resetRecomputations` method that sets
recomputations back to 0. The intended use is for a complex selector that may
have many independent tests and you don't want to manually manage the
computation count or create a "dummy" selector for each test.

### Q: Can I share a selector across multiple component instances?

A: Yes, although it requires some planning.

As of Reselect 4.1, you can create a selector with a cache size greater than one by passing in a `maxSize` option under `memoizeOptions` for use with the built-in `defaultMemoize`.

Otherwise, selectors created using `createSelector` only have a cache size of one. This can make them unsuitable for sharing across multiple instances if the arguments to the selector are different for each instance of the component. There are a couple of ways to get around this:

- Create a factory function which returns a new selector for each instance of the component. This can be called in a React component inside the `useMemo` hook to generate a unique selector instance per component.
- Create a custom selector with a cache size greater than one using `createSelectorCreator`

### Q: Are there TypeScript Typings?

A: Yes! Reselect is now written in TS itself, so they should Just Work™.

### Q: I am seeing a TypeScript error: `Type instantiation is excessively deep and possibly infinite`

A: This can often occur with deeply recursive types, which occur in this library. Please see [this
comment](https://github.com/reduxjs/reselect/issues/534#issuecomment-956708953) for a discussion of the problem, as
relating to nested selectors.

### Q: How can I make a [curried](https://github.com/hemanth/functional-programming-jargon#currying) selector?

A: Try these [helper functions](https://github.com/reduxjs/reselect/issues/159#issuecomment-238724788) courtesy of [MattSPalmer](https://github.com/MattSPalmer)

## Related Projects

### [re-reselect](https://github.com/toomuchdesign/re-reselect)

Enhances Reselect selectors by wrapping `createSelector` and returning a memoized collection of selectors indexed with the cache key returned by a custom resolver function.

Useful to reduce selectors recalculation when the same selector is repeatedly called with one/few different arguments.

### [reselect-tools](https://github.com/skortchmark9/reselect-tools)

[Chrome extension](https://chrome.google.com/webstore/detail/reselect-devtools/cjmaipngmabglflfeepmdiffcijhjlbb?hl=en) and [companion lib](https://github.com/skortchmark9/reselect-tools) for debugging selectors.

- Measure selector recomputations across the app and identify performance bottlenecks
- Check selector dependencies, inputs, outputs, and recomputations at any time with the chrome extension
- Statically export a JSON representation of your selector graph for further analysis

### [reselect-debugger](https://github.com/vlanemcev/reselect-debugger-flipper)

[Flipper plugin](https://github.com/vlanemcev/flipper-plugin-reselect-debugger) and [and the connect app](https://github.com/vlanemcev/reselect-debugger-flipper) for debugging selectors in **React Native Apps**.

Inspired by Reselect Tools, so it also has all functionality from this library and more, but only for React Native and Flipper.

- Selectors Recomputations count in live time across the App for identify performance bottlenecks
- Highlight most recomputed selectors
- Dependency Graph
- Search by Selectors Graph
- Selectors Inputs
- Selectors Output (In case if selector not dependent from external arguments)
- Shows "Not Memoized (NM)" selectors

## License

MIT

## Prior Art and Inspiration

Originally inspired by getters in [NuclearJS](https://github.com/optimizely/nuclear-js.git), [subscriptions](https://github.com/Day8/re-frame#just-a-read-only-cursor) in [re-frame](https://github.com/Day8/re-frame) and this [proposal](https://github.com/reduxjs/redux/pull/169) from [speedskater](https://github.com/speedskater).

[build-badge]: https://img.shields.io/github/workflow/status/reduxjs/redux-thunk/Tests
[build]: https://github.com/reduxjs/reselect/actions/workflows/build-and-test-types.yml
[npm-badge]: https://img.shields.io/npm/v/reselect.svg?style=flat-square
[npm]: https://www.npmjs.org/package/reselect
[coveralls-badge]: https://img.shields.io/coveralls/reduxjs/reselect/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/reduxjs/reselect
