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

const CodegenDirectory = require('./CodegenDirectory');
const CodegenWatcher = require('./CodegenWatcher');
const GraphQLWatchmanClient = require('../core/GraphQLWatchmanClient');
const Profiler = require('../core/GraphQLCompilerProfiler');

const invariant = require('invariant');
const path = require('path');

const {create: createSchema} = require('../core/Schema');
/* $FlowFixMe[untyped-import] - importing immutable, which is untyped (and flow
 * is sad about it) */
const {Map: ImmutableMap} = require('immutable');

import type ASTCache from '../core/ASTCache';
import type {Schema} from '../core/Schema';
import type {Reporter} from '../reporters/Reporter';
import type {CompileResult, File} from './CodegenTypes';
import type {FileFilter, WatchmanExpression} from './CodegenWatcher';
import type {SourceControl} from './SourceControl';
import type {DocumentNode, Source} from 'graphql';

export type ParserConfig = {|
  baseDir: string,
  getFileFilter?: (baseDir: string) => FileFilter,
  getParser: (baseDir: string) => ASTCache,
  getSchemaSource: () => Source,
  schemaExtensions: $ReadOnlyArray<string>,
  generatedDirectoriesWatchmanExpression?: ?WatchmanExpression,
  watchmanExpression?: ?WatchmanExpression,
  filepaths?: ?Array<string>,
|};

type ParserConfigs = {[parser: string]: ParserConfig, ...};
type Parsers = {[parser: string]: ASTCache, ...};

export type IsGeneratedFileFn = (filePath: string) => boolean;
export type KeepExtraFileFn = (filePath: string) => boolean;

export type WriterConfig = {|
  parser: string,
  baseParsers?: Array<string>,
  isGeneratedFile: IsGeneratedFileFn,
  writeFiles: WriteFiles,
|};

type WriterConfigs = {[writer: string]: WriterConfig, ...};

export type WriteFilesOptions = {|
  onlyValidate: boolean,
  schema: Schema,
  documents: ImmutableMap<string, DocumentNode>,
  baseDocuments: ImmutableMap<string, DocumentNode>,
  sourceControl: ?SourceControl,
  reporter: Reporter,
  generatedDirectories?: Array<string>,
|};

export type WriteFiles = WriteFilesOptions => Promise<
  Map<string, CodegenDirectory>,
>;

type OnCompleteCallback = (
  codegenDirs: $ReadOnlyArray<CodegenDirectory>,
) => void;

class CodegenRunner {
  parserConfigs: ParserConfigs;
  writerConfigs: WriterConfigs;
  onlyValidate: boolean;
  parsers: Parsers;
  onComplete: ?OnCompleteCallback;

  // parser => writers that are affected by it
  parserWriters: {[parser: string]: Set<string>, ...};
  _reporter: Reporter;
  _sourceControl: ?SourceControl;

  constructor(options: {
    parserConfigs: ParserConfigs,
    writerConfigs: WriterConfigs,
    onlyValidate: boolean,
    reporter: Reporter,
    sourceControl: ?SourceControl,
    onComplete?: OnCompleteCallback,
    ...
  }) {
    this.parsers = {};
    this.parserConfigs = options.parserConfigs;
    this.writerConfigs = options.writerConfigs;
    this.onlyValidate = options.onlyValidate;
    this.onComplete = options.onComplete;
    this._reporter = options.reporter;
    this._sourceControl = options.sourceControl;

    this.parserWriters = {};
    for (const parser in options.parserConfigs) {
      this.parserWriters[parser] = new Set();
    }

    for (const writer in options.writerConfigs) {
      const config = options.writerConfigs[writer];
      config.baseParsers &&
        config.baseParsers.forEach(parser =>
          this.parserWriters[parser].add(writer),
        );
      this.parserWriters[config.parser].add(writer);
    }
  }

  async compileAll(): Promise<CompileResult> {
    // reset the parsers
    this.parsers = {};
    for (const parserName in this.parserConfigs) {
      try {
        await this.parseEverything(parserName);
      } catch (e) {
        this._reporter.reportError('CodegenRunner.compileAll', e);
        return 'ERROR';
      }
    }

    let hasChanges = false;
    for (const writerName in this.writerConfigs) {
      const result = await this.write(writerName);
      if (result === 'ERROR') {
        return 'ERROR';
      }
      if (result === 'HAS_CHANGES') {
        hasChanges = true;
      }
    }
    return hasChanges ? 'HAS_CHANGES' : 'NO_CHANGES';
  }

