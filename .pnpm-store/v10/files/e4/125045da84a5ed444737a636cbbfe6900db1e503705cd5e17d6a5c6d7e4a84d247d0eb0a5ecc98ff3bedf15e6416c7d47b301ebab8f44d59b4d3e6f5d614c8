/**
 * @fileoverview Flag shouldComponentUpdate when extending PureComponent
 */

'use strict';

const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noShouldCompUpdate: '{{component}} does not need shouldComponentUpdate when extending React.PureComponent.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of shouldComponentUpdate when extending React.PureComponent',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('no-redundant-should-component-update'),
    },

    messages,

    schema: [],
  },

  create(context) {
    /**
     * Checks for shouldComponentUpdate property
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} Whether or not the property exists.
     */
    function hasShouldComponentUpdate(node) {
      const properties = astUtil.getComponentProperties(node);
      return properties.some((property) => {
        const name = astUtil.getPropertyName(property);
        return name === 'shouldComponentUpdate';
      });
    }

    /**
     * Get name of node if available
     * @param {ASTNode} node The AST node being checked.
     * @return {string} The name of the node
     */
    function getNodeName(node) {
      if (node.id) {
        return node.id.name;
      }
      if (node.parent && node.parent.id) {
        return node.parent.id.name;
      }
      return '';
    }

    /**
     * Checks for violation of rule
     * @param {ASTNode} node The AST node being checked.
     */
    function checkForViolation(node) {
      if (componentUtil.isPureComponent(node, context)) {
        const hasScu = hasShouldComponentUpdate(node);
        if (hasScu) {
          const className = getNodeName(node);
          report(context, messages.noShouldCompUpdate, 'noShouldCompUpdate', {
            node,
            data: {
              component: className,
            },
          });
        }
      }
    }

    return {
      ClassDeclaration: checkForViolation,
      ClassExpression: checkForViolation,
    };
  },
};
