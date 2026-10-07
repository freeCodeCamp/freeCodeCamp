/**
 * @fileoverview Enforce stateless components to be written as a pure function
 * @author Yannick Croissant
 * @author Alberto Rodríguez
 * @copyright 2015 Alberto Rodríguez. All rights reserved.
 */

'use strict';

const values = require('object.values');

const Components = require('../util/Components');
const testReactVersion = require('../util/version').testReactVersion;
const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const eslintUtil = require('../util/eslint');

const getScope = eslintUtil.getScope;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  componentShouldBePure: 'Component should be written as a pure function',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce stateless components to be written as a pure function',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('prefer-stateless-function'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        ignorePureComponents: {
          default: false,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components, utils) => {
    const configuration = context.options[0] || {};
    const ignorePureComponents = configuration.ignorePureComponents || false;

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    /**
     * Checks whether a given array of statements is a single call of `super`.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode[]} body - An array of statements to check.
     * @returns {boolean} `true` if the body is a single call of `super`.
     */
    function isSingleSuperCall(body) {
      return (
        body.length === 1
        && body[0].type === 'ExpressionStatement'
        && astUtil.isCallExpression(body[0].expression)
        && body[0].expression.callee.type === 'Super'
      );
    }

    /**
     * Checks whether a given node is a pattern which doesn't have any side effects.
     * Default parameters and Destructuring parameters can have side effects.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode} node - A pattern node.
     * @returns {boolean} `true` if the node doesn't have any side effects.
     */
    function isSimple(node) {
      return node.type === 'Identifier' || node.type === 'RestElement';
    }

    /**
     * Checks whether a given array of expressions is `...arguments` or not.
     * `super(...arguments)` passes all arguments through.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode[]} superArgs - An array of expressions to check.
     * @returns {boolean} `true` if the superArgs is `...arguments`.
     */
    function isSpreadArguments(superArgs) {
      return (
        superArgs.length === 1
        && superArgs[0].type === 'SpreadElement'
        && superArgs[0].argument.type === 'Identifier'
        && superArgs[0].argument.name === 'arguments'
      );
    }

    /**
     * Checks whether given 2 nodes are identifiers which have the same name or not.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are identifiers which have the same
     *      name.
     */
    function isValidIdentifierPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'Identifier'
        && superArg.type === 'Identifier'
        && ctorParam.name === superArg.name
      );
    }

    /**
     * Checks whether given 2 nodes are a rest/spread pair which has the same values.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are a rest/spread pair which has the
     *      same values.
     */
    function isValidRestSpreadPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'RestElement'
        && superArg.type === 'SpreadElement'
        && isValidIdentifierPair(ctorParam.argument, superArg.argument)
      );
    }

    /**
     * Checks whether given 2 nodes have the same value or not.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes have the same value or not.
     */
    function isValidPair(ctorParam, superArg) {
      return (
        isValidIdentifierPair(ctorParam, superArg)
        || isValidRestSpreadPair(ctorParam, superArg)
      );
    }

    /**
     * Checks whether the parameters of a constructor and the arguments of `super()`
     * have the same values or not.
     * @see eslint no-useless-constructor rule
     * @param {ASTNode[]} ctorParams - The parameters of a constructor to check.
     * @param {ASTNode} superArgs - The arguments of `super()` to check.
     * @returns {boolean} `true` if those have the same values.
     */
    function isPassingThrough(ctorParams, superArgs) {
      if (ctorParams.length !== superArgs.length) {
        return false;
      }

      for (let i = 0; i < ctorParams.length; ++i) {
        if (!isValidPair(ctorParams[i], superArgs[i])) {
          return false;
        }
      }

      return true;
    }

    /**
     * Checks whether the constructor body is a redundant super call.
     * @see eslint no-useless-constructor rule
     * @param {Array} body - constructor body content.
     * @param {Array} ctorParams - The params to check against super call.
     * @returns {boolean} true if the constructor body is redundant
     */
    function isRedundantSuperCall(body, ctorParams) {
      return (
        isSingleSuperCall(body)
        && ctorParams.every(isSimple)
        && (
          isSpreadArguments(body[0].expression.arguments)
          || isPassingThrough(ctorParams, body[0].expression.arguments)
        )
      );
    }

    /**
     * Check if a given AST node have any other properties the ones available in stateless components
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} True if the node has at least one other property, false if not.
     */
    function hasOtherProperties(node) {
      const properties = astUtil.getComponentProperties(node);
      return properties.some((property) => {
        const name = astUtil.getPropertyName(property);
        const isDisplayName = name === 'displayName';
        const isPropTypes = name === 'propTypes' || ((name === 'props') && property.typeAnnotation);
        const contextTypes = name === 'contextTypes';
        const defaultProps = name === 'defaultProps';
        const isUselessConstructor = property.kind === 'constructor'
          && !!property.value.body
          && isRedundantSuperCall(property.value.body.body, property.value.params);
        const isRender = name === 'render';
        return !isDisplayName && !isPropTypes && !contextTypes && !defaultProps && !isUselessConstructor && !isRender;
      });
    }

    /**
     * Mark component as pure as declared
     * @param {ASTNode} node The AST node being checked.
     */
    function markSCUAsDeclared(node) {
      components.set(node, {
        hasSCU: true,
      });
    }

    /**
     * Mark childContextTypes as declared
     * @param {ASTNode} node The AST node being checked.
     */
    function markChildContextTypesAsDeclared(node) {
      components.set(node, {
        hasChildContextTypes: true,
      });
    }

    /**
     * Mark a setState as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markThisAsUsed(node) {
      components.set(node, {
        useThis: true,
      });
    }

    /**
     * Mark a props or context as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markPropsOrContextAsUsed(node) {
      components.set(node, {
        usePropsOrContext: true,
      });
    }

    /**
     * Mark a ref as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markRefAsUsed(node) {
      components.set(node, {
        useRef: true,
      });
    }

    /**
     * Mark return as invalid
     * @param {ASTNode} node The AST node being checked.
     */
    function markReturnAsInvalid(node) {
      components.set(node, {
        invalidReturn: true,
      });
    }

    /**
     * Mark a ClassDeclaration as having used decorators
     * @param {ASTNode} node The AST node being checked.
     */
    function markDecoratorsAsUsed(node) {
      components.set(node, {
        useDecorators: true,
      });
    }

    function visitClass(node) {
      if (ignorePureComponents && componentUtil.isPureComponent(node, context)) {
        markSCUAsDeclared(node);
      }

      if (node.decorators && node.decorators.length) {
        markDecoratorsAsUsed(node);
      }
    }

    return {
      ClassDeclaration: visitClass,
      ClassExpression: visitClass,

      // Mark `this` destructuring as a usage of `this`
      VariableDeclarator(node) {
        // Ignore destructuring on other than `this`
        if (!node.id || node.id.type !== 'ObjectPattern' || !node.init || node.init.type !== 'ThisExpression') {
          return;
        }
        // Ignore `props` and `context`
        const useThis = node.id.properties.some((property) => {
          const name = astUtil.getPropertyName(property);
          return name !== 'props' && name !== 'context';
        });
        if (!useThis) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `this` usage
      MemberExpression(node) {
        if (node.object.type !== 'ThisExpression') {
          if (node.property && node.property.name === 'childContextTypes') {
            const component = utils.getRelatedComponent(node);
            if (!component) {
              return;
            }
            markChildContextTypesAsDeclared(component.node);
          }
          return;
        // Ignore calls to `this.props` and `this.context`
        }
        if (
          (node.property.name || node.property.value) === 'props'
          || (node.property.name || node.property.value) === 'context'
        ) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `ref` usage
      JSXAttribute(node) {
        const name = getText(context, node.name);
        if (name !== 'ref') {
          return;
        }
        markRefAsUsed(node);
      },

      // Mark `render` that do not return some JSX
      ReturnStatement(node) {
        let blockNode;
        let scope = getScope(context, node);
        while (scope) {
          blockNode = scope.block && scope.block.parent;
          if (blockNode && (blockNode.type === 'MethodDefinition' || blockNode.type === 'Property')) {
            break;
          }
          scope = scope.upper;
        }
        const isRender = blockNode
          && blockNode.key
          && blockNode.key.name === 'render';
        const allowNull = testReactVersion(context, '>= 15.0.0'); // Stateless components can return null since React 15
        const isReturningJSX = utils.isReturningJSX(node, !allowNull);
        const isReturningNull = node.argument && (node.argument.value === null || node.argument.value === false);
        if (
          !isRender
          || (allowNull && (isReturningJSX || isReturningNull))
          || (!allowNull && isReturningJSX)
        ) {
          return;
        }
        markReturnAsInvalid(node);
      },

      'Program:exit'() {
        const list = components.list();
        values(list)
          .filter((component) => (
            !hasOtherProperties(component.node)
            && !component.useThis
            && !component.useRef
            && !component.invalidReturn
            && !component.hasChildContextTypes
            && !component.useDecorators
            && !component.hasSCU
            && (
              componentUtil.isES5Component(component.node, context)
              || componentUtil.isES6Component(component.node, context)
            )
          ))
          .forEach((component) => {
            report(context, messages.componentShouldBePure, 'componentShouldBePure', {
              node: component.node,
            });
          });
      },
    };
  }),
};
