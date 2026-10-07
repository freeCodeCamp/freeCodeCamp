/**
 * @fileoverview Defines where React component static properties should be positioned.
 * @author Daniel Mason
 */

'use strict';

const fromEntries = require('object.fromentries');
const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const propsUtil = require('../util/props');
const report = require('../util/report');
const getScope = require('../util/eslint').getScope;

// ------------------------------------------------------------------------------
// Positioning Options
// ------------------------------------------------------------------------------
const STATIC_PUBLIC_FIELD = 'static public field';
const STATIC_GETTER = 'static getter';
const PROPERTY_ASSIGNMENT = 'property assignment';
const POSITION_SETTINGS = [STATIC_PUBLIC_FIELD, STATIC_GETTER, PROPERTY_ASSIGNMENT];

// ------------------------------------------------------------------------------
// Rule messages
// ------------------------------------------------------------------------------
const ERROR_MESSAGES = {
  [STATIC_PUBLIC_FIELD]: 'notStaticClassProp',
  [STATIC_GETTER]: 'notGetterClassFunc',
  [PROPERTY_ASSIGNMENT]: 'declareOutsideClass',
};

// ------------------------------------------------------------------------------
// Properties to check
// ------------------------------------------------------------------------------
const propertiesToCheck = {
  propTypes: propsUtil.isPropTypesDeclaration,
  defaultProps: propsUtil.isDefaultPropsDeclaration,
  childContextTypes: propsUtil.isChildContextTypesDeclaration,
  contextTypes: propsUtil.isContextTypesDeclaration,
  contextType: propsUtil.isContextTypeDeclaration,
  displayName: (node) => propsUtil.isDisplayNameDeclaration(astUtil.getPropertyNameNode(node)),
};

const classProperties = Object.keys(propertiesToCheck);
const schemaProperties = fromEntries(classProperties.map((property) => [property, { enum: POSITION_SETTINGS }]));

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  notStaticClassProp: '\'{{name}}\' should be declared as a static class property.',
  notGetterClassFunc: '\'{{name}}\' should be declared as a static getter class function.',
  declareOutsideClass: '\'{{name}}\' should be declared outside the class body.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforces where React component static properties should be positioned.',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('static-property-placement'),
    },
    fixable: null, // or 'code' or 'whitespace'

    messages,

    schema: [
      { enum: POSITION_SETTINGS },
      {
        type: 'object',
        properties: schemaProperties,
        additionalProperties: false,
      },
    ],
  },

  create: Components.detect((context, components, utils) => {
    // variables should be defined here
    const options = context.options;
    const defaultCheckType = options[0] || STATIC_PUBLIC_FIELD;
    const hasAdditionalConfig = options.length > 1;
    const additionalConfig = hasAdditionalConfig ? options[1] : {};

    // Set config
    const config = fromEntries(classProperties.map((property) => [
      property,
      additionalConfig[property] || defaultCheckType,
    ]));

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    /**
      * Checks if we are declaring context in class
      * @param {ASTNode} node
      * @returns {boolean} True if we are declaring context in class, false if not.
     */
    function isContextInClass(node) {
      let blockNode;
      let scope = getScope(context, node);
      while (scope) {
        blockNode = scope.block;
        if (blockNode && blockNode.type === 'ClassDeclaration') {
          return true;
        }
        scope = scope.upper;
      }

      return false;
    }

    /**
     * Check if we should report this property node
     * @param {ASTNode} node
     * @param {string} expectedRule
     */
    function reportNodeIncorrectlyPositioned(node, expectedRule) {
      // Detect if this node is an expected property declaration adn return the property name
      const name = classProperties.find((propertyName) => {
        if (propertiesToCheck[propertyName](node)) {
          return !!propertyName;
        }

        return false;
      });

      // If name is set but the configured rule does not match expected then report error
      if (
        name
        && (
          config[name] !== expectedRule
          || (!node.static && (config[name] === STATIC_PUBLIC_FIELD || config[name] === STATIC_GETTER))
        )
      ) {
        const messageId = ERROR_MESSAGES[config[name]];
        report(context, messages[messageId], messageId, {
          node,
          data: { name },
        });
      }
    }

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------
    return {
      'ClassProperty, PropertyDefinition'(node) {
        if (!componentUtil.getParentES6Component(context, node)) {
          return;
        }

        reportNodeIncorrectlyPositioned(node, STATIC_PUBLIC_FIELD);
      },

      MemberExpression(node) {
        // If definition type is undefined then it must not be a defining expression or if the definition is inside a
        // class body then skip this node.
        const right = node.parent.right;
        if (!right || right.type === 'undefined' || isContextInClass(node)) {
          return;
        }

        // Get the related component
        const relatedComponent = utils.getRelatedComponent(node);

        // If the related component is not an ES6 component then skip this node
        if (!relatedComponent || !componentUtil.isES6Component(relatedComponent.node, context)) {
          return;
        }

        // Report if needed
        reportNodeIncorrectlyPositioned(node, PROPERTY_ASSIGNMENT);
      },

      MethodDefinition(node) {
        // If the function is inside a class and is static getter then check if correctly positioned
        if (
          componentUtil.getParentES6Component(context, node)
          && node.static
          && node.kind === 'get'
        ) {
          // Report error if needed
          reportNodeIncorrectlyPositioned(node, STATIC_GETTER);
        }
      },
    };
  }),
};
