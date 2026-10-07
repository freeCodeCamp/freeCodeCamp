# regexpp

[![npm version](https://img.shields.io/npm/v/regexpp.svg)](https://www.npmjs.com/package/regexpp)
[![Downloads/month](https://img.shields.io/npm/dm/regexpp.svg)](http://www.npmtrends.com/regexpp)
[![Build Status](https://github.com/mysticatea/regexpp/workflows/CI/badge.svg)](https://github.com/mysticatea/regexpp/actions)
[![codecov](https://codecov.io/gh/mysticatea/regexpp/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/regexpp)
[![Dependency Status](https://david-dm.org/mysticatea/regexpp.svg)](https://david-dm.org/mysticatea/regexpp)

A regular expression parser for ECMAScript.

## 💿 Installation

```bash
$ npm install regexpp
```

- require Node.js 8 or newer.

## 📖 Usage

```ts
import {
    AST,
    RegExpParser,
    RegExpValidator,
    RegExpVisitor,
    parseRegExpLiteral,
    validateRegExpLiteral,
    visitRegExpAST
} from "regexpp"
```

### parseRegExpLiteral(source, options?)

Parse a given regular expression literal then make AST object.

This is equivalent to `new RegExpParser(options).parseLiteral(source)`.

- **Parameters:**
    - `source` (`string | RegExp`) The source code to parse.
    - `options?` ([`RegExpParser.Options`]) The options to parse.
- **Return:**
    - The AST of the regular expression.

### validateRegExpLiteral(source, options?)

Validate a given regular expression literal.

This is equivalent to `new RegExpValidator(options).validateLiteral(source)`.

- **Parameters:**
    - `source` (`string`) The source code to validate.
    - `options?` ([`RegExpValidator.Options`]) The options to validate.

### visitRegExpAST(ast, handlers)

Visit each node of a given AST.

This is equivalent to `new RegExpVisitor(handlers).visit(ast)`.

- **Parameters:**
    - `ast` ([`AST.Node`]) The AST to visit.
    - `handlers` ([`RegExpVisitor.Handlers`]) The callbacks.

### RegExpParser

#### new RegExpParser(options?)

- **Parameters:**
    - `options?` ([`RegExpParser.Options`]) The options to parse.

#### parser.parseLiteral(source, start?, end?)

Parse a regular expression literal.

- **Parameters:**
    - `source` (`string`) The source code to parse. E.g. `"/abc/g"`.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.
- **Return:**
    - The AST of the regular expression.

#### parser.parsePattern(source, start?, end?, uFlag?)

Parse a regular expression pattern.

- **Parameters:**
    - `source` (`string`) The source code to parse. E.g. `"abc"`.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.
    - `uFlag?` (`boolean`) The flag to enable Unicode mode.
- **Return:**
    - The AST of the regular expression pattern.

#### parser.parseFlags(source, start?, end?)

Parse a regular expression flags.

- **Parameters:**
    - `source` (`string`) The source code to parse. E.g. `"gim"`.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.
- **Return:**
    - The AST of the regular expression flags.

### RegExpValidator

#### new RegExpValidator(options)

- **Parameters:**
    - `options` ([`RegExpValidator.Options`]) The options to validate.

#### validator.validateLiteral(source, start, end)

Validate a regular expression literal.

- **Parameters:**
    - `source` (`string`) The source code to validate.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.

#### validator.validatePattern(source, start, end, uFlag)

Validate a regular expression pattern.

- **Parameters:**
    - `source` (`string`) The source code to validate.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.
    - `uFlag?` (`boolean`) The flag to enable Unicode mode.

#### validator.validateFlags(source, start, end)

Validate a regular expression flags.

- **Parameters:**
    - `source` (`string`) The source code to validate.
    - `start?` (`number`) The start index in the source code. Default is `0`.
    - `end?` (`number`) The end index in the source code. Default is `source.length`.

### RegExpVisitor

#### new RegExpVisitor(handlers)

- **Parameters:**
    - `handlers` ([`RegExpVisitor.Handlers`]) The callbacks.

#### visitor.visit(ast)

Validate a regular expression literal.

- **Parameters:**
    - `ast` ([`AST.Node`]) The AST to visit.

## 📰 Changelog

- [GitHub Releases](https://github.com/mysticatea/regexpp/releases)

## 🍻 Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run build` compiles TypeScript source code to `index.js`, `index.js.map`, and `index.d.ts`.
- `npm run clean` removes the temporary files which are created by `npm test` and `npm run build`.
- `npm run lint` runs ESLint.
- `npm run update:test` updates test fixtures.
- `npm run update:ids` updates `src/unicode/ids.ts`.
- `npm run watch` runs tests with `--watch` option.

[`AST.Node`]: src/ast.ts#L4
[`RegExpParser.Options`]: src/parser.ts#L539
[`RegExpValidator.Options`]: src/validator.ts#L127
[`RegExpVisitor.Handlers`]: src/visitor.ts#L204
