/**
 * @fileoverview Enforces consistent naming for boolean props
 * @author Ev Haus
 */

'use strict';

const flatMap = require('array.prototype.flatmap');
const values = require('object.values');

const Components = require('../util/Components');
const propsUtil = require('../util/props');
const astUtil = require('../util/ast');
const docsUrl = require('../util/docsUrl');
const propWrapperUtil = require('../util/propWrapper');
const report = require('../util/report');
const eslintUtil = require('../util/eslint');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

/**
 * Checks if prop is nested
 * @param {Object} prop Property object, single prop type declaration
 * @returns {boolean}
 */
function nestedPropTypes(prop) {
  return (
    prop.type === 'Property'
    && astUtil.isCallExpression(prop.value)
  );
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  patternMismatch: 'Prop name `{{propName}}` doesn’t match rule `{{pattern}}`',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      category: 'Stylistic Issues',
      description: 'Enforces consistent naming for boolean props',
      recommended: false,
      url: docsUrl('boolean-prop-naming'),
    },

    messages,

    schema: [{
      additionalProperties: false,
      properties: {
        propTypeNames: {
          items: {
            type: 'string',
          },
          minItems: 1,
          type: 'array',
          uniqueItems: true,
        },
        rule: {
          default: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          minLength: 1,
          type: 'string',
        },
        message: {
          minLength: 1,
          type: 'string',
        },
        validateNested: {
          default: false,
          type: 'boolean',
        },
      },
      type: 'object',
    }],
  },

  create: Components.detect((context, components, utils) => {
    const config = context.options[0] || {};
    const rule = config.rule ? new RegExp(config.rule) : null;
    const propTypeNames = config.propTypeNames || ['bool'];

    // Remembers all Flowtype object definitions
    const objectTypeAnnotations = new Map();

    /**
     * Returns the prop key to ensure we handle the following cases:
     * propTypes: {
     *   full: React.PropTypes.bool,
     *   short: PropTypes.bool,
     *   direct: bool,
     *   required: PropTypes.bool.isRequired
     * }
     * @param {Object} node The node we're getting the name of
     * @returns {string | null}
     */
    function getPropKey(node) {
      // Check for `ExperimentalSpreadProperty` (eslint 3/4) and `SpreadElement` (eslint 5)
      // so we can skip validation of those fields.
      // Otherwise it will look for `node.value.property` which doesn't exist and breaks eslint.
      if (node.type === 'ExperimentalSpreadProperty' || node.type === 'SpreadElement') {
        return null;
      }
      if (node.value && node.value.property) {
        const name = node.value.property.name;
        if (name === 'isRequired') {
          if (node.value.object && node.value.object.property) {
            return node.value.object.property.name;
          }
          return null;
        }
        return name;
      }
      if (node.value && node.value.type === 'Identifier') {
        return node.value.name;
      }
      return null;
    }

    /**
     * Returns the name of the given node (prop)
     * @param {Object} node The node we're getting the name of
     * @returns {string}
     */
    function getPropName(node) {
      // Due to this bug https://github.com/babel/babel-eslint/issues/307
      // we can't get the name of the Flow object key name. So we have
      // to hack around it for now.
      if (node.type === 'ObjectTypeProperty') {
        return getSourceCode(context).getFirstToken(node).value;
      }

      return node.key.name;
    }

    /**
     * Checks if prop is declared in flow way
     * @param {Object} prop Property object, single prop type declaration
     * @returns {boolean}
     */
    function flowCheck(prop) {
      return (
        prop.type === 'ObjectTypeProperty'
        && prop.value.type === 'BooleanTypeAnnotation'
        && rule.test(getPropName(prop)) === false
      );
    }

    /**
     * Checks if prop is declared in regular way
     * @param {Object} prop Property object, single prop type declaration
     * @returns {boolean}
     */
    function regularCheck(prop) {
      const propKey = getPropKey(prop);
      return (
        propKey
        && propTypeNames.indexOf(propKey) >= 0
        && rule.test(getPropName(prop)) === false
      );
    }

    function tsCheck(prop) {
      if (prop.type !== 'TSPropertySignature') return false;
      const typeAnnotation = (prop.typeAnnotation || {}).typeAnnotation;
      return (
        typeAnnotation
        && typeAnnotation.type === 'TSBooleanKeyword'
        && rule.test(getPropName(prop)) === false
      );
    }

    /**
     * Runs recursive check on all proptypes
     * @param {Array} proptypes A list of Property object (for each proptype defined)
     * @param {Function} addInvalidProp callback to run for each error
     */
    function runCheck(proptypes, addInvalidProp) {
      if (proptypes) {
        proptypes.forEach((prop) => {
          if (config.validateNested && nestedPropTypes(prop)) {
            runCheck(prop.value.arguments[0].properties, addInvalidProp);
            return;
          }
          if (flowCheck(prop) || regularCheck(prop) || tsCheck(prop)) {
            addInvalidProp(prop);
          }
        });
      }
    }

    /**
     * Checks and mark props with invalid naming
     * @param {Object} node The component node we're testing
     * @param {Array} proptypes A list of Property object (for each proptype defined)
     */
    function validatePropNaming(node, proptypes) {
      const component = components.get(node) || node;
      const invalidProps = component.invalidProps || [];

      runCheck(proptypes, (prop) => {
        invalidProps.push(prop);
      });

      components.set(node, {
        invalidProps,
      });
    }

    /**
     * Reports invalid prop naming
     * @param {Object} component The component to process
     */
    function reportInvalidNaming(component) {
      component.invalidProps.forEach((propNode) => {
        const propName = getPropName(propNode);
        report(context, config.message || messages.patternMismatch, !config.message && 'patternMismatch', {
          node: propNode,
          data: {
            component: propName,
            propName,
            pattern: config.rule,
          },
        });
      });
    }

    function checkPropWrapperArguments(node, args) {
      if (!node || !Array.isArray(args)) {
        return;
      }
      args.filter((arg) => arg.type === 'ObjectExpression').forEach((object) => validatePropNaming(node, object.properties));
    }

    function getComponentTypeAnnotation(component) {
      // If this is a functional component that uses a global type, check it
      if (
        (component.node.type === 'FunctionDeclaration' || component.node.type === 'ArrowFunctionExpression')
        && component.node.params
        && component.node.params.length > 0
        && component.node.params[0].typeAnnotation
      ) {
        return component.node.params[0].typeAnnotation.typeAnnotation;
      }

      if (
        !component.node.parent
        || component.node.parent.type !== 'VariableDeclarator'
        || !component.node.parent.id
        || component.node.parent.id.type !== 'Identifier'
        || !component.node.parent.id.typeAnnotation
        || !component.node.parent.id.typeAnnotation.typeAnnotation
      ) {
        return;
      }

      const annotationTypeArguments = propsUtil.getTypeArguments(
        component.node.parent.id.typeAnnotation.typeAnnotation
      );
      if (
        annotationTypeArguments && (
          annotationTypeArguments.type === 'TSTypeParameterInstantiation'
          || annotationTypeArguments.type === 'TypeParameterInstantiation'
        )
      ) {
        return annotationTypeArguments.params.find(
          (param) => param.type === 'TSTypeReference' || param.type === 'GenericTypeAnnotation'
        );
      }
    }

    function findAllTypeAnnotations(identifier, node) {
      if (node.type === 'TSTypeLiteral' || node.type === 'ObjectTypeAnnotation' || node.type === 'TSInterfaceBody') {
        const currentNode = [].concat(
          objectTypeAnnotations.get(identifier.name) || [],
          node
        );
        objectTypeAnnotations.set(identifier.name, currentNode);
      } else if (
        node.type === 'TSParenthesizedType'
        && (
          node.typeAnnotation.type === 'TSIntersectionType'
          || node.typeAnnotation.type === 'TSUnionType'
        )
      ) {
        node.typeAnnotation.types.forEach((type) => {
          findAllTypeAnnotations(identifier, type);
        });
      } else if (
        node.type === 'TSIntersectionType'
        || node.type === 'TSUnionType'
        || node.type === 'IntersectionTypeAnnotation'
        || node.type === 'UnionTypeAnnotation'
      ) {
        node.types.forEach((type) => {
          findAllTypeAnnotations(identifier, type);
        });
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      'ClassProperty, PropertyDefinition'(node) {
        if (!rule || !propsUtil.isPropTypesDeclaration(node)) {
          return;
        }
        if (
          node.value
          && astUtil.isCallExpression(node.value)
          && propWrapperUtil.isPropWrapperFunction(
            context,
            getText(context, node.value.callee)
          )
        ) {
          checkPropWrapperArguments(node, node.value.arguments);
        }
        if (node.value && node.value.properties) {
          validatePropNaming(node, node.value.properties);
        }
        if (node.typeAnnotation && node.typeAnnotation.typeAnnotation) {
          validatePropNaming(node, node.typeAnnotation.typeAnnotation.properties);
        }
      },

      MemberExpression(node) {
        if (!rule || !propsUtil.isPropTypesDeclaration(node)) {
          return;
        }
        const component = utils.getRelatedComponent(node);
        if (!component || !node.parent.right) {
          return;
        }
        const right = node.parent.right;
        if (
          astUtil.isCallExpression(right)
          && propWrapperUtil.isPropWrapperFunction(
            context,
            getText(context, right.callee)
          )
        ) {
          checkPropWrapperArguments(component.node, right.arguments);
          return;
        }
        validatePropNaming(component.node, node.parent.right.properties);
      },

      ObjectExpression(node) {
        if (!rule) {
          return;
        }

        // Search for the proptypes declaration
        node.properties.forEach((property) => {
          if (!propsUtil.isPropTypesDeclaration(property)) {
            return;
          }
          validatePropNaming(node, property.value.properties);
        });
      },

      TypeAlias(node) {
        findAllTypeAnnotations(node.id, node.right);
      },

      TSTypeAliasDeclaration(node) {
        findAllTypeAnnotations(node.id, node.typeAnnotation);
      },

      TSInterfaceDeclaration(node) {
        findAllTypeAnnotations(node.id, node.body);
      },

      // eslint-disable-next-line object-shorthand
      'Program:exit'() {
        if (!rule) {
          return;
        }

        values(components.list()).forEach((component) => {
          const annotation = getComponentTypeAnnotation(component);

          if (annotation) {
            let propType;
            if (annotation.type === 'GenericTypeAnnotation') {
              propType = objectTypeAnnotations.get(annotation.id.name);
            } else if (annotation.type === 'ObjectTypeAnnotation' || annotation.type === 'TSTypeLiteral') {
              propType = annotation;
            } else if (annotation.type === 'TSTypeReference') {
              propType = objectTypeAnnotations.get(annotation.typeName.name);
            } else if (annotation.type === 'TSIntersectionType') {
              propType = flatMap(annotation.types, (type) => (
                type.type === 'TSTypeReference'
                  ? objectTypeAnnotations.get(type.typeName.name)
                  : type
              ));
            }

            if (propType) {
              [].concat(propType).filter(Boolean).forEach((prop) => {
                validatePropNaming(
                  component.node,
                  prop.properties || prop.members || prop.body
                );
              });
            }
          }

          if (component.invalidProps && component.invalidProps.length > 0) {
            reportInvalidNaming(component);
          }
        });

        // Reset cache
        objectTypeAnnotations.clear();
      },
    };
  }),
};
