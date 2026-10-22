import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { getWebpackCacheOptions } from './webpack-cache';

const inputFiles = {
  '../package.json': '{"packageManager":"pnpm@12.13.0"}',
  '../pnpm-lock.yaml': "lockfileVersion: '9.0'\n",
  '../pnpm-workspace.yaml': 'packages:\n  - client\n',
  'package.json': '{"name":"@freecodecamp/client"}',
  'gatsby-config.ts': 'export default { trailingSlash: "ignore" };\n',
  'gatsby-node.ts': 'exports.onCreateWebpackConfig = () => {};\n',
  '.babelrc.js': 'module.exports = { presets: ["babel-preset-gatsby"] };\n',
  'postcss.config.js': 'module.exports = { plugins: { autoprefixer: {} } };\n',
  'tsconfig.json': '{"compilerOptions":{"target":"ES2023"}}',
  'config/env.json': '{"clientLocale":"english","deploymentEnv":"staging"}'
};

describe('getWebpackCacheOptions', () => {
  let rootDirectory: string;
  let clientDirectory: string;

  beforeEach(() => {
    rootDirectory = mkdtempSync(join(tmpdir(), 'fcc-webpack-cache-'));
    clientDirectory = join(rootDirectory, 'client');
    mkdirSync(join(clientDirectory, 'config'), { recursive: true });

    for (const [file, content] of Object.entries(inputFiles)) {
      writeFileSync(join(clientDirectory, file), content);
    }

    // Keep these tests independent of the environment used to run Vitest.
    for (const key of Object.keys(process.env)) {
      if (
        key.startsWith('GATSBY_') ||
        ['NODE_ENV', 'BABEL_ENV', 'CI'].includes(key)
      ) {
        vi.stubEnv(key, undefined);
      }
    }
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    rmSync(rootDirectory, { recursive: true, force: true });
  });

  test('reuses the version when setup regenerates identical input files', () => {
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');

    for (const [file, content] of Object.entries(inputFiles)) {
      rmSync(join(clientDirectory, file));
      writeFileSync(join(clientDirectory, file), content);
    }

    expect(getWebpackCacheOptions(clientDirectory, 'build-javascript')).toEqual(
      before
    );
  });

  test.each(Object.keys(inputFiles))('invalidates when %s changes', file => {
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');
    const filePath = join(clientDirectory, file);
    writeFileSync(filePath, `${readFileSync(filePath, 'utf8')}\n`);

    expect(
      getWebpackCacheOptions(clientDirectory, 'build-javascript').version
    ).not.toBe(before.version);
  });

  test('invalidates when the generated deployment environment changes', () => {
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');
    writeFileSync(
      join(clientDirectory, 'config/env.json'),
      '{"clientLocale":"spanish","deploymentEnv":"production"}'
    );

    expect(
      getWebpackCacheOptions(clientDirectory, 'build-javascript').version
    ).not.toBe(before.version);
  });

  test.each([
    'NODE_ENV',
    'BABEL_ENV',
    'GATSBY_ACTIVE_ENV',
    'GATSBY_WEBPACK_PUBLICPATH',
    'CI'
  ])('invalidates when %s changes', key => {
    vi.stubEnv(key, 'first');
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');
    vi.stubEnv(key, 'second');

    expect(
      getWebpackCacheOptions(clientDirectory, 'build-javascript').version
    ).not.toBe(before.version);
  });

  test('ignores unrelated environment changes', () => {
    vi.stubEnv('GITHUB_RUN_ID', 'first-run');
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');
    vi.stubEnv('GITHUB_RUN_ID', 'second-run');

    expect(
      getWebpackCacheOptions(clientDirectory, 'build-javascript').version
    ).toBe(before.version);
  });

  test('does not depend on environment variable insertion order', () => {
    vi.stubEnv('GATSBY_CACHE_TEST_A', 'a');
    vi.stubEnv('GATSBY_CACHE_TEST_B', 'b');
    const before = getWebpackCacheOptions(clientDirectory, 'build-javascript');
    vi.stubEnv('GATSBY_CACHE_TEST_A', undefined);
    vi.stubEnv('GATSBY_CACHE_TEST_B', undefined);
    vi.stubEnv('GATSBY_CACHE_TEST_B', 'b');
    vi.stubEnv('GATSBY_CACHE_TEST_A', 'a');

    expect(
      getWebpackCacheOptions(clientDirectory, 'build-javascript').version
    ).toBe(before.version);
  });

  test('keeps an existing cache version as an invalidation input', () => {
    const defaultVersion = getWebpackCacheOptions(
      clientDirectory,
      'build-javascript'
    ).version;
    const firstVersion = getWebpackCacheOptions(
      clientDirectory,
      'build-javascript',
      'existing-version-1'
    ).version;
    const secondVersion = getWebpackCacheOptions(
      clientDirectory,
      'build-javascript',
      'existing-version-2'
    ).version;

    expect(new Set([defaultVersion, firstVersion, secondVersion]).size).toBe(3);
  });

  test.each(['build-javascript', 'build-html', 'develop', 'develop-html'])(
    'keeps %s outside the Gatsby cache in its own directory',
    stage => {
      expect(getWebpackCacheOptions(clientDirectory, stage).cacheLocation).toBe(
        join(clientDirectory, '.webpack-cache', `stage-${stage}`)
      );
    }
  );

  test.each(['../pnpm-lock.yaml', 'config/env.json'])(
    'does not reuse a cache if required input %s is missing',
    file => {
      rmSync(join(clientDirectory, file));

      expect(() =>
        getWebpackCacheOptions(clientDirectory, 'build-javascript')
      ).toThrow();
    }
  );
});
