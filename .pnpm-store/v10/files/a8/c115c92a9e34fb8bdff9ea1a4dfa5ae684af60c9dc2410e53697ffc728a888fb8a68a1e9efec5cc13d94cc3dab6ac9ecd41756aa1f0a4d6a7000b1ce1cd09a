# import/no-mutable-exports

<!-- end auto-generated rule header -->

Forbids the use of mutable exports with `var` or `let`.

## Rule Details

Valid:

```js
export const count = 1
export function getCount() {}
export class Counter {}
```

...whereas here exports will be reported:

```js
export let count = 2
export var count = 3

let count = 4
export { count } // reported here
```

## Functions/Classes

Note that exported function/class declaration identifiers may be reassigned,
but are not flagged by this rule at this time. They may be in the future, if a
reassignment is detected, i.e.

```js
// possible future behavior!
export class Counter {} // reported here: exported class is reassigned on line [x].
Counter = KitchenSink // not reported here unless you enable no-class-assign

// this pre-declaration reassignment is valid on account of function hoisting
getCount = function getDuke() {} // not reported here without no-func-assign
export function getCount() {} // reported here: exported function is reassigned on line [x].
```

To prevent general reassignment of these identifiers, exported or not, you may
want to enable the following core ESLint rules:

 - [no-func-assign]
 - [no-class-assign]

[no-func-assign]: https://eslint.org/docs/rules/no-func-assign
[no-class-assign]: https://eslint.org/docs/rules/no-class-assign

## When Not To Use It

If your environment correctly implements mutable export bindings.
