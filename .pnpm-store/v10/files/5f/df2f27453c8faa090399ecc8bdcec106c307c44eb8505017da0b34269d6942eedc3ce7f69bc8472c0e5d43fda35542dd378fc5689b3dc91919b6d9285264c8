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

const {createUserError, createCompilerError} = require('../core/CompilerError');
const {getName} = require('./GraphQLASTUtils');

import type {ExecutableDefinitionNode} from 'graphql';
import type {Sources} from 'relay-compiler';

class GraphQLNodeMap extends Map<string, ExecutableDefinitionNode> {
  static from(nodes: Iterable<ExecutableDefinitionNode>): GraphQLNodeMap {
    const result = new GraphQLNodeMap();
    for (const node of nodes) {
      const name = getName(node);
      const prevNode = result.get(name);
      if (prevNode) {
        throw createUserError(`Duplicate node named '${name}'`, null, [
          node,
          prevNode,
        ]);
      }
      result.set(name, node);
    }
    return result;
  }

  static fromSources(
    sources: Sources<ExecutableDefinitionNode>,
  ): GraphQLNodeMap {
    return GraphQLNodeMap.from(sources.nodes());
  }

  enforceGet(name: string): ExecutableDefinitionNode {
    const node = this.get(name);
    if (!node) {
      throw createCompilerError(
        `GraphQLNodeMap: expected to have a node named ${name}.`,
      );
    }
    return node;
  }
}

module.exports = GraphQLNodeMap;
