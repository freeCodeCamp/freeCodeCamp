// @flow strict-local
import NodeResolver from '../src/NodeResolver';
import path from 'path';
import assert from 'assert';
import nullthrows from 'nullthrows';
import {ncp, overlayFS, outputFS} from '@parcel/test-utils';
import {loadConfig as configCache} from '@parcel/utils';
import {createEnvironment} from '@parcel/core/src/Environment';
import Environment from '@parcel/core/src/public/Environment';
import {DEFAULT_OPTIONS} from '@parcel/core/test/test-utils';

const rootDir = path.join(__dirname, 'fixture');

const NODE_ENV = new Environment(
  createEnvironment({
    context: 'node',
    includeNodeModules: false,
  }),
  DEFAULT_OPTIONS,
);

const NODE_INCLUDE_ENV = new Environment(
  createEnvironment({
    context: 'node',
    includeNodeModules: true,
  }),
  DEFAULT_OPTIONS,
);

const BROWSER_ENV = new Environment(
  createEnvironment({
    context: 'browser',
    includeNodeModules: true,
  }),
  DEFAULT_OPTIONS,
);

describe('resolver', function () {
  let resolver;

  beforeEach(async function () {
    await overlayFS.mkdirp(rootDir);
    await ncp(rootDir, rootDir);

    // Create the symlinks here to prevent cross platform and git issues
    await outputFS.symlink(
      path.join(rootDir, 'packages/source'),
      path.join(rootDir, 'node_modules/source'),
    );
    await outputFS.symlink(
      path.join(
        rootDir,
        'node_modules/.pnpm/source-pnpm@1.0.0/node_modules/source-pnpm',
      ),
      path.join(rootDir, 'node_modules/source-pnpm'),
    );
    await outputFS.symlink(
      path.join(rootDir, 'packages/source-alias'),
      path.join(rootDir, 'node_modules/source-alias'),
    );
    await outputFS.symlink(
      path.join(rootDir, 'packages/source-alias-glob'),
      path.join(rootDir, 'node_modules/source-alias-glob'),
    );
    await outputFS.symlink(
      path.join(rootDir, 'bar.js'),
      path.join(rootDir, 'baz.js'),
    );
    await outputFS.symlink(
      path.join(rootDir, 'nested'),
      path.join(rootDir, 'symlinked-nested'),
    );

    resolver = new NodeResolver({
      fs: overlayFS,
      projectRoot: rootDir,
      mainFields: ['browser', 'source', 'module', 'main'],
      extensions: ['.js', '.json'],
    });

    configCache.clear();
  });

  describe('file paths', function () {
    it('should resolve a relative path with an extension', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './bar.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve a relative path without an extension', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve an absolute path from the root module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'nested', 'test.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve an absolute path from a node_modules folder', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'foo', 'index.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve a tilde path from the root module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '~/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'nested', 'test.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve a tilde path from the root module without a slash', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '~bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'nested', 'test.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve a tilde path from a node_modules folder', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '~/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'foo', 'nested', 'baz.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.join(rootDir, 'node_modules', 'foo', 'bar.js'),
      );
    });

    it('should resolve an index file in a directory', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './nested',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.join(rootDir, 'nested', 'index.js'),
      );
    });

    it('should not resolve an index file in a directory for URL specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './nested',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {message: "Cannot load file './nested' in './'.", hints: []},
      ]);
    });

    it('should resolve a file with a question mark with CommonJS specifiers', async function () {
      // Windows filenames cannot contain question marks.
      if (process.platform === 'win32') {
        return;
      }

      await overlayFS.writeFile(path.join(rootDir, 'a?b.js'), '');

      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './a?b.js',
        specifierType: 'commonjs',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'a?b.js'));
    });

    it('should not resolve a file with a question mark with ESM specifiers', async function () {
      // Windows filenames cannot contain question marks.
      if (process.platform === 'win32') {
        return;
      }

      await overlayFS.writeFile(path.join(rootDir, 'a?b.js'), '');

      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './a?b.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {message: "Cannot load file './a' in './'.", hints: []},
      ]);
    });

    it('should resolve a file with an encoded question mark with ESM specifiers', async function () {
      // Windows filenames cannot contain question marks.
      if (process.platform === 'win32') {
        return;
      }

      await overlayFS.writeFile(path.join(rootDir, 'a?b.js'), '');

      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './a%3Fb.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'a?b.js'));
    });

    it('should not support percent encoding in CommonJS specifiers', async function () {
      // Windows filenames cannot contain question marks.
      if (process.platform === 'win32') {
        return;
      }

      await overlayFS.writeFile(path.join(rootDir, 'a?b.js'), '');

      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './a%3Fb.js',
        specifierType: 'commonjs',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {
          message: "Cannot load file './a%3Fb.js' in './'.",
          hints: ["Did you mean '__./a?b.js__'?"],
        },
      ]);
    });

    it('should support query params for ESM specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './nested?foo=bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.join(rootDir, 'nested', 'index.js'),
      );
      assert.deepEqual(nullthrows(resolved).query?.toString(), 'foo=bar');
    });

    it('should not support query params for CommonJS specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './nested?foo=bar',
        specifierType: 'commonjs',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {message: "Cannot load file './nested?foo=bar' in './'.", hints: []},
      ]);
    });
  });

  describe('builtins', function () {
    it('should resolve node builtin modules', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'zlib',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: require.resolve('browserify-zlib'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/browserify-zlib',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: require.resolve('browserify-zlib/lib/index.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          require.resolve('browserify-zlib/package.json'),
        ],
      });
    });

    it('Should be able to handle node: prefixes', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'node:zlib',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: require.resolve('browserify-zlib'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/browserify-zlib',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: require.resolve('browserify-zlib/lib/index.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          require.resolve('browserify-zlib/package.json'),
        ],
      });
    });

    it('should resolve unimplemented node builtin modules to an empty file', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'fs',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(__dirname, '..', 'src', '_empty.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(__dirname, '..', 'src', '_empty.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(__dirname, '..', 'src', '_empty.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(__dirname, '..', 'package.json'),
        ],
      });
    });

    it('should error when resolving node builtin modules with --target=node', async function () {
      let resolved = await resolver.resolve({
        env: NODE_ENV,
        filename: 'zlib',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {isExcluded: true});
    });

    it('should exclude the electron module in electron environments', async function () {
      let resolved = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'electron-main',
            isLibrary: true,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'electron',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
        sourcePath: path.join(rootDir, 'foo.js'),
      });

      assert.deepEqual(resolved, {isExcluded: true});
    });
  });

  describe('node_modules', function () {
    it('should resolve a node_modules index.js', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'foo',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'foo', 'index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'foo', 'package.json'),
        ],
      });
    });

    it('should resolve a node_modules package.main', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-main',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'package-main', 'main.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-main',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-main', 'package.json'),
        ],
      });
    });

    it('should resolve a node_modules package.module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-module',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-module',
          'module.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-module',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-module', 'package.json'),
        ],
      });
    });

    it('should resolve a node_modules package.browser main field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-browser',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser',
          'browser.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-browser', 'package.json'),
        ],
      });
    });

    it('should not resolve a node_modules package.browser main field with --target=node', async function () {
      let resolved = await resolver.resolve({
        env: NODE_INCLUDE_ENV,
        filename: 'package-browser',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser',
          'main.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-browser', 'package.json'),
        ],
      });
    });

    it('should fall back to index.js when it cannot find package.main', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-fallback',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-fallback',
          'index.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-fallback',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-fallback',
              'main.js',
            ),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-fallback',
              'main.js.js',
            ),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-fallback',
              'main.js.json',
            ),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-fallback',
              'main.js/package.json',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-fallback',
            'package.json',
          ),
        ],
      });
    });

    it('should resolve a node_module package.main pointing to a directory', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-main-directory',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-main-directory',
          'nested',
          'index.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-main-directory',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-main-directory',
              'nested.js',
            ),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-main-directory',
              'nested.json',
            ),
          },
          {
            filePath: path.join(
              rootDir,
              'node_modules',
              'package-main-directory',
              'nested',
              'package.json',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-main-directory',
              'nested',
              'index.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-main-directory',
            'package.json',
          ),
        ],
      });
    });

    it('should resolve a file inside a node_modules folder', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'foo/nested/baz',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'foo', 'nested', 'baz.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'foo',
              'nested',
              'baz.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'foo', 'package.json'),
        ],
      });
    });

    it('should resolve a scoped module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '@scope/pkg',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.resolve(rootDir, 'node_modules/@scope/pkg/index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/@scope/pkg',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', '@scope', 'pkg', 'package.json'),
        ],
      });
    });

    it('should resolve a file inside a scoped module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '@scope/pkg/foo/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.resolve(rootDir, 'node_modules/@scope/pkg/foo/bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/@scope/pkg',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              '@scope',
              'pkg',
              'foo',
              'bar.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', '@scope', 'pkg', 'package.json'),
        ],
      });
    });

    describe('sideEffects: false', function () {
      it('should determine sideEffects correctly (file)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false/src/index.js',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-false/src/index.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-false',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index.js',
              ),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-false',
              'package.json',
            ),
          ],
        });
      });

      it('should determine sideEffects correctly (extensionless file)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false/src/index',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-false/src/index.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-false',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index.js',
              ),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-false',
              'package.json',
            ),
          ],
        });
      });

      it('should determine sideEffects correctly (sub folder)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false/src/',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-false/src/index.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-false',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'package.json',
              ),
            },
            {
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index',
              ),
              fileName: 'package.json',
            },
            {
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index.js',
              ),
              fileName: 'package.json',
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-false',
              'package.json',
            ),
          ],
        });
      });

      it('should determine sideEffects correctly (main field)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false/src/',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-false/src/index.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-false',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'package.json',
              ),
            },
            {
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index',
              ),
              fileName: 'package.json',
            },
            {
              aboveFilePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-false',
                'src',
                'index.js',
              ),
              fileName: 'package.json',
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-false',
              'package.json',
            ),
          ],
        });
      });

      it('should determine sideEffects correctly (main field exists in upward package)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-package-redirect-up/foo/bar',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-package-redirect-up/foo/real-bar.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-package-redirect-up',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-package-redirect-up',
                'foo',
                'bar.js',
              ),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-package-redirect-up',
                'foo',
                'bar.json',
              ),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(
                rootDir,
                'node_modules/side-effects-package-redirect-up/foo/real-bar.js',
              ),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-up',
              'package.json',
            ),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-up',
              'foo',
              'bar',
              'package.json',
            ),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-up',
              'foo',
              'package.json',
            ),
          ],
        });
      });

      it('should determine sideEffects correctly (main field exists in downward package)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-package-redirect-down/foo/bar',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.resolve(
            rootDir,
            'node_modules/side-effects-package-redirect-down/foo/bar/baz/real-bar.js',
          ),
          sideEffects: false,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/side-effects-package-redirect-down',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-package-redirect-down',
                'foo',
                'bar.js',
              ),
            },
            {
              filePath: path.join(
                rootDir,
                'node_modules',
                'side-effects-package-redirect-down',
                'foo',
                'bar.json',
              ),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(
                rootDir,
                'node_modules/side-effects-package-redirect-down/foo/bar/baz/real-bar.js',
              ),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-down',
              'package.json',
            ),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-down',
              'foo',
              'bar',
              'package.json',
            ),
            path.join(
              rootDir,
              'node_modules',
              'side-effects-package-redirect-down',
              'foo',
              'bar',
              'baz',
              'package.json',
            ),
          ],
        });
      });
    });

    describe('sideEffects: globs', function () {
      it('should determine sideEffects correctly (matched)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false-glob/a/index',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(
          {filePath: resolved?.filePath, sideEffects: resolved?.sideEffects},
          {
            filePath: path.resolve(
              rootDir,
              'node_modules/side-effects-false-glob/a/index.js',
            ),
            sideEffects: undefined,
          },
        );
      });
      it('should determine sideEffects correctly (unmatched)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false-glob/b/index.js',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(
          {filePath: resolved?.filePath, sideEffects: resolved?.sideEffects},
          {
            filePath: path.resolve(
              rootDir,
              'node_modules/side-effects-false-glob/b/index.js',
            ),
            sideEffects: false,
          },
        );
      });
      it('should determine sideEffects correctly (matched dotslash)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false-glob/sub/index.js',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(
          {filePath: resolved?.filePath, sideEffects: resolved?.sideEffects},
          {
            filePath: path.resolve(
              rootDir,
              'node_modules/side-effects-false-glob/sub/index.js',
            ),
            sideEffects: undefined,
          },
        );
      });
      it('should determine sideEffects correctly (unmatched, prefix in subdir)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false-glob/sub/a/index.js',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(
          {filePath: resolved?.filePath, sideEffects: resolved?.sideEffects},
          {
            filePath: path.resolve(
              rootDir,
              'node_modules/side-effects-false-glob/sub/a/index.js',
            ),
            sideEffects: false,
          },
        );
      });
      it('should determine sideEffects correctly (only name)', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'side-effects-false-glob/sub/index.json',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(
          {filePath: resolved?.filePath, sideEffects: resolved?.sideEffects},
          {
            filePath: path.resolve(
              rootDir,
              'node_modules/side-effects-false-glob/sub/index.json',
            ),
            sideEffects: undefined,
          },
        );
      });
    });

    it('should not resolve a node module for URL dependencies', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '@scope/pkg',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {message: "Cannot load file './@scope/pkg' in './'.", hints: []},
      ]);
    });

    it('should resolve a node module for URL dependencies with the npm: prefix', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'npm:@scope/pkg',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(
        nullthrows(resolved).filePath,
        path.join(rootDir, 'node_modules', '@scope', 'pkg', 'index.js'),
      );
    });

    it('should support query params for bare ESM specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '@scope/pkg?foo=2',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.resolve(rootDir, 'node_modules/@scope/pkg/index.js'),
      );
      assert.deepEqual(nullthrows(resolved).query?.toString(), 'foo=2');
    });

    it('should not support query params for bare CommonJS specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '@scope/pkg?foo=2',
        specifierType: 'commonjs',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(nullthrows(resolved).diagnostics, [
        {
          message: 'Cannot find module @scope/pkg?foo=2',
          hints: ["Did you mean '__@scope/pkg__'?"],
        },
      ]);
    });

    it('should support query params for npm: specifiers', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'npm:@scope/pkg?foo=2',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.resolve(rootDir, 'node_modules/@scope/pkg/index.js'),
      );
      assert.deepEqual(nullthrows(resolved).query?.toString(), 'foo=2');
    });
  });

  describe('aliases', function () {
    it('should alias the main file using the package.browser field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-browser-alias',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'browser.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser-alias',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-alias',
            'package.json',
          ),
        ],
      });
    });

    it('should alias a sub-file using the package.browser field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-browser-alias/foo',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'bar.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser-alias',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-alias',
            'package.json',
          ),
        ],
      });
    });

    it('should alias a relative file using the package.browser field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './foo',
        specifierType: 'esm',
        parent: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'browser.js',
        ),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'bar.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-browser-alias',
              'browser.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-browser-alias',
              'bar',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-alias',
            'package.json',
          ),
        ],
      });
    });

    it('should not alias using the package.browser field with --target=node', async function () {
      let resolved = await resolver.resolve({
        env: NODE_INCLUDE_ENV,
        filename: 'package-browser-alias/foo',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'foo.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser-alias',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-alias',
            'package.json',
          ),
        ],
      });
    });

    it('should alias a deep nested relative file using the package.browser field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './nested',
        specifierType: 'esm',
        parent: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'browser.js',
        ),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-browser-alias',
          'subfolder1/subfolder2/subfile.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-browser-alias',
              'browser.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-browser-alias',
              'nested',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-browser-alias',
              'subfolder1',
              'subfolder2',
              'subfile.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-alias',
            'package.json',
          ),
        ],
      });
    });

    it('should alias a sub-file using the package.alias field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-alias/foo',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'package-alias', 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-alias',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
        ],
      });
    });

    it('should alias a relative file using the package.alias field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './foo',
        specifierType: 'esm',
        parent: path.join(
          rootDir,
          'node_modules',
          'package-alias',
          'browser.js',
        ),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'package-alias', 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'browser.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'bar',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
        ],
      });
    });

    it('should alias a glob using the package.alias field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './lib/test',
        specifierType: 'esm',
        parent: path.join(
          rootDir,
          'node_modules',
          'package-alias-glob',
          'index.js',
        ),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(
          rootDir,
          'node_modules',
          'package-alias-glob',
          'src',
          'test.js',
        ),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias-glob',
              'index.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias-glob',
              'src',
              'test',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias-glob',
              'src',
              'test.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-alias-glob',
            'package.json',
          ),
        ],
      });
    });

    it('should apply a module alias using the package.alias field in the root package', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliased',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'foo', 'index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'foo', 'package.json'),
        ],
      });
    });

    it('should apply a global module alias using the package.alias field in the root package', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliased',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'package-alias', 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'foo', 'index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
          path.join(rootDir, 'node_modules', 'foo', 'package.json'),
        ],
      });
    });

    it('should apply a global module alias to a sub-file in a package', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliased/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'package-alias', 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'node_modules', 'foo', 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
          {
            fileName: 'node_modules/foo',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
          path.join(rootDir, 'node_modules', 'foo', 'package.json'),
        ],
      });
    });

    it('should apply a module alias pointing to a file using the package.alias field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliased-file',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'bar.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply a global module alias pointing to a file using the package.alias field', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliased-file',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'package-alias', 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'bar.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
        ],
      });
    });

    it('should apply an alias for a virtual module folder (relative to project dir)', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliasedfolder/test.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'test.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module folder only (relative to project dir)', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliasedfolder',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested'),
          },
          {
            filePath: path.join(rootDir, 'nested.js'),
          },
          {
            filePath: path.join(rootDir, 'nested.json'),
          },
          {
            filePath: path.join(rootDir, 'nested', 'package.json'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested/index.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module folder (relative to root dir)', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliasedabsolute/test.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'test.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module folder only (relative to root dir)', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'aliasedabsolute',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'index.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested'),
          },
          {
            filePath: path.join(rootDir, 'nested.js'),
          },
          {
            filePath: path.join(rootDir, 'nested.json'),
          },
          {
            filePath: path.join(rootDir, 'nested', 'package.json'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested/index.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module folder sub-path', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'foo/bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'bar.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'bar.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module folder glob sub-path', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'glob/bar/test',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'test.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply an alias for a virtual module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'something',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'test.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
        ],
        invalidateOnFileChange: [path.join(rootDir, 'package.json')],
      });
    });

    it('should apply a global alias for a virtual module', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'something',
        specifierType: 'esm',
        parent: path.join(rootDir, 'node_modules', 'package-alias', 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(rootDir, 'nested', 'test.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(
              rootDir,
              'node_modules',
              'package-alias',
              'foo.js',
            ),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'nested', 'test.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(rootDir, 'node_modules', 'package-alias', 'package.json'),
        ],
      });
    });

    it('should resolve to an empty file when package.browser resolves to false', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-browser-exclude',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(__dirname, '..', 'src', '_empty.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-browser-exclude',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(__dirname, '..', 'src', '_empty.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-browser-exclude',
            'package.json',
          ),
          path.join(__dirname, '..', 'package.json'),
        ],
      });
    });

    it('should resolve to an empty file when package.alias resolves to false', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-alias-exclude',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {
        filePath: path.join(__dirname, '..', 'src', '_empty.js'),
        sideEffects: undefined,
        query: undefined,
        invalidateOnFileCreate: [
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'index'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'node_modules/package-alias-exclude',
            aboveFilePath: path.join(rootDir, 'foo.js'),
          },
          {
            fileName: 'package.json',
            aboveFilePath: path.join(__dirname, '..', 'src', '_empty.js'),
          },
        ],
        invalidateOnFileChange: [
          path.join(rootDir, 'package.json'),
          path.join(
            rootDir,
            'node_modules',
            'package-alias-exclude',
            'package.json',
          ),
          path.join(__dirname, '..', 'package.json'),
        ],
      });
    });
  });

  describe('source field', function () {
    describe('package behind symlinks', function () {
      it('should use the source field, when its realpath is not under `node_modules`', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'source',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.join(rootDir, 'packages', 'source', 'source.js'),
          sideEffects: undefined,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/source',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(rootDir, 'node_modules', 'source', 'package.json'),
          ],
        });
      });

      it('should not use the source field, when its realpath is under `node_modules`', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'source-pnpm',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.join(
            rootDir,
            'node_modules',
            '.pnpm',
            'source-pnpm@1.0.0',
            'node_modules',
            'source-pnpm',
            'dist.js',
          ),
          sideEffects: undefined,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/source-pnpm',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(rootDir, 'node_modules', 'source-pnpm', 'package.json'),
          ],
        });
      });
    });

    describe('package not behind symlinks', function () {
      it('should not use the source field', async function () {
        let resolved = await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'source-not-symlinked',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        });
        assert.deepEqual(resolved, {
          filePath: path.join(
            rootDir,
            'node_modules',
            'source-not-symlinked',
            'dist.js',
          ),
          sideEffects: undefined,
          query: undefined,
          invalidateOnFileCreate: [
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'index'),
            },
            {
              fileName: 'package.json',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
            {
              fileName: 'node_modules/source-not-symlinked',
              aboveFilePath: path.join(rootDir, 'foo.js'),
            },
          ],
          invalidateOnFileChange: [
            path.join(rootDir, 'package.json'),
            path.join(
              rootDir,
              'node_modules',
              'source-not-symlinked',
              'package.json',
            ),
          ],
        });
      });
    });
  });

  describe('symlinks', function () {
    it('should resolve symlinked files to their realpath', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './baz.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(nullthrows(resolved).filePath, path.join(rootDir, 'bar.js'));
    });

    it('should resolve symlinked directories to their realpath', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './symlinked-nested',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.equal(
        nullthrows(resolved).filePath,
        path.join(rootDir, 'nested', 'index.js'),
      );
    });
  });

  describe('error handling', function () {
    it('should return diagnostics when package.module does not exist', async function () {
      let result = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'package-module-fallback',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });

      assert.equal(
        nullthrows(nullthrows(result).diagnostics)[0].message,
        `Could not load './module.js' from module 'package-module-fallback' found in package.json#module`,
      );
    });

    it('should throw when a relative path cannot be resolved', async function () {
      let result = await resolver.resolve({
        env: BROWSER_ENV,
        filename: './xyz.js',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
      });

      assert.equal(
        nullthrows(nullthrows(result).diagnostics)[0].message,
        `Cannot load file './xyz.js' in './'.`,
      );
    });

    it('should throw when a node_module cannot be resolved', async function () {
      assert.strictEqual(
        null,
        await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'xyz',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        }),
      );
    });

    it('should throw when a subfile of a node_module cannot be resolved', async function () {
      assert.strictEqual(
        null,
        await resolver.resolve({
          env: BROWSER_ENV,
          filename: 'xyz/test/file',
          specifierType: 'esm',
          parent: path.join(rootDir, 'foo.js'),
        }),
      );
    });

    it('should error when a library is missing an external dependency', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'test',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
        sourcePath: path.join(rootDir, 'foo.js'),
      });

      assert.equal(
        result?.diagnostics?.[0].message,
        'External dependency "test" is not declared in package.json.',
      );
    });

    it('should not error when external dependencies are declared', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'foo',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
        sourcePath: path.join(rootDir, 'foo.js'),
      });

      assert.deepEqual(result, {isExcluded: true});
    });

    it('should not error when external dependencies are declared in peerDependencies', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'bar',
        specifierType: 'esm',
        parent: path.join(rootDir, 'foo.js'),
        sourcePath: path.join(rootDir, 'foo.js'),
      });

      assert.deepEqual(result, {isExcluded: true});
    });

    it('should not error on missing dependencies for environment builtins', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'atom',
        specifierType: 'esm',
        parent: path.join(rootDir, 'env-dep/foo.js'),
        sourcePath: path.join(rootDir, 'env-dep/foo.js'),
      });

      assert.deepEqual(result, {isExcluded: true});
    });

    it('should not error on builtin node modules', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'buffer',
        specifierType: 'esm',
        parent: path.join(rootDir, 'env-dep/foo.js'),
        sourcePath: path.join(rootDir, 'env-dep/foo.js'),
      });

      assert.deepEqual(result, {isExcluded: true});
    });

    it('should error when a library has an incorrect external dependency version', async function () {
      let result = await resolver.resolve({
        env: new Environment(
          createEnvironment({
            context: 'browser',
            isLibrary: true,
            includeNodeModules: false,
          }),
          DEFAULT_OPTIONS,
        ),
        filename: 'foo',
        specifierType: 'esm',
        range: '^0.4.0',
        parent: path.join(rootDir, 'foo.js'),
        sourcePath: path.join(rootDir, 'foo.js'),
      });

      assert.equal(
        result?.diagnostics?.[0].message,
        'External dependency "foo" does not satisfy required semver range "^0.4.0".',
      );
    });
  });

  describe('urls', function () {
    it('should ignore protocol relative urls', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '//example.com/foo.png',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {isExcluded: true});
    });

    it('should ignore hash urls', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: '#hash',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {isExcluded: true});
    });

    it('should ignore http: urls', async function () {
      let resolved = await resolver.resolve({
        env: BROWSER_ENV,
        filename: 'http://example.com/foo.png',
        specifierType: 'url',
        parent: path.join(rootDir, 'foo.js'),
      });
      assert.deepEqual(resolved, {isExcluded: true});
    });
  });
});
