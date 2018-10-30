/**
 * @fileoverview Enforce stateless components to be written as a pure function
 * @author Yannick Croissant
 * @author Alberto Rodríguez
 * @copyright 2015 Alberto Rodríguez. All rights reserved.
 */
'use strict';

var has = require('has');
var Components = require('../util/Components');
var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce stateless components to be written as a pure function',
      category: 'Stylistic Issues',
      recommended: false
    },
    schema: [{
      type: 'object',
      properties: {
        ignorePureComponents: {
          default: false,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var configuration = context.options[0] || {};
    var ignorePureComponents = configuration.ignorePureComponents || false;

    var sourceCode = context.getSourceCode();

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      }

      return node.key.name;
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassExpression':
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties;
        default:
          return [];
      }
    }

    /**
     * Checks whether a given array of statements is a single call of `super`.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode[]} body - An array of statements to check.
     * @returns {boolean} `true` if the body is a single call of `super`.
     */
    function isSingleSuperCall(body) {
      return (
        body.length === 1 &&
        body[0].type === 'ExpressionStatement' &&
        body[0].expression.type === 'CallExpression' &&
        body[0].expression.callee.type === 'Super'
      );
    }

    /**
     * Checks whether a given node is a pattern which doesn't have any side effects.
     * Default parameters and Destructuring parameters can have side effects.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} node - A pattern node.
     * @returns {boolean} `true` if the node doesn't have any side effects.
     */
    function isSimple(node) {
      return node.type === 'Identifier' || node.type === 'RestElement';
    }

    /**
     * Checks whether a given array of expressions is `...arguments` or not.
     * `super(...arguments)` passes all arguments through.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode[]} superArgs - An array of expressions to check.
     * @returns {boolean} `true` if the superArgs is `...arguments`.
     */
    function isSpreadArguments(superArgs) {
      return (
        superArgs.length === 1 &&
        superArgs[0].type === 'SpreadElement' &&
        superArgs[0].argument.type === 'Identifier' &&
        superArgs[0].argument.name === 'arguments'
      );
    }

    /**
     * Checks whether given 2 nodes are identifiers which have the same name or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are identifiers which have the same
     *      name.
     */
    function isValidIdentifierPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'Identifier' &&
        superArg.type === 'Identifier' &&
        ctorParam.name === superArg.name
      );
    }

    /**
     * Checks whether given 2 nodes are a rest/spread pair which has the same values.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes are a rest/spread pair which has the
     *      same values.
     */
    function isValidRestSpreadPair(ctorParam, superArg) {
      return (
        ctorParam.type === 'RestElement' &&
        superArg.type === 'SpreadElement' &&
        isValidIdentifierPair(ctorParam.argument, superArg.argument)
      );
    }

    /**
     * Checks whether given 2 nodes have the same value or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParam - A node to check.
     * @param {ASTNode} superArg - A node to check.
     * @returns {boolean} `true` if the nodes have the same value or not.
     */
    function isValidPair(ctorParam, superArg) {
      return (
        isValidIdentifierPair(ctorParam, superArg) ||
        isValidRestSpreadPair(ctorParam, superArg)
      );
    }

    /**
     * Checks whether the parameters of a constructor and the arguments of `super()`
     * have the same values or not.
     * @see ESLint no-useless-constructor rule
     * @param {ASTNode} ctorParams - The parameters of a constructor to check.
     * @param {ASTNode} superArgs - The arguments of `super()` to check.
     * @returns {boolean} `true` if those have the same values.
     */
    function isPassingThrough(ctorParams, superArgs) {
      if (ctorParams.length !== superArgs.length) {
        return false;
      }

      for (var i = 0; i < ctorParams.length; ++i) {
        if (!isValidPair(ctorParams[i], superArgs[i])) {
          return false;
        }
      }

      return true;
    }

    /**
     * Checks whether the constructor body is a redundant super call.
     * @see ESLint no-useless-constructor rule
     * @param {Array} body - constructor body content.
     * @param {Array} ctorParams - The params to check against super call.
     * @returns {boolean} true if the construtor body is redundant
     */
    function isRedundantSuperCall(body, ctorParams) {
      return (
        isSingleSuperCall(body) &&
        ctorParams.every(isSimple) &&
        (
          isSpreadArguments(body[0].expression.arguments) ||
          isPassingThrough(ctorParams, body[0].expression.arguments)
        )
      );
    }

    /**
     * Check if a given AST node have any other properties the ones available in stateless components
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node has at least one other property, false if not.
     */
    function hasOtherProperties(node) {
      var properties = getComponentProperties(node);
      return properties.some(function(property) {
        var name = getPropertyName(property);
        var isDisplayName = name === 'displayName';
        var isPropTypes = name === 'propTypes' || name === 'props' && property.typeAnnotation;
        var contextTypes = name === 'contextTypes';
        var isUselessConstructor =
          property.kind === 'constructor' &&
          isRedundantSuperCall(property.value.body.body, property.value.params)
        ;
        var isRender = name === 'render';
        return !isDisplayName && !isPropTypes && !contextTypes && !isUselessConstructor && !isRender;
      });
    }

    /**
     * Mark component as pure as declared
     * @param {ASTNode} node The AST node being checked.
     */
    var markSCUAsDeclared = function (node) {
      components.set(node, {
        hasSCU: true
      });
    };

    /**
     * Mark childContextTypes as declared
     * @param {ASTNode} node The AST node being checked.
     */
    var markChildContextTypesAsDeclared = function (node) {
      components.set(node, {
        hasChildContextTypes: true
      });
    };

    /**
     * Mark a setState as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markThisAsUsed(node) {
      components.set(node, {
        useThis: true
      });
    }

    /**
     * Mark a props or context as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markPropsOrContextAsUsed(node) {
      components.set(node, {
        usePropsOrContext: true
      });
    }

    /**
     * Mark a ref as used
     * @param {ASTNode} node The AST node being checked.
     */
    function markRefAsUsed(node) {
      components.set(node, {
        useRef: true
      });
    }

    /**
     * Mark return as invalid
     * @param {ASTNode} node The AST node being checked.
     */
    function markReturnAsInvalid(node) {
      components.set(node, {
        invalidReturn: true
      });
    }

    return {
      ClassDeclaration: function (node) {
        if (ignorePureComponents && utils.isPureComponent(node)) {
          markSCUAsDeclared(node);
        }
      },

      // Mark `this` destructuring as a usage of `this`
      VariableDeclarator: function(node) {
        // Ignore destructuring on other than `this`
        if (!node.id || node.id.type !== 'ObjectPattern' || !node.init || node.init.type !== 'ThisExpression') {
          return;
        }
        // Ignore `props` and `context`
        var useThis = node.id.properties.some(function(property) {
          var name = getPropertyName(property);
          return name !== 'props' && name !== 'context';
        });
        if (!useThis) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `this` usage
      MemberExpression: function(node) {
        if (node.object.type !== 'ThisExpression') {
          if (node.property && node.property.name === 'childContextTypes') {
            var component = utils.getRelatedComponent(node);
            if (!component) {
              return;
            }
            markChildContextTypesAsDeclared(component.node);
            return;
          }
          return;
        // Ignore calls to `this.props` and `this.context`
        } else if (
          (node.property.name || node.property.value) === 'props' ||
          (node.property.name || node.property.value) === 'context'
        ) {
          markPropsOrContextAsUsed(node);
          return;
        }
        markThisAsUsed(node);
      },

      // Mark `ref` usage
      JSXAttribute: function(node) {
        var name = sourceCode.getText(node.name);
        if (name !== 'ref') {
          return;
        }
        markRefAsUsed(node);
      },

      // Mark `render` that do not return some JSX
      ReturnStatement: function(node) {
        var blockNode;
        var scope = context.getScope();
        while (scope) {
          blockNode = scope.block && scope.block.parent;
          if (blockNode && (blockNode.type === 'MethodDefinition' || blockNode.type === 'Property')) {
            break;
          }
          scope = scope.upper;
        }
        var isRender = blockNode && blockNode.key && blockNode.key.name === 'render';
        var allowNull = versionUtil.test(context, '15.0.0'); // Stateless components can return null since React 15
        var isReturningJSX = utils.isReturningJSX(node, !allowNull);
        var isReturningNull = node.argument && (node.argument.value === null || node.argument.value === false);
        if (
          !isRender ||
          (allowNull && (isReturningJSX || isReturningNull)) ||
          (!allowNull && isReturningJSX)
        ) {
          return;
        }
        markReturnAsInvalid(node);
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (
            !has(list, component) ||
            hasOtherProperties(list[component].node) ||
            list[component].useThis ||
            list[component].useRef ||
            list[component].invalidReturn ||
            list[component].hasChildContextTypes ||
            (!utils.isES5Component(list[component].node) && !utils.isES6Component(list[component].node))
          ) {
            continue;
          }

          if (list[component].hasSCU && list[component].usePropsOrContext) {
            continue;
          }

          context.report({
            node: list[component].node,
            message: 'Component should be written as a pure function'
          });
        }
      }
    };

  })
};
