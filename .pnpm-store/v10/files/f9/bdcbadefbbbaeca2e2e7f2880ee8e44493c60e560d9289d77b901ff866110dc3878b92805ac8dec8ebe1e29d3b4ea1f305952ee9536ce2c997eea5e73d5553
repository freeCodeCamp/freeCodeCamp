# @webassemblyjs/wasm-parser

> WebAssembly binary format parser

## Installation

```sh
yarn add @webassemblyjs/wasm-parser
```

## Usage

```js
import { decode } from "@webassemblyjs/wasm-parser";
import { readFileSync } from "fs";

const binary = readFileSync("/path/to/module.wasm");

const decoderOpts = {};
const ast = decode(binary, decoderOpts);
```

### Decoder options

- `dump`: print dump information while decoding (default `false`)
- `ignoreCodeSection`: ignore the code section (default `false`)
- `ignoreDataSection`: ignore the data section (default `false`)

