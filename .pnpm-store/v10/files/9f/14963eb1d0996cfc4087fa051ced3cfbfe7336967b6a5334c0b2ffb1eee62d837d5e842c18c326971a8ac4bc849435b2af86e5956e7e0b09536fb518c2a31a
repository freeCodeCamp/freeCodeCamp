'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.collectFields = collectFields;
exports.collectSubfields = collectSubfields;

var _kinds = require('../language/kinds.js');

var _definition = require('../type/definition.js');

var _directives = require('../type/directives.js');

var _typeFromAST = require('../utilities/typeFromAST.js');

var _values = require('./values.js');

/**
 * Given a selectionSet, collects all of the fields and returns them.
 *
 * CollectFields requires the "runtime type" of an object. For a field that
 * returns an Interface or Union type, the "runtime type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */
function collectFields(
  schema,
  fragments,
  variableValues,
  runtimeType,
  selectionSet,
) {
  const fields = new Map();
  collectFieldsImpl(
    schema,
    fragments,
    variableValues,
    runtimeType,
    selectionSet,
    fields,
    new Set(),
  );
  return fields;
}
/**
 * Given an array of field nodes, collects all of the subfields of the passed
 * in fields, and returns them at the end.
 *
 * CollectSubFields requires the "return type" of an object. For a field that
 * returns an Interface or Union type, the "return type" will be the actual
 * object type returned by that field.
 *
 * @internal
 */

function collectSubfields(
  schema,
  fragments,
  variableValues,
  returnType,
  fieldNodes,
) {
  const subFieldNodes = new Map();
  const visitedFragmentNames = new Set();

  for (const node of fieldNodes) {
    if (node.selectionSet) {
      collectFieldsImpl(
        schema,
        fragments,
        variableValues,
        returnType,
        node.selectionSet,
        subFieldNodes,
        visitedFragmentNames,
      );
    }
  }

  return subFieldNodes;
}

function collectFieldsImpl(
  schema,
  fragments,
  variableValues,
  runtimeType,
  selectionSet,
  fields,
  visitedFragmentNames,
) {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case _kinds.Kind.FIELD: {
        if (!shouldIncludeNode(variableValues, selection)) {
          continue;
        }

        const name = getFieldEntryKey(selection);
        const fieldList = fields.get(name);

        if (fieldList !== undefined) {
          fieldList.push(selection);
        } else {
          fields.set(name, [selection]);
        }

        break;
      }

      case _kinds.Kind.INLINE_FRAGMENT: {
        if (
          !shouldIncludeNode(variableValues, selection) ||
          !doesFragmentConditionMatch(schema, selection, runtimeType)
        ) {
          continue;
        }

        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          runtimeType,
          selection.selectionSet,
          fields,
          visitedFragmentNames,
        );
        break;
      }

      case _kinds.Kind.FRAGMENT_SPREAD: {
        const fragName = selection.name.value;

        if (
          visitedFragmentNames.has(fragName) ||
          !shouldIncludeNode(variableValues, selection)
        ) {
          continue;
        }

        visitedFragmentNames.add(fragName);
        const fragment = fragments[fragName];

        if (
          !fragment ||
          !doesFragmentConditionMatch(schema, fragment, runtimeType)
        ) {
          continue;
        }

        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          runtimeType,
          fragment.selectionSet,
          fields,
          visitedFragmentNames,
        );
        break;
      }
    }
  }
}
/**
 * Determines if a field should be included based on the `@include` and `@skip`
 * directives, where `@skip` has higher precedence than `@include`.
 */

function shouldIncludeNode(variableValues, node) {
  const skip = (0, _values.getDirectiveValues)(
    _directives.GraphQLSkipDirective,
    node,
    variableValues,
  );

  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }

  const include = (0, _values.getDirectiveValues)(
    _directives.GraphQLIncludeDirective,
    node,
    variableValues,
  );

  if (
    (include === null || include === void 0 ? void 0 : include.if) === false
  ) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */

function doesFragmentConditionMatch(schema, fragment, type) {
  const typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  const conditionalType = (0, _typeFromAST.typeFromAST)(
    schema,
    typeConditionNode,
  );

  if (conditionalType === type) {
    return true;
  }

  if ((0, _definition.isAbstractType)(conditionalType)) {
    return schema.isSubType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */

function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
