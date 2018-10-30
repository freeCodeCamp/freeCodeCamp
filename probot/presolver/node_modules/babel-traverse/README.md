# babel-traverse

> babel-traverse maintains the overall tree state, and is responsible for replacing, removing, and adding nodes.

## Install

```sh
$ npm install --save babel-traverse
```

## Usage

We can use it alongside Babylon to traverse and update nodes:

```js
import * as babylon from "babylon";
import traverse from "babel-traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});
```
[:book: **Read the full docs here**](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse)