  async compile(writerName: string): Promise<CompileResult> {
    const writerConfig = this.writerConfigs[writerName];

    const parsers = [writerConfig.parser];
    if (writerConfig.baseParsers) {
      writerConfig.baseParsers.forEach(parser => parsers.push(parser));
    }
    // Don't bother resetting the parsers
    await Profiler.asyncContext('CodegenRunner:parseEverything', () =>
      Promise.all(parsers.map(parser => this.parseEverything(parser))),
    );

    return await this.write(writerName);
  }

  getDirtyWriters(filePaths: Array<string>): Promise<Set<string>> {
    return Profiler.asyncContext('CodegenRunner:getDirtyWriters', async () => {
      const dirtyWriters = new Set();

      // Check if any files are in the output
      for (const configName in this.writerConfigs) {
        const config = this.writerConfigs[configName];
        for (const filePath of filePaths) {
          if (config.isGeneratedFile(filePath)) {
            dirtyWriters.add(configName);
          }
        }
      }

      // Check for files in the input
      await Promise.all(
        Object.keys(this.parserConfigs).map(parserConfigName =>
          Profiler.waitFor('Watchman:query', async () => {
            const client = new GraphQLWatchmanClient();
            const config = this.parserConfigs[parserConfigName];
            const dirs = await client.watchProject(config.baseDir);

            const relativeFilePaths = filePaths.map(filePath =>
              path.relative(config.baseDir, filePath),
            );

            const query = {
              expression: [
                'allof',
                config.watchmanExpression,
                ['name', relativeFilePaths, 'wholename'],
              ],
              fields: ['exists'],
              relative_root: dirs.relativePath,
            };

            const result = await client.command('query', dirs.root, query);
            client.end();

            if (result.files.length > 0) {
              this.parserWriters[parserConfigName].forEach(writerName =>
                dirtyWriters.add(writerName),
              );
            }
          }),
        ),
      );

      return dirtyWriters;
    });
  }

  async parseEverything(parserName: string): Promise<void> {
    if (this.parsers[parserName]) {
      // no need to parse
      return;
    }

    const parserConfig = this.parserConfigs[parserName];
    this.parsers[parserName] = parserConfig.getParser(parserConfig.baseDir);
    const filter = parserConfig.getFileFilter
      ? parserConfig.getFileFilter(parserConfig.baseDir)
      : anyFileFilter;

    if (parserConfig.filepaths && parserConfig.watchmanExpression) {
      throw new Error(
        'Provide either `watchmanExpression` or `filepaths` but not both.',
      );
    }

    let files;
    if (parserConfig.watchmanExpression) {
      files = await CodegenWatcher.queryFiles(
        parserConfig.baseDir,
        parserConfig.watchmanExpression,
        filter,
      );
    } else if (parserConfig.filepaths) {
      files = await CodegenWatcher.queryFilepaths(
        parserConfig.baseDir,
        parserConfig.filepaths,
        filter,
      );
    } else {
      throw new Error(
        'Either `watchmanExpression` or `filepaths` is required to query files',
      );
    }
    this.parseFileChanges(parserName, files);
  }

  parseFileChanges(parserName: string, files: Set<File>): void {
    return Profiler.run('CodegenRunner.parseFileChanges', () => {
      const parser = this.parsers[parserName];
      // this maybe should be await parser.parseFiles(files);
      parser.parseFiles(files);
    });
  }

