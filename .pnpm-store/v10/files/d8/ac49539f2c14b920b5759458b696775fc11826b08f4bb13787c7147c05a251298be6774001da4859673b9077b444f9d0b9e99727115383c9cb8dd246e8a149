/**
 * @fileoverview Prevent usage of setState in lifecycle methods
 * @author Yannick Croissant
 */

'use strict';

const findLast = require('array.prototype.findlast');

const docsUrl = require('./docsUrl');
const report = require('./report');
const getAncestors = require('./eslint').getAncestors;
const testReactVersion = require('./version').testReactVersion;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function mapTitle(methodName) {
  const map = {
    componentDidMount: 'did-mount',
    componentDidUpdate: 'did-update',
    componentWillUpdate: 'will-update',
  };
  const title = map[methodName];
  if (!title) {
    throw Error(`No docsUrl for '${methodName}'`);
  }
  return `no-${title}-set-state`;
}

const messages = {
  noSetState: 'Do not use setState in {{name}}',
};

const methodNoopsAsOf = {
  componentDidMount: '>= 16.3.0',
  componentDidUpdate: '>= 16.3.0',
};

function shouldBeNoop(context, methodName) {
  return methodName in methodNoopsAsOf
    && testReactVersion(context, methodNoopsAsOf[methodName])
    && !testReactVersion(context, '999.999.999'); // for when the version is not specified
}

// eslint-disable-next-line valid-jsdoc
/**
 * @param {string} methodName
 * @param {(context: import('eslint').Rule.RuleContext) => boolean} [shouldCheckUnsafeCb]
 * @returns {import('eslint').Rule.RuleModule}
 */
module.exports = function makeNoMethodSetStateRule(methodName, shouldCheckUnsafeCb) {
  return {
    meta: {
      docs: {
        description: `Disallow usage of setState in ${methodName}`,
        category: 'Best Practices',
        recommended: false,
        url: docsUrl(mapTitle(methodName)),
      },

      messages,

      schema: [{
        enum: ['disallow-in-func'],
      }],
    },

    create(context) {
      const mode = context.options[0] || 'allow-in-func';

      function nameMatches(name) {
        if (name === methodName) {
          return true;
        }

        if (typeof shouldCheckUnsafeCb === 'function' && shouldCheckUnsafeCb(context)) {
          return name === `UNSAFE_${methodName}`;
        }

        return false;
      }

      if (shouldBeNoop(context, methodName)) {
        return {};
      }

      // --------------------------------------------------------------------------
      // Public
      // --------------------------------------------------------------------------

      return {
        CallExpression(node) {
          const callee = node.callee;
          if (
            callee.type !== 'MemberExpression'
            || callee.object.type !== 'ThisExpression'
            || !('name' in callee.property)
            || callee.property.name !== 'setState'
          ) {
            return;
          }
          const ancestors = getAncestors(context, node);
          let depth = 0;
          findLast(ancestors, (ancestor) => {
          // ancestors.some((ancestor) => {
            if (/Function(Expression|Declaration)$/.test(ancestor.type)) {
              depth += 1;
            }
            if (
              (ancestor.type !== 'Property' && ancestor.type !== 'MethodDefinition' && ancestor.type !== 'ClassProperty' && ancestor.type !== 'PropertyDefinition')
              || !nameMatches(ancestor.key.name)
              || (mode !== 'disallow-in-func' && depth > 1)
            ) {
              return false;
            }
            report(context, messages.noSetState, 'noSetState', {
              node: callee,
              data: {
                name: ancestor.key.name,
              },
            });
            return true;
          });
        },
      };
    },
  };
};
