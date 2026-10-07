/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

/**
 * This transform inlines top-level require(...) aliases with to enable lazy
 * loading of dependencies. It is able to inline both single references and
 * child property references.
 *
 * For instance:
 *     var Foo = require('foo');
 *     f(Foo);
 *
 * Will be transformed into:
 *     f(require('foo'));
 *
 * When the assigment expression has a property access, it will be inlined too,
 * keeping the property. For instance:
 *     var Bar = require('foo').bar;
 *     g(Bar);
 *
 * Will be transformed into:
 *     g(require('foo').bar);
 *
 * Destructuring also works the same way. For instance:
 *     const {Baz} = require('foo');
 *     h(Baz);
 *
 * Is also successfully inlined into:
 *     g(require('foo').Baz);
 */
module.exports = babel => ({
  name: 'inline-requires',
  visitor: {
    Program: {
      exit(path, state) {
        const t = babel.types;
        const ignoredRequires = new Set();
        const inlineableCalls = new Set(['require']);

        if (state.opts != null) {
          if (state.opts.ignoredRequires != null) {
            for (const name of state.opts.ignoredRequires) {
              ignoredRequires.add(name);
            }
          }
          if (state.opts.inlineableCalls != null) {
            for (const name of state.opts.inlineableCalls) {
              inlineableCalls.add(name);
            }
          }
        }

        path.scope.crawl();
        path.traverse(
          {
            CallExpression(path, state) {
              const parseResult =
                parseInlineableAlias(path, state) ||
                parseInlineableMemberAlias(path, state);

              if (parseResult == null) {
                return;
              }

              const {
                declarationPath,
                moduleName,
                requireFnName,
              } = parseResult;
              const init = declarationPath.node.init;
              const name = declarationPath.node.id
                ? declarationPath.node.id.name
                : null;

              const binding = declarationPath.scope.getBinding(name);
              if (binding.constantViolations.length > 0) {
                return;
              }

              deleteLocation(init);
              babel.traverse(init, {
                noScope: true,
                enter: path => deleteLocation(path.node),
              });

              let thrown = false;
              for (const referencePath of binding.referencePaths) {
                excludeMemberAssignment(moduleName, referencePath, state);
                try {
                  referencePath.scope.rename(requireFnName);
                  referencePath.replaceWith(t.cloneDeep(init));
                } catch (error) {
                  thrown = true;
                }
              }

              // If a replacement failed (e.g. replacing a type annotation),
              // avoid removing the initial require just to be safe.
              if (!thrown) {
                declarationPath.remove();
              }
            },
          },
          {
            ignoredRequires,
            inlineableCalls,
            membersAssigned: new Map(),
          },
        );
      },
    },
  },
});

function excludeMemberAssignment(moduleName, referencePath, state) {
  const assignment = referencePath.parentPath.parent;

  const isValid =
    assignment.type === 'AssignmentExpression' &&
    assignment.left.type === 'MemberExpression' &&
    assignment.left.object === referencePath.node;
  if (!isValid) {
    return;
  }

  const memberPropertyName = getMemberPropertyName(assignment.left);
  if (memberPropertyName == null) {
    return;
  }

  let membersAssigned = state.membersAssigned.get(moduleName);
  if (membersAssigned == null) {
    membersAssigned = new Set();
    state.membersAssigned.set(moduleName, membersAssigned);
  }
  membersAssigned.add(memberPropertyName);
}

function isExcludedMemberAssignment(moduleName, memberPropertyName, state) {
  const excludedAliases = state.membersAssigned.get(moduleName);
  return excludedAliases != null && excludedAliases.has(memberPropertyName);
}

function getMemberPropertyName(node) {
  if (node.type !== 'MemberExpression') {
    return null;
  }
  if (node.property.type === 'Identifier') {
    return node.property.name;
  }
  if (node.property.type === 'StringLiteral') {
    return node.property.value;
  }
  return null;
}

function deleteLocation(node) {
  delete node.start;
  delete node.end;
  delete node.loc;
}

function parseInlineableAlias(path, state) {
  const module = getInlineableModule(path, state);
  if (module == null) {
    return null;
  }

  const { moduleName, requireFnName } = module;
  const isValid =
    path.parent.type === 'VariableDeclarator' &&
    path.parent.id.type === 'Identifier' &&
    path.parentPath.parent.type === 'VariableDeclaration' &&
    path.parentPath.parentPath.parent.type === 'Program';

  return !isValid || path.parentPath.node == null
    ? null
    : {
      declarationPath: path.parentPath,
      moduleName,
      requireFnName,
    };
}

function parseInlineableMemberAlias(path, state) {
  const module = getInlineableModule(path, state);
  if (module == null) {
    return null;
  }

  const { moduleName, requireFnName } = module;
  const isValid =
    path.parent.type === 'MemberExpression' &&
    path.parentPath.parent.type === 'VariableDeclarator' &&
    path.parentPath.parent.id.type === 'Identifier' &&
    path.parentPath.parentPath.parent.type === 'VariableDeclaration' &&
    path.parentPath.parentPath.parentPath.parent.type === 'Program';

  const memberPropertyName = getMemberPropertyName(path.parent);

  return !isValid ||
    path.parentPath.parentPath.node == null ||
    isExcludedMemberAssignment(moduleName, memberPropertyName, state)
    ? null
    : {
      declarationPath: path.parentPath.parentPath,
      moduleName,
      requireFnName,
    };
}

function getInlineableModule(path, state) {
  const node = path.node;
  const isInlineable =
    node.type === 'CallExpression' &&
    node.callee.type === 'Identifier' &&
    state.inlineableCalls.has(node.callee.name) &&
    node['arguments'].length >= 1;

  if (!isInlineable) {
    return null;
  }

  // require('foo');
  let moduleName =
    node['arguments'][0].type === 'StringLiteral'
      ? node['arguments'][0].value
      : null;

  // require(require.resolve('foo'));
  if (moduleName == null) {
    moduleName =
      node['arguments'][0].type === 'CallExpression' &&
      node['arguments'][0].callee.type === 'MemberExpression' &&
      node['arguments'][0].callee.object.type === 'Identifier' &&
      state.inlineableCalls.has(node['arguments'][0].callee.object.name) &&
      node['arguments'][0].callee.property.type === 'Identifier' &&
      node['arguments'][0].callee.property.name === 'resolve' &&
      node['arguments'][0]['arguments'].length >= 1 &&
      node['arguments'][0]['arguments'][0].type === 'StringLiteral'
        ? node['arguments'][0]['arguments'][0].value
        : null;
  }

  // Check if require is in any parent scope
  const fnName = node.callee.name;
  const isRequireInScope = path.scope.getBinding(fnName) != null;

  return moduleName == null ||
    state.ignoredRequires.has(moduleName) ||
    isRequireInScope
    ? null
    : { moduleName, requireFnName: fnName };
}
