# is-bun-module

A utility library to check if a module is a Bun built-in module or a Node.js module implemented in Bun.

## API

### Module Checking Functions

#### `isBunModule(moduleName, bunVersion?)`

Checks if a specifier is a [Bun module](https://bun.sh/docs/runtime/bun-apis).

```typescript
import { isBunModule } from "is-bun-module";
isBunModule("bun"); // true
isBunModule("bun:test", "1.0.0"); // true
isBunModule("notBunModule"); // false
```

#### `isBunImplementedNodeModule(moduleName, bunVersion?)`

Checks if a specifier is a Node module [implemented in Bun](https://bun.sh/docs/runtime/nodejs-apis).

```typescript
import { isBunImplementedNodeModule } from "is-bun-module";
isBunImplementedNodeModule("fs"); // true
isBunImplementedNodeModule("node:fs"); // true
isBunImplementedNodeModule("node:notNodeModule"); // false
isBunImplementedNodeModule("node:http2", "1.0.0"); // false, added in 1.0.13
```

#### `isBunBuiltin(moduleName, bunVersion?)`

Checks if a specifier is either a Bun module or a Node.js module implemented in Bun.

```typescript
import { isBunBuiltin } from "is-bun-module";
isBunBuiltin("bun"); // true
isBunBuiltin("fs"); // true
isBunBuiltin("notBunModule"); // false
```

### Module Listing Functions

#### `getBunModules(bunVersion?)`

Returns an array of all Bun modules available in the specified version.

```typescript
import { getBunModules } from "is-bun-module";
getBunModules(); // ["bun", "bun:ffi", ...]
getBunModules("1.0.0"); // Returns modules available in version 1.0.0
```

#### `getBunImplementedNodeModules(bunVersion?)`

Returns an array of all Node.js modules implemented in Bun for the specified version.

```typescript
import { getBunImplementedNodeModules } from "is-bun-module";
getBunImplementedNodeModules(); // ["fs", "path", ...]
getBunImplementedNodeModules("1.0.0"); // Returns implemented Node.js modules in version 1.0.0
```

#### `getBunBuiltinModules(bunVersion?)`

Returns an array of all builtin modules (both Bun modules and implemented Node.js modules).

```typescript
import { getBunBuiltinModules } from "is-bun-module";
getBunBuiltinModules(); // ["bun", "bun:ffi", "fs", "path", ...]
```

## Notes

- **Only Bun v1.0.0+ is supported**
- You can also pass `latest` as Bun version
- Inspired by [is-core-module](https://github.com/inspect-js/is-core-module) and made for [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- Runtime-independent
