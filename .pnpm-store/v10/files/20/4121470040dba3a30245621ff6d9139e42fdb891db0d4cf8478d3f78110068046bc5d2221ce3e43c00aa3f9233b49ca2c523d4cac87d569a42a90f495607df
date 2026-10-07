/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var Profiler = require('./GraphQLCompilerProfiler');

var _require = require('./SchemaUtils'),
    isExecutableDefinitionAST = _require.isExecutableDefinitionAST,
    isSchemaDefinitionAST = _require.isSchemaDefinitionAST;

var _require2 = require('graphql'),
    extendSchema = _require2.extendSchema,
    parse = _require2.parse,
    print = _require2.print,
    visit = _require2.visit;

function convertASTDocuments(schema, documents, transform) {
  return Profiler.run('ASTConvert.convertASTDocuments', function () {
    var definitions = definitionsFromDocuments(documents);
    var astDefinitions = [];
    documents.forEach(function (doc) {
      doc.definitions.forEach(function (definition) {
        if (isExecutableDefinitionAST(definition)) {
          astDefinitions.push(definition);
        }
      });
    });
    return convertASTDefinitions(schema, definitions, transform);
  });
}

function convertASTDocumentsWithBase(schema, baseDocuments, documents, transform) {
  return Profiler.run('ASTConvert.convertASTDocumentsWithBase', function () {
    var baseDefinitions = definitionsFromDocuments(baseDocuments);
    var definitions = definitionsFromDocuments(documents);
    var requiredDefinitions = new Map();
    var baseMap = new Map();
    baseDefinitions.forEach(function (definition) {
      if (isExecutableDefinitionAST(definition)) {
        var definitionName = definition.name && definition.name.value; // If there's no name, no reason to put in the map

        if (definitionName != null) {
          if (baseMap.has(definitionName)) {
            throw new Error("Duplicate definition of '".concat(definitionName, "'."));
          }

          baseMap.set(definitionName, definition);
        }
      }
    });
    var definitionsToVisit = [];
    definitions.forEach(function (definition) {
      if (isExecutableDefinitionAST(definition)) {
        definitionsToVisit.push(definition);
      }
    });

    while (definitionsToVisit.length > 0) {
      var definition = definitionsToVisit.pop();
      var name = definition.name && definition.name.value;

      if (name == null) {
        continue;
      }

      if (requiredDefinitions.has(name)) {
        if (requiredDefinitions.get(name) !== definition) {
          throw new Error("Duplicate definition of '".concat(name, "'."));
        }

        continue;
      }

      requiredDefinitions.set(name, definition);
      visit(definition, {
        FragmentSpread: function FragmentSpread(spread) {
          var baseDefinition = baseMap.get(spread.name.value);

          if (baseDefinition) {
            // We only need to add those definitions not already included
            // in definitions
            definitionsToVisit.push(baseDefinition);
          }
        }
      });
    }

    var definitionsToConvert = [];
    requiredDefinitions.forEach(function (definition) {
      return definitionsToConvert.push(definition);
    });
    return convertASTDefinitions(schema, definitionsToConvert, transform);
  });
}

function convertASTDefinitions(schema, definitions, transform) {
  var operationDefinitions = [];
  definitions.forEach(function (definition) {
    if (isExecutableDefinitionAST(definition)) {
      operationDefinitions.push(definition);
    }
  });
  return transform(schema, operationDefinitions);
}

function definitionsFromDocuments(documents) {
  var definitions = [];
  documents.forEach(function (doc) {
    doc.definitions.forEach(function (definition) {
      return definitions.push(definition);
    });
  });
  return definitions;
}
/**
 * Extends a GraphQLSchema with a list of schema extensions in string form.
 */


function transformASTSchema(schema, schemaExtensions) {
  return Profiler.run('ASTConvert.transformASTSchema', function () {
    if (schemaExtensions.length === 0) {
      return schema;
    }

    var extension = schemaExtensions.join('\n');
    return cachedExtend(schema, extension, function () {
      return extendSchema(schema, parse(extension));
    });
  });
}
/**
 * Extends a GraphQLSchema with a list of schema extensions in AST form.
 */


function extendASTSchema(baseSchema, documents) {
  return Profiler.run('ASTConvert.extendASTSchema', function () {
    var schemaExtensions = [];
    documents.forEach(function (doc) {
      doc.definitions.forEach(function (definition) {
        if (isSchemaDefinitionAST(definition)) {
          schemaExtensions.push(definition);
        }
      });
    });

    if (schemaExtensions.length === 0) {
      return baseSchema;
    }

    var key = schemaExtensions.map(print).join('\n');
    return cachedExtend(baseSchema, key, function () {
      return extendSchema(baseSchema, {
        kind: 'Document',
        definitions: schemaExtensions
      }, // TODO T24511737 figure out if this is dangerous
      {
        assumeValid: true
      });
    });
  });
}

var extendedSchemas = new Map();

function cachedExtend(schema, key, compute) {
  var cache = extendedSchemas.get(schema);

  if (!cache) {
    cache = {};
    extendedSchemas.set(schema, cache);
  }

  var extendedSchema = cache[key];

  if (!extendedSchema) {
    extendedSchema = compute();
    cache[key] = extendedSchema;
  }

  return extendedSchema;
}

module.exports = {
  convertASTDocuments: convertASTDocuments,
  convertASTDocumentsWithBase: convertASTDocumentsWithBase,
  extendASTSchema: extendASTSchema,
  transformASTSchema: transformASTSchema
};