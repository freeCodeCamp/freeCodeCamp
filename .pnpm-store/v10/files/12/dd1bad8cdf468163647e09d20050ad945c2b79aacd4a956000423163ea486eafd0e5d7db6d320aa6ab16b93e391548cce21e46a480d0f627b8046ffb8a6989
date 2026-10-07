/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

// flowlint ambiguous-object-type:error

'use strict';

const GraphQLNodeMap = require('./GraphQLNodeMap');

const {getName} = require('./GraphQLASTUtils');
const {visit} = require('graphql');

import type {ExecutableDefinitionNode} from 'graphql';

type DependencyMap = Map<string, Array<string>>;

export type NodeGroup = {|
  +nodes: GraphQLNodeMap,
  +baseNames: Set<string>,
|};

function buildDependencyMap(nodes: GraphQLNodeMap): DependencyMap {
  const dependencyMap: DependencyMap = new Map();
  for (const node of nodes.values()) {
    const name = getName(node);
    if (dependencyMap.has(name)) {
      throw new Error(`Duplicated definition for ${name}`);
    }
    dependencyMap.set(name, findIncludedFragments(node));
  }
  return dependencyMap;
}

function mergeMaps<T>(maps: $ReadOnlyArray<Map<string, T>>): Map<string, T> {
  const result = new Map();
  for (const source of maps) {
    for (const [key, value] of source.entries()) {
      if (result.has(key)) {
        throw new Error(`Duplicate entry for '${key}'.`);
      }
      result.set(key, value);
    }
  }
  return result;
}

function forFullBuild(
  nodes: GraphQLNodeMap,
  baseNodes: $ReadOnlyArray<GraphQLNodeMap>,
): NodeGroup {
  const dependencyMap = mergeMaps(
    [nodes, ...baseNodes].map(buildDependencyMap),
  );
  const includedNames = includeReachable(new Set(nodes.keys()), dependencyMap);
  return buildResult(includedNames, nodes, mergeMaps(baseNodes));
}

function forChanges(
  nodes: GraphQLNodeMap,
  changedNames: Set<string>,
  baseNodes: $ReadOnlyArray<GraphQLNodeMap> = [],
): NodeGroup {
  const projectDependencyMap = buildDependencyMap(nodes);
  const baseDependencyMap = mergeMaps(baseNodes.map(buildDependencyMap));
  const dependencyMap = mergeMaps([projectDependencyMap, baseDependencyMap]);
  const invertedDependencyMap = inverseDependencyMap(dependencyMap);
  const baseNameToNode: Map<string, ExecutableDefinitionNode> = mergeMaps(
    baseNodes,
  );

  // The first step of the process is to find all ancestors of changed nodes.
  // And we perform this search on complete dependency map (project + base)
  const directlyChangedAndAncestors = includeReachable(
    changedNames,
    invertedDependencyMap,
  );
  // Now, we need to intersect obtained set with the project nodes
  const directlyChangedRelatedToProject = new Set();
  for (const node of directlyChangedAndAncestors) {
    if (nodes.has(node)) {
      directlyChangedRelatedToProject.add(node);
    }
  }

  // Finally, we need to find all descendants of project-related changed nodes
  // in the complete dependency map (project + base)
  const allRelated = includeReachable(
    directlyChangedRelatedToProject,
    dependencyMap,
  );

  return buildResult(allRelated, nodes, baseNameToNode);
}

function buildResult(
  includedNames: Set<string>,
  nameToNode: Map<string, ExecutableDefinitionNode>,
  baseNameToNode: Map<string, ExecutableDefinitionNode>,
): NodeGroup {
  const baseNames = new Set();
  const nodes = [];
  for (const name of includedNames) {
    const baseNode = baseNameToNode.get(name);
    if (baseNode != null) {
      nodes.push(baseNode);
      baseNames.add(name);
    }

    const node = nameToNode.get(name);
    if (node != null) {
      nodes.push(node);
    }
  }
  return {
    baseNames,
    nodes: GraphQLNodeMap.from(nodes),
  };
}

function includeReachable(
  changed: Set<string>,
  deps: DependencyMap,
): Set<string> {
  const toVisit = Array.from(changed);
  const visited = new Set();
  while (toVisit.length > 0) {
    const current = toVisit.pop();
    visited.add(current);
    for (const dep of deps.get(current) || []) {
      if (!visited.has(dep)) {
        toVisit.push(dep);
      }
    }
  }
  return visited;
}

function findIncludedFragments(node: ExecutableDefinitionNode): Array<string> {
  const result = [];
  visit(node, {
    FragmentSpread(spread) {
      result.push(spread.name.value);
    },
  });
  return result;
}

function inverseDependencyMap(map: DependencyMap): DependencyMap {
  const invertedMap = new Map();
  for (const [source, dests] of map.entries()) {
    const inverseDest = source;
    for (const dest of dests) {
      const inverseSource = dest;

      let inverseDests = invertedMap.get(inverseSource);
      if (inverseDests == null) {
        inverseDests = [];
        invertedMap.set(inverseSource, inverseDests);
      }
      inverseDests.push(inverseDest);
    }
  }
  return invertedMap;
}

module.exports = {
  forChanges,
  forFullBuild,
};
