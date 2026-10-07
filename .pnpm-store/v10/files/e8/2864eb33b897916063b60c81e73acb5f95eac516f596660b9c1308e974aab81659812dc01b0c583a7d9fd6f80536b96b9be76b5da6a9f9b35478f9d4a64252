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

const Profiler = require('./GraphQLCompilerProfiler');

const {
  isExecutableDefinitionAST,
  isSchemaDefinitionAST,
} = require('./SchemaUtils');
const {extendSchema, parse, print, visit} = require('graphql');

import type {Fragment, Root} from './IR';
import type {Schema} from './Schema';
import type {
  DefinitionNode,
  DocumentNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  GraphQLSchema,
  OperationDefinitionNode,
  TypeSystemDefinitionNode,
  TypeSystemExtensionNode,
} from 'graphql';

type ASTDefinitionNode = FragmentDefinitionNode | OperationDefinitionNode;
type TransformFn = (
  schema: Schema,
  definitions: $ReadOnlyArray<ASTDefinitionNode>,
) => $ReadOnlyArray<Root | Fragment>;

function convertASTDocuments(
  schema: Schema,
  documents: $ReadOnlyArray<DocumentNode>,
  transform: TransformFn,
): $ReadOnlyArray<Fragment | Root> {
  return Profiler.run('ASTConvert.convertASTDocuments', () => {
    const definitions = definitionsFromDocuments(documents);

    const astDefinitions: Array<ASTDefinitionNode> = [];
    documents.forEach(doc => {
      doc.definitions.forEach(definition => {
        if (isExecutableDefinitionAST(definition)) {
          astDefinitions.push(definition);
        }
      });
    });

    return convertASTDefinitions(schema, definitions, transform);
  });
}

function convertASTDocumentsWithBase(
  schema: Schema,
  baseDocuments: $ReadOnlyArray<DocumentNode>,
  documents: $ReadOnlyArray<DocumentNode>,
  transform: TransformFn,
): $ReadOnlyArray<Fragment | Root> {
  return Profiler.run('ASTConvert.convertASTDocumentsWithBase', () => {
    const baseDefinitions = definitionsFromDocuments(baseDocuments);
    const definitions = definitionsFromDocuments(documents);

    const requiredDefinitions = new Map();
    const baseMap: Map<string, ASTDefinitionNode> = new Map();
    baseDefinitions.forEach(definition => {
      if (isExecutableDefinitionAST(definition)) {
        const definitionName = definition.name && definition.name.value;
        // If there's no name, no reason to put in the map
        if (definitionName != null) {
          if (baseMap.has(definitionName)) {
            throw new Error(`Duplicate definition of '${definitionName}'.`);
          }
          baseMap.set(definitionName, definition);
        }
      }
    });

    const definitionsToVisit: Array<ASTDefinitionNode> = [];
    definitions.forEach(definition => {
      if (isExecutableDefinitionAST(definition)) {
        definitionsToVisit.push(definition);
      }
    });
    while (definitionsToVisit.length > 0) {
      const definition = definitionsToVisit.pop();
      const name = definition.name && definition.name.value;
      if (name == null) {
        continue;
      }
      if (requiredDefinitions.has(name)) {
        if (requiredDefinitions.get(name) !== definition) {
          throw new Error(`Duplicate definition of '${name}'.`);
        }
        continue;
      }
      requiredDefinitions.set(name, definition);
      visit(definition, {
        FragmentSpread(spread: FragmentSpreadNode) {
          const baseDefinition = baseMap.get(spread.name.value);
          if (baseDefinition) {
            // We only need to add those definitions not already included
            // in definitions
            definitionsToVisit.push(baseDefinition);
          }
        },
      });
    }

    const definitionsToConvert = [];
    requiredDefinitions.forEach(definition =>
      definitionsToConvert.push(definition),
    );
    return convertASTDefinitions(schema, definitionsToConvert, transform);
  });
}

function convertASTDefinitions(
  schema: Schema,
  definitions: $ReadOnlyArray<DefinitionNode>,
  transform: TransformFn,
): $ReadOnlyArray<Fragment | Root> {
  const operationDefinitions: Array<ASTDefinitionNode> = [];
  definitions.forEach(definition => {
    if (isExecutableDefinitionAST(definition)) {
      operationDefinitions.push(definition);
    }
  });
  return transform(schema, operationDefinitions);
}

function definitionsFromDocuments(
  documents: $ReadOnlyArray<DocumentNode>,
): $ReadOnlyArray<DefinitionNode> {
  const definitions = [];
  documents.forEach(doc => {
    doc.definitions.forEach(definition => definitions.push(definition));
  });
  return definitions;
}

/**
 * Extends a GraphQLSchema with a list of schema extensions in string form.
 */
function transformASTSchema(
  schema: GraphQLSchema,
  schemaExtensions: $ReadOnlyArray<string>,
): GraphQLSchema {
  return Profiler.run('ASTConvert.transformASTSchema', () => {
    if (schemaExtensions.length === 0) {
      return schema;
    }
    const extension = schemaExtensions.join('\n');
    return cachedExtend(schema, extension, () =>
      extendSchema(schema, parse(extension)),
    );
  });
}

/**
 * Extends a GraphQLSchema with a list of schema extensions in AST form.
 */
function extendASTSchema(
  baseSchema: GraphQLSchema,
  documents: $ReadOnlyArray<DocumentNode>,
): GraphQLSchema {
  return Profiler.run('ASTConvert.extendASTSchema', () => {
    const schemaExtensions: Array<
      TypeSystemDefinitionNode | TypeSystemExtensionNode,
    > = [];
    documents.forEach(doc => {
      doc.definitions.forEach(definition => {
        if (isSchemaDefinitionAST(definition)) {
          schemaExtensions.push(definition);
        }
      });
    });
    if (schemaExtensions.length === 0) {
      return baseSchema;
    }
    const key = schemaExtensions.map(print).join('\n');
    return cachedExtend(baseSchema, key, () =>
      extendSchema(
        baseSchema,
        {
          kind: 'Document',
          definitions: schemaExtensions,
        },
        // TODO T24511737 figure out if this is dangerous
        {assumeValid: true},
      ),
    );
  });
}

const extendedSchemas: Map<
  GraphQLSchema,
  {[key: string]: GraphQLSchema, ...},
> = new Map();

function cachedExtend(
  schema: GraphQLSchema,
  key: string,
  compute: () => GraphQLSchema,
): GraphQLSchema {
  let cache = extendedSchemas.get(schema);
  if (!cache) {
    cache = {};
    extendedSchemas.set(schema, cache);
  }
  let extendedSchema = cache[key];
  if (!extendedSchema) {
    extendedSchema = compute();
    cache[key] = extendedSchema;
  }
  return extendedSchema;
}

module.exports = {
  convertASTDocuments,
  convertASTDocumentsWithBase,
  extendASTSchema,
  transformASTSchema,
};
