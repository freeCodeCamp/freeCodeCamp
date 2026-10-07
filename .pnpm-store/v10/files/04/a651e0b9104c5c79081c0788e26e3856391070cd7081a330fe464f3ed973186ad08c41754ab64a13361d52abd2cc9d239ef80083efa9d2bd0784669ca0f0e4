/**
 * @fileoverview Prevents jsx context provider values from taking values that
 *               will cause needless rerenders.
 * @author Dylan Oshima
 */

'use strict';

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const getScope = require('../util/eslint').getScope;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// Recursively checks if an element is a construction.
// A construction is a variable that changes identity every render.
function isConstruction(node, callScope) {
  switch (node.type) {
    case 'Literal':
      if (node.regex != null) {
        return { type: 'regular expression', node };
      }
      return null;
    case 'Identifier': {
      const variableScoping = callScope.set.get(node.name);

      if (variableScoping == null || variableScoping.defs == null) {
        // If it's not in scope, we don't care.
        return null; // Handled
      }

      // Gets the last variable identity
      const variableDefs = variableScoping.defs;
      const def = variableDefs[variableDefs.length - 1];
      if (def != null
        && def.type !== 'Variable'
        && def.type !== 'FunctionName'
      ) {
        // Parameter or an unusual pattern. Bail out.
        return null; // Unhandled
      }

      if (def.node.type === 'FunctionDeclaration') {
        return { type: 'function declaration', node: def.node, usage: node };
      }

      const init = def.node.init;
      if (init == null) {
        return null;
      }

      const initConstruction = isConstruction(init, callScope);
      if (initConstruction == null) {
        return null;
      }

      return {
        type: initConstruction.type,
        node: initConstruction.node,
        usage: node,
      };
    }
    case 'ObjectExpression':
      // Any object initialized inline will create a new identity
      return { type: 'object', node };
    case 'ArrayExpression':
      return { type: 'array', node };
    case 'ArrowFunctionExpression':
    case 'FunctionExpression':
      // Functions that are initialized inline will have a new identity
      return { type: 'function expression', node };
    case 'ClassExpression':
      return { type: 'class expression', node };
    case 'NewExpression':
      // `const a = new SomeClass();` is a construction
      return { type: 'new expression', node };
    case 'ConditionalExpression':
      return (isConstruction(node.consequent, callScope)
        || isConstruction(node.alternate, callScope)
      );
    case 'LogicalExpression':
      return (isConstruction(node.left, callScope)
        || isConstruction(node.right, callScope)
      );
    case 'MemberExpression': {
      const objConstruction = isConstruction(node.object, callScope);
      if (objConstruction == null) {
        return null;
      }
      return {
        type: objConstruction.type,
        node: objConstruction.node,
        usage: node.object,
      };
    }
    case 'JSXFragment':
      return { type: 'JSX fragment', node };
    case 'JSXElement':
      return { type: 'JSX element', node };
    case 'AssignmentExpression': {
      const construct = isConstruction(node.right, callScope);
      if (construct != null) {
        return {
          type: 'assignment expression',
          node: construct.node,
          usage: node,
        };
      }
      return null;
    }
    case 'TypeCastExpression':
    case 'TSAsExpression':
      return isConstruction(node.expression, callScope);
    default:
      return null;
  }
}

function isReactContext(context, node) {
  let scope = getScope(context, node);
  let variableScoping = null;
  const contextName = node.name;

  while (scope && !variableScoping) { // Walk up the scope chain to find the variable
    variableScoping = scope.set.get(contextName);
    scope = scope.upper;
  }

  if (!variableScoping) { // Context was not found in scope
    return false;
  }

  // Get the variable's definition
  const def = variableScoping.defs[0];

  if (!def || def.node.type !== 'VariableDeclarator') {
    return false;
  }

  const init = def.node.init; // Variable initializer

  const isCreateContext = init
    && init.type === 'CallExpression'
    && (
      (
        init.callee.type === 'Identifier'
        && init.callee.name === 'createContext'
      ) || (
        init.callee.type === 'MemberExpression'
        && init.callee.object.name === 'React'
        && init.callee.property.name === 'createContext'
      )
    );

  return isCreateContext;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  withIdentifierMsg: "The '{{variableName}}' {{type}} (at line {{nodeLine}}) passed as the value prop to the Context provider (at line {{usageLine}}) changes every render. To fix this consider wrapping it in a useMemo hook.",
  withIdentifierMsgFunc: "The '{{variableName}}' {{type}} (at line {{nodeLine}}) passed as the value prop to the Context provider (at line {{usageLine}}) changes every render. To fix this consider wrapping it in a useCallback hook.",
  defaultMsg: 'The {{type}} passed as the value prop to the Context provider (at line {{nodeLine}}) changes every render. To fix this consider wrapping it in a useMemo hook.',
  defaultMsgFunc: 'The {{type}} passed as the value prop to the Context provider (at line {{nodeLine}}) changes every render. To fix this consider wrapping it in a useCallback hook.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallows JSX context provider values from taking values that will cause needless rerenders',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('jsx-no-constructed-context-values'),
    },
    messages,
    schema: false,
  },

  // eslint-disable-next-line arrow-body-style
  create: Components.detect((context, components, utils) => {
    return {
      JSXOpeningElement(node) {
        const openingElementName = node.name;

        if (openingElementName.type === 'JSXMemberExpression') {
          const isJSXContext = openingElementName.property.name === 'Provider';
          if (!isJSXContext) {
            // Member is not Provider
            return;
          }
        } else if (openingElementName.type === 'JSXIdentifier') {
          const isJSXContext = isReactContext(context, openingElementName);
          if (!isJSXContext) {
            // Member is not context
            return;
          }
        } else {
          return;
        }

        // Contexts can take in more than just a value prop
        // so we need to iterate through all of them
        const jsxValueAttribute = node.attributes.find(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'value'
        );

        if (jsxValueAttribute == null) {
          // No value prop was passed
          return;
        }

        const valueNode = jsxValueAttribute.value;
        if (!valueNode) {
          // attribute is a boolean shorthand
          return;
        }
        if (valueNode.type !== 'JSXExpressionContainer') {
          // value could be a literal
          return;
        }

        const valueExpression = valueNode.expression;
        const invocationScope = getScope(context, node);

        // Check if the value prop is a construction
        const constructInfo = isConstruction(valueExpression, invocationScope);
        if (constructInfo == null) {
          return;
        }

        if (!utils.getParentComponent(node)) {
          return;
        }

        // Report found error
        const constructType = constructInfo.type;
        const constructNode = constructInfo.node;
        const constructUsage = constructInfo.usage;
        const data = {
          type: constructType, nodeLine: constructNode.loc.start.line,
        };
        let messageId = 'defaultMsg';

        // Variable passed to value prop
        if (constructUsage != null) {
          messageId = 'withIdentifierMsg';
          data.usageLine = constructUsage.loc.start.line;
          data.variableName = constructUsage.name;
        }

        // Type of expression
        if (
          constructType === 'function expression'
          || constructType === 'function declaration'
        ) {
          messageId += 'Func';
        }

        report(context, messages[messageId], messageId, {
          node: constructNode,
          data,
        });
      },
    };
  }),
};
