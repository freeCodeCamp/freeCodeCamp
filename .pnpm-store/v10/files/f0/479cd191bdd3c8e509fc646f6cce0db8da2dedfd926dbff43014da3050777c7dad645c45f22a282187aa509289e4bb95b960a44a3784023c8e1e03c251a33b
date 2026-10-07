/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _require = require('./CompilerError'),
    createUserError = _require.createUserError,
    eachWithCombinedError = _require.eachWithCombinedError;

/**
 * Creates a scope for a `Root`, with each argument mapped to a variable of the
 * same name. Example:
 *
 * Query:
 * query Foo($id: ID, $size: Int = 42) { ... }
 *
 * Scope:
 * {
 *   id: $id,
 *   size: $size,
 * }
 *
 * Note that even though a default value is defined for $size, the scope must
 * assume that this could be overridden at runtime. The value cannot be decided
 * statically and therefore is set to a variable.
 */
function getRootScope(definitions) {
  var scope = {};
  definitions.forEach(function (definition) {
    scope[definition.name] = {
      kind: 'Variable',
      loc: definition.loc,
      variableName: definition.name,
      type: definition.type
    };
  });
  return scope;
}
/**
 * Creates a scope for a `Fragment` by translating fragment spread arguments in
 * the context of a parent scope into a new scope and validating them against
 * the argument definitions.
 *
 *
 * Parent Scope:
 * {
 *   active: $parentActive
 * }
 *
 * Fragment Spread:
 * ...Bar(size: 42, enabled: $active)
 *
 * Fragment:
 * fragment Bar on Foo @argumentDefinitions(
 *   id: {type: "ID"}
 *   size: {type: "Int"}
 *   enabled: {type: "Boolean}
 *   scale: {type: "Int", imports: "pixelRatio"}
 * )
 *
 * Scope:
 * {
 *   // No argument is provided for $id, it gets the default value which in this
 *   // case is `null`:
 *   id: null,
 *
 *   // The parent passes 42 as a literal value for $size:
 *   size: 42,
 *
 *   // The parent passes a variable as the value of $enabled. This variable is
 *   // resolved in the parent scope to the value $parentActive, which becomes
 *   // the value of $enabled:
 *   $enabled: $parentActive,
 *
 *   // $scale imports pixelRatio from the root scope. Since any argument in a
 *   // root scope maps to a variable of the same name, that means the value of
 *   // pixelRatio in the root is $pixelRatio:
 *   $scale: $pixelRatio,
 * }
 */


function getFragmentScope(schema, definitions, args, parentScope, spread) {
  var argMap = new Map();
  args.forEach(function (arg) {
    if (arg.value.kind === 'Literal') {
      argMap.set(arg.name, arg.value);
    } else if (arg.value.kind === 'Variable') {
      argMap.set(arg.name, parentScope[arg.value.variableName]);
    }
  });
  var fragmentScope = {};
  eachWithCombinedError(definitions, function (definition) {
    if (definition.kind === 'RootArgumentDefinition') {
      if (argMap.has(definition.name)) {
        var _argNode$loc;

        var argNode = args.find(function (a) {
          return a.name === definition.name;
        });
        throw createUserError("Unexpected argument '".concat(definition.name, "' supplied to fragment '").concat(spread.name, "'. @arguments may only be provided for variables defined in the fragment's @argumentDefinitions."), [(_argNode$loc = argNode === null || argNode === void 0 ? void 0 : argNode.loc) !== null && _argNode$loc !== void 0 ? _argNode$loc : spread.loc]);
      }

      fragmentScope[definition.name] = {
        kind: 'Variable',
        loc: definition.loc,
        variableName: definition.name,
        type: definition.type
      };
    } else {
      var arg = argMap.get(definition.name);

      if (arg == null || arg.kind === 'Literal' && arg.value == null) {
        // No variable or literal null was passed, fall back to default
        // value.
        if (definition.defaultValue == null && schema.isNonNull(definition.type)) {
          var _argNode$loc2;

          var _argNode = args.find(function (a) {
            return a.name === definition.name;
          });

          throw createUserError("No value found for required argument '".concat(definition.name, ": ").concat(schema.getTypeString(definition.type), "' on fragment '").concat(spread.name, "'."), [(_argNode$loc2 = _argNode === null || _argNode === void 0 ? void 0 : _argNode.loc) !== null && _argNode$loc2 !== void 0 ? _argNode$loc2 : spread.loc]);
        }

        fragmentScope[definition.name] = {
          kind: 'Literal',
          value: definition.defaultValue
        };
      } else {
        // Variable or non-null literal.
        fragmentScope[definition.name] = arg;
      }
    }
  });
  return fragmentScope;
}

module.exports = {
  getFragmentScope: getFragmentScope,
  getRootScope: getRootScope
};