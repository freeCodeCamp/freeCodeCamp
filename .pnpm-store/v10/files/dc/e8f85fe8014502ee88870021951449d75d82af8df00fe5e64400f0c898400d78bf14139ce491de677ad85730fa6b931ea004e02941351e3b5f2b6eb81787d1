"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.StringInterpolationNotAllowedError = exports.GraphQLSyntaxError = exports.ExportIsNotAsyncError = exports.EmptyGraphQLTagError = void 0;
exports.default = _default;
exports.followVariableDeclarations = followVariableDeclarations;
exports.getGraphQLTag = getGraphQLTag;
exports.isWithinConfigExport = isWithinConfigExport;
var _graphql = _interopRequireDefault(require("gatsby/graphql"));
var _path = _interopRequireDefault(require("path"));
var _path2 = require("gatsby-core-utils/path");
var _murmurhash = require("gatsby-core-utils/murmurhash");
var _types = require("@babel/types");
/* eslint-disable no-unused-expressions */
/*  eslint-disable new-cap */

class StringInterpolationNotAllowedError extends Error {
  constructor(interpolationStart, interpolationEnd) {
    super(`BabelPluginRemoveGraphQLQueries: String interpolations are not allowed in graphql ` + `fragments. Included fragments should be referenced ` + `as \`...MyModule_foo\`.`);
    this.interpolationStart = JSON.parse(JSON.stringify(interpolationStart));
    this.interpolationEnd = JSON.parse(JSON.stringify(interpolationEnd));
    Error.captureStackTrace(this, StringInterpolationNotAllowedError);
  }
}
exports.StringInterpolationNotAllowedError = StringInterpolationNotAllowedError;
class EmptyGraphQLTagError extends Error {
  constructor(locationOfGraphqlString) {
    super(`BabelPluginRemoveGraphQLQueries: Unexpected empty graphql tag.`);
    this.templateLoc = locationOfGraphqlString;
    Error.captureStackTrace(this, EmptyGraphQLTagError);
  }
}
exports.EmptyGraphQLTagError = EmptyGraphQLTagError;
class GraphQLSyntaxError extends Error {
  constructor(documentText, originalError, locationOfGraphqlString) {
    super(`BabelPluginRemoveGraphQLQueries: GraphQL syntax error in query:\n\n${documentText}\n\nmessage:\n\n${originalError}`);
    this.documentText = documentText;
    this.originalError = originalError;
    this.templateLoc = locationOfGraphqlString;
    Error.captureStackTrace(this, GraphQLSyntaxError);
  }
}
exports.GraphQLSyntaxError = GraphQLSyntaxError;
class ExportIsNotAsyncError extends Error {
  constructor(exportName, exportStart) {
    super(`BabelPluginRemoveGraphQLQueries: the "${exportName}" export must be async when using it with graphql`);
    this.exportName = exportName;
    this.exportStart = JSON.parse(JSON.stringify(exportStart));
    Error.captureStackTrace(this, ExportIsNotAsyncError);
  }
}
exports.ExportIsNotAsyncError = ExportIsNotAsyncError;
const isGlobalIdentifier = (tag, tagName = `graphql`) => tag.isIdentifier({
  name: tagName
}) && tag.scope.hasGlobal(tagName);
function followVariableDeclarations(binding) {
  var _binding$path, _node$init;
  const node = binding === null || binding === void 0 ? void 0 : (_binding$path = binding.path) === null || _binding$path === void 0 ? void 0 : _binding$path.node;
  if ((node === null || node === void 0 ? void 0 : node.type) === `VariableDeclarator` && (node === null || node === void 0 ? void 0 : node.id.type) === `Identifier` && (node === null || node === void 0 ? void 0 : (_node$init = node.init) === null || _node$init === void 0 ? void 0 : _node$init.type) === `Identifier`) {
    return followVariableDeclarations(binding.path.scope.getBinding(node.init.name));
  }
  return binding;
}
function getTagImport(tag) {
  const name = tag.node.name;
  const binding = tag.scope.getBinding(name);
  if (!binding) return null;
  const path = binding.path;
  const parent = path.parentPath;
  if (parent && binding.kind === `module` && parent.isImportDeclaration() && parent.node.source.value === `gatsby`) return path;
  if (path.isVariableDeclarator() && path.get(`init`).isCallExpression() && path.get(`init.callee`).isIdentifier({
    name: `require`
  }) && path.get(`init`).node.arguments[0].value === `gatsby`) {
    const id = path.get(`id`);
    if (id.isObjectPattern()) {
      return id.get(`properties`).find(path => path.get(`value`).node.name === name);
    }
    return id;
  }
  return null;
}
function isGraphqlTag(tag, tagName = `graphql`) {
  const isExpression = tag.isMemberExpression();
  const identifier = isExpression ? tag.get(`object`) : tag;
  const importPath = getTagImport(identifier);
  if (!importPath) return isGlobalIdentifier(tag, tagName);
  if (isExpression && (importPath.isImportNamespaceSpecifier() || importPath.isIdentifier())) {
    return tag.get(`property`).node.name === tagName;
  }
  if (importPath.isImportSpecifier()) {
    if (importPath.node.imported.type === `Identifier`) {
      return importPath.node.imported.name === tagName;
    }
    return false;
  }
  if (importPath.isObjectProperty()) return importPath.get(`key`).node.name === tagName;
  return false;
}
function removeImport(tag) {
  const isExpression = tag.isMemberExpression();
  const identifier = isExpression ? tag.get(`object`) : tag;
  const importPath = getTagImport(identifier);
  const removeVariableDeclaration = statement => {
    const declaration = statement.findParent(p => p.isVariableDeclaration());
    if (declaration) {
      declaration.remove();
    }
  };
  if (!importPath) return;
  const parent = importPath.parentPath;
  if (importPath.isImportSpecifier()) {
    if (parent && parent.node.specifiers.length === 1) {
      parent.remove();
    } else {
      importPath.remove();
    }
  }
  if (importPath.isObjectProperty()) {
    if (parent.node.properties.length === 1) {
      removeVariableDeclaration(importPath);
    } else importPath.remove();
  }
  if (importPath.isIdentifier()) {
    removeVariableDeclaration(importPath);
  }
}
function getGraphQLTag(path, tagName = `graphql`) {
  const tag = path.get(`tag`);
  const isGlobal = isGlobalIdentifier(tag, tagName);
  if (!isGlobal && !isGraphqlTag(tag, tagName)) return {};
  const quasis = path.node.quasi.quasis;
  if (quasis.length !== 1) {
    var _quasis$0$loc, _quasis$1$loc;
    throw new StringInterpolationNotAllowedError((_quasis$0$loc = quasis[0].loc) === null || _quasis$0$loc === void 0 ? void 0 : _quasis$0$loc.end, (_quasis$1$loc = quasis[1].loc) === null || _quasis$1$loc === void 0 ? void 0 : _quasis$1$loc.start);
  }
  const text = quasis[0].value.raw;
  const normalizedText = _graphql.default.stripIgnoredCharacters(text);
  const hash = (0, _murmurhash.murmurhash)(normalizedText, 0);
  const location = quasis[0].loc;
  try {
    const ast = _graphql.default.parse(text);
    if (ast.definitions.length === 0) {
      throw new EmptyGraphQLTagError(location);
    }
    return {
      ast,
      text: normalizedText,
      hash,
      isGlobal
    };
  } catch (err) {
    throw new GraphQLSyntaxError(text, err, location);
  }
}
function isUseStaticQuery(path) {
  const callee = path.node.callee;
  if (callee.type === `MemberExpression`) {
    const property = callee.property;
    if (property.name === `useStaticQuery`) {
      return path.get(`callee`).get(`object`).referencesImport(`gatsby`, ``);
    }
    return false;
  }
  if (callee.name === `useStaticQuery`) {
    return path.get(`callee`).referencesImport(`gatsby`, ``);
  }
  return false;
}
function _default({
  types: t
}) {
  return {
    visitor: {
      Program(path, state) {
        const nestedJSXVistor = {
          JSXIdentifier(path2) {
            var _process$env$npm_life;
            if ((process.env.NODE_ENV === `test` || // When Storybook is running, we need to process the queries
            (_process$env$npm_life = process.env.npm_lifecycle_script) !== null && _process$env$npm_life !== void 0 && _process$env$npm_life.includes(`storybook`) || state.opts.stage === `develop-html`) && path2.isJSXIdentifier({
              name: `StaticQuery`
            }) && path2.referencesImport(`gatsby`, ``) && path2.parent.type !== `JSXClosingElement`) {
              const identifier = t.identifier(`staticQueryData`);
              const filename = state.file.opts.filename;
              const staticQueryDir = state.opts.staticQueryDir || `page-data/sq/d`;
              const shortResultPath = `public/${staticQueryDir}/${this.queryHash}.json`;
              const resultPath = _path.default.join(process.cwd(), shortResultPath);
              // Add query
              const parent = path2.parent;
              parent.attributes.push(t.jSXAttribute(t.jSXIdentifier(`data`), t.jSXExpressionContainer(identifier)));
              // Add import
              const importDefaultSpecifier = t.importDefaultSpecifier(identifier);
              const importDeclaration = t.importDeclaration([importDefaultSpecifier], t.stringLiteral((0, _path2.slash)(filename ? _path.default.relative(_path.default.dirname(filename), resultPath) : shortResultPath)));
              path.node.body.unshift(importDeclaration);
            }
          }
        };
        const nestedHookVisitor = {
          CallExpression(path2) {
            if ((process.env.NODE_ENV === `test` || state.opts.stage === `develop-html`) && isUseStaticQuery(path2)) {
              const identifier = t.identifier(`staticQueryData`);
              const filename = state.file.opts.filename;
              const staticQueryDir = state.opts.staticQueryDir || `static/d`;
              const shortResultPath = `public/${staticQueryDir}/${this.queryHash}.json`;
              const resultPath = _path.default.join(process.cwd(), shortResultPath);

              // only remove the import if its like:
              // import { useStaticQuery } from 'gatsby'
              // but not if its like:
              // import * as Gatsby from 'gatsby'
              // because we know we can remove the useStaticQuery import,
              // but we don't know if other 'gatsby' exports are used, so we
              // cannot remove all 'gatsby' imports.
              if (path2.node.callee.type !== `MemberExpression`) {
                // Remove imports to useStaticQuery
                const importPath = path2.scope.getBinding(`useStaticQuery`).path;
                const parent = importPath.parentPath;
                if (importPath.isImportSpecifier()) if (parent && parent.node.specifiers.length === 1) {
                  parent.remove();
                } else {
                  importPath.remove();
                }
              }

              // Add query
              path2.replaceWith(t.memberExpression(identifier, t.identifier(`data`)));

              // Add import
              const importDefaultSpecifier = t.importDefaultSpecifier(identifier);
              const importDeclaration = t.importDeclaration([importDefaultSpecifier], t.stringLiteral((0, _path2.slash)(filename ? _path.default.relative(_path.default.dirname(filename), resultPath) : shortResultPath)));
              path.node.body.unshift(importDeclaration);
            }
          }
        };
        const tagsToRemoveImportsFrom = new Set();
        const setImportForStaticQuery = templatePath => {
          const {
            ast,
            text,
            hash,
            isGlobal
          } = getGraphQLTag(templatePath);
          if (!ast) return null;
          const queryHash = hash.toString();
          const query = text;
          const tag = templatePath.get(`tag`);
          if (!isGlobal) {
            // Enqueue import removal. If we would remove it here, subsequent named exports
            // wouldn't be handled properly
            tagsToRemoveImportsFrom.add(tag);
          }

          // Replace the query with the hash of the query.
          templatePath.replaceWith(t.StringLiteral(queryHash));

          // traverse upwards until we find top-level JSXOpeningElement or Program
          // this handles exported queries and variable queries
          let parent = templatePath;
          while (parent && ![`Program`, `JSXOpeningElement`].includes(parent.node.type)) {
            parent = parent.parentPath;
          }

          // modify StaticQuery elements and import data only if query is inside StaticQuery
          if (parent) {
            parent.traverse(nestedJSXVistor, {
              queryHash,
              query
            });

            // modify useStaticQuery elements and import data only if query is inside useStaticQuery
            parent.traverse(nestedHookVisitor, {
              queryHash,
              query,
              templatePath
            });
          }
          return null;
        };

        // Traverse for <StaticQuery/> instances
        path.traverse({
          JSXElement(jsxElementPath) {
            const jsxIdentifier = jsxElementPath.node.openingElement.name;
            if (jsxIdentifier.name !== `StaticQuery`) {
              return;
            }
            jsxElementPath.traverse({
              JSXAttribute(jsxPath) {
                if (jsxPath.node.name.name !== `query`) {
                  return;
                }
                jsxPath.traverse({
                  TaggedTemplateExpression(templatePath) {
                    setImportForStaticQuery(templatePath);
                  },
                  Identifier(identifierPath) {
                    if (identifierPath.node.name !== `graphql`) {
                      const varName = identifierPath.node.name;
                      path.traverse({
                        VariableDeclarator(varPath) {
                          var _varPath$node$init;
                          if (varPath.node.id.name === varName && ((_varPath$node$init = varPath.node.init) === null || _varPath$node$init === void 0 ? void 0 : _varPath$node$init.type) === `TaggedTemplateExpression`) {
                            varPath.traverse({
                              TaggedTemplateExpression(templatePath) {
                                setImportForStaticQuery(templatePath);
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });

        // Traverse once again for useStaticQuery instances
        path.traverse({
          CallExpression(hookPath) {
            if (!isUseStaticQuery(hookPath)) return;
            function TaggedTemplateExpression(templatePath) {
              setImportForStaticQuery(templatePath);
            }

            // See if the query is a variable that's being passed in
            // and if it is, go find it.
            if (hookPath.node.arguments.length === 1 && hookPath.node.arguments[0].type === `Identifier`) {
              const [{
                name: varName
              }] = hookPath.node.arguments;
              const binding = hookPath.scope.getBinding(varName);
              if (binding) {
                var _followVariableDeclar, _followVariableDeclar2;
                (_followVariableDeclar = followVariableDeclarations(binding)) === null || _followVariableDeclar === void 0 ? void 0 : (_followVariableDeclar2 = _followVariableDeclar.path) === null || _followVariableDeclar2 === void 0 ? void 0 : _followVariableDeclar2.traverse({
                  TaggedTemplateExpression
                });
              }
            }
            hookPath.traverse({
              // Assume the query is inline in the component and extract that.
              TaggedTemplateExpression
            });
          }
        });

        // Run it again to remove non-staticquery versions
        path.traverse({
          TaggedTemplateExpression(path2) {
            var _path2$parentPath, _path2$parentPath$par, _path2$parentPath2;
            const {
              ast,
              hash,
              isGlobal
            } = getGraphQLTag(path2);
            if (!ast) return null;
            const queryHash = hash.toString();

            // In order to properly support FastRefresh, we need to remove the page query export
            // from the built page. With FastRefresh, it looks up the parents of the imports from modules
            // and since page queries are never used, FastRefresh doesn't know if it's safe to apply the
            // update or not.
            // By removing the page query export, FastRefresh works properly with page components
            const potentialExportPath = (_path2$parentPath = path2.parentPath) === null || _path2$parentPath === void 0 ? void 0 : (_path2$parentPath$par = _path2$parentPath.parentPath) === null || _path2$parentPath$par === void 0 ? void 0 : _path2$parentPath$par.parentPath;
            if (path2 !== null && path2 !== void 0 && (_path2$parentPath2 = path2.parentPath) !== null && _path2$parentPath2 !== void 0 && _path2$parentPath2.parentPath && potentialExportPath !== null && potentialExportPath !== void 0 && potentialExportPath.isExportNamedDeclaration()) {
              potentialExportPath.replaceWith(path2.parentPath.parentPath);
            }
            const tag = path2.get(`tag`);
            if (!isGlobal) {
              // Enqueue import removal. If we would remove it here, subsequent named exports
              // wouldn't be handled properly
              tagsToRemoveImportsFrom.add(tag);
            }

            // When graphql tag is found inside config function, we replace it with global call, e.g.:
            //   export async function config() {
            //     const { data } = graphql`{ __typename }`
            //   }
            // is replaced with:
            //   export async function config() {
            //     const { data } = await global.__gatsbyGraphql(`{ __typename }`)
            //   }
            // Note: isWithinConfigExport will throw if "config" export is not async
            if (isWithinConfigExport(path2)) {
              const globalCall = t.awaitExpression(t.callExpression(t.memberExpression(t.identifier(`global`), t.identifier(`__gatsbyGraphql`)), [path2.node.quasi]));
              path2.replaceWith(globalCall);
              return null;
            }
            path2.replaceWith(t.StringLiteral(queryHash));
            return null;
          }
        });
        tagsToRemoveImportsFrom.forEach(removeImport);
      }
    }
  };
}
function isWithinConfigExport(path) {
  var _parentExport$node, _declaration$id, _declaration$declarat, _declaration$declarat2, _declaration$declarat3;
  const parentExport = path.findParent(parent => parent.isExportNamedDeclaration());
  const declaration = parentExport === null || parentExport === void 0 ? void 0 : (_parentExport$node = parentExport.node) === null || _parentExport$node === void 0 ? void 0 : _parentExport$node.declaration;
  if ((0, _types.isFunctionDeclaration)(declaration) && ((_declaration$id = declaration.id) === null || _declaration$id === void 0 ? void 0 : _declaration$id.name) === `config`) {
    if (!declaration.async) {
      var _declaration$loc;
      throw new ExportIsNotAsyncError(`config`, (_declaration$loc = declaration.loc) === null || _declaration$loc === void 0 ? void 0 : _declaration$loc.start);
    }
    return true;
  }
  if ((0, _types.isVariableDeclaration)(declaration) && (0, _types.isIdentifier)((_declaration$declarat = declaration.declarations[0]) === null || _declaration$declarat === void 0 ? void 0 : _declaration$declarat.id) && ((_declaration$declarat2 = declaration.declarations[0]) === null || _declaration$declarat2 === void 0 ? void 0 : (_declaration$declarat3 = _declaration$declarat2.id) === null || _declaration$declarat3 === void 0 ? void 0 : _declaration$declarat3.name) === `config`) {
    var _declaration$declarat4;
    const init = (_declaration$declarat4 = declaration.declarations[0]) === null || _declaration$declarat4 === void 0 ? void 0 : _declaration$declarat4.init;
    if (!(0, _types.isFunction)(init) || !init.async) {
      var _init$loc;
      throw new ExportIsNotAsyncError(`config`, init === null || init === void 0 ? void 0 : (_init$loc = init.loc) === null || _init$loc === void 0 ? void 0 : _init$loc.start);
    }
    return true;
  }
  return false;
}