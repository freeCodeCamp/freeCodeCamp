# import/no-empty-named-blocks

🔧💡 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix) and manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

Reports the use of empty named import blocks.

## Rule Details

### Valid

```js
import { mod } from 'mod'
import Default, { mod } from 'mod'
```

When using typescript

```js
import type { mod } from 'mod'
```

When using flow

```js
import typeof { mod } from 'mod'
```

### Invalid

```js
import {} from 'mod'
import Default, {} from 'mod'
```

When using typescript

```js
import type Default, {} from 'mod'
import type {} from 'mod'
```

When using flow

```js
import typeof {} from 'mod'
import typeof Default, {} from 'mod'
```
