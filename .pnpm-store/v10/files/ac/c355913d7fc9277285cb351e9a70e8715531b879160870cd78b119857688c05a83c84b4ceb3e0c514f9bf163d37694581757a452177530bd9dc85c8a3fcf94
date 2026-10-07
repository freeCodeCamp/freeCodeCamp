# ES Module Lexer

[![Build Status][actions-image]][actions-url]

A JS module syntax lexer used in [es-module-shims](https://github.com/guybedford/es-module-shims).

Outputs the list of exports and locations of import specifiers, including dynamic import and import meta handling.

Supports new syntax features including import attributes and source phase imports.

A very small single JS file (4KiB gzipped) that includes inlined Web Assembly for very fast source analysis of ECMAScript module syntax only.

For an example of the performance, Angular 1 (720KiB) is fully parsed in 5ms, in comparison to the fastest JS parser, Acorn which takes over 100ms.

_Comprehensively handles the JS language grammar while remaining small and fast. - ~10ms per MB of JS cold and ~5ms per MB of JS warm, [see benchmarks](#benchmarks) for more info._

> [Built with](https://github.com/guybedford/es-module-lexer/blob/main/chompfile.toml) [Chomp](https://chompbuild.com/)

### Usage

```
npm install es-module-lexer
```

See [src/lexer.ts](src/lexer.ts) for the type definitions.

For use in CommonJS:

```js
const { init, parse } = require('es-module-lexer');

(async () => {
  // either await init, or call parse asynchronously
  // this is necessary for the Web Assembly boot
  await init;

  const source = 'export var p = 5';
  const [imports, exports] = parse(source);
  
  // Returns "p"
  source.slice(exports[0].s, exports[0].e);
  // Returns "p"
  source.slice(exports[0].ls, exports[0].le);
})();
```

An ES module version is also available:

```js
import { init, parse } from 'es-module-lexer';

(async () => {
  await init;

  const source = `
    import { name } from 'mod\\u1011';
    import json from './json.json' assert { type: 'json' }
    export var p = 5;
    export function q () {

    };
    export { x as 'external name' } from 'external';

    // Comments provided to demonstrate edge cases
    import /*comment!*/ (  'asdf', { assert: { type: 'json' }});
    import /*comment!*/.meta.asdf;

    // Source phase imports:
    import source mod from './mod.wasm';
    import.source('./mod.wasm');
  `;

  const [imports, exports] = parse(source, 'optional-sourcename');

  // Returns "modထ"
  imports[0].n
  // Returns "mod\u1011"
  source.slice(imports[0].s, imports[0].e);
  // "s" = start
  // "e" = end

  // Returns "import { name } from 'mod'"
  source.slice(imports[0].ss, imports[0].se);
  // "ss" = statement start
  // "se" = statement end

  // Returns "{ type: 'json' }"
  source.slice(imports[1].a, imports[1].se);
  // "a" = assert, -1 for no assertion

  // Returns "external"
  source.slice(imports[2].s, imports[2].e);

  // Returns "p"
  source.slice(exports[0].s, exports[0].e);
  // Returns "p"
  source.slice(exports[0].ls, exports[0].le);
  // Returns "q"
  source.slice(exports[1].s, exports[1].e);
  // Returns "q"
  source.slice(exports[1].ls, exports[1].le);
  // Returns "'external name'"
  source.slice(exports[2].s, exports[2].e);
  // Returns -1
  exports[2].ls;
  // Returns -1
  exports[2].le;

  // Import type is provided by `t` value
  // (1 for static, 2, for dynamic)
  // Returns true
  imports[2].t == 2;

  // Returns "asdf" (only for string literal dynamic imports)
  imports[2].n
  // Returns "import /*comment!*/ (  'asdf', { assert: { type: 'json' } })"
  source.slice(imports[3].ss, imports[3].se);
  // Returns "'asdf'"
  source.slice(imports[3].s, imports[3].e);
  // Returns "(  'asdf', { assert: { type: 'json' } })"
  source.slice(imports[3].d, imports[3].se);
  // Returns "{ assert: { type: 'json' } }"
  source.slice(imports[3].a, imports[3].se - 1);

  // For non-string dynamic import expressions:
  // - n will be undefined
  // - a is currently -1 even if there is an assertion
  // - e is currently the character before the closing )

  // For nested dynamic imports, the se value of the outer import is -1 as end tracking does not
  // currently support nested dynamic immports

  // import.meta is indicated by imports[3].d === -2
  // Returns true
  imports[4].d === -2;
  // Returns "import /*comment!*/.meta"
  source.slice(imports[4].s, imports[4].e);
  // ss and se are the same for import meta

  // Returns "'./mod.wasm'"
  source.slice(imports[5].s, imports[5].e);

  // Import type 4 and 5 for static and dynamic source phase
  imports[5].t === 4;
  imports[6].t === 5;
})();
```

### CSP asm.js Build

The default version of the library uses Wasm and (safe) eval usage for performance and a minimal footprint.

Neither of these represent security escalation possibilities since there are no execution string injection vectors, but that can still violate existing CSP policies for applications.

For a version that works with CSP eval disabled, use the `es-module-lexer/js` build:

```js
import { parse } from 'es-module-lexer/js';
```

Instead of Web Assembly, this uses an asm.js build which is almost as fast as the Wasm version ([see benchmarks below](#benchmarks)).

### Escape Sequences

To handle escape sequences in specifier strings, the `.n` field of imported specifiers will be provided where possible.

For dynamic import expressions, this field will be empty if not a valid JS string.

### Facade Detection

Facade modules that only use import / export syntax can be detected via the third return value:

```js
const [,, facade] = parse(`
  export * from 'external';
  import * as ns from 'external2';
  export { a as b } from 'external3';
  export { ns };
`);
facade === true;
```

### ESM Detection

Modules that uses ESM syntaxes can be detected via the fourth return value:

```js
const [,,, hasModuleSyntax] = parse(`
  export {}
`);
hasModuleSyntax === true;
```

Dynamic imports are ignored since they can be used in Non-ESM files.

```js
const [,,, hasModuleSyntax] = parse(`
  import('./foo.js')
`);
hasModuleSyntax === false;
```

### Environment Support

Node.js 10+, and [all browsers with Web Assembly support](https://caniuse.com/#feat=wasm).

### Grammar Support

* Token state parses all line comments, block comments, strings, template strings, blocks, parens and punctuators.
* Division operator / regex token ambiguity is handled via backtracking checks against punctuator prefixes, including closing brace or paren backtracking.
* Always correctly parses valid JS source, but may parse invalid JS source without errors.

### Limitations

The lexing approach is designed to deal with the full language grammar including RegEx / division operator ambiguity through backtracking and paren / brace tracking.

The only limitation to the reduced parser is that the "exports" list may not correctly gather all export identifiers in the following edge cases:

```js
// Only "a" is detected as an export, "q" isn't
export var a = 'asdf', q = z;

// "b" is not detected as an export
export var { a: b } = asdf;
```

The above cases are handled gracefully in that the lexer will keep going fine, it will just not properly detect the export names above.

### Benchmarks

Benchmarks can be run with `npm run bench`.

Current results for a high spec machine:

#### Wasm Build

```
Module load time
> 5ms
Cold Run, All Samples
test/samples/*.js (3123 KiB)
> 18ms

Warm Runs (average of 25 runs)
test/samples/angular.js (739 KiB)
> 3ms
test/samples/angular.min.js (188 KiB)
> 1ms
test/samples/d3.js (508 KiB)
> 3ms
test/samples/d3.min.js (274 KiB)
> 2ms
test/samples/magic-string.js (35 KiB)
> 0ms
test/samples/magic-string.min.js (20 KiB)
> 0ms
test/samples/rollup.js (929 KiB)
> 4.32ms
test/samples/rollup.min.js (429 KiB)
> 2.16ms

Warm Runs, All Samples (average of 25 runs)
test/samples/*.js (3123 KiB)
> 14.16ms
```

#### JS Build (asm.js)

```
Module load time
> 2ms
Cold Run, All Samples
test/samples/*.js (3123 KiB)
> 34ms

Warm Runs (average of 25 runs)
test/samples/angular.js (739 KiB)
> 3ms
test/samples/angular.min.js (188 KiB)
> 1ms
test/samples/d3.js (508 KiB)
> 3ms
test/samples/d3.min.js (274 KiB)
> 2ms
test/samples/magic-string.js (35 KiB)
> 0ms
test/samples/magic-string.min.js (20 KiB)
> 0ms
test/samples/rollup.js (929 KiB)
> 5ms
test/samples/rollup.min.js (429 KiB)
> 3.04ms

Warm Runs, All Samples (average of 25 runs)
test/samples/*.js (3123 KiB)
> 17.12ms
```

### Building

This project uses [Chomp](https://chompbuild.com) for building.

With Chomp installed, download the WASI SDK 12.0 from https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-12.

- [Linux](https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-12/wasi-sdk-12.0-linux.tar.gz)
- [Windows (MinGW)](https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-12/wasi-sdk-12.0-mingw.tar.gz)
- [macOS](https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-12/wasi-sdk-12.0-macos.tar.gz)

Locate the WASI-SDK as a sibling folder, or customize the path via the `WASI_PATH` environment variable.

Emscripten emsdk is also assumed to be a sibling folder or via the `EMSDK_PATH` environment variable.

Example setup:

```
git clone https://github.com:guybedford/es-module-lexer
git clone https://github.com/emscripten-core/emsdk
cd emsdk
git checkout 1.40.1-fastcomp
./emsdk install 1.40.1-fastcomp
cd ..
wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-12/wasi-sdk-12.0-linux.tar.gz
gunzip wasi-sdk-12.0-linux.tar.gz
tar -xf wasi-sdk-12.0-linux.tar
mv wasi-sdk-12.0-linux.tar wasi-sdk-12.0
cargo install chompbuild
cd es-module-lexer
chomp test
```

For the `asm.js` build, git clone `emsdk` from  is assumed to be a sibling folder as well.

### License

MIT

[actions-image]: https://github.com/guybedford/es-module-lexer/actions/workflows/build.yml/badge.svg
[actions-url]: https://github.com/guybedford/es-module-lexer/actions/workflows/build.yml
