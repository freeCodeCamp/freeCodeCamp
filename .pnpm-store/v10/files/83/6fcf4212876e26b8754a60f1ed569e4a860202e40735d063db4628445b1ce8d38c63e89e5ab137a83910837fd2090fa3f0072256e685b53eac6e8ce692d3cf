# UnRS Resolver Napi Binding

See

- `index.d.ts` for `resolveSync` and `ResolverFactory` API.
- [README.md](https://github.com/unrs/unrs-resolver#unrs-resolver) for options.

## API

`resolve(directory, specifier)` - resolve `specifier` at an absolute path to a `directory`.

### `directory`

An **absolute** path to a directory where the specifier is resolved against.

For CommonJS modules, it is the `__dirname` variable that contains the absolute path to the folder containing current module.

For ECMAScript modules, it is the value of `import.meta.url`.

Behavior is undefined when given a path to a file.

### `specifier`

The string passed to `require` or `import`, i.e. `require("specifier")` or `import "specifier"`

## ESM Example

```javascript
import assert from 'assert';
import path from 'path';
import resolve, { ResolverFactory } from './index.js';

// `resolve`
assert(resolve.sync(process.cwd(), './index.js').path, path.join(cwd, 'index.js'));

// `ResolverFactory`
const resolver = new ResolverFactory();
assert(resolver.sync(process.cwd(), './index.js').path, path.join(cwd, 'index.js'));
```
