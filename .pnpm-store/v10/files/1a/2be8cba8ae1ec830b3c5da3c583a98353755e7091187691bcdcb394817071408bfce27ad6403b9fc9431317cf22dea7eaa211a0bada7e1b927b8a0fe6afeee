/**
 * @fileoverview Forbid using another component's propTypes
 * @author Ian Christian Myers
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const ast = require('../util/ast');
const report = require('../util/report');

const messages = {
  forbiddenPropType: 'Using propTypes from another component is not safe because they may be removed in production builds',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow using another component\'s propTypes',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('forbid-foreign-prop-types'),
    },

    messages,

    schema: [
      {
        type: 'object',
        properties: {
          allowInPropTypes: {
            type: 'boolean',
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const config = context.options[0] || {};
    const allowInPropTypes = config.allowInPropTypes || false;

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    function findParentAssignmentExpression(node) {
      let parent = node.parent;

      while (parent && parent.type !== 'Program') {
        if (parent.type === 'AssignmentExpression') {
          return parent;
        }
        parent = parent.parent;
      }
      return null;
    }

    function findParentClassProperty(node) {
      let parent = node.parent;

      while (parent && parent.type !== 'Program') {
        if (parent.type === 'ClassProperty' || parent.type === 'PropertyDefinition') {
          return parent;
        }
        parent = parent.parent;
      }
      return null;
    }

    function isAllowedAssignment(node) {
      if (!allowInPropTypes) {
        return false;
      }

      const assignmentExpression = findParentAssignmentExpression(node);

      if (
        assignmentExpression
        && assignmentExpression.left
        && assignmentExpression.left.property
        && assignmentExpression.left.property.name === 'propTypes'
      ) {
        return true;
      }

      const classProperty = findParentClassProperty(node);

      if (
        classProperty
        && classProperty.key
        && classProperty.key.name === 'propTypes'
      ) {
        return true;
      }
      return false;
    }

    return {
      MemberExpression(node) {
        if (
          (node.property
          && (
            !node.computed
            && node.property.type === 'Identifier'
            && node.property.name === 'propTypes'
            && !ast.isAssignmentLHS(node)
            && !isAllowedAssignment(node)
          )) || (
            // @ts-expect-error: The JSXText type is not present in the estree type definitions
            (node.property.type === 'Literal' || node.property.type === 'JSXText')
            && 'value' in node.property
            && node.property.value === 'propTypes'
            && !ast.isAssignmentLHS(node)
            && !isAllowedAssignment(node)
          )
        ) {
          report(context, messages.forbiddenPropType, 'forbiddenPropType', {
            node: node.property,
          });
        }
      },

      ObjectPattern(node) {
        const propTypesNode = node.properties.find((property) => (
          property.type === 'Property'
          && 'name' in property.key
          && property.key.name === 'propTypes'
        ));

        if (propTypesNode) {
          report(context, messages.forbiddenPropType, 'forbiddenPropType', {
            node: propTypesNode,
          });
        }
      },
    };
  },
};
