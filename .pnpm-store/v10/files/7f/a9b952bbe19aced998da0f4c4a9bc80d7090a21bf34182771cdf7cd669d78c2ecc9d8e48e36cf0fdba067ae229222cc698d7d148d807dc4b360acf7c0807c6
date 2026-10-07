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

const areEqual = require('areEqual');
const invariant = require('invariant');
const warning = require('warning');

const {getFragmentVariables} = require('./RelayConcreteVariables');
const {
  FRAGMENT_OWNER_KEY,
  FRAGMENTS_KEY,
  ID_KEY,
  IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
} = require('./RelayStoreUtils');

import type {NormalizationSelectableNode} from '../util/NormalizationNode';
import type {ReaderFragment} from '../util/ReaderNode';
import type {DataID, Variables} from '../util/RelayRuntimeTypes';
import type {
  NormalizationSelector,
  PluralReaderSelector,
  ReaderSelector,
  RequestDescriptor,
  SingularReaderSelector,
} from './RelayStoreTypes';

/**
 * @public
 *
 * Given the result `item` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment for that item.
 *
 * Example:
 *
 * Given two fragments as follows:
 *
 * ```
 * fragment Parent on User {
 *   id
 *   ...Child
 * }
 * fragment Child on User {
 *   name
 * }
 * ```
 *
 * And given some object `parent` that is the results of `Parent` for id "4",
 * the results of `Child` can be accessed by first getting a selector and then
 * using that selector to `lookup()` the results against the environment:
 *
 * ```
 * const childSelector = getSingularSelector(queryVariables, Child, parent);
 * const childData = environment.lookup(childSelector).data;
 * ```
 */
function getSingularSelector(
  fragment: ReaderFragment,
  item: mixed,
): ?SingularReaderSelector {
  invariant(
    typeof item === 'object' && item !== null && !Array.isArray(item),
    'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' +
      '`%s`.',
    fragment.name,
    JSON.stringify(item),
  );
  const dataID = item[ID_KEY];
  const fragments = item[FRAGMENTS_KEY];
  const mixedOwner = item[FRAGMENT_OWNER_KEY];
  const isWithinUnmatchedTypeRefinement =
    item[IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] === true;
  if (
    typeof dataID === 'string' &&
    typeof fragments === 'object' &&
    fragments !== null &&
    typeof fragments[fragment.name] === 'object' &&
    fragments[fragment.name] !== null &&
    typeof mixedOwner === 'object' &&
    mixedOwner !== null
  ) {
    const owner: RequestDescriptor = (mixedOwner: $FlowFixMe);
    const argumentVariables = fragments[fragment.name];

    const fragmentVariables = getFragmentVariables(
      fragment,
      owner.variables,
      argumentVariables,
    );
    return createReaderSelector(
      fragment,
      dataID,
      fragmentVariables,
      owner,
      isWithinUnmatchedTypeRefinement,
    );
  }

  if (__DEV__) {
    let stringifiedItem = JSON.stringify(item);
    if (stringifiedItem.length > 499) {
      stringifiedItem = stringifiedItem.substr(0, 498) + '\u2026';
    }

    warning(
      false,
      'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' +
        '`%s`. Make sure that the parent operation/fragment included fragment ' +
        '`...%s` without `@relay(mask: false)`.',
      fragment.name,
      stringifiedItem,
      fragment.name,
    );
  }

  return null;
}

/**
 * @public
 *
 * Given the result `items` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment on those
 * items. This is similar to `getSingularSelector` but for "plural" fragments that
 * expect an array of results and therefore return an array of selectors.
 */
function getPluralSelector(
  fragment: ReaderFragment,
  items: $ReadOnlyArray<mixed>,
): ?PluralReaderSelector {
  let selectors = null;
  items.forEach((item, ii) => {
    const selector = item != null ? getSingularSelector(fragment, item) : null;
    if (selector != null) {
      selectors = selectors || [];
      selectors.push(selector);
    }
  });
  if (selectors == null) {
    return null;
  } else {
    return {
      kind: 'PluralReaderSelector',
      selectors,
    };
  }
}

