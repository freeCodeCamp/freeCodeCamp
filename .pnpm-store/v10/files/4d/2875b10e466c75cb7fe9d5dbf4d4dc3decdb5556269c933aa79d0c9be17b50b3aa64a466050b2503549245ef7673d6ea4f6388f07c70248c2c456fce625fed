# @adobe/css-tools

> A modern CSS parser and stringifier with TypeScript support

[![npm version](https://badge.fury.io/js/%40adobe%2Fcss-tools.svg)](https://badge.fury.io/js/%40adobe%2Fcss-tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Parse CSS into an Abstract Syntax Tree (AST) and convert it back to CSS with configurable formatting. Built with TypeScript for type safety and modern JavaScript features.

## Install

```bash
npm install @adobe/css-tools
```

## Usage

```js
import { parse, stringify } from '@adobe/css-tools'

// Parse CSS to AST
const ast = parse('body { font-size: 12px; }')

// Stringify AST back to CSS
const css = stringify(ast)
// => "body { font-size: 12px; }"

// Pretty print with custom indentation
const formatted = stringify(ast, { indent: '  ' })
// => "body {\n  font-size: 12px;\n}"

// Minify output
const minified = stringify(ast, { compress: true })
// => "body{font-size:12px}"
```

## API

### `parse(code, options?)`

Parses CSS code and returns an Abstract Syntax Tree (AST).

**Parameters:**
- `code` (string) - The CSS code to parse
- `options` (object, optional) - Parsing options
  - `silent` (boolean) - Silently fail on parse errors instead of throwing
  - `source` (string) - File path for better error reporting

**Returns:** `CssStylesheetAST` - The parsed CSS as an AST

### `stringify(ast, options?)`

Converts a CSS AST back to CSS string with configurable formatting.

**Parameters:**
- `ast` (CssStylesheetAST) - The CSS AST to stringify
- `options` (object, optional) - Stringification options
  - `indent` (string) - Indentation string (default: `'  '`)
  - `compress` (boolean) - Whether to compress/minify the output (default: `false`)

**Returns:** `string` - The formatted CSS string

## Features

- **Complete CSS Support**: All standard CSS features including selectors, properties, values, at-rules, and comments
- **TypeScript Support**: Full type definitions for all AST nodes and functions
- **Error Handling**: Configurable error handling with detailed position information
- **Formatting Options**: Pretty print, minify, or custom formatting
- **Performance Optimized**: Efficient parsing and stringification for large CSS files
- **Source Maps**: Track original source positions for debugging and tooling

### Supported CSS Features

- **Selectors**: Element, class, ID, attribute, pseudo-class, pseudo-element selectors
- **Properties**: All standard CSS properties and custom properties
- **Values**: Colors, lengths, percentages, functions, calc(), etc.
- **At-rules**: @media, @keyframes, @import, @charset, @namespace, @font-face, @page, @document, @supports, @container, @layer, @starting-style, @host, @custom-media
- **Comments**: Both /* */ and // comments
- **Whitespace**: Preserves formatting information
- **Vendor prefixes**: Supports vendor-prefixed at-rules and properties
- **Nested rules**: Media queries, supports, containers, etc.
- **Complex selectors**: Combinators, pseudo-selectors, attribute selectors

## Examples

### Error Handling

```js
import { parse } from '@adobe/css-tools'

const malformedCss = `
  body { color: red; }
  { color: blue; } /* Missing selector */
  .valid { background: green; }
`

// Parse with silent error handling
const result = parse(malformedCss, { silent: true })

// Check for parsing errors
if (result.stylesheet.parsingErrors) {
  console.log('Parsing errors:', result.stylesheet.parsingErrors.length)
  result.stylesheet.parsingErrors.forEach(error => {
    console.log(`Error at line ${error.line}: ${error.message}`)
  })
}

// Valid rules are still parsed
console.log('Valid rules:', result.stylesheet.rules.length)
```

### Source Tracking

```js
import { parse } from '@adobe/css-tools'

const css = 'body { color: red; }'
const ast = parse(css, { source: 'styles.css' })

// Position information is available
const rule = ast.stylesheet.rules[0]
console.log(rule.position?.source) // "styles.css"
console.log(rule.position?.start) // { line: 1, column: 1 }
console.log(rule.position?.end) // { line: 1, column: 20 }
```

For more examples, see the [Examples documentation](docs/EXAMPLES.md).

## Performance

The library is optimized for performance and can handle large CSS files efficiently. For benchmarking information, see the `benchmark/` directory in the source code.

## Documentation

- [API Reference](docs/API.md) - Complete API documentation
- [AST Structure](docs/AST.md) - Detailed AST node types and structure
- [Examples](docs/EXAMPLES.md) - Comprehensive usage examples
- [Changelog](docs/CHANGELOG.md) - Version history and changes

## Background

This is a fork of the npm `css` package, maintained by Adobe with modern improvements including TypeScript support, enhanced performance, and security updates. It provides a robust foundation for CSS tooling, preprocessing, and analysis.

## License

[MIT](LICENSE)
