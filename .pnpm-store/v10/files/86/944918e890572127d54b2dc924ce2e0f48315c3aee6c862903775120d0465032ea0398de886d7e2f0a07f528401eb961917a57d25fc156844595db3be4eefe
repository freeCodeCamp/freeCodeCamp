# tinyglobby

[![npm version](https://img.shields.io/npm/v/tinyglobby.svg?maxAge=3600)](https://npmjs.com/package/tinyglobby)
[![monthly downloads](https://img.shields.io/npm/dm/tinyglobby.svg?maxAge=3600)](https://npmjs.com/package/tinyglobby)

A fast and minimal alternative to globby and fast-glob, meant to behave the same way.

Both globby and fast-glob present some behavior no other globbing lib has,
which makes it hard to manually replace with something smaller and better.

This library uses only two subdependencies, compared to `globby`'s [23](https://npmgraph.js.org/?q=globby@16.2.0)
and `fast-glob`'s [17](https://npmgraph.js.org/?q=fast-glob@3.3.3).

## Usage

```js
import { glob, globSync } from 'tinyglobby';

await glob(['files/*.ts', '!**/*.d.ts'], { cwd: 'src' });
globSync('src/**/*.ts', { ignore: '**/*.d.ts' });
```

## Documentation

Visit https://superchupu.dev/tinyglobby to read the full documentation.
