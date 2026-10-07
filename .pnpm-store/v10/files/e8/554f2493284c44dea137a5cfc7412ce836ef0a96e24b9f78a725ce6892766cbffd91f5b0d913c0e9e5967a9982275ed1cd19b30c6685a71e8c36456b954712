/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');
const t = require('@babel/types');

type BabelAST = BabelNode_DEPRECATED;

/**
 * type NAME = any;
 */
function anyTypeAlias(name: string): BabelAST {
  return t.typeAlias(t.identifier(name), undefined, t.anyTypeAnnotation());
}

/**
 * {|
 *   PROPS
 * |}
 */
function exactObjectTypeAnnotation(props: Array<BabelAST>): $FlowFixMe {
  const typeAnnotation = t.objectTypeAnnotation(props);
  typeAnnotation.exact = true;
  return typeAnnotation;
}

/**
 * {
 *   PROPS
 *   ...
 * }
 */
function inexactObjectTypeAnnotation(props: Array<BabelAST>): $FlowFixMe {
  const typeAnnotation = t.objectTypeAnnotation(props);
  typeAnnotation.inexact = true;
  return typeAnnotation;
}

/**
 * export type NAME = TYPE
 */
function exportType(name: string, type: BabelAST): $FlowFixMe {
  return t.exportNamedDeclaration(
    t.typeAlias(t.identifier(name), undefined, type),
    [],
    undefined,
  );
}

/**
 * export type {A, B, C}
 */
function exportTypes(names: $ReadOnlyArray<string>): $FlowFixMe {
  const res = t.exportNamedDeclaration(
    undefined,
    names.map(name =>
      t.exportSpecifier(t.identifier(name), t.identifier(name)),
    ),

    undefined,
  );
  res.exportKind = 'type';
  return res;
}

/**
 * declare export type NAME = VALUE
 */
function declareExportOpaqueType(name: string, value: string): $FlowFixMe {
  return t.declareExportDeclaration(
    t.declareOpaqueType(
      t.identifier(name),
      undefined,
      t.genericTypeAnnotation(t.identifier(value)),
    ),
  );
}

/**
 * import type {NAMES[0], NAMES[1], ...} from 'MODULE';
 */
function importTypes(
  names: $ReadOnlyArray<string>,
  module: string,
): $FlowFixMe {
  const importDeclaration = t.importDeclaration(
    names.map(name =>
      t.importSpecifier(t.identifier(name), t.identifier(name)),
    ),
    t.stringLiteral(module),
  );
  importDeclaration.importKind = 'type';
  return importDeclaration;
}

/**
 * Create an intersection type if needed.
 *
 * TYPES[0] & TYPES[1] & ...
 */
function intersectionTypeAnnotation(types: Array<BabelAST>): BabelAST {
  invariant(
    types.length > 0,
    'RelayFlowBabelFactories: cannot create an intersection of 0 types',
  );
  return types.length === 1 ? types[0] : t.intersectionTypeAnnotation(types);
}

function lineComments(
  ...lines: $ReadOnlyArray<string>
): $ReadOnlyArray<$FlowFixMe> {
  return lines.map(line => ({type: 'CommentLine', value: ' ' + line}));
}

/**
 * $ReadOnlyArray<TYPE>
 */
function readOnlyArrayOfType(thing: BabelAST): $FlowFixMe {
  return t.genericTypeAnnotation(
    t.identifier('$ReadOnlyArray'),
    t.typeParameterInstantiation([thing]),
  );
}

/**
 * +KEY: VALUE
 */
function readOnlyObjectTypeProperty(key: string, value: BabelAST): $FlowFixMe {
  const prop = t.objectTypeProperty(t.identifier(key), value);
  prop.variance = t.variance('plus');
  return prop;
}

function stringLiteralTypeAnnotation(value: string): $FlowFixMe {
  return t.stringLiteralTypeAnnotation(value);
}

/**
 * Create a union type if needed.
 *
 * TYPES[0] | TYPES[1] | ...
 */
function unionTypeAnnotation(types: Array<BabelAST>): BabelAST {
  invariant(
    types.length > 0,
    'RelayFlowBabelFactories: cannot create a union of 0 types',
  );
  return types.length === 1 ? types[0] : t.unionTypeAnnotation(types);
}

module.exports = {
  anyTypeAlias,
  declareExportOpaqueType,
  exactObjectTypeAnnotation,
  inexactObjectTypeAnnotation,
  exportType,
  exportTypes,
  importTypes,
  intersectionTypeAnnotation,
  lineComments,
  readOnlyArrayOfType,
  readOnlyObjectTypeProperty,
  stringLiteralTypeAnnotation,
  unionTypeAnnotation,
};
