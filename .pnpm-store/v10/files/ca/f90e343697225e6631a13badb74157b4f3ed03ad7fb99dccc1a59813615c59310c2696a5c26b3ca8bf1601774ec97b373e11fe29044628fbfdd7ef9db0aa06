# import/unambiguous

<!-- end auto-generated rule header -->

Warn if a `module` could be mistakenly parsed as a `script` by a consumer leveraging
[Unambiguous JavaScript Grammar] to determine correct parsing goal.

Will respect the [`parserOptions.sourceType`] from ESLint config, i.e. files parsed
as `script` per that setting will not be reported.

This plugin uses [Unambiguous JavaScript Grammar] internally to decide whether
dependencies should be parsed as modules and searched for exports matching the
`import`ed names, so it may be beneficial to keep this rule on even if your application
will run in an explicit `module`-only environment.

## Rule Details

For files parsed as `module` by ESLint, the following are valid:

```js
import 'foo'
function x() { return 42 }
```

```js
export function x() { return 42 }
```

```js
(function x() { return 42 })()
export {} // simple way to mark side-effects-only file as 'module' without any imports/exports
```

...whereas the following file would be reported:

```js
(function x() { return 42 })()
```

## When Not To Use It

If your application environment will always know via [some other means](https://github.com/nodejs/node-eps/issues/13)
how to parse, regardless of syntax, you may not need this rule.

Remember, though, that this plugin uses this strategy internally, so if you were
to `import` from a module with no `import`s or `export`s, this plugin would not
report it as it would not be clear whether it should be considered a `script` or
a `module`.

## Further Reading

 - [Unambiguous JavaScript Grammar]
 - [`parserOptions.sourceType`]
 - [node-eps#13](https://github.com/nodejs/node-eps/issues/13)

[`parserOptions.sourceType`]: https://eslint.org/docs/user-guide/configuring#specifying-parser-options
[Unambiguous JavaScript Grammar]: https://github.com/nodejs/node-eps/blob/HEAD/002-es-modules.md#32-determining-if-source-is-an-es-module
