/**
 * @fileoverview Prefer exact proptype definitions
 */

'use strict';

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const propsUtil = require('../util/props');
const propWrapperUtil = require('../util/propWrapper');
const variableUtil = require('../util/variable');
const report = require('../util/report');
const getText = require('../util/eslint').getText;

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

const messages = {
  propTypes: 'Component propTypes should be exact by using {{exactPropWrappers}}.',
  flow: 'Component flow props should be set with exact objects.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Prefer exact proptype definitions',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('prefer-exact-props'),
    },
    messages,
    schema: [],
  },

  create: Components.detect((context, components, utils) => {
    const typeAliases = {};
    const exactWrappers = propWrapperUtil.getExactPropWrapperFunctions(context);

    function getPropTypesErrorMessage() {
      const formattedWrappers = propWrapperUtil.formatPropWrapperFunctions(exactWrappers);
      const message = exactWrappers.size > 1 ? `one of ${formattedWrappers}` : formattedWrappers;
      return { exactPropWrappers: message };
    }

    function isNonExactObjectTypeAnnotation(node) {
      return (
        node
        && node.type === 'ObjectTypeAnnotation'
        && node.properties.length > 0
        && !node.exact
      );
    }

    function hasNonExactObjectTypeAnnotation(node) {
      const typeAnnotation = node.typeAnnotation;
      return (
        typeAnnotation
        && typeAnnotation.typeAnnotation
        && isNonExactObjectTypeAnnotation(typeAnnotation.typeAnnotation)
      );
    }

    function hasGenericTypeAnnotation(node) {
      const typeAnnotation = node.typeAnnotation;
      return (
        typeAnnotation
        && typeAnnotation.typeAnnotation
        && typeAnnotation.typeAnnotation.type === 'GenericTypeAnnotation'
      );
    }

    function isNonEmptyObjectExpression(node) {
      return (
        node
        && node.type === 'ObjectExpression'
        && node.properties.length > 0
      );
    }

    function isNonExactPropWrapperFunction(node) {
      return (
        astUtil.isCallExpression(node)
        && !propWrapperUtil.isExactPropWrapperFunction(context, getText(context, node.callee))
      );
    }

    function reportPropTypesError(node) {
      report(context, messages.propTypes, 'propTypes', {
        node,
        data: getPropTypesErrorMessage(),
      });
    }

    function reportFlowError(node) {
      report(context, messages.flow, 'flow', {
        node,
      });
    }

    return {
      TypeAlias(node) {
        // working around an issue with eslint@3 and babel-eslint not finding the TypeAlias in scope
        typeAliases[node.id.name] = node;
      },

      'ClassProperty, PropertyDefinition'(node) {
        if (!propsUtil.isPropTypesDeclaration(node)) {
          return;
        }

        if (hasNonExactObjectTypeAnnotation(node)) {
          reportFlowError(node);
        } else if (exactWrappers.size > 0 && isNonEmptyObjectExpression(node.value)) {
          reportPropTypesError(node);
        } else if (exactWrappers.size > 0 && isNonExactPropWrapperFunction(node.value)) {
          reportPropTypesError(node);
        }
      },

      Identifier(node) {
        if (!utils.getStatelessComponent(node.parent)) {
          return;
        }

        if (hasNonExactObjectTypeAnnotation(node)) {
          reportFlowError(node);
        } else if (hasGenericTypeAnnotation(node)) {
          const identifier = node.typeAnnotation.typeAnnotation.id.name;
          const typeAlias = typeAliases[identifier];
          const propsDefinition = typeAlias ? typeAlias.right : null;
          if (isNonExactObjectTypeAnnotation(propsDefinition)) {
            reportFlowError(node);
          }
        }
      },

      MemberExpression(node) {
        if (!propsUtil.isPropTypesDeclaration(node) || exactWrappers.size === 0) {
          return;
        }

        const right = node.parent.right;
        if (isNonEmptyObjectExpression(right)) {
          reportPropTypesError(node);
        } else if (isNonExactPropWrapperFunction(right)) {
          reportPropTypesError(node);
        } else if (right.type === 'Identifier') {
          const identifier = right.name;
          const propsDefinition = variableUtil.findVariableByName(context, node, identifier);
          if (isNonEmptyObjectExpression(propsDefinition)) {
            reportPropTypesError(node);
          } else if (isNonExactPropWrapperFunction(propsDefinition)) {
            reportPropTypesError(node);
          }
        }
      },
    };
  }),
};
