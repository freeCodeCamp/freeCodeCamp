# ModuleImporter

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A utility for seamlessly importing modules in Node.js regardless if they are CommonJS or ESM format. Under the hood, this uses `import()` and relies on Node.js's CommonJS compatibility to work correctly. This ensures that the correct locations and formats are used for CommonJS so you can call one method and not worry about any compatibility issues.

The problem with the default `import()` is that it always resolves relative to the file location in which it is called. If you want to resolve from a different location, you need to jump through a few hoops to achieve that. This package makes it easy to both resolve and import modules from any directory.

## Usage

### Node.js

Install using [npm][npm] or [yarn][yarn]:

```
npm install @humanwhocodes/module-importer

# or

yarn add @humanwhocodes/module-importer
```

Import into your Node.js project:

```js
// CommonJS
const { ModuleImporter } = require("@humanwhocodes/module-importer");

// ESM
import { ModuleImporter } from "@humanwhocodes/module-importer";
```

### Bun

Install using this command:

```
bun add @humanwhocodes/module-importer
```

Import into your Bun project:

```js
import { ModuleImporter } from "@humanwhocodes/module-importer";
```

## API

After importing, create a new instance of `ModuleImporter` to start emitting events:

```js
// cwd can be omitted to use process.cwd()
const importer = new ModuleImporter(cwd);

// you can resolve the location of any package
const location = importer.resolve("./some-file.cjs");

// you can also import directly
const module = importer.import("./some-file.cjs");
```

For both `resolve()` and `import()`, you can pass in package names and filenames.

## Developer Setup

1. Fork the repository
2. Clone your fork
3. Run `npm install` to setup dependencies
4. Run `npm test` to run tests

## License

Apache 2.0

[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/
