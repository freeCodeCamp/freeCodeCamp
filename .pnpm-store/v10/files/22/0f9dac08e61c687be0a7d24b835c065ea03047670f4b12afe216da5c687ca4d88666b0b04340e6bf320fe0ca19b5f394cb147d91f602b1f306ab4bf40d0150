# RC9

<!-- automd:badges color=yellow codecov bundlejs -->

[![npm version](https://img.shields.io/npm/v/rc9?color=yellow)](https://npmjs.com/package/rc9)
[![npm downloads](https://img.shields.io/npm/dm/rc9?color=yellow)](https://npmjs.com/package/rc9)
[![bundle size](https://img.shields.io/bundlejs/size/rc9?color=yellow)](https://bundlejs.com/?q=rc9)
[![codecov](https://img.shields.io/codecov/c/gh/unjs/rc9?color=yellow)](https://codecov.io/gh/unjs/rc9)

<!-- /automd -->

Read/Write RC configs couldn't be easier!

## Install

Install dependencies:

<!-- automd:pm-i -->

```sh
# ✨ Auto-detect
npx nypm install rc9

# npm
npm install rc9

# yarn
yarn add rc9

# pnpm
pnpm install rc9

# bun
bun install rc9
```

<!-- /automd -->

Import utils:

<!-- automd:jsimport cjs src="./src/index.ts"-->

**ESM** (Node.js, Bun)

```js
import {
  defaults,
  parse,
  parseFile,
  read,
  readUser,
  serialize,
  write,
  writeUser,
  update,
  updateUser,
} from "rc9";
```

**CommonJS** (Legacy Node.js)

```js
const {
  defaults,
  parse,
  parseFile,
  read,
  readUser,
  serialize,
  write,
  writeUser,
  update,
  updateUser,
} = require("rc9");
```

<!-- /automd -->


## Usage

`.conf`:

```ini
db.username=username
db.password=multi word password
db.enabled=true
```

**Update config:**

```ts
update({ 'db.enabled': false }) // or update(..., { name: '.conf' })
```

Push to an array:

```ts
update({ 'modules[]': 'test' })
```

**Read/Write config:**

```ts
const config = read() // or read('.conf')

// config = {
//   db: {
//     username: 'username',
//     password: 'multi word password',
//     enabled: true
//   }
// }

config.enabled = false
write(config) // or write(config, '.conf')
```

**User Config:**

It is common to keep config in user home directory (MacOS: `/Users/{name}`, Linux: `/home/{name}`, Windows: `C:\users\{name}`)

you can use `readUser`/`writeuser`/`updateUser` shortcuts to quickly do this:

```js
writeUser({ token: 123 }, '.zoorc') // Will be saved in {home}/.zoorc

const conf = readUser('.zoorc') // { token: 123 }
```

## Unflatten

RC uses [flat](https://www.npmjs.com/package/flat) to automatically flat/unflat when writing and reading rcfile.

It means that you can use `.` for keys to define objects. Some examples:

- `hello.world = true` <=> `{ hello: { world: true }`
- `test.0 = A` <=> `tags: [ 'A' ]`

**Note:** If you use keys that can override like `x=` and `x.y=`, you can disable this feature by passing `flat: true` option.

**Tip:** You can use keys ending with `[]` to push to an array like `test[]=A`

## Native Values

RC uses [destr](https://www.npmjs.com/package/destr) to convert values into native javascript values.

So reading `count=123` results `{ count: 123 }` (instead of `{ count: "123" }`) if you want to preserve strings as is, can use `count="123"`.

## Exports

```ts
const defaults: RCOptions;
function parse(contents: string, options?: RCOptions): RC
function parseFile(path: string, options?: RCOptions): RC
function read(options?: RCOptions | string): RC;
function readUser(options?: RCOptions | string): RC;
function serialize(config: RC): string;
function write(config: RC, options?: RCOptions | string): void;
function writeUser(config: RC, options?: RCOptions | string): void;
function update(config: RC, options?: RCOptions | string): RC;
function updateUser(config: RC, options?: RCOptions | string): RC;
```

**Types:**

```ts
type RC = Record<string, any>;
interface RCOptions {
    name?: string;
    dir?: string;
    flat?: boolean;
}
```

**Defaults:**

```ini
{
  name: '.conf',
  dir: process.cwd(),
  flat: false
}
```

### Why RC9?

Be the first one to guess 🐇 <!-- Hint: do research about rc files history -->

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/unjs/rc9/blob/main/LICENSE) license.
Made by [community](https://github.com/unjs/rc9/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/rc9/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/rc9" />
</a>

<!-- /automd -->
