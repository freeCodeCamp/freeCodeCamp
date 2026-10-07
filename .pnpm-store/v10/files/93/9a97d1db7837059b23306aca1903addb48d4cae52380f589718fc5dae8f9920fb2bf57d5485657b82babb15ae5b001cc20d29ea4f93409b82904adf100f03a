# Acorn loose parser

An error-tolerant JavaScript parser written in JavaScript.

This parser will parse _any_ text into an
[ESTree](https://github.com/estree/estree) syntax tree that is a
reasonable approximation of what it might mean as a JavaScript
program.

It will, to recover from missing brackets, treat whitespace as
significant, which has the downside that it might mis-parse a valid
but weirdly indented file. It is recommended to always try a parse
with the regular `acorn` parser first, and only fall back to this
parser when that one finds syntax errors.

## Community

Acorn is open source software released under an
[MIT license](https://github.com/acornjs/acorn/blob/master/acorn-loose/LICENSE).

You are welcome to [report
bugs](https://github.com/acornjs/acorn/issues) or create pull requests
on [github](https://github.com/acornjs/acorn).

## Installation

The easiest way to install acorn-loose is from [`npm`](https://www.npmjs.com/):

```sh
npm install acorn-loose
```

Alternately, you can download the source and build acorn yourself:

```sh
git clone https://github.com/acornjs/acorn.git
cd acorn
npm install
```

## Interface

**parse**`(input, options)` takes an input string and a set of options
(the same options as
[acorn](https://github.com/acornjs/acorn/blob/master/acorn/README.md)
takes), and returns a syntax tree, even if the code isn't
syntactically valid. It'll insert identifier nodes with name `"✖"` as
placeholders in places where it can't make sense of the input. Depends
on the `acorn` package, because it uses the same tokenizer.

```javascript
var acornLoose = require("acorn-loose");
console.log(acornLoose.parse("1 / * 4 )[2]", {ecmaVersion: 2020}));
```

Like the regular parser, the loose parser supports plugins. You can
take the **`LooseParser`** class exported by the module, and call its
static `extend` method with one or more plugins to get a customized
parser class. The class has a static `parse` method that acts like the
top-level `parse` method.

**isDummy**`(node)` takes a `Node` and returns `true` if it is a dummy node
inserted by the parser. The function performs a simple equality check on the
node's name.
