# import/export

💼 This rule is enabled in the following configs: ❗ `errors`, ☑️ `recommended`.

<!-- end auto-generated rule header -->

Reports funny business with exports, like repeated exports of names or defaults.

## Rule Details

```js
export default class MyClass { /*...*/ } // Multiple default exports.

function makeClass() { return new MyClass(...arguments) }

export default makeClass // Multiple default exports.
```

or

```js
export const foo = function () { /*...*/ } // Multiple exports of name 'foo'.

function bar() { /*...*/ }
export { bar as foo } // Multiple exports of name 'foo'.
```

In the case of named/default re-export, all `n` re-exports will be reported,
as at least `n-1` of them are clearly mistakes, but it is not clear which one
(if any) is intended. Could be the result of copy/paste, code duplication with
intent to rename, etc.

## Further Reading

 - Lee Byron's [ES7] export proposal

[ES7]: https://github.com/leebyron/ecmascript-more-export-from
