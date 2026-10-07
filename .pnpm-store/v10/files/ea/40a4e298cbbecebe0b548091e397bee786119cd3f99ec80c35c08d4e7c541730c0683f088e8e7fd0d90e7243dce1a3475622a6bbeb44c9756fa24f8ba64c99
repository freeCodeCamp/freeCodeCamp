"use strict";

var _redux = require("../../redux");
var _eslintRulesHelpers = require("../eslint-rules-helpers");
const DEFAULT_GRAPHQL_TAG_NAME = `graphql`;
function isApiExport(node, name) {
  var _node$declaration, _node$declaration$id, _node$declaration2;
  // check for
  // export function name() {}
  // export async function name() {}
  if (((_node$declaration = node.declaration) === null || _node$declaration === void 0 ? void 0 : _node$declaration.type) === `FunctionDeclaration` && ((_node$declaration$id = node.declaration.id) === null || _node$declaration$id === void 0 ? void 0 : _node$declaration$id.name) === name) {
    return true;
  }

  // check for
  // export const name = () => {}
  if (((_node$declaration2 = node.declaration) === null || _node$declaration2 === void 0 ? void 0 : _node$declaration2.type) === `VariableDeclaration`) {
    for (const declaration of node.declaration.declarations) {
      if (declaration.type === `VariableDeclarator` && declaration.id.type === `Identifier` && declaration.id.name === name) {
        return true;
      }
    }
  }
  if (name === `Head`) {
    var _node$declaration3, _node$declaration4, _node$declaration4$id, _node$declaration5, _node$declaration5$id;
    // Head can be re-exported, Head can be class components - so the checks above are not sufficient,
    // we need to be more permisive here

    // class component
    if (((_node$declaration3 = node.declaration) === null || _node$declaration3 === void 0 ? void 0 : _node$declaration3.type) === `ClassDeclaration` && ((_node$declaration4 = node.declaration) === null || _node$declaration4 === void 0 ? void 0 : (_node$declaration4$id = _node$declaration4.id) === null || _node$declaration4$id === void 0 ? void 0 : _node$declaration4$id.type) === `Identifier` && ((_node$declaration5 = node.declaration) === null || _node$declaration5 === void 0 ? void 0 : (_node$declaration5$id = _node$declaration5.id) === null || _node$declaration5$id === void 0 ? void 0 : _node$declaration5$id.name) === name) {
      return true;
    }

    // re-exports
    if (node.source && node.specifiers.some(specifier => specifier.exported.name === name)) {
      return true;
    }
  }
  return false;
}
function hasOneValidNamedDeclaration(node, varName) {
  // Checks for:
  // const query = graphql``
  // export { query }
  if (node.type === `ExportNamedDeclaration` && node.declaration === null) {
    // For export { foobar, query } the declaration will be null and specifiers exists
    // For { foobar, query } it'll return true, for { query } it'll return false
    // It will ignore any { default } declarations since these are allowed
    const nonQueryExports = node.specifiers.some(e => varName ? e.exported.name !== varName && e.exported.name !== `default` : e.exported.name !== `default`);
    return !nonQueryExports;
  }
  return false;
}
function isTemplateQuery(node, graphqlTagName, namespaceSpecifierName) {
  var _node$declaration6, _node$declaration7;
  // For export const query = 'foobar' the declaration exists with type 'VariableDeclaration'

  // Checks for:
  // export const query = graphql``
  // This case only has one item in the declarations array
  // For export const hello = 10, world = 'foo'
  // The array will have two items. So use every() to check if only one item exists
  // With TaggedTemplateExpression and "graphql" name

  // In addition the declaration can also be a MemberExpression like
  // Gatsby.graphql`` when the import happened with import * as Gatsby from "gatsby"

  return node.type === `ExportNamedDeclaration` && ((_node$declaration6 = node.declaration) === null || _node$declaration6 === void 0 ? void 0 : _node$declaration6.type) === `VariableDeclaration` && ((_node$declaration7 = node.declaration) === null || _node$declaration7 === void 0 ? void 0 : _node$declaration7.declarations.every(el => {
    var _el$init, _el$init2;
    if ((el === null || el === void 0 ? void 0 : (_el$init = el.init) === null || _el$init === void 0 ? void 0 : _el$init.type) === `TaggedTemplateExpression` && el.init.tag.type === `Identifier`) {
      return el.init.tag.name === graphqlTagName;
    } else if ((el === null || el === void 0 ? void 0 : (_el$init2 = el.init) === null || _el$init2 === void 0 ? void 0 : _el$init2.type) === `TaggedTemplateExpression` && el.init.tag.type === `MemberExpression`) {
      return el.init.tag.object.name === namespaceSpecifierName && el.init.tag.property.name === DEFAULT_GRAPHQL_TAG_NAME;
    }
    return false;
  }));
}
const limitedExports = {
  meta: {
    type: `problem`,
    messages: {
      limitedExportsPageTemplates: `In page templates only a default export of a valid React component and the named exports of a page query, getServerData, Head or config are allowed.
        All other named exports will cause Fast Refresh to not preserve local component state and do a full refresh.

        Please move your other named exports to another file. Also make sure that you only export page queries that use the "graphql" tag from "gatsby".
`
    }
  },
  create: context => {
    if (!(0, _eslintRulesHelpers.isPageTemplate)(_redux.store, context)) {
      return {};
    }
    let queryVariableName = ``;
    let graphqlTagName = ``;
    let namespaceSpecifierName = ``;
    return {
      // const { graphql } = require('gatsby')
      VariableDeclaration: node => {
        // Check if require('gatsby')
        const requiredFromGatsby = node.declarations.find(el => {
          var _el$init3, _el$init3$arguments, _el$init3$arguments$, _el$init4, _el$init4$arguments, _el$init4$arguments$;
          // Handle require(`gatsby`)
          if (((_el$init3 = el.init) === null || _el$init3 === void 0 ? void 0 : (_el$init3$arguments = _el$init3.arguments) === null || _el$init3$arguments === void 0 ? void 0 : (_el$init3$arguments$ = _el$init3$arguments[0]) === null || _el$init3$arguments$ === void 0 ? void 0 : _el$init3$arguments$.type) === `TemplateLiteral`) {
            var _arguments$;
            return ((_arguments$ = el.init.arguments[0]) === null || _arguments$ === void 0 ? void 0 : _arguments$.quasis[0].value.raw) === `gatsby`;
          }
          return ((_el$init4 = el.init) === null || _el$init4 === void 0 ? void 0 : (_el$init4$arguments = _el$init4.arguments) === null || _el$init4$arguments === void 0 ? void 0 : (_el$init4$arguments$ = _el$init4$arguments[0]) === null || _el$init4$arguments$ === void 0 ? void 0 : _el$init4$arguments$.value) === `gatsby`;
        });
        if (requiredFromGatsby) {
          var _id;
          // Search for "graphql" in a const { graphql, Link } = require('gatsby')
          const graphqlTagSpecifier = (_id = requiredFromGatsby.id) === null || _id === void 0 ? void 0 : _id.properties.find(el => el.key.name === DEFAULT_GRAPHQL_TAG_NAME);
          if (graphqlTagSpecifier) {
            graphqlTagName = graphqlTagSpecifier.value.name;
          }
        }
        return undefined;
      },
      // import { graphql } from "gatsby"
      ImportDeclaration: node => {
        // Make sure that the specifier is imported from "gatsby"
        if (node.source.value === `gatsby`) {
          const graphqlTagSpecifier = node.specifiers.find(el => {
            // We only want import { graphql } from "gatsby"
            // Not import graphql from "gatsby"
            if (el.type === `ImportSpecifier`) {
              // Only get the specifier with the original name of "graphql"
              return el.imported.name === DEFAULT_GRAPHQL_TAG_NAME;
            }
            // import * as Gatsby from "gatsby"
            if (el.type === `ImportNamespaceSpecifier`) {
              namespaceSpecifierName = el.local.name;
              return false;
            }
            return false;
          });
          if (graphqlTagSpecifier) {
            // The local.name handles the case for import { graphql as otherName }
            // For normal import { graphql } the imported & local name are the same
            graphqlTagName = graphqlTagSpecifier.local.name;
          }
        }
        return undefined;
      },
      TaggedTemplateExpression: node => {
        var _tag;
        if (node.type === `TaggedTemplateExpression` && ((_tag = node.tag) === null || _tag === void 0 ? void 0 : _tag.name) === graphqlTagName) {
          var _node$parent, _node$parent$id;
          if (queryVariableName) {
            return undefined;
          }
          // @ts-ignore
          queryVariableName = (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : (_node$parent$id = _node$parent.id) === null || _node$parent$id === void 0 ? void 0 : _node$parent$id.name;
        }
        return undefined;
      },
      ExportNamedDeclaration: node => {
        if (hasOneValidNamedDeclaration(node, queryVariableName)) {
          return undefined;
        }
        if (isTemplateQuery(node, graphqlTagName, namespaceSpecifierName)) {
          return undefined;
        }
        if (isApiExport(node, `getServerData`)) {
          return undefined;
        }
        if (isApiExport(node, `config`)) {
          return undefined;
        }
        if (isApiExport(node, `Head`)) {
          return undefined;
        }
        context.report({
          node,
          messageId: `limitedExportsPageTemplates`
        });
        return undefined;
      }
    };
  }
};
module.exports = limitedExports;
//# sourceMappingURL=limited-exports-page-templates.js.map