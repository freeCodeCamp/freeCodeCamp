# import/exports-last

<!-- end auto-generated rule header -->

This rule enforces that all exports are declared at the bottom of the file. This rule will report any export declarations that comes before any non-export statements.

## This will be reported

```JS

const bool = true

export default bool

const str = 'foo'

```

```JS

export const bool = true

const str = 'foo'

```

## This will not be reported

```JS
const arr = ['bar']

export const bool = true

export default bool

export function func() {
  console.log('Hello World 🌍')
}

export const str = 'foo'
```

## When Not To Use It

If you don't mind exports being sprinkled throughout a file, you may not want to enable this rule.

### ES6 exports only

The exports-last rule is currently only working on ES6 exports. You may not want to enable this rule if you're using CommonJS exports.

If you need CommonJS support feel free to open an issue or create a PR.
