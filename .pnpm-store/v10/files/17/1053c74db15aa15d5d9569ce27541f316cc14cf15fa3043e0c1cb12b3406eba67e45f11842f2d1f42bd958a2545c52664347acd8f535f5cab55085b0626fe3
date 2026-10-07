# #️ ohash

<!-- automd:badges bundlephobia codecov -->

[![npm version](https://img.shields.io/npm/v/ohash)](https://npmjs.com/package/ohash)
[![npm downloads](https://img.shields.io/npm/dm/ohash)](https://npm.chart.dev/ohash)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ohash)](https://bundlephobia.com/package/ohash)
[![codecov](https://img.shields.io/codecov/c/gh/unjs/ohash)](https://codecov.io/gh/unjs/ohash)

<!-- /automd -->

Simple object hashing, serialization and comparison utils.

> [!NOTE]
> You are on active v2 development branch. Check [v1](https://github.com/unjs/ohash/tree/v1) for old ohash v1 docs and [release notes](https://github.com/unjs/ohash/releases/tag/v2.0.1) for migration.

## Usage

Install [`ohash`](https://www.npmjs.com/package/ohash):

```sh
# ✨ Auto-detect (npm, yarn, pnpm, bun or deno)
npx nypm i ohash
```

**Import:**

```js
// ESM import
import { hash, serialize, digest, isEqual } from "ohash";
import { diff } from "ohash/utils";

// Dynamic import
const { hash, serialize, digest, isEqual } = await import("ohash");
const { diff } = await import("ohash/utils");
```

<details>
  <summary>Import from CDN</summary>

```js
import { hash, serialize, digest, isEqual } from "https://esm.sh/ohash";
import { diff } from "https://esm.sh/ohash/utils";

// Dynamic import
const { hash, serialize, digest, isEqual } = await import(
  "https://esm.sh/ohash"
);
const { diff } = await import("https://esm.sh/ohash/utils");
```

</details>

## `hash(input)`

Hashes any JS value into a string.

The input is first [serialized](#serializeinput) then it is [hashed](#digeststr).

```js
import { hash } from "ohash";

// "g82Nh7Lh3CURFX9zCBhc5xgU0K7L0V1qkoHyRsKNqA4"
console.log(hash({ foo: "bar" }));
```

## `serialize(input)`

Serializes any input value into a string for hashing.

> [!IMPORTANT] > `serialize` method uses best efforts to generate stable serialized values; however, it is not designed for security purposes. Keep in mind that there is always a chance of intentional collisions caused by user input.

```js
import { serialize } from "ohash";

// "{foo:'bar'}"
console.log(serialize({ foo: "bar" }));
```

## `digest(str)`

Hashes a string using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm and encodes it in [Base64URL](https://base64.guru/standards/base64url) format.

```ts
import { digest } from "ohash";

// "f4OxZX_x_FO5LcGBSKHWXfwtSx-j1ncoSt3SABJtkGk"
console.log(digest("Hello World!"));
```

## `isEqual(obj1, obj2)`

Compare two objects using `===` and then fallbacks to compare based on their [serialized](#serializeinput) values.

```js
import { isEqual } from "ohash";

// true
console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
```

## `diff(obj1, obj2)`

Compare two objects with nested [serialization](#serializeinput-options). Returns an array of changes.

The returned value is an array of diff entries with `$key`, `$hash`, `$value`, and `$props`. When logging, a string version of the changelog is displayed.

```js
import { diff } from "ohash/utils";

const createObject = () => ({
  foo: "bar",
  nested: {
    y: 123,
    bar: {
      baz: "123",
    },
  },
});

const obj1 = createObject();
const obj2 = createObject();

obj2.nested.x = 123;
delete obj2.nested.y;
obj2.nested.bar.baz = 123;

const diff = diff(obj1, obj2);

// [-] Removed nested.y
// [~] Changed nested.bar.baz from "123" to 123
// [+] Added   nested.x
console.log(diff(obj1, obj2));
```

## Contribute

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛 Published under [MIT License](./LICENSE).

Object serialization originally based on [puleos/object-hash](https://github.com/puleos/object-hash) by [Scott Puleo](https://github.com/puleos/).

sha256 implementation originally based on [brix/crypto-js](https://github.com/brix/crypto-js).
