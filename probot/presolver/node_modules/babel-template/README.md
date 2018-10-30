# babel-template

> Generate an AST from a string template.

In computer science, this is known as an implementation of quasiquotes.

## Install

```sh
npm install --save-dev babel-template
```

## Usage

```js
import template from "babel-template";
import generate from "babel-generator";
import * as t from "babel-types";

const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module")
});

console.log(generate(ast).code);
```

```js
const myModule = require("my-module");
```

## API

### `template(code, [opts])`

#### code

Type: `string`

#### options

`babel-template` accepts all of the options from [babylon], and specifies
some defaults of its own:

* `allowReturnOutsideFunction` is set to `true` by default.
* `allowSuperOutsideMethod` is set to `true` by default.

##### preserveComments

Type: `boolean`
Default: `false`

Set this to `true` to preserve any comments from the `code` parameter.

#### Return value

`babel-template` returns a `function` which is invoked with an optional object
of replacements. See the usage section for an example.

[babylon]: https://github.com/babel/babylon#options
