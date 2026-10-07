# import/no-named-as-default

⚠️ This rule _warns_ in the following configs: ☑️ `recommended`, 🚸 `warnings`.

<!-- end auto-generated rule header -->

Reports use of an exported name as the locally imported name of a default export.

Rationale: using an exported name as the name of the default export is likely...

 - _misleading_: others familiar with `foo.js` probably expect the name to be `foo`
 - _a mistake_: only needed to import `bar` and forgot the brackets (the case that is prompting this)

## Rule Details

Given:

```js
// foo.js
export default 'foo';
export const bar = 'baz';
```

...this would be valid:

```js
import foo from './foo.js';
```

...and this would be reported:

```js
// message: Using exported name 'bar' as identifier for default export.
import bar from './foo.js';
```

For post-ES2015 `export` extensions, this also prevents exporting the default from a referenced module as a name within that module, for the same reasons:

```js
// valid:
export foo from './foo.js';

// message: Using exported name 'bar' as identifier for default export.
export bar from './foo.js';
```

## Further Reading

 - ECMAScript Proposal: [export ns from]
 - ECMAScript Proposal: [export default from]

[export ns from]: https://github.com/leebyron/ecmascript-export-ns-from
[export default from]: https://github.com/leebyron/ecmascript-export-default-from
