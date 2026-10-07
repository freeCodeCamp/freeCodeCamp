# @prisma/debug

A cached [`debug`](https://github.com/visionmedia/debug/).

---

⚠️ **Warning**: This package is intended for Prisma's internal use.
Its release cycle does not follow SemVer, which means we might release breaking changes (change APIs, remove functionality) without any prior warning.

If you are using this package, it would be helpful if you could help us gain an understanding where, how and why you are using it. Your feedback will be valuable to us to define a better API. Please share this information at https://github.com/prisma/prisma/discussions/13877 - Thanks!

## Usage

```ts
import Debug, { getLogs } from '@prisma/debug'

const debug = Debug('my-namespace')

try {
  debug('hello')
  debug(process.env)
  throw new Error('oops')
} catch (e) {
  console.error(e)
  console.error(`We just crashed. But no worries, here are the debug logs:`)
  // get 10 last lines of debug logs
  console.error(getLogs(10))
}
```
