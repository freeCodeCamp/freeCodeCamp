/**
 * @fileoverview Prevent usage of referential-type variables as default param in functional component
 * @author Chang Yan
 */

'use strict';

const values = require('object.values');

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const report = require('../util/report');

const FORBIDDEN_TYPES_MAP = {
  ArrowFunctionExpression: 'arrow function',
  FunctionExpression: 'function expression',
  ObjectExpression: 'object literal',
  ArrayExpression: 'array literal',
  ClassExpression: 'class expression',
  NewExpression: 'construction expression',
  JSXElement: 'JSX element',
};

const FORBIDDEN_TYPES = new Set(Object.keys(FORBIDDEN_TYPES_MAP));
const MESSAGE_ID = 'forbiddenTypeDefaultParam';

const messages = {
  [MESSAGE_ID]: '{{propName}} has a/an {{forbiddenType}} as default prop. This could lead to potential infinite render loop in React. Use a variable reference instead of {{forbiddenType}}.',
};
function hasUsedObjectDestructuringSyntax(params) {
  return (
    params != null
    && params.length >= 1
    && params[0].type === 'ObjectPattern'
  );
}

function verifyDefaultPropsDestructuring(context, properties) {
  // Loop through each of the default params
  properties.filter((prop) => prop.type === 'Property' && prop.value.type === 'AssignmentPattern').forEach((prop) => {
    const propName = prop.key.name;
    const propDefaultValue = prop.value;

    const propDefaultValueType = propDefaultValue.right.type;

    if (
      propDefaultValueType === 'Literal'
      && propDefaultValue.right.regex != null
    ) {
      report(context, messages[MESSAGE_ID], MESSAGE_ID, {
        node: propDefaultValue,
        data: {
          propName,
          forbiddenType: 'regex literal',
        },
      });
    } else if (
      astUtil.isCallExpression(propDefaultValue.right)
      && propDefaultValue.right.callee.type === 'Identifier'
      && propDefaultValue.right.callee.name === 'Symbol'
    ) {
      report(context, messages[MESSAGE_ID], MESSAGE_ID, {
        node: propDefaultValue,
        data: {
          propName,
          forbiddenType: 'Symbol literal',
        },
      });
    } else if (FORBIDDEN_TYPES.has(propDefaultValueType)) {
      report(context, messages[MESSAGE_ID], MESSAGE_ID, {
        node: propDefaultValue,
        data: {
          propName,
          forbiddenType: FORBIDDEN_TYPES_MAP[propDefaultValueType],
        },
      });
    }
  });
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of referential-type variables as default param in functional component',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-object-type-as-default-prop'),
    },
    messages,
  },
  create: Components.detect((context, components) => ({
    'Program:exit'() {
      const list = components.list();
      values(list)
        .filter((component) => hasUsedObjectDestructuringSyntax(component.node.params))
        .forEach((component) => {
          const node = component.node;
          const properties = node.params[0].properties;
          verifyDefaultPropsDestructuring(context, properties);
        });
    },
  })),
};
