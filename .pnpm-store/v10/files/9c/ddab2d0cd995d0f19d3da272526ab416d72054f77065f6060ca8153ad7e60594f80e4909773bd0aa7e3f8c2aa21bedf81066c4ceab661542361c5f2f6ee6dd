// @flow strict-local

import assert from 'assert';
import path from 'path';
import tempy from 'tempy';
import {inputFS as fs} from '@parcel/test-utils';
import {md} from '@parcel/diagnostic';
import {normalizeSeparators} from '@parcel/utils';
import {TargetResolver} from '../src/requests/TargetRequest';
import {DEFAULT_OPTIONS as _DEFAULT_OPTIONS, relative} from './test-utils';

const DEFAULT_OPTIONS = {
  ..._DEFAULT_OPTIONS,
  defaultTargetOptions: {
    ..._DEFAULT_OPTIONS.defaultTargetOptions,
    sourceMaps: true,
  },
};

const COMMON_TARGETS_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/common-targets',
);

const COMMON_TARGETS_IGNORE_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/common-targets-ignore',
);

const CUSTOM_TARGETS_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/custom-targets',
);

const CUSTOM_TARGETS_DISTDIR_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/custom-targets-distdir',
);

const INVALID_TARGETS_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/invalid-targets',
);

const INVALID_ENGINES_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/invalid-engines',
);

const INVALID_DISTPATH_FIXTURE_PATH = path.join(
  __dirname,
  'fixtures/invalid-distpath',
);

const DEFAULT_DISTPATH_FIXTURE_PATHS = {
  none: path.join(__dirname, 'fixtures/targets-default-distdir-none'),
  one: path.join(__dirname, 'fixtures/targets-default-distdir-one'),
  two: path.join(__dirname, 'fixtures/targets-default-distdir-two'),
};

const CONTEXT_FIXTURE_PATH = path.join(__dirname, 'fixtures/context');

