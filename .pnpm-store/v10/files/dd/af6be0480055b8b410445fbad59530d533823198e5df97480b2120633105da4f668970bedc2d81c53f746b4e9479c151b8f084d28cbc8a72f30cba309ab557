# Abstract Syntax Tree (AST)

## Overview

The AST represents CSS as a tree structure where each node has a specific type and properties. All nodes share common properties and have type-specific properties.

## Common Properties

All AST nodes have these properties:

### `type`

The node type as a string. See [Node Types](#node-types) for all possible values.

### `position` (optional)

Position information for the node in the source code:

```typescript
{
  start: { line: number; column: number };
  end: { line: number; column: number };
  source?: string;
}
```

### `parent` (optional)

Reference to the parent node in the AST.

## Node Types

### `stylesheet`

The root node representing an entire CSS document.

**Properties:**
- `stylesheet.source` (optional): Source file path
- `stylesheet.rules`: Array of top-level rules
- `stylesheet.parsingErrors` (optional): Array of parse errors when `silent` option is used

**Example:**
```json
{
  "type": "stylesheet",
  "stylesheet": {
    "rules": [
      // ... other nodes
    ]
  }
}
```

### `rule`

A CSS rule with selectors and declarations.

**Properties:**
- `selectors`: Array of CSS selectors as strings
- `declarations`: Array of declarations and comments

**Example:**
```json
{
  "type": "rule",
  "selectors": ["body", "html"],
  "declarations": [
    {
      "type": "declaration",
      "property": "color",
      "value": "red"
    }
  ]
}
```

### `declaration`

A CSS property declaration.

**Properties:**
- `property`: The CSS property name
- `value`: The CSS property value as a string

**Example:**
```json
{
  "type": "declaration",
  "property": "background-color",
  "value": "#ffffff"
}
```

### `comment`

A CSS comment.

**Properties:**
- `comment`: The comment text (without `/*` and `*/`)

**Example:**
```json
{
  "type": "comment",
  "comment": " This is a comment "
}
```

### `media`

A `@media` rule.

**Properties:**
- `media`: The media query string
- `rules`: Array of rules within the media block

**Example:**
```json
{
  "type": "media",
  "media": "screen and (max-width: 768px)",
  "rules": [
    // ... nested rules
  ]
}
```

### `keyframes`

A `@keyframes` rule.

**Properties:**
- `name`: The keyframes name
- `vendor` (optional): Vendor prefix (e.g., "-webkit-")
- `keyframes`: Array of keyframe rules and comments

**Example:**
```json
{
  "type": "keyframes",
  "name": "fade",
  "keyframes": [
    {
      "type": "keyframe",
      "values": ["from"],
      "declarations": [
        {
          "type": "declaration",
          "property": "opacity",
          "value": "0"
        }
      ]
    }
  ]
}
```

### `keyframe`

A keyframe within a `@keyframes` rule.

**Properties:**
- `values`: Array of keyframe selectors (e.g., `["from"]`, `["to"]`, `["50%"]`)
- `declarations`: Array of declarations and comments

### `import`

An `@import` rule.

**Properties:**
- `import`: The import string (URL or media query)

**Example:**
```json
{
  "type": "import",
  "import": "url('styles.css')"
}
```

### `charset`

A `@charset` rule.

**Properties:**
- `charset`: The character encoding

**Example:**
```json
{
  "type": "charset",
  "charset": "utf-8"
}
```

### `namespace`

A `@namespace` rule.

**Properties:**
- `namespace`: The namespace declaration

**Example:**
```json
{
  "type": "namespace",
  "namespace": "url(http://www.w3.org/1999/xhtml)"
}
```

### `supports`

A `@supports` rule.

**Properties:**
- `supports`: The supports condition
- `rules`: Array of rules within the supports block

**Example:**
```json
{
  "type": "supports",
  "supports": "(display: grid)",
  "rules": [
    // ... nested rules
  ]
}
```

### `document`

A `@document` rule.

**Properties:**
- `document`: The document condition
- `vendor` (optional): Vendor prefix
- `rules`: Array of rules within the document block

### `page`

A `@page` rule.

**Properties:**
- `selectors`: Array of page selectors
- `declarations`: Array of declarations and comments

### `font-face`

A `@font-face` rule.

**Properties:**
- `declarations`: Array of font declarations and comments

### `host`

A `:host` rule.

**Properties:**
- `rules`: Array of rules within the host block

### `container`

A `@container` rule.

**Properties:**
- `container`: The container query
- `rules`: Array of rules within the container block

### `layer`

A `@layer` rule.

**Properties:**
- `layer`: The layer name
- `rules` (optional): Array of rules within the layer block

### `custom-media`

A `@custom-media` rule.

**Properties:**
- `name`: The custom media query name
- `media`: The media query definition

### `starting-style`

A `@starting-style` rule.

**Properties:**
- `rules`: Array of rules within the starting-style block

## Type Hierarchy

The AST nodes are organized in the following hierarchy:

- `CssStylesheetAST` - Root node
- `CssAtRuleAST` - Union of all at-rule and rule nodes
- `CssAllNodesAST` - Union of all possible node types

## Working with the AST

### Traversing Nodes

```typescript
import { parse, CssStylesheetAST } from '@adobe/css-tools';

const ast: CssStylesheetAST = parse('body { color: red; }');

// Access top-level rules
ast.stylesheet.rules.forEach(rule => {
  if (rule.type === 'rule') {
    console.log('Selectors:', rule.selectors);
    rule.declarations.forEach(decl => {
      if (decl.type === 'declaration') {
        console.log(`${decl.property}: ${decl.value}`);
      }
    });
  }
});
```

### Modifying Nodes

```typescript
// Add a new declaration
const newDecl = {
  type: 'declaration' as const,
  property: 'font-size',
  value: '16px'
};

// Find a rule and add the declaration
ast.stylesheet.rules.forEach(rule => {
  if (rule.type === 'rule' && rule.selectors.includes('body')) {
    rule.declarations.push(newDecl);
  }
});
```

### Error Handling

When parsing with the `silent` option, errors are collected in the AST:

```typescript
const ast = parse('invalid css {', { silent: true });

if (ast.stylesheet.parsingErrors) {
  ast.stylesheet.parsingErrors.forEach(error => {
    console.error('Parse error:', error.message);
  });
}
```

## Position Information

Position information is available on most nodes and includes:

- `start.line` and `start.column`: Beginning of the node
- `end.line` and `end.column`: End of the node  
- `source`: Source file path (if provided during parsing)

This is useful for:
- Error reporting
- Source mapping
- Code analysis tools
- IDE integration
