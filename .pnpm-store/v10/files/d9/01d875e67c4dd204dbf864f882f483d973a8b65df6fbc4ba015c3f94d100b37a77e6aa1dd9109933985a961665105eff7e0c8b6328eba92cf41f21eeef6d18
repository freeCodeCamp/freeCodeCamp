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

const JSModuleParser = require('../core/JSModuleParser');

const invariant = require('invariant');

const {parse, print} = require('graphql');

import type {WatchmanFile} from './types';
import type {ASTNode, ExecutableDefinitionNode} from 'graphql';

export type ASTRecord<T: ASTNode> = {|
  +ast: T,
  +text: string,
|};

export type ExtractFn<T> = (
  baseDir: string,
  file: WatchmanFile,
) => ?{|
  +nodes: $ReadOnlyArray<ASTRecord<T>>,
  +sources: $ReadOnlyArray<string>,
|};

function extractFromJS(
  baseDir: string,
  file: WatchmanFile,
): ?{|
  +nodes: $ReadOnlyArray<ASTRecord<ExecutableDefinitionNode>>,
  +sources: $ReadOnlyArray<string>,
|} {
  if (!file.exists) {
    return null;
  }
  const f = {
    relPath: file.name,
    exists: true,
    hash: file['content.sha1hex'],
  };
  const fileFilter = JSModuleParser.getFileFilter(baseDir);
  if (!fileFilter(f)) {
    return null;
  }
  const result = JSModuleParser.parseFileWithSources(baseDir, f);
  if (result == null || result.document.definitions.length === 0) {
    return null;
  }

  const {document: doc, sources} = result;

  const nodes = doc.definitions.map(def => {
    if (
      def.kind === 'FragmentDefinition' ||
      def.kind === 'OperationDefinition'
    ) {
      return toASTRecord(def);
    }
    throw new Error(`Unexpected definition kind: ${def.kind}`);
  });
  return {
    nodes,
    sources,
  };
}

function toASTRecord<T: ASTNode>(node: T): ASTRecord<T> {
  return {
    ast: node,
    text: print(node),
  };
}

function parseExecutableNode(text: string): ExecutableDefinitionNode {
  const nodes = parse(text).definitions;
  invariant(nodes.length === 1, 'expected exactly 1 definition');
  const node = nodes[0];
  invariant(
    node.kind === 'OperationDefinition' || node.kind === 'FragmentDefinition',
    'expected an ExecutableDefinitionNode',
  );
  return node;
}

module.exports = {
  parseExecutableNode,
  toASTRecord,
  extractFromJS,
};