  // We cannot do incremental writes right now.
  // When we can, this could be writeChanges(writerName, parserName, parsedDefinitions)
  write(writerName: string): Promise<CompileResult> {
    return Profiler.asyncContext('CodegenRunner.write', async () => {
      try {
        this._reporter.reportMessage(`\nWriting ${writerName}`);
        const {
          writeFiles,
          parser,
          baseParsers,
          isGeneratedFile,
        } = this.writerConfigs[writerName];

        let baseDocuments = ImmutableMap();
        if (baseParsers) {
          baseParsers.forEach(baseParserName => {
            invariant(
              this.parsers[baseParserName] != null,
              'Trying to access an uncompiled base parser config: %s',
              baseParserName,
            );
            baseDocuments = baseDocuments.merge(
              this.parsers[baseParserName].documents(),
            );
          });
        }

        const {
          baseDir,
          generatedDirectoriesWatchmanExpression,
        } = this.parserConfigs[parser];
        let generatedDirectories = [];
        if (generatedDirectoriesWatchmanExpression) {
          const relativePaths = await CodegenWatcher.queryDirectories(
            baseDir,
            generatedDirectoriesWatchmanExpression,
          );
          generatedDirectories = relativePaths.map(x => path.join(baseDir, x));
        }

        // always create a new writer: we have to write everything anyways
        const documents = this.parsers[parser].documents();
        const schema = Profiler.run('getSchema', () =>
          createSchema(
            this.parserConfigs[parser].getSchemaSource(),
            baseDocuments.toArray(),
            this.parserConfigs[parser].schemaExtensions,
          ),
        );

        const outputDirectories = await writeFiles({
          onlyValidate: this.onlyValidate,
          schema,
          documents,
          baseDocuments,
          generatedDirectories,
          sourceControl: this._sourceControl,
          reporter: this._reporter,
        });

        for (const dir of outputDirectories.values()) {
          const all = [
            ...dir.changes.created,
            ...dir.changes.updated,
            ...dir.changes.deleted,
            ...dir.changes.unchanged,
          ];
          for (const filename of all) {
            const filePath = dir.getPath(filename);
            invariant(
              isGeneratedFile(filePath),
              'CodegenRunner: %s returned false for isGeneratedFile, ' +
                'but was in generated directory',
              filePath,
            );
          }
        }

        const onCompleteCallback = this.onComplete;
        if (onCompleteCallback != null) {
          onCompleteCallback(Array.from(outputDirectories.values()));
        }

        const combinedChanges = CodegenDirectory.combineChanges(
          Array.from(outputDirectories.values()),
        );

        this._reporter.reportMessage(
          CodegenDirectory.formatChanges(combinedChanges, {
            onlyValidate: this.onlyValidate,
          }),
        );

        return CodegenDirectory.hasChanges(combinedChanges)
          ? 'HAS_CHANGES'
          : 'NO_CHANGES';
      } catch (e) {
        this._reporter.reportError('CodegenRunner.write', e);
        return 'ERROR';
      }
    });
  }

  async watchAll(): Promise<void> {
    // get everything set up for watching
    await this.compileAll();

    for (const parserName in this.parserConfigs) {
      await this.watch(parserName);
    }
  }

  async watch(parserName: string): Promise<void> {
    const parserConfig = this.parserConfigs[parserName];

    if (!parserConfig.watchmanExpression) {
      throw new Error('`watchmanExpression` is required to watch files');
    }

    // watchCompile starts with a full set of files as the changes
    // But as we need to set everything up due to potential parser dependencies,
    // we should prevent the first watch callback from doing anything.
    let firstChange = true;

    await CodegenWatcher.watchCompile(
      parserConfig.baseDir,
      parserConfig.watchmanExpression,
      parserConfig.getFileFilter
        ? parserConfig.getFileFilter(parserConfig.baseDir)
        : anyFileFilter,
      async files => {
        invariant(
          this.parsers[parserName] != null,
          'Trying to watch an uncompiled parser config: %s',
          parserName,
        );
        if (firstChange) {
          firstChange = false;
          return;
        }
        const dependentWriters = [];
        this.parserWriters[parserName].forEach(writer =>
          dependentWriters.push(writer),
        );

        try {
          if (!this.parsers[parserName]) {
            // have to load the parser and make sure all of its dependents are set
            await this.parseEverything(parserName);
          } else {
            this.parseFileChanges(parserName, files);
          }
          await Promise.all(dependentWriters.map(writer => this.write(writer)));
        } catch (error) {
          this._reporter.reportError('CodegenRunner.watch', error);
        }
        this._reporter.reportMessage(
          `Watching for changes to ${parserName}...`,
        );
      },
    );
    this._reporter.reportMessage(`Watching for changes to ${parserName}...`);
  }
}

function anyFileFilter(file: File): boolean {
  return true;
}

module.exports = CodegenRunner;
