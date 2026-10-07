# ast-types-flow

Flow types for the Javascript AST. Based off of [benjamn/ast-types](https://github.com/benjamn/ast-types).

## Usage

First install `ast-types-flow` via npm, then you can import any of the types
that are exported.

```javascript
/* @flow */

import type {Node} from 'ast-types-flow';

function getName(node: Node): string {
  switch (node.type) {
    case 'Identifier':
      return node.name;

    case 'ClassDeclaration':
      return node.id.name; // Error, id could be null.

    case 'FunctionDeclaration':
      return node.id.name; // Fine if it's always there.

    case 'FunctionExpression':
      if (node.id) {
        return node.id.name; // Can refine id to make sure it exists.
      } else {
        return 'Unknown';
      }

    case 'Literal':
      return node.name; // Error, Literals don't have names, don't be silly.
  }
  return 'Unknown';
}
```

## How it works

A notion of "extends" is added to the Flow syntax via comments. A transform is
included that will compile the source code into useful disjoint union types
based on how the different types extend each other. For example:

```javascript
type Node = {
  common: string,
};

type Foo = {
  // extends Node
  foo: string,
};

type Bar = {
  // extends Node
  bar: number,
};
```

Will be transformed into:

```javascript
type Node = {
  type: 'Foo',
  _Foo: void,
  common: string,
  foo: string,
} | {
  type: 'Bar',
  _Bar: void,
  common: string,
  bar: number,
};

type Foo = {
  type: 'Foo',
  _Foo: void,
  common: string,
  foo: string,
};

type Bar = {
  type: 'Bar',
  _Foo: void,
  common: string,
  bar: number,
};
```

A few things to note:

1. The type `Node` would more ideally be compiled into `Foo | Bar` but then the
disjoint union cannot be properly refined. For now we have to duplicate the
complete definitions.
2. Each entry in a disjoint union has to be structurally unique or Flow will
have an error on the definition. That is why the private `_Foo: void` fields
appear in the types.
