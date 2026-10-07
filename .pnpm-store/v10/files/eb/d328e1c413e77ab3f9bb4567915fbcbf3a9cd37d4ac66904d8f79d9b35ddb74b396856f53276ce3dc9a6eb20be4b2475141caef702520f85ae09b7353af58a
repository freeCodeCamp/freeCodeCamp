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

var areEqual = require("fbjs/lib/areEqual");

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

var _require = require('./RelayConcreteVariables'),
    getFragmentVariables = _require.getFragmentVariables;

var _require2 = require('./RelayStoreUtils'),
    FRAGMENT_OWNER_KEY = _require2.FRAGMENT_OWNER_KEY,
    FRAGMENTS_KEY = _require2.FRAGMENTS_KEY,
    ID_KEY = _require2.ID_KEY,
    IS_WITHIN_UNMATCHED_TYPE_REFINEMENT = _require2.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;

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
function getSingularSelector(fragment, item) {
  !(typeof item === 'object' && item !== null && !Array.isArray(item)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item)) : invariant(false) : void 0;
  var dataID = item[ID_KEY];
  var fragments = item[FRAGMENTS_KEY];
  var mixedOwner = item[FRAGMENT_OWNER_KEY];
  var isWithinUnmatchedTypeRefinement = item[IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] === true;

  if (typeof dataID === 'string' && typeof fragments === 'object' && fragments !== null && typeof fragments[fragment.name] === 'object' && fragments[fragment.name] !== null && typeof mixedOwner === 'object' && mixedOwner !== null) {
    var owner = mixedOwner;
    var argumentVariables = fragments[fragment.name];
    var fragmentVariables = getFragmentVariables(fragment, owner.variables, argumentVariables);
    return createReaderSelector(fragment, dataID, fragmentVariables, owner, isWithinUnmatchedTypeRefinement);
  }

  if (process.env.NODE_ENV !== "production") {
    var stringifiedItem = JSON.stringify(item);

    if (stringifiedItem.length > 499) {
      stringifiedItem = stringifiedItem.substr(0, 498) + "\u2026";
    }

    process.env.NODE_ENV !== "production" ? warning(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`.', fragment.name, stringifiedItem, fragment.name) : void 0;
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


function getPluralSelector(fragment, items) {
  var selectors = null;
  items.forEach(function (item, ii) {
    var selector = item != null ? getSingularSelector(fragment, item) : null;

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
      selectors: selectors
    };
  }
}

function getSelector(fragment, item) {
  if (item == null) {
    return item;
  } else if (fragment.metadata && fragment.metadata.plural === true) {
    !Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
    return getPluralSelector(fragment, item);
  } else {
    !!Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
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


function getSelectorsFromObject(fragments, object) {
  var selectors = {};

  for (var _key in fragments) {
    if (fragments.hasOwnProperty(_key)) {
      var fragment = fragments[_key];
      var item = object[_key];
      selectors[_key] = getSelector(fragment, item);
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


function getDataIDsFromObject(fragments, object) {
  var ids = {};

  for (var _key2 in fragments) {
    if (fragments.hasOwnProperty(_key2)) {
      var fragment = fragments[_key2];
      var item = object[_key2];
      ids[_key2] = getDataIDsFromFragment(fragment, item);
    }
  }

  return ids;
}

function getDataIDsFromFragment(fragment, item) {
  if (item == null) {
    return item;
  } else if (fragment.metadata && fragment.metadata.plural === true) {
    !Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
    return getDataIDs(fragment, item);
  } else {
    !!Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
    return getDataID(fragment, item);
  }
}
/**
 * @internal
 */


function getDataIDs(fragment, items) {
  var ids = null;
  items.forEach(function (item) {
    var id = item != null ? getDataID(fragment, item) : null;

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


function getDataID(fragment, item) {
  !(typeof item === 'object' && item !== null && !Array.isArray(item)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item)) : invariant(false) : void 0;
  var dataID = item[ID_KEY];

  if (typeof dataID === 'string') {
    return dataID;
  }

  process.env.NODE_ENV !== "production" ? warning(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`, or `null` is passed as the fragment ' + "reference for `%s` if it's conditonally included and the condition isn't met.", fragment.name, JSON.stringify(item), fragment.name, fragment.name) : void 0;
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


function getVariablesFromObject(fragments, object) {
  var variables = {};

  for (var _key3 in fragments) {
    if (fragments.hasOwnProperty(_key3)) {
      var fragment = fragments[_key3];
      var item = object[_key3];
      var itemVariables = getVariablesFromFragment(fragment, item);
      Object.assign(variables, itemVariables);
    }
  }

  return variables;
}

function getVariablesFromFragment(fragment, item) {
  var _fragment$metadata;

  if (item == null) {
    return {};
  } else if (((_fragment$metadata = fragment.metadata) === null || _fragment$metadata === void 0 ? void 0 : _fragment$metadata.plural) === true) {
    !Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
    return getVariablesFromPluralFragment(fragment, item);
  } else {
    !!Array.isArray(item) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
    return getVariablesFromSingularFragment(fragment, item) || {};
  }
}

function getVariablesFromSingularFragment(fragment, item) {
  var selector = getSingularSelector(fragment, item);

  if (!selector) {
    return null;
  }

  return selector.variables;
}

function getVariablesFromPluralFragment(fragment, items) {
  var variables = {};
  items.forEach(function (value, ii) {
    if (value != null) {
      var itemVariables = getVariablesFromSingularFragment(fragment, value);

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


function areEqualSelectors(thisSelector, thatSelector) {
  return thisSelector.owner === thatSelector.owner && thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && areEqual(thisSelector.variables, thatSelector.variables);
}

function createReaderSelector(fragment, dataID, variables, request) {
  var isWithinUnmatchedTypeRefinement = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    kind: 'SingularReaderSelector',
    dataID: dataID,
    isWithinUnmatchedTypeRefinement: isWithinUnmatchedTypeRefinement,
    node: fragment,
    variables: variables,
    owner: request
  };
}

function createNormalizationSelector(node, dataID, variables) {
  return {
    dataID: dataID,
    node: node,
    variables: variables
  };
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  createReaderSelector: createReaderSelector,
  createNormalizationSelector: createNormalizationSelector,
  getDataIDsFromFragment: getDataIDsFromFragment,
  getDataIDsFromObject: getDataIDsFromObject,
  getSingularSelector: getSingularSelector,
  getPluralSelector: getPluralSelector,
  getSelector: getSelector,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromSingularFragment: getVariablesFromSingularFragment,
  getVariablesFromPluralFragment: getVariablesFromPluralFragment,
  getVariablesFromFragment: getVariablesFromFragment,
  getVariablesFromObject: getVariablesFromObject
};