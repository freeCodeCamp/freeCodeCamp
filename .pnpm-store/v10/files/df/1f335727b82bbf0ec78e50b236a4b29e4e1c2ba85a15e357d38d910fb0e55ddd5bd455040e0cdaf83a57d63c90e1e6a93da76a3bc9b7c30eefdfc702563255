'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;

var _invariant = require('../../jsutils/invariant.js');

var _GraphQLError = require('../../error/GraphQLError.js');

/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 *
 * See https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness
 */
function UniqueInputFieldNamesRule(context) {
  const knownNameStack = [];
  let knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },

      leave() {
        const prevKnownNames = knownNameStack.pop();
        prevKnownNames || (0, _invariant.invariant)(false);
        knownNames = prevKnownNames;
      },
    },

    ObjectField(node) {
      const fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(
          new _GraphQLError.GraphQLError(
            `There can be only one input field named "${fieldName}".`,
            {
              nodes: [knownNames[fieldName], node.name],
            },
          ),
        );
      } else {
        knownNames[fieldName] = node.name;
      }
    },
  };
}
