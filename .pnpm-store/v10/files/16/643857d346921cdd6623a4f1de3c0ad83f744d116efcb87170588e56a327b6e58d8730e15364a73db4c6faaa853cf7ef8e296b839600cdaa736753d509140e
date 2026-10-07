/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {createUserError} = require('../core/CompilerError');

import type {ArgumentDefinition, Fragment} from '../core/IR';
import type {Schema} from '../core/Schema';

/**
 * Attempts to join the argument definitions for a root fragment
 * and any unmasked fragment spreads reachable from that root fragment,
 * returning a combined list of arguments or throwing if the same
 * variable(s) are used in incompatible ways in different fragments.
 */
function joinArgumentDefinitions(
  schema: Schema,
  fragment: Fragment,
  reachableArguments: $ReadOnlyArray<ArgumentDefinition>,
  directiveName: string,
): $ReadOnlyArray<ArgumentDefinition> {
  const joinedArgumentDefinitions = new Map();
  fragment.argumentDefinitions.forEach(prevArgDef => {
    joinedArgumentDefinitions.set(prevArgDef.name, prevArgDef);
  });
  reachableArguments.forEach(nextArgDef => {
    const prevArgDef = joinedArgumentDefinitions.get(nextArgDef.name);
    const joinedArgDef =
      prevArgDef == null
        ? nextArgDef
        : joinArgumentDefinition(schema, prevArgDef, nextArgDef, directiveName);
    joinedArgumentDefinitions.set(joinedArgDef.name, joinedArgDef);
  });
  return Array.from(joinedArgumentDefinitions.values());
}

/**
 * @private
 *
 * Attempts to join two argument definitions, returning a single argument
 * definition that is compatible with both of the inputs:
 * - If the kind, name, or defaultValue is different then the arguments
 *   cannot be joined, indicated by returning null.
 * - If either of next/prev is a subtype of the other, return the one
 *   that is the subtype: a more narrow type can flow into a more general
 *   type but not the inverse.
 * - Otherwise there is no subtyping relation between prev/next, so return
 *   null to indicate they cannot be joined.
 */
function joinArgumentDefinition(
  schema: Schema,
  prevArgDef: ArgumentDefinition,
  nextArgDef: ArgumentDefinition,
  directiveName: string,
): ArgumentDefinition {
  if (prevArgDef.kind !== nextArgDef.kind) {
    throw createUserError(
      'Cannot combine global and local variables when applying ' +
        `${directiveName}.`,
      [prevArgDef.loc, nextArgDef.loc],
    );
  } else if (
    prevArgDef.kind === 'LocalArgumentDefinition' &&
    nextArgDef.kind === 'LocalArgumentDefinition' &&
    prevArgDef.defaultValue !== nextArgDef.defaultValue
  ) {
    throw createUserError(
      'Cannot combine local variables with different defaultValues when ' +
        `applying ${directiveName}.`,
      [prevArgDef.loc, nextArgDef.loc],
    );
  } else if (schema.isTypeSubTypeOf(nextArgDef.type, prevArgDef.type)) {
    // prevArgDef is less strict than nextArgDef
    return nextArgDef;
  } else if (schema.isTypeSubTypeOf(prevArgDef.type, nextArgDef.type)) {
    return prevArgDef;
  } else {
    const prevArgType =
      prevArgDef.type != null
        ? schema.getTypeString(prevArgDef.type)
        : 'unknown';
    const nextArgType =
      nextArgDef.type != null
        ? schema.getTypeString(nextArgDef.type)
        : 'unknown';
    throw createUserError(
      'Cannot combine variables with incompatible types ' +
        `${prevArgType} and ${nextArgType} ` +
        `when applying ${directiveName}.`,
      [prevArgDef.loc, nextArgDef.loc],
    );
  }
}

module.exports = joinArgumentDefinitions;