describe('TargetResolver', () => {
  let cacheDir;
  beforeEach(() => {
    cacheDir = tempy.directory();
  });

  afterEach(() => {
    return fs.rimraf(cacheDir);
  });

  let api = {
    invalidateOnFileCreate() {},
    invalidateOnFileUpdate() {},
    invalidateOnFileDelete() {},
    invalidateOnEnvChange() {},
    invalidateOnOptionChange() {},
    invalidateOnStartup() {},
    invalidateOnBuild() {},
    getInvalidations() {
      return [];
    },
    runRequest() {
      throw new Error('Not implemented');
    },
    storeResult() {},
    canSkipSubrequest() {
      return false;
    },
    getPreviousResult() {},
    getRequestResult() {},
    getSubRequests() {
      return [];
    },
    getInvalidSubRequests() {
      return [];
    },
  };

  it('resolves exactly specified targets', async () => {
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      targets: {
        customA: {
          context: 'browser',
          distDir: 'customA',
        },
        customB: {
          distDir: 'customB',
          distEntry: 'b.js',
          engines: {
            node: '>= 8.0.0',
          },
        },
      },
    });

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'customA',
          publicUrl: '/',
          distDir: normalizeSeparators(path.resolve('customA')),
          env: {
            id: '1d40417b63734b32',
            context: 'browser',
            includeNodeModules: true,
            engines: {
              browsers: ['> 0.25%'],
            },
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
        },
        {
          name: 'customB',
          publicUrl: '/',
          distEntry: 'b.js',
          distDir: normalizeSeparators(path.resolve('customB')),
          env: {
            id: '928f0d1c941b2e57',
            context: 'node',
            includeNodeModules: false,
            engines: {
              node: '>= 8.0.0',
            },
            outputFormat: 'commonjs',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
        },
      ],
    );
  });

  it('resolves common targets from package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'main',
          distDir: 'fixtures/common-targets/dist/main',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'b552bd32da37fa8b',
            context: 'node',
            engines: {
              node: '>= 8.0.0',
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 11,
              line: 2,
            },
            end: {
              column: 30,
              line: 2,
            },
          },
        },
        {
          name: 'module',
          distDir: 'fixtures/common-targets/dist/module',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: '8804e4eb97e2703e',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: false,
            outputFormat: 'esmodule',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {
              inlineSources: true,
            },
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 13,
              line: 3,
            },
            end: {
              column: 34,
              line: 3,
            },
          },
        },
        {
          name: 'browser',
          distDir: 'fixtures/common-targets/dist/browser',
          distEntry: 'index.js',
          publicUrl: '/assets',
          env: {
            id: 'a7ed3e73c53f1923',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 14,
              line: 4,
            },
            end: {
              column: 36,
              line: 4,
            },
          },
        },
      ],
    );
  });

  it('allows ignoring common targets from package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_IGNORE_FIXTURE_PATH),
      [
        {
          name: 'app',
          distDir: relative(
            path.join(COMMON_TARGETS_IGNORE_FIXTURE_PATH, 'dist'),
          ),
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'f7c9644283a8698f',
            context: 'node',
            engines: {
              node: '>= 8.0.0',
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: undefined,
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_IGNORE_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 10,
              line: 3,
            },
            end: {
              column: 24,
              line: 3,
            },
          },
        },
      ],
    );
  });

  it('resolves custom targets from package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    assert.deepEqual(
      await targetResolver.resolve(CUSTOM_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'main',
          distDir: 'fixtures/custom-targets/dist/main',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'b552bd32da37fa8b',
            context: 'node',
            engines: {
              node: '>= 8.0.0',
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 11,
              line: 2,
            },
            end: {
              column: 30,
              line: 2,
            },
          },
        },
        {
          name: 'browserModern',
          distDir: 'fixtures/custom-targets/dist/browserModern',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: '1f28e9ceaf633d83',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 20,
              line: 3,
            },
            end: {
              column: 48,
              line: 3,
            },
          },
        },
        {
          name: 'browserLegacy',
          distDir: 'fixtures/custom-targets/dist/browserLegacy',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: '767bf6e6b675c4f3',
            context: 'browser',
            engines: {
              browsers: ['ie11'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 20,
              line: 4,
            },
            end: {
              column: 48,
              line: 4,
            },
          },
        },
      ],
    );
  });

  it('should not optimize libraries by default', async () => {
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      mode: 'production',
      defaultTargetOptions: {
        ...DEFAULT_OPTIONS.defaultTargetOptions,
        shouldOptimize: true,
      },
    });

    assert.deepEqual(
      await targetResolver.resolve(CUSTOM_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'main',
          distDir: 'fixtures/custom-targets/dist/main',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'b552bd32da37fa8b',
            context: 'node',
            engines: {
              node: '>= 8.0.0',
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 11,
              line: 2,
            },
            end: {
              column: 30,
              line: 2,
            },
          },
        },
        {
          name: 'browserModern',
          distDir: 'fixtures/custom-targets/dist/browserModern',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'ed7c0e65adee71c9',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: true,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 20,
              line: 3,
            },
            end: {
              column: 48,
              line: 3,
            },
          },
        },
        {
          name: 'browserLegacy',
          distDir: 'fixtures/custom-targets/dist/browserLegacy',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'f7692543e59e4c0a',
            context: 'browser',
            engines: {
              browsers: ['ie11'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: true,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(CUSTOM_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 20,
              line: 4,
            },
            end: {
              column: 48,
              line: 4,
            },
          },
        },
      ],
    );
  });

  it('resolves explicit distDir for custom targets from package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    assert.deepEqual(
      await targetResolver.resolve(CUSTOM_TARGETS_DISTDIR_FIXTURE_PATH),
      [
        {
          name: 'app',
          distDir: 'fixtures/custom-targets-distdir/www',
          distEntry: undefined,
          publicUrl: 'www',
          env: {
            id: 'ddb6ac7c9a3a9178',
            context: 'browser',
            engines: {
              browsers: '> 0.25%',
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: undefined,
        },
      ],
    );
  });

  it('skips targets with custom entry source for default entry', async () => {
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      targets: {
        customA: {
          context: 'browser',
          distDir: 'customA',
          source: 'customA/index.js',
        },
        customB: {
          distDir: 'customB',
        },
      },
    });

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'customB',
          distDir: normalizeSeparators(path.resolve('customB')),
          publicUrl: '/',
          env: {
            id: '1d40417b63734b32',
            context: 'browser',
            engines: {
              browsers: ['> 0.25%'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
        },
      ],
    );
  });

  it('skips other targets with custom entry', async () => {
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      targets: {
        customA: {
          context: 'browser',
          distDir: 'customA',
          source: 'customA/index.js',
        },
        customB: {
          distDir: 'customB',
        },
      },
    });

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH, 'customA'),
      [
        {
          name: 'customA',
          distDir: normalizeSeparators(path.resolve('customA')),
          publicUrl: '/',
          env: {
            id: '1d40417b63734b32',
            context: 'browser',
            engines: {
              browsers: ['> 0.25%'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          source: 'customA/index.js',
        },
      ],
    );
  });

  it('resolves main target with context from package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    assert.deepEqual(await targetResolver.resolve(CONTEXT_FIXTURE_PATH), [
      {
        name: 'main',
        distDir: 'fixtures/context/dist/main',
        distEntry: 'index.js',
        publicUrl: '/',
        env: {
          id: '6aafdb9eaa4a3812',
          context: 'node',
          engines: {
            browsers: [
              'last 1 Chrome version',
              'last 1 Safari version',
              'last 1 Firefox version',
              'last 1 Edge version',
            ],
          },
          includeNodeModules: false,
          isLibrary: true,
          outputFormat: 'commonjs',
          shouldOptimize: false,
          shouldScopeHoist: true,
          sourceMap: {},
          loc: undefined,
          sourceType: 'module',
        },
        loc: {
          filePath: relative(path.join(CONTEXT_FIXTURE_PATH, 'package.json')),
          start: {
            column: 11,
            line: 2,
          },
          end: {
            column: 30,
            line: 2,
          },
        },
      },
    ]);
  });

  it('errors when the main target contains a non-js extension', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/application-targets');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message: 'Unexpected output file type .html in target "main"',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  end: {
                    column: 27,
                    line: 2,
                  },
                  message: 'File extension must be .js, .mjs, or .cjs',
                  start: {
                    column: 11,
                    line: 2,
                  },
                },
              ],
            },
          ],
          hints: [
            'The "main" field is meant for libraries. If you meant to output a .html file, either remove the "main" field or choose a different target name.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when the main target uses the global output format', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/main-global');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message:
            'The "global" output format is not supported in the "main" target.',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: undefined,
                  end: {
                    column: 30,
                    line: 5,
                  },
                  start: {
                    column: 23,
                    line: 5,
                  },
                },
              ],
            },
          ],
          hints: [
            'The "main" field is meant for libraries. The outputFormat must be either "commonjs" or "esmodule". Either change or remove the declared outputFormat.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when the main target uses the esmodule output format without a .mjs extension or "type": "module" field', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/main-mjs');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message:
            'Output format "esmodule" cannot be used in the "main" target without a .mjs extension or "type": "module" field.',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: 'Declared output format defined here',
                  end: {
                    column: 32,
                    line: 5,
                  },
                  start: {
                    column: 23,
                    line: 5,
                  },
                },
                {
                  message: 'Inferred output format defined here',
                  end: {
                    column: 25,
                    line: 2,
                  },
                  start: {
                    column: 11,
                    line: 2,
                  },
                },
              ],
            },
          ],
          hints: [
            'Either change the output file extension to .mjs, add "type": "module" to package.json, or remove the declared outputFormat.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when the inferred output format does not match the declared one in common targets', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/main-format-mismatch');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message:
            'Declared output format "esmodule" does not match expected output format "commonjs".',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: 'Declared output format defined here',
                  end: {
                    column: 32,
                    line: 5,
                  },
                  start: {
                    column: 23,
                    line: 5,
                  },
                },
                {
                  message: 'Inferred output format defined here',
                  end: {
                    column: 26,
                    line: 2,
                  },
                  start: {
                    column: 11,
                    line: 2,
                  },
                },
              ],
            },
          ],
          hints: [
            'Either remove the target\'s declared "outputFormat" or change the extension to .mjs or .js.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when the inferred output format does not match the declared one in custom targets', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/custom-format-mismatch');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message:
            'Declared output format "commonjs" does not match expected output format "esmodule".',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: 'Declared output format defined here',
                  end: {
                    column: 32,
                    line: 5,
                  },
                  start: {
                    column: 23,
                    line: 5,
                  },
                },
                {
                  message: 'Inferred output format defined here',
                  end: {
                    column: 26,
                    line: 2,
                  },
                  start: {
                    column: 11,
                    line: 2,
                  },
                },
              ],
            },
          ],
          hints: [
            'Either remove the target\'s declared "outputFormat" or change the extension to .cjs or .js.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when a common library target turns scope hoisting off', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/library-scopehoist');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message: 'Scope hoisting cannot be disabled for library targets.',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: undefined,
                  end: {
                    column: 25,
                    line: 5,
                  },
                  start: {
                    column: 21,
                    line: 5,
                  },
                },
              ],
            },
          ],
          hints: [
            'The "main" target is meant for libraries. Either remove the "scopeHoist" option, or use a different target name.',
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('errors when a custom library target turns scope hoisting off', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/library-custom-scopehoist');
    let code = await fs.readFile(path.join(fixture, 'package.json'), 'utf8');

    // $FlowFixMe
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message: 'Scope hoisting cannot be disabled for library targets.',
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  message: undefined,
                  end: {
                    column: 25,
                    line: 6,
                  },
                  start: {
                    column: 21,
                    line: 6,
                  },
                },
                {
                  message: undefined,
                  end: {
                    column: 23,
                    line: 5,
                  },
                  start: {
                    column: 20,
                    line: 5,
                  },
                },
              ],
            },
          ],
          hints: ['Either remove the "scopeHoist" or "isLibrary" option.'],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      ],
    });
  });

  it('should infer output format for custom targets by extension', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/custom-format-infer-ext');

    assert.deepEqual(await targetResolver.resolve(fixture), [
      {
        name: 'test',
        distDir: relative(path.join(fixture, 'dist')),
        distEntry: 'index.mjs',
        publicUrl: '/',
        env: {
          id: '439701173a9199ea',
          context: 'browser',
          engines: {
            browsers: [
              'last 1 Chrome version',
              'last 1 Safari version',
              'last 1 Firefox version',
              'last 1 Edge version',
            ],
          },
          includeNodeModules: true,
          outputFormat: 'esmodule',
          isLibrary: false,
          shouldOptimize: false,
          shouldScopeHoist: false,
          sourceMap: {},
          loc: undefined,
          sourceType: 'module',
        },
        loc: {
          filePath: relative(path.join(fixture, 'package.json')),
          start: {
            column: 11,
            line: 2,
          },
          end: {
            column: 26,
            line: 2,
          },
        },
      },
    ]);
  });

  it('should infer output format for custom targets by "type": "module" field', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let fixture = path.join(__dirname, 'fixtures/custom-format-infer-type');

    assert.deepEqual(await targetResolver.resolve(fixture), [
      {
        name: 'test',
        distDir: relative(path.join(fixture, 'dist')),
        distEntry: 'index.js',
        publicUrl: '/',
        env: {
          id: '439701173a9199ea',
          context: 'browser',
          engines: {
            browsers: [
              'last 1 Chrome version',
              'last 1 Safari version',
              'last 1 Firefox version',
              'last 1 Edge version',
            ],
          },
          includeNodeModules: true,
          outputFormat: 'esmodule',
          isLibrary: false,
          shouldOptimize: false,
          shouldScopeHoist: false,
          sourceMap: {},
          loc: undefined,
          sourceType: 'module',
        },
        loc: {
          filePath: relative(path.join(fixture, 'package.json')),
          start: {
            column: 11,
            line: 3,
          },
          end: {
            column: 25,
            line: 3,
          },
        },
      },
    ]);
  });

  it('resolves a subset of package.json targets when given a list of names', async () => {
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      targets: ['main', 'browser'],
    });

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'main',
          distDir: 'fixtures/common-targets/dist/main',
          distEntry: 'index.js',
          publicUrl: '/',
          env: {
            id: 'b552bd32da37fa8b',
            context: 'node',
            engines: {
              node: '>= 8.0.0',
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 11,
              line: 2,
            },
            end: {
              column: 30,
              line: 2,
            },
          },
        },
        {
          name: 'browser',
          distDir: 'fixtures/common-targets/dist/browser',
          distEntry: 'index.js',
          publicUrl: '/assets',
          env: {
            id: 'a7ed3e73c53f1923',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: false,
            outputFormat: 'commonjs',
            isLibrary: true,
            shouldOptimize: false,
            shouldScopeHoist: true,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: {
            filePath: relative(
              path.join(COMMON_TARGETS_FIXTURE_PATH, 'package.json'),
            ),
            start: {
              column: 14,
              line: 4,
            },
            end: {
              column: 36,
              line: 4,
            },
          },
        },
      ],
    );
  });

  it('generates a default target in serve mode', async () => {
    let serveDistDir = path.join(DEFAULT_OPTIONS.cacheDir, 'dist');

    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      serveOptions: {distDir: serveDistDir, port: 1234},
    });

    assert.deepEqual(
      await targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      [
        {
          name: 'default',
          distDir: '.parcel-cache/dist',
          publicUrl: '/',
          env: {
            id: 'd6ea1d42532a7575',
            context: 'browser',
            engines: {
              browsers: [
                'last 1 Chrome version',
                'last 1 Safari version',
                'last 1 Firefox version',
                'last 1 Edge version',
              ],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
        },
      ],
    );
  });

  it('generates the correct distDir with no explicit targets', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);

    assert.deepEqual(
      await targetResolver.resolve(DEFAULT_DISTPATH_FIXTURE_PATHS.none),
      [
        {
          name: 'default',
          distDir: relative(
            path.join(DEFAULT_DISTPATH_FIXTURE_PATHS.none, 'dist'),
          ),
          publicUrl: '/',
          env: {
            id: 'a9c07d094d038c73',
            context: 'browser',
            engines: {
              browsers: ['Chrome 80'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
        },
      ],
    );
  });

  it('generates the correct distDir with one explicit target', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);

    assert.deepEqual(
      await targetResolver.resolve(DEFAULT_DISTPATH_FIXTURE_PATHS.one),
      [
        {
          name: 'browserModern',
          distDir: relative(
            path.join(DEFAULT_DISTPATH_FIXTURE_PATHS.one, 'dist'),
          ),
          distEntry: undefined,
          publicUrl: '/',
          env: {
            id: 'a9c07d094d038c73',
            context: 'browser',
            engines: {
              browsers: ['Chrome 80'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: undefined,
        },
      ],
    );
  });

  it('generates the correct distDirs with two explicit targets', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);

    assert.deepEqual(
      await targetResolver.resolve(DEFAULT_DISTPATH_FIXTURE_PATHS.two),
      [
        {
          name: 'browserModern',
          distDir: relative(
            path.join(
              DEFAULT_DISTPATH_FIXTURE_PATHS.two,
              'dist',
              'browserModern',
            ),
          ),
          distEntry: undefined,
          publicUrl: '/',
          env: {
            id: '1f28e9ceaf633d83',
            context: 'browser',
            engines: {
              browsers: ['last 1 version'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: undefined,
        },
        {
          name: 'browserLegacy',
          distDir: relative(
            path.join(
              DEFAULT_DISTPATH_FIXTURE_PATHS.two,
              'dist',
              'browserLegacy',
            ),
          ),
          distEntry: undefined,
          publicUrl: '/',
          env: {
            id: '824e113c03cab3c8',
            context: 'browser',
            engines: {
              browsers: ['IE 11'],
            },
            includeNodeModules: true,
            outputFormat: 'global',
            isLibrary: false,
            shouldOptimize: false,
            shouldScopeHoist: false,
            sourceMap: {},
            loc: undefined,
            sourceType: 'module',
          },
          loc: undefined,
        },
      ],
    );
  });

  it('rejects invalid or unknown fields', async () => {
    let code =
      '{\n' +
      '\t"targets": {\n' +
      '\t\t"main": {\n' +
      '\t\t\t"includeNodeModules": [\n' +
      '\t\t\t\t"react",\n' +
      '\t\t\t\ttrue\n' +
      '\t\t\t],\n' +
      '\t\t\t"context": "nodes",\n' +
      '\t\t\t"outputFormat": "module",\n' +
      '\t\t\t"sourceMap": {\n' +
      '\t\t\t\t"sourceRoot": "asd",\n' +
      '\t\t\t\t"inline": "false",\n' +
      '\t\t\t\t"verbose": true\n' +
      '\t\t\t},\n' +
      '\t\t\t"engines": {\n' +
      '\t\t\t\t"node": "12",\n' +
      '\t\t\t\t"browser": "Chrome 70"\n' +
      '\t\t\t}\n' +
      '\t\t}\n' +
      '\t}\n' +
      '}';
    let targetResolver = new TargetResolver(api, {
      ...DEFAULT_OPTIONS,
      ...JSON.parse(code),
    });

    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(
      () => targetResolver.resolve(COMMON_TARGETS_FIXTURE_PATH),
      {
        message: 'Invalid target descriptor for target "main"',
        diagnostics: [
          {
            message: 'Invalid target descriptor for target "main"',
            origin: '@parcel/core',
            codeFrames: [
              {
                filePath: undefined,
                language: 'json',
                code,
                codeHighlights: [
                  {
                    start: {line: 6, column: 5},
                    end: {line: 6, column: 8},
                    message: 'Expected a wildcard or filepath',
                  },
                  {
                    start: {line: 8, column: 15},
                    end: {line: 8, column: 21},
                    message: 'Did you mean "node"?',
                  },
                  {
                    start: {line: 9, column: 20},
                    end: {line: 9, column: 27},
                    message: 'Did you mean "esmodule"?',
                  },
                  {
                    start: {line: 12, column: 15},
                    end: {line: 12, column: 21},
                    message: 'Expected type boolean',
                  },
                  {
                    start: {line: 13, column: 5},
                    end: {line: 13, column: 13},
                    message: 'Possible values: "inlineSources"',
                  },
                  {
                    start: {line: 17, column: 5},
                    end: {line: 17, column: 13},
                    message: 'Did you mean "browsers"?',
                  },
                ],
              },
            ],
          },
        ],
      },
    );
  });

  it('rejects invalid or unknown fields in package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let code = await fs.readFileSync(
      path.join(INVALID_TARGETS_FIXTURE_PATH, 'package.json'),
      'utf8',
    );
    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(
      () => targetResolver.resolve(INVALID_TARGETS_FIXTURE_PATH),
      {
        diagnostics: [
          {
            message: 'Invalid target descriptor for target "module"',
            origin: '@parcel/core',
            codeFrames: [
              {
                filePath: path.join(
                  INVALID_TARGETS_FIXTURE_PATH,
                  'package.json',
                ),
                language: 'json',
                code,
                codeHighlights: [
                  {
                    start: {line: 9, column: 29},
                    end: {line: 9, column: 35},
                    message: 'Expected type boolean',
                  },
                  {
                    start: {line: 11, column: 7},
                    end: {line: 11, column: 17},
                    message: 'Did you mean "publicUrl"?',
                  },
                ],
              },
            ],
          },
        ],
      },
    );
  });

  it('rejects invalid engines in package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let code = await fs.readFileSync(
      path.join(INVALID_ENGINES_FIXTURE_PATH, 'package.json'),
      'utf8',
    );
    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(
      () => targetResolver.resolve(INVALID_ENGINES_FIXTURE_PATH),
      {
        diagnostics: [
          {
            message: 'Invalid engines in package.json',
            origin: '@parcel/core',
            codeFrames: [
              {
                filePath: path.join(
                  INVALID_ENGINES_FIXTURE_PATH,
                  'package.json',
                ),
                language: 'json',
                code,
                codeHighlights: [
                  {
                    end: {
                      column: 13,
                      line: 8,
                    },
                    message: 'Did you mean "browsers"?',
                    start: {
                      column: 5,
                      line: 8,
                    },
                  },
                  {
                    end: {
                      column: 5,
                      line: 7,
                    },
                    message: 'Expected type string',
                    start: {
                      column: 13,
                      line: 5,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    );
  });

  it('rejects target distpath in package.json', async () => {
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let code = await fs.readFileSync(
      path.join(INVALID_DISTPATH_FIXTURE_PATH, 'package.json'),
      'utf8',
    );
    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(
      () => targetResolver.resolve(INVALID_DISTPATH_FIXTURE_PATH),
      {
        diagnostics: [
          {
            message: 'Invalid distPath for target "legacy"',
            origin: '@parcel/core',
            codeFrames: [
              {
                filePath: path.join(
                  INVALID_DISTPATH_FIXTURE_PATH,
                  'package.json',
                ),
                language: 'json',
                code,
                codeHighlights: [
                  {
                    end: {
                      column: 13,
                      line: 2,
                    },
                    message: 'Expected type string',
                    start: {
                      column: 13,
                      line: 2,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    );
  });

  it('rejects duplicate target paths', async () => {
    let fixture = path.join(__dirname, 'fixtures/duplicate-targets');
    let targetResolver = new TargetResolver(api, DEFAULT_OPTIONS);
    let code = await fs.readFileSync(
      path.join(fixture, 'package.json'),
      'utf8',
    );
    // $FlowFixMe assert.rejects is Node 10+
    await assert.rejects(() => targetResolver.resolve(fixture), {
      diagnostics: [
        {
          message: md`Multiple targets have the same destination path "${path.normalize(
            'dist/index.js',
          )}"`,
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: path.join(fixture, 'package.json'),
              language: 'json',
              code,
              codeHighlights: [
                {
                  end: {
                    column: 25,
                    line: 2,
                  },
                  message: undefined,
                  start: {
                    column: 11,
                    line: 2,
                  },
                },
                {
                  end: {
                    column: 27,
                    line: 3,
                  },
                  message: undefined,
                  start: {
                    column: 13,
                    line: 3,
                  },
                },
              ],
            },
          ],
          hints: [
            'Try removing the duplicate targets, or changing the destination paths.',
          ],
        },
      ],
    });
  });
});
