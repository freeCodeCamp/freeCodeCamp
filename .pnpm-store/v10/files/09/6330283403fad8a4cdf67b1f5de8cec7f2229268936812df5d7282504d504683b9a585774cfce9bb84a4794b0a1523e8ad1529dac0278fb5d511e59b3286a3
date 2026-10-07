<img align="right" width="111" height="111"
     alt="CSSTree logo"
     src="https://cloud.githubusercontent.com/assets/270491/19243723/6f9136c6-8f21-11e6-82ac-eeeee4c6c452.png"/>

# CSSTree

[![NPM version](https://img.shields.io/npm/v/css-tree.svg)](https://www.npmjs.com/package/css-tree)
[![Build Status](https://travis-ci.org/csstree/csstree.svg?branch=master)](https://travis-ci.org/csstree/csstree)
[![Coverage Status](https://coveralls.io/repos/github/csstree/csstree/badge.svg?branch=master)](https://coveralls.io/github/csstree/csstree?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dm/css-tree.svg)](https://www.npmjs.com/package/css-tree)
[![Twitter](https://img.shields.io/badge/Twitter-@csstree-blue.svg)](https://twitter.com/csstree)

CSSTree is a tool set for CSS: [fast](https://github.com/postcss/benchmark) detailed parser (CSS → AST), walker (AST traversal), generator (AST → CSS) and lexer (validation and matching) based on specs and browser implementations. The main goal is to be efficient and W3C specs compliant, with focus on CSS analyzing and source-to-source transforming tasks.

> NOTE: The library isn't in final shape and needs further improvements (e.g. AST format and API are subjects to change in next major versions). However it's stable enough and used by projects like [CSSO](https://github.com/css/csso) (CSS minifier) and [SVGO](https://github.com/svg/svgo) (SVG optimizer) in production.

## Features

- **Detailed parsing with an adjustable level of detail**

  By default CSSTree parses CSS as detailed as possible, i.e. each single logical part is representing with its own AST node (see [AST format](docs/ast.md) for all possible node types). The parsing detail level can be changed through [parser options](docs/parsing.md#parsesource-options), for example, you can disable parsing of selectors or declaration values for component parts.

- **Tolerant to errors by design**

  Parser behaves as [spec says](https://www.w3.org/TR/css-syntax-3/#error-handling): "When errors occur in CSS, the parser attempts to recover gracefully, throwing away only the minimum amount of content before returning to parsing as normal". The only thing the parser departs from the specification is that it doesn't throw away bad content, but wraps it in a special node type (`Raw`) that allows processing it later.

- **Fast and efficient**

  CSSTree is created with focus on performance and effective memory consumption. Therefore it's [one of the fastest CSS parsers](https://github.com/postcss/benchmark) at the moment.

- **Syntax validation**

  The build-in lexer can test CSS against syntaxes defined by W3C. CSSTree uses [mdn/data](https://github.com/mdn/data/) as a basis for lexer's dictionaries and extends it with vendor specific and legacy syntaxes. Lexer can only check the declaration values currently, but this feature will be extended to other parts of the CSS in the future.

## Documentation

- [AST format](docs/ast.md)
- [Parsing CSS → AST](docs/parsing.md)
  - [parse(source[, options])](docs/parsing.md#parsesource-options)
- [Serialization AST → CSS](docs/generate.md)
  - [generate(ast[, options])](docs/generate.md#generateast-options)
- [AST traversal](docs/traversal.md)
  - [walk(ast, options)](docs/traversal.md#walkast-options)
  - [find(ast, fn)](docs/traversal.md#findast-fn)
  - [findLast(ast, fn)](docs/traversal.md#findlastast-fn)
  - [findAll(ast, fn)](docs/traversal.md#findallast-fn)
- [Utils for AST](docs/utils.md)
  - [property(name)](docs/utils.md#propertyname)
  - [keyword(name)](docs/utils.md#keywordname)
  - [clone(ast)](docs/utils.md#cloneast)
  - [fromPlainObject(object)](docs/utils.md#fromplainobjectobject)
  - [toPlainObject(ast)](docs/utils.md#toplainobjectast)
- [Value Definition Syntax](docs/definition-syntax.md)
  - [parse(source)](docs/definition-syntax.md#parsesource)
  - [walk(node, options, context)](docs/definition-syntax.md#walknode-options-context)
  - [generate(node, options)](docs/definition-syntax.md#generatenode-options)
  - [AST format](docs/definition-syntax.md#ast-format)

## Tools

* [AST Explorer](https://astexplorer.net/#/gist/244e2fb4da940df52bf0f4b94277db44/e79aff44611020b22cfd9708f3a99ce09b7d67a8) – explore CSSTree AST format with zero setup
* [CSS syntax reference](https://csstree.github.io/docs/syntax.html)
* [CSS syntax validator](https://csstree.github.io/docs/validator.html)

## Related projects

* [csstree-validator](https://github.com/csstree/validator) – NPM package to validate CSS
* [stylelint-csstree-validator](https://github.com/csstree/stylelint-validator) – plugin for stylelint to validate CSS
* [Grunt plugin](https://github.com/sergejmueller/grunt-csstree-validator)
* [Gulp plugin](https://github.com/csstree/gulp-csstree)
* [Sublime plugin](https://github.com/csstree/SublimeLinter-contrib-csstree)
* [VS Code plugin](https://github.com/csstree/vscode-plugin)
* [Atom plugin](https://github.com/csstree/atom-plugin)

## Usage

Install with npm:

```
> npm install css-tree
```

Basic usage:

```js
var csstree = require('css-tree');

// parse CSS to AST
var ast = csstree.parse('.example { world: "!" }');

// traverse AST and modify it
csstree.walk(ast, function(node) {
    if (node.type === 'ClassSelector' && node.name === 'example') {
        node.name = 'hello';
    }
});

// generate CSS from AST
console.log(csstree.generate(ast));
// .hello{world:"!"}
```

Syntax matching:

```js
// parse CSS to AST as a declaration value
var ast = csstree.parse('red 1px solid', { context: 'value' });

// match to syntax of `border` property
var matchResult = csstree.lexer.matchProperty('border', ast);

// check first value node is a <color>
console.log(matchResult.isType(ast.children.first(), 'color'));
// true

// get a type list matched to a node
console.log(matchResult.getTrace(ast.children.first()));
// [ { type: 'Property', name: 'border' },
//   { type: 'Type', name: 'color' },
//   { type: 'Type', name: 'named-color' },
//   { type: 'Keyword', name: 'red' } ]
```

## Top level API

![API map](https://cdn.rawgit.com/csstree/csstree/1.0/docs/api-map.svg)

## License

MIT
