/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var GraphQLNodeMap = require('./GraphQLNodeMap');

var _require = require('./GraphQLASTUtils'),
    getName = _require.getName;

var _require2 = require('graphql'),
    visit = _require2.visit;

function buildDependencyMap(nodes) {
  var dependencyMap = new Map();

  var _iterator = (0, _createForOfIteratorHelper2["default"])(nodes.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      var name = getName(node);

      if (dependencyMap.has(name)) {
        throw new Error("Duplicated definition for ".concat(name));
      }

      dependencyMap.set(name, findIncludedFragments(node));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return dependencyMap;
}

function mergeMaps(maps) {
  var result = new Map();

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(maps),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var source = _step2.value;

      var _iterator3 = (0, _createForOfIteratorHelper2["default"])(source.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
              key = _step3$value[0],
              value = _step3$value[1];

          if (result.has(key)) {
            throw new Error("Duplicate entry for '".concat(key, "'."));
          }

          result.set(key, value);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}

function forFullBuild(nodes, baseNodes) {
  var dependencyMap = mergeMaps([nodes].concat((0, _toConsumableArray2["default"])(baseNodes)).map(buildDependencyMap));
  var includedNames = includeReachable(new Set(nodes.keys()), dependencyMap);
  return buildResult(includedNames, nodes, mergeMaps(baseNodes));
}

function forChanges(nodes, changedNames) {
  var baseNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var projectDependencyMap = buildDependencyMap(nodes);
  var baseDependencyMap = mergeMaps(baseNodes.map(buildDependencyMap));
  var dependencyMap = mergeMaps([projectDependencyMap, baseDependencyMap]);
  var invertedDependencyMap = inverseDependencyMap(dependencyMap);
  var baseNameToNode = mergeMaps(baseNodes); // The first step of the process is to find all ancestors of changed nodes.
  // And we perform this search on complete dependency map (project + base)

  var directlyChangedAndAncestors = includeReachable(changedNames, invertedDependencyMap); // Now, we need to intersect obtained set with the project nodes

  var directlyChangedRelatedToProject = new Set();

  var _iterator4 = (0, _createForOfIteratorHelper2["default"])(directlyChangedAndAncestors),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var node = _step4.value;

      if (nodes.has(node)) {
        directlyChangedRelatedToProject.add(node);
      }
    } // Finally, we need to find all descendants of project-related changed nodes
    // in the complete dependency map (project + base)

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var allRelated = includeReachable(directlyChangedRelatedToProject, dependencyMap);
  return buildResult(allRelated, nodes, baseNameToNode);
}

function buildResult(includedNames, nameToNode, baseNameToNode) {
  var baseNames = new Set();
  var nodes = [];

  var _iterator5 = (0, _createForOfIteratorHelper2["default"])(includedNames),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var name = _step5.value;
      var baseNode = baseNameToNode.get(name);

      if (baseNode != null) {
        nodes.push(baseNode);
        baseNames.add(name);
      }

      var node = nameToNode.get(name);

      if (node != null) {
        nodes.push(node);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return {
    baseNames: baseNames,
    nodes: GraphQLNodeMap.from(nodes)
  };
}

function includeReachable(changed, deps) {
  var toVisit = Array.from(changed);
  var visited = new Set();

  while (toVisit.length > 0) {
    var current = toVisit.pop();
    visited.add(current);

    var _iterator6 = (0, _createForOfIteratorHelper2["default"])(deps.get(current) || []),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var dep = _step6.value;

        if (!visited.has(dep)) {
          toVisit.push(dep);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  return visited;
}

function findIncludedFragments(node) {
  var result = [];
  visit(node, {
    FragmentSpread: function FragmentSpread(spread) {
      result.push(spread.name.value);
    }
  });
  return result;
}

function inverseDependencyMap(map) {
  var invertedMap = new Map();

  var _iterator7 = (0, _createForOfIteratorHelper2["default"])(map.entries()),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _step7$value = _step7.value,
          source = _step7$value[0],
          dests = _step7$value[1];
      var inverseDest = source;

      var _iterator8 = (0, _createForOfIteratorHelper2["default"])(dests),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var dest = _step8.value;
          var inverseSource = dest;
          var inverseDests = invertedMap.get(inverseSource);

          if (inverseDests == null) {
            inverseDests = [];
            invertedMap.set(inverseSource, inverseDests);
          }

          inverseDests.push(inverseDest);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return invertedMap;
}

module.exports = {
  forChanges: forChanges,
  forFullBuild: forFullBuild
};