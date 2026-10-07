/**
 * @fileoverview Prevents usage of Function.prototype.bind and arrow functions
 *               in React component props.
 * @author Daniel Lo Nigro <dan.cx>
 * @author Jacky Ho
 */

'use strict';

const propName = require('jsx-ast-utils/propName');
const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');
const getAncestors = require('../util/eslint').getAncestors;

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

const messages = {
  bindCall: 'JSX props should not use .bind()',
  arrowFunc: 'JSX props should not use arrow functions',
  bindExpression: 'JSX props should not use ::',
  func: 'JSX props should not use functions',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow `.bind()` or arrow functions in JSX props',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('jsx-no-bind'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowArrowFunctions: {
          default: false,
          type: 'boolean',
        },
        allowBind: {
          default: false,
          type: 'boolean',
        },
        allowFunctions: {
          default: false,
          type: 'boolean',
        },
        ignoreRefs: {
          default: false,
          type: 'boolean',
        },
        ignoreDOMComponents: {
          default: false,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};

    // Keep track of all the variable names pointing to a bind call,
    // bind expression or an arrow function in different block statements
    const blockVariableNameSets = {};

    /**
     * @param {string | number} blockStart
     */
    function setBlockVariableNameSet(blockStart) {
      blockVariableNameSets[blockStart] = {
        arrowFunc: new Set(),
        bindCall: new Set(),
        bindExpression: new Set(),
        func: new Set(),
      };
    }

    function getNodeViolationType(node) {
      if (
        !configuration.allowBind
        && astUtil.isCallExpression(node)
        && node.callee.type === 'MemberExpression'
        && node.callee.property.type === 'Identifier'
        && node.callee.property.name === 'bind'
      ) {
        return 'bindCall';
      }
      if (node.type === 'ConditionalExpression') {
        return getNodeViolationType(node.test)
               || getNodeViolationType(node.consequent)
               || getNodeViolationType(node.alternate);
      }
      if (!configuration.allowArrowFunctions && node.type === 'ArrowFunctionExpression') {
        return 'arrowFunc';
      }
      if (
        !configuration.allowFunctions
        && (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration')
      ) {
        return 'func';
      }
      if (!configuration.allowBind && node.type === 'BindExpression') {
        return 'bindExpression';
      }

      return null;
    }

    /**
     * @param {string | number} violationType
     * @param {unknown} variableName
     * @param {string | number} blockStart
     */
    function addVariableNameToSet(violationType, variableName, blockStart) {
      blockVariableNameSets[blockStart][violationType].add(variableName);
    }

    function getBlockStatementAncestors(node) {
      return getAncestors(context, node).filter(
        (ancestor) => ancestor.type === 'BlockStatement'
      ).reverse();
    }

    function reportVariableViolation(node, name, blockStart) {
      const blockSets = blockVariableNameSets[blockStart];
      const violationTypes = Object.keys(blockSets);

      return violationTypes.find((type) => {
        if (blockSets[type].has(name)) {
          report(context, messages[type], type, {
            node,
          });
          return true;
        }

        return false;
      });
    }

    function findVariableViolation(node, name) {
      getBlockStatementAncestors(node).find(
        (block) => reportVariableViolation(node, name, block.range[0])
      );
    }

    return {
      BlockStatement(node) {
        setBlockVariableNameSet(node.range[0]);
      },

      FunctionDeclaration(node) {
        const blockAncestors = getBlockStatementAncestors(node);
        const variableViolationType = getNodeViolationType(node);

        if (blockAncestors.length > 0 && variableViolationType) {
          addVariableNameToSet(variableViolationType, node.id.name, blockAncestors[0].range[0]);
        }
      },

      VariableDeclarator(node) {
        if (!node.init) {
          return;
        }
        const blockAncestors = getBlockStatementAncestors(node);
        const variableViolationType = getNodeViolationType(node.init);

        if (
          blockAncestors.length > 0
          && variableViolationType
          && 'kind' in node.parent
          && node.parent.kind === 'const' // only support const right now
        ) {
          addVariableNameToSet(variableViolationType, 'name' in node.id ? node.id.name : undefined, blockAncestors[0].range[0]);
        }
      },

      JSXAttribute(node) {
        const isRef = configuration.ignoreRefs && propName(node) === 'ref';
        if (isRef || !node.value || !node.value.expression) {
          return;
        }
        const isDOMComponent = jsxUtil.isDOMComponent(node.parent);
        if (configuration.ignoreDOMComponents && isDOMComponent) {
          return;
        }
        const valueNode = node.value.expression;
        const valueNodeType = valueNode.type;
        const nodeViolationType = getNodeViolationType(valueNode);

        if (valueNodeType === 'Identifier') {
          findVariableViolation(node, valueNode.name);
        } else if (nodeViolationType) {
          report(context, messages[nodeViolationType], nodeViolationType, {
            node,
          });
        }
      },
    };
  },
};
