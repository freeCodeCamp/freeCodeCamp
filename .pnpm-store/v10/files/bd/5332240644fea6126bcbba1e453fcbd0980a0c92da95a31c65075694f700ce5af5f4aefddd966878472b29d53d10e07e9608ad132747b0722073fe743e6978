"use strict";

var _typeBuilders = require("./type-builders");
const {
  parse,
  Kind: GraphQLASTNodeKind
} = require(`graphql`);
const {
  inferExtensionName,
  dontInferExtensionName
} = require(`../extensions`);
const report = require(`gatsby-cli/lib/reporter`);
const isASTDocument = typeOrTypeDef => typeof typeOrTypeDef === `object` && typeOrTypeDef.kind && GraphQLASTNodeKind.DOCUMENT === typeOrTypeDef.kind;

/**
 * Parses type definition represented as an SDL string into an AST Document.
 * Type definitions of other formats (other than SDL) are returned as is
 */
const parseTypeDef = typeOrTypeDef => {
  if (typeof typeOrTypeDef === `string`) {
    try {
      return parse(typeOrTypeDef);
    } catch (error) {
      reportParsingError(error);
    }
  }
  return typeOrTypeDef;
};
const reportParsingError = error => {
  const {
    message,
    source,
    locations
  } = error;
  if (source && locations && locations.length) {
    const {
      codeFrameColumns
    } = require(`@babel/code-frame`);
    const frame = codeFrameColumns(source.body, {
      start: locations[0]
    }, {
      linesAbove: 5,
      linesBelow: 5
    });
    report.panic(`Encountered an error parsing the provided GraphQL type definitions:\n` + message + `\n\n` + frame + `\n`);
  } else {
    throw error;
  }
};

/**
 * Given a type definition, collects type names that should skip the inference process
 */
const typesWithoutInference = (typeNames = [], typeOrTypeDef) => {
  if (typeof typeOrTypeDef === `string`) {
    typeOrTypeDef = parseTypeDef(typeOrTypeDef);
  }
  if (isASTDocument(typeOrTypeDef)) {
    typeOrTypeDef.definitions.forEach(def => {
      if (!def.directives) return;
      def.directives.forEach(directive => {
        if (directive.name.value === dontInferExtensionName && def.name.value) {
          typeNames.push(def.name.value);
        }
      });
    });
    return typeNames;
  }
  if ((0, _typeBuilders.isGatsbyType)(typeOrTypeDef) && typeOrTypeDef.config) {
    const {
      extensions = {},
      name
    } = typeOrTypeDef.config;
    if (name && (extensions[dontInferExtensionName] || extensions[inferExtensionName] === false)) {
      typeNames.push(name);
    }
  }
  return typeNames;
};
module.exports = {
  parseTypeDef,
  reportParsingError,
  typesWithoutInference,
  isASTDocument
};
//# sourceMappingURL=type-defs.js.map