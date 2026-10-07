/**
 * @fileoverview Enforce propTypes declarations alphabetical sorting
 */

'use strict';

const astUtil = require('../util/ast');
const variableUtil = require('../util/variable');
const propsUtil = require('../util/props');
const docsUrl = require('../util/docsUrl');
const propWrapperUtil = require('../util/propWrapper');
const propTypesSortUtil = require('../util/propTypesSort');
const report = require('../util/report');
const eslintUtil = require('../util/eslint');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  requiredPropsFirst: 'Required prop types must be listed before all other prop types',
  callbackPropsLast: 'Callback prop types must be listed after all other prop types',
  propsNotSorted: 'Prop types declarations should be sorted alphabetically',
};

function getKey(context, node) {
  if (node.type === 'ObjectTypeProperty') {
    return getSourceCode(context).getFirstToken(node).value;
  }
  if (node.key && node.key.value) {
    return node.key.value;
  }
  return getText(context, node.key || node.argument);
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce propTypes declarations alphabetical sorting',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('sort-prop-types'),
    },
    fixable: 'code',

    messages,

    schema: [{
      type: 'object',
      properties: {
        requiredFirst: {
          type: 'boolean',
        },
        callbacksLast: {
          type: 'boolean',
        },
        ignoreCase: {
          type: 'boolean',
        },
        // Whether alphabetical sorting should be enforced
        noSortAlphabetically: {
          type: 'boolean',
        },
        sortShapeProp: {
          type: 'boolean',
        },
        checkTypes: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const requiredFirst = configuration.requiredFirst || false;
    const callbacksLast = configuration.callbacksLast || false;
    const ignoreCase = configuration.ignoreCase || false;
    const noSortAlphabetically = configuration.noSortAlphabetically || false;
    const sortShapeProp = configuration.sortShapeProp || false;
    const checkTypes = configuration.checkTypes || false;

    const typeAnnotations = new Map();

    /**
     * Checks if propTypes declarations are sorted
     * @param {Array} declarations The array of AST nodes being checked.
     * @returns {void}
     */
    function checkSorted(declarations) {
      // Declarations will be `undefined` if the `shape` is not a literal. For
      // example, if it is a propType imported from another file.
      if (!declarations) {
        return;
      }

      function fix(fixer) {
        return propTypesSortUtil.fixPropTypesSort(
          context,
          fixer,
          declarations,
          ignoreCase,
          requiredFirst,
          callbacksLast,
          noSortAlphabetically,
          sortShapeProp,
          checkTypes
        );
      }

      const callbackPropsLastSeen = new WeakSet();
      const requiredPropsFirstSeen = new WeakSet();
      const propsNotSortedSeen = new WeakSet();

      declarations.reduce((prev, curr, idx, decls) => {
        if (curr.type === 'ExperimentalSpreadProperty' || curr.type === 'SpreadElement') {
          return decls[idx + 1];
        }

        let prevPropName = getKey(context, prev);
        let currentPropName = getKey(context, curr);
        const previousIsRequired = propTypesSortUtil.isRequiredProp(prev);
        const currentIsRequired = propTypesSortUtil.isRequiredProp(curr);
        const previousIsCallback = propTypesSortUtil.isCallbackPropName(prevPropName);
        const currentIsCallback = propTypesSortUtil.isCallbackPropName(currentPropName);

        if (ignoreCase) {
          prevPropName = String(prevPropName).toLowerCase();
          currentPropName = String(currentPropName).toLowerCase();
        }

        if (requiredFirst) {
          if (previousIsRequired && !currentIsRequired) {
            // Transition between required and non-required. Don't compare for alphabetical.
            return curr;
          }
          if (!previousIsRequired && currentIsRequired) {
            // Encountered a non-required prop after a required prop
            if (!requiredPropsFirstSeen.has(curr)) {
              requiredPropsFirstSeen.add(curr);
              report(context, messages.requiredPropsFirst, 'requiredPropsFirst', {
                node: curr,
                fix,
              });
            }
            return curr;
          }
        }

        if (callbacksLast) {
          if (!previousIsCallback && currentIsCallback) {
            // Entering the callback prop section
            return curr;
          }
          if (previousIsCallback && !currentIsCallback) {
            // Encountered a non-callback prop after a callback prop
            if (!callbackPropsLastSeen.has(prev)) {
              callbackPropsLastSeen.add(prev);
              report(context, messages.callbackPropsLast, 'callbackPropsLast', {
                node: prev,
                fix,
              });
            }
            return prev;
          }
        }

        if (!noSortAlphabetically && currentPropName < prevPropName) {
          if (!propsNotSortedSeen.has(curr)) {
            propsNotSortedSeen.add(curr);
            report(context, messages.propsNotSorted, 'propsNotSorted', {
              node: curr,
              fix,
            });
          }
          return prev;
        }

        return curr;
      }, declarations[0]);
    }

    function checkNode(node) {
      if (!node) {
        return;
      }

      if (node.type === 'ObjectExpression') {
        checkSorted(node.properties);
      } else if (node.type === 'Identifier') {
        const propTypesObject = variableUtil.findVariableByName(context, node, node.name);
        if (propTypesObject && propTypesObject.properties) {
          checkSorted(propTypesObject.properties);
        }
      } else if (astUtil.isCallExpression(node)) {
        const innerNode = node.arguments && node.arguments[0];
        if (propWrapperUtil.isPropWrapperFunction(context, node.callee.name) && innerNode) {
          checkNode(innerNode);
        }
      }
    }

    function handleFunctionComponent(node) {
      const firstArg = node.params
        && node.params.length > 0
        && node.params[0].typeAnnotation
        && node.params[0].typeAnnotation.typeAnnotation;
      if (firstArg && firstArg.type === 'TSTypeReference') {
        const propType = typeAnnotations.get(firstArg.typeName.name)
          && typeAnnotations.get(firstArg.typeName.name)[0];
        if (propType && propType.members) {
          checkSorted(propType.members);
        }
      } else if (firstArg && firstArg.type === 'TSTypeLiteral') {
        if (firstArg.members) {
          checkSorted(firstArg.members);
        }
      } else if (firstArg && firstArg.type === 'GenericTypeAnnotation') {
        const propType = typeAnnotations.get(firstArg.id.name)
          && typeAnnotations.get(firstArg.id.name)[0];
        if (propType && propType.properties) {
          checkSorted(propType.properties);
        }
      } else if (firstArg && firstArg.type === 'ObjectTypeAnnotation') {
        if (firstArg.properties) {
          checkSorted(firstArg.properties);
        }
      }
    }

    return Object.assign({
      CallExpression(node) {
        if (!sortShapeProp || !propTypesSortUtil.isShapeProp(node) || !(node.arguments && node.arguments[0])) {
          return;
        }

        const firstArg = node.arguments[0];
        if (firstArg.properties) {
          checkSorted(firstArg.properties);
        } else if (firstArg.type === 'Identifier') {
          const variable = variableUtil.findVariableByName(context, node, firstArg.name);
          if (variable && variable.properties) {
            checkSorted(variable.properties);
          }
        }
      },

      'ClassProperty, PropertyDefinition'(node) {
        if (!propsUtil.isPropTypesDeclaration(node)) {
          return;
        }
        checkNode(node.value);
      },

      MemberExpression(node) {
        if (!propsUtil.isPropTypesDeclaration(node)) {
          return;
        }

        checkNode(node.parent.right);
      },

      ObjectExpression(node) {
        node.properties.forEach((property) => {
          if (!property.key) {
            return;
          }

          if (!propsUtil.isPropTypesDeclaration(property)) {
            return;
          }
          if (property.value.type === 'ObjectExpression') {
            checkSorted(property.value.properties);
          }
        });
      },
    }, checkTypes ? {
      TSTypeLiteral(node) {
        if (node && node.parent.id) {
          const currentNode = [].concat(
            typeAnnotations.get(node.parent.id.name) || [],
            node
          );
          typeAnnotations.set(node.parent.id.name, currentNode);
        }
      },

      TypeAlias(node) {
        if (node.right.type === 'ObjectTypeAnnotation') {
          const currentNode = [].concat(
            typeAnnotations.get(node.id.name) || [],
            node.right
          );
          typeAnnotations.set(node.id.name, currentNode);
        }
      },

      TSTypeAliasDeclaration(node) {
        if (node.typeAnnotation.type === 'TSTypeLiteral' || node.typeAnnotation.type === 'ObjectTypeAnnotation') {
          const currentNode = [].concat(
            typeAnnotations.get(node.id.name) || [],
            node.typeAnnotation
          );
          typeAnnotations.set(node.id.name, currentNode);
        }
      },
      FunctionDeclaration: handleFunctionComponent,
      ArrowFunctionExpression: handleFunctionComponent,
    } : null);
  },
};
