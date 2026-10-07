# ECMAScript Modules

**date-fns** v2.x provides support for
[ECMAScript Modules](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)
that enables tree-shaking for bundlers, like [rollup.js](http://rollupjs.org)
and [webpack](https://webpack.js.org).

If you have tree-shaking enabled in your bundler, just import functions normally:

```javascript
import { format, parse } from 'date-fns'
import { enUS, eo } from 'date-fns/locale'
import { addDays, addHours } from 'date-fns/fp'
```

In TypeScript, now you can import individual functions in more idiomatic way:

```typescript
// Before
import * as format from 'date-fns/format'

// Now
import format from 'date-fns/format'
```
