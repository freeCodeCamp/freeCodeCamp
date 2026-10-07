/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const Profiler = require('./GraphQLCompilerProfiler');

// $FlowFixMe[untyped-import] : Immutable is not typed
const {Map: ImmutableMap} = require('immutable');

import type {File} from '../codegen/CodegenTypes';
import type {DocumentNode} from 'graphql';

type ParseFn = (baseDir: string, file: File) => ?DocumentNode;

class ASTCache {
  _documents: Map<string, DocumentNode>;

  _baseDir: string;
  _parse: ParseFn;

  constructor(config: {baseDir: string, parse: ParseFn, ...}) {
    this._documents = new Map();
    this._baseDir = config.baseDir;
    this._parse = Profiler.instrument(config.parse, 'ASTCache.parseFn');
  }

  // Short-term: we don't do subscriptions/delta updates, instead always use all definitions
  // $FlowFixMe[value-as-type]
  documents(): ImmutableMap<string, DocumentNode> {
    return ImmutableMap(this._documents);
  }

  // parse should return the set of changes
  parseFiles(files: Set<File>): ImmutableMap<string, DocumentNode> {
    let documents = ImmutableMap();

    files.forEach(file => {
      if (!file.exists) {
        this._documents.delete(file.relPath);
        return;
      }

      const doc = (() => {
        try {
          return this._parse(this._baseDir, file);
        } catch (error) {
          throw new Error(`Parse error: ${error} in "${file.relPath}"`);
        }
      })();

      if (!doc) {
        this._documents.delete(file.relPath);
        return;
      }

      documents = documents.set(file.relPath, doc);
      this._documents.set(file.relPath, doc);
    });

    return documents;
  }
}

module.exports = ASTCache;
