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

const ASTCache = require('./ASTCache');
const GraphQL = require('graphql');
const Profiler = require('./GraphQLCompilerProfiler');

const fs = require('fs');
const invariant = require('invariant');
const path = require('path');

const {memoizedFind} = require('./RelayFindGraphQLTags');

import type {File} from '../codegen/CodegenTypes';
import type {FileFilter} from '../codegen/CodegenWatcher';
import type {GraphQLTagFinder} from '../language/RelayLanguagePluginInterface';
import type {DocumentNode} from 'graphql';

export type GetFileFilter = (baseDir: string) => FileFilter;

export type SourceModuleParser = {|
  getFileFilter: GetFileFilter,
  getParser: (baseDir: string) => ASTCache,
  parseFile: (baseDir: string, file: File) => ?DocumentNode,
  parseFileWithSources: (
    baseDir: string,
    file: File,
  ) => ?{|
    +document: DocumentNode,
    +sources: $ReadOnlyArray<string>,
  |},
|};

const parseGraphQL = Profiler.instrument(GraphQL.parse, 'GraphQL.parse');

module.exports = (
  tagFinder: GraphQLTagFinder,
  getFileFilter?: GetFileFilter,
): SourceModuleParser => {
  const memoizedTagFinder = memoizedFind.bind(null, tagFinder);

  function parseFile(baseDir: string, file: File): ?DocumentNode {
    const result = parseFileWithSources(baseDir, file);
    if (result) {
      return result.document;
    }
  }

  // Throws an error if parsing the file fails
  function parseFileWithSources(
    baseDir: string,
    file: File,
  ): ?{|
    +document: DocumentNode,
    +sources: $ReadOnlyArray<string>,
  |} {
    const filePath = path.join(baseDir, file.relPath);
    let text = '';
    try {
      text = fs.readFileSync(filePath, 'utf8');
    } catch {
      invariant(
        false,
        'RelaySourceModuleParser: Files should be filtered before passed to the ' +
          'parser, got unfiltered file `%s`.',
        file.relPath,
      );
    }

    const astDefinitions = [];
    const sources = [];
    memoizedTagFinder(text, baseDir, file).forEach(template => {
      const source = new GraphQL.Source(template, file.relPath);
      const ast = parseGraphQL(source);
      invariant(
        ast.definitions.length,
        'RelaySourceModuleParser: Expected GraphQL text to contain at least one ' +
          'definition (fragment, mutation, query, subscription), got `%s`.',
        template,
      );
      sources.push(source.body);
      astDefinitions.push(...ast.definitions);
    });

    return {
      document: {
        kind: 'Document',
        definitions: astDefinitions,
      },
      sources,
    };
  }

  function getParser(baseDir: string): ASTCache {
    return new ASTCache({
      baseDir,
      parse: parseFile,
    });
  }

  function defaultGetFileFilter(baseDir: string): FileFilter {
    return (file: File) => {
      const filePath = path.join(baseDir, file.relPath);
      let text = '';
      try {
        text = fs.readFileSync(filePath, 'utf8');
      } catch {
        // eslint-disable no-console
        console.warn(
          `RelaySourceModuleParser: Unable to read the file "${filePath}". Looks like it was removed.`,
        );
        return false;
      }
      return text.indexOf('graphql') >= 0;
    };
  }

  return {
    getParser,
    getFileFilter: getFileFilter ?? defaultGetFileFilter,
    parseFile,
    parseFileWithSources,
  };
};
