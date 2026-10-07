/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');
const md5 = require('../util/md5');

const {toASTRecord} = require('./extractAST');
const {Source, parse} = require('graphql');

import type {ASTRecord} from './extractAST';
import type {SavedStateCollection, WatchmanFile} from './types';
import type {ASTNode} from 'graphql';

export type GraphQLExtractor<T: ASTNode> = (
  baseDir: string,
  file: WatchmanFile,
) => ?{|
  +nodes: $ReadOnlyArray<ASTRecord<T>>,
  +sources: $ReadOnlyArray<string>,
|};

type ASTNodeWithFile<T: ASTNode> = {|
  +file: string,
  +ast: T,
|};

export type SourceChanges<T: ASTNode> = {|
  +added: $ReadOnlyArray<ASTNodeWithFile<T>>,
  +removed: $ReadOnlyArray<ASTNodeWithFile<T>>,
|};

type SourcesState = {
  [filename: string]: {
    nodes: {[hash: string]: ASTNode, ...},
    sources: [string],
    ...
  },
  ...,
};

class Sources<T: ASTNode> {
  _extractFromFile: GraphQLExtractor<T>;
  _state: SourcesState;

  static fromSavedState({
    extractFromFile,
    savedState,
  }: {|
    +extractFromFile: GraphQLExtractor<T>,
    +savedState: SavedStateCollection,
  |}): Sources<T> {
    const state = {};
    for (const {file, sources: savedStateSources} of savedState) {
      const nodes = {};
      const sources = [];
      for (const text of savedStateSources) {
        const doc = parse(new Source(text, file));
        invariant(
          doc.definitions.length,
          'expected not empty list of definitions',
        );
        const entities = doc.definitions.map(node => {
          return toASTRecord(node);
        });
        entities.forEach(astRecord => {
          nodes[md5(astRecord.text)] = astRecord.ast;
        });
        sources.push(text);
      }
      state[file] = {
        nodes,
        sources,
      };
    }
    return new Sources({
      extractFromFile,
      state,
    });
  }

  constructor({
    extractFromFile,
    state,
  }: {|
    extractFromFile: GraphQLExtractor<T>,
    state: SourcesState,
  |}) {
    this._extractFromFile = extractFromFile;
    this._state = {...state};
  }

  processChanges(
    baseDir: string,
    files: $ReadOnlyArray<WatchmanFile>,
  ): {|
    +changes: SourceChanges<T>,
    +sources: Sources<T>,
  |} {
    const added = [];
    const removed = [];
    const state = {...this._state};

    for (const file of files) {
      let newDefs;
      let newSources;
      try {
        const extracted = this._extractFromFile(baseDir, file);
        if (extracted != null) {
          newDefs = extracted.nodes;
          newSources = extracted.sources;
        }
      } catch (error) {
        throw new Error(
          `RelayCompiler: Sources module failed to parse ${file.name}:\n${error.message}`,
        );
      }
      const hasEntry = state.hasOwnProperty(file.name);
      const oldEntry = state[file.name]?.nodes ?? {};

      // First case, we have new changes in the file
      // for example changed Query or Fragment
      if (newDefs != null && newDefs.length > 0) {
        // We need to add all entities from the changed file to added arrays
        const newEntry = {};
        const newTexts = new Set();
        for (const {ast, text} of newDefs) {
          const hashedText = md5(text);
          if (newTexts.has(hashedText)) {
            let name = 'unknown';
            switch (ast.kind) {
              case 'FragmentDefinition':
                name = ast.name.value;
                break;
              case 'OperationDefinition':
                name = ast.name?.value ?? 'unnamed operation';
                break;
            }
            throw new Error(
              `Duplicate definition of \`${name}\` in \`${file.name}\``,
            );
          }
          newTexts.add(hashedText);
          if (hasEntry && oldEntry[hashedText] != null) {
            // Entity text did not change, so we
            // don't need to change it in the state
            newEntry[hashedText] = oldEntry[hashedText];
          } else {
            // Here we have completely new text.
            // We need add it to the `added` changes
            newEntry[hashedText] = ast;
            added.push({file: file.name, ast});
          }
        }

        // Also, we need to delete all old entities
        // that are not included in the new changes
        if (hasEntry) {
          for (const oldHashedText of Object.keys(oldEntry)) {
            const ast = oldEntry[oldHashedText];
            if (!newTexts.has(oldHashedText)) {
              removed.push({file: file.name, ast});
            }
          }
        }

        // Finally, update the state with the changes
        state[file.name] = {
          nodes: newEntry,
          // $FlowFixMe[incompatible-type]
          sources: newSources,
        };
      } else {
        // Otherwise, file has been removed or there are no entities in the file
        if (hasEntry) {
          // We will put all ASTNodes from current state to removed collection
          for (const oldHashedText of Object.keys(oldEntry)) {
            const ast = oldEntry[oldHashedText];
            removed.push({file: file.name, ast});
          }
          delete state[file.name];
        }
      }
    }

    return {
      // $FlowFixMe[incompatible-return]
      changes: {added, removed},
      sources: new Sources({
        extractFromFile: this._extractFromFile,
        state,
      }),
    };
  }

  *nodes(): Iterable<T> {
    for (const file in this._state) {
      const entry = this._state[file];
      for (const node of Object.values(entry.nodes)) {
        yield ((node: $FlowFixMe): T);
      }
    }
  }

  serializeState(): SavedStateCollection {
    const serializedState = [];
    for (const file in this._state) {
      serializedState.push({
        file,
        sources: this._state[file].sources,
      });
    }
    return serializedState;
  }
}

module.exports = Sources;
