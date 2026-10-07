# Support for `import defer` and `import souce` in acorn

## Install

```
npm install acorn-import-phases
```

## Usage

This module provides a plugin that can be used to extend the Acorn Parser class:

```js
const {Parser} = require('acorn');
const importPhases = require('acorn-import-phases');
Parser.extend(importPhases()).parse('...');
```

By default, the plugin supports both `import defer` and `import source` syntax. You can disable one of them by passing an options object:

```js
const {Parser} = require('acorn');
const importPhases = require('acorn-import-phases');
Parser.extend(importPhases({ defer: false })).parse('...');
Parser.extend(importPhases({ source: false })).parse('...');
```

## License

This plugin is released under an MIT License.