function getSelector(
  fragment: ReaderFragment,
  item: mixed | Array<mixed>,
): ?ReaderSelector {
  if (item == null) {
    return item;
  } else if (fragment.metadata && fragment.metadata.plural === true) {
    invariant(
      Array.isArray(item),
      'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' +
        'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );
    return getPluralSelector(fragment, item);
  } else {
    invariant(
      !Array.isArray(item),
      'RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`. ' +
        'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );
    return getSingularSelector(fragment, item);
  }
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the selectors for those fragments from the results.
 *
 * The canonical use-case for this function is ReactRelayFragmentContainer, which
 * uses this function to convert (props, fragments) into selectors so that it
 * can read the results to pass to the inner component.
 */
function getSelectorsFromObject(
  fragments: {[key: string]: ReaderFragment, ...},
  object: {[key: string]: mixed, ...},
): {[key: string]: ?ReaderSelector, ...} {
  const selectors = {};
  for (const key in fragments) {
    if (fragments.hasOwnProperty(key)) {
      const fragment = fragments[key];
      const item = object[key];
      selectors[key] = getSelector(fragment, item);
    }
  }
  return selectors;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts a mapping of keys -> id(s) of the results.
 *
 * Similar to `getSelectorsFromObject()`, this function can be useful in
 * determining the "identity" of the props passed to a component.
 */
function getDataIDsFromObject(
  fragments: {[key: string]: ReaderFragment, ...},
  object: {[key: string]: mixed, ...},
): {[key: string]: ?(DataID | Array<DataID>), ...} {
  const ids = {};
  for (const key in fragments) {
    if (fragments.hasOwnProperty(key)) {
      const fragment = fragments[key];
      const item = object[key];
      ids[key] = getDataIDsFromFragment(fragment, item);
    }
  }
  return ids;
}

function getDataIDsFromFragment(
  fragment: ReaderFragment,
  item: mixed | Array<mixed>,
): ?DataID | ?$ReadOnlyArray<DataID> {
  if (item == null) {
    return item;
  } else if (fragment.metadata && fragment.metadata.plural === true) {
    invariant(
      Array.isArray(item),
      'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' +
        'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );
    return getDataIDs(fragment, item);
  } else {
    invariant(
      !Array.isArray(item),
      'RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. ' +
        'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );
    return getDataID(fragment, item);
  }
}

/**
 * @internal
 */
function getDataIDs(
  fragment: ReaderFragment,
  items: $ReadOnlyArray<mixed>,
): ?$ReadOnlyArray<DataID> {
  let ids = null;
  items.forEach(item => {
    const id = item != null ? getDataID(fragment, item) : null;
    if (id != null) {
      ids = ids || [];
      ids.push(id);
    }
  });
  return ids;
}

/**
 * @internal
 */
function getDataID(fragment: ReaderFragment, item: mixed): ?DataID {
  invariant(
    typeof item === 'object' && item !== null && !Array.isArray(item),
    'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' +
      '`%s`.',
    fragment.name,
    JSON.stringify(item),
  );
  const dataID = item[ID_KEY];
  if (typeof dataID === 'string') {
    return dataID;
  }
  warning(
    false,
    'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' +
      '`%s`. Make sure that the parent operation/fragment included fragment ' +
      '`...%s` without `@relay(mask: false)`, or `null` is passed as the fragment ' +
      "reference for `%s` if it's conditonally included and the condition isn't met.",
    fragment.name,
    JSON.stringify(item),
    fragment.name,
    fragment.name,
  );
  return null;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the merged variables that would be in scope for those
 * fragments/results.
 *
 * This can be useful in determing what varaibles were used to fetch the data
 * for a Relay container, for example.
 */
function getVariablesFromObject(
  fragments: {[key: string]: ReaderFragment, ...},
  object: {[key: string]: mixed, ...},
): Variables {
  const variables = {};
  for (const key in fragments) {
    if (fragments.hasOwnProperty(key)) {
      const fragment = fragments[key];
      const item = object[key];
      const itemVariables = getVariablesFromFragment(fragment, item);
      Object.assign(variables, itemVariables);
    }
  }
  return variables;
}

function getVariablesFromFragment(
  fragment: ReaderFragment,
  item: mixed | $ReadOnlyArray<mixed>,
): Variables {
  if (item == null) {
    return {};
  } else if (fragment.metadata?.plural === true) {
    invariant(
      Array.isArray(item),
      'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' +
        'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );

    return getVariablesFromPluralFragment(fragment, item);
  } else {
    invariant(
      !Array.isArray(item),
      'RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. ' +
        'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.',
      fragment.name,
      JSON.stringify(item),
      fragment.name,
    );

    return getVariablesFromSingularFragment(fragment, item) || {};
  }
}

function getVariablesFromSingularFragment(
  fragment: ReaderFragment,
  item: mixed,
): ?Variables {
  const selector = getSingularSelector(fragment, item);
  if (!selector) {
    return null;
  }
  return selector.variables;
}

function getVariablesFromPluralFragment(
  fragment: ReaderFragment,
  items: $ReadOnlyArray<mixed>,
): Variables {
  const variables = {};
  items.forEach((value, ii) => {
    if (value != null) {
      const itemVariables = getVariablesFromSingularFragment(fragment, value);
      if (itemVariables != null) {
        Object.assign(variables, itemVariables);
      }
    }
  });
  return variables;
}

/**
 * @public
 *
 * Determine if two selectors are equal (represent the same selection). Note
 * that this function returns `false` when the two queries/fragments are
 * different objects, even if they select the same fields.
 */
function areEqualSelectors(
  thisSelector: SingularReaderSelector,
  thatSelector: SingularReaderSelector,
): boolean {
  return (
    thisSelector.owner === thatSelector.owner &&
    thisSelector.dataID === thatSelector.dataID &&
    thisSelector.node === thatSelector.node &&
    areEqual(thisSelector.variables, thatSelector.variables)
  );
}

function createReaderSelector(
  fragment: ReaderFragment,
  dataID: DataID,
  variables: Variables,
  request: RequestDescriptor,
  isWithinUnmatchedTypeRefinement: boolean = false,
): SingularReaderSelector {
  return {
    kind: 'SingularReaderSelector',
    dataID,
    isWithinUnmatchedTypeRefinement,
    node: fragment,
    variables,
    owner: request,
  };
}

function createNormalizationSelector(
  node: NormalizationSelectableNode,
  dataID: DataID,
  variables: Variables,
): NormalizationSelector {
  return {dataID, node, variables};
}

module.exports = {
  areEqualSelectors,
  createReaderSelector,
  createNormalizationSelector,
  getDataIDsFromFragment,
  getDataIDsFromObject,
  getSingularSelector,
  getPluralSelector,
  getSelector,
  getSelectorsFromObject,
  getVariablesFromSingularFragment,
  getVariablesFromPluralFragment,
  getVariablesFromFragment,
  getVariablesFromObject,
};
