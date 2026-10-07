<p align="center">
  <a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
    <img src="https://sentry-brand.storage.googleapis.com/sentry-wordmark-dark-280x84.png" alt="Sentry" width="280" height="84">
  </a>
</p>

# Official Sentry Profiling SDK for NodeJS

[![npm version](https://img.shields.io/npm/v/@sentry/profiling-node.svg)](https://www.npmjs.com/package/@sentry/profiling-node)
[![npm dm](https://img.shields.io/npm/dm/@sentry/profiling-node.svg)](https://www.npmjs.com/package/@sentry/profiling-node)
[![npm dt](https://img.shields.io/npm/dt/@sentry/profiling-node.svg)](https://www.npmjs.com/package/@sentry/profiling-node)

## Installation

Profiling works as an extension of tracing so you will need both @sentry/node and @sentry/profiling-node installed.

```bash
# Using yarn
yarn add @sentry/node @sentry/profiling-node

# Using npm
npm install --save @sentry/node @sentry/profiling-node
```

## Usage

```javascript
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: 'https://7fa19397baaf433f919fbe02228d5470@o1137848.ingest.sentry.io/6625302',
  debug: true,
  tracesSampleRate: 1,
  profilesSampleRate: 1, // Set profiling sampling rate.
  integrations: [nodeProfilingIntegration()],
});
```

Sentry SDK will now automatically profile all root spans, even the ones which may be started as a result of using an
automatic instrumentation integration.

```javascript
Sentry.startSpan({ name: 'some workflow' }, () => {
  // The code in here will be profiled
});
```

### Building the package from source

Profiling uses native modules to interop with the v8 javascript engine which means that you may be required to build it
from source. The libraries required to successfully build the package from source are often the same libraries that are
already required to build any other package which uses native modules and if your codebase uses any of those modules,
there is a fairly good chance this will work out of the box. The required packages are python, make and g++.

**Windows:** If you are building on windows, you may need to install windows-build-tools

**_Python:_** Python 3.12 is not supported yet so you will need a version of python that is lower than 3.12

```bash

# using yarn package manager
yarn global add windows-build-tools
# or npm package manager
npm i -g windows-build-tools
```

After you have installed the toolchain, you should be able to build the binaries from source

```bash
# configure node-gyp using yarn
yarn build:bindings:configure
# or using npm
npm run build:bindings:configure

# compile the binaries using yarn
yarn build:bindings
# or using npm
npm run build:bindings
```

After the binaries are built, you should see them inside the profiling-node/lib folder.

### Prebuilt binaries

We currently ship prebuilt binaries for a few of the most common platforms and node versions (v18-24).

- macOS x64
- Linux ARM64 (musl)
- Linux x64 (glibc)
- Windows x64

For a more detailed list, see job_compile_bindings_profiling_node job in our build.yml github action workflow.

### Bundling

If you are looking to squeeze some extra performance or improve cold start in your application (especially true for
serverless environments where modules are often evaluates on a per request basis), then we recommend you look into
bundling your code. Modern JS engines are much faster at parsing and compiling JS than following long module resolution
chains and reading file contents from disk. Because @sentry/profiling-node is a package that uses native node modules,
bundling it is slightly different than just bundling javascript. In other words, the bundler needs to recognize that a
.node file is node native binding and move it to the correct location so that it can later be used. Failing to do so
will result in a MODULE_NOT_FOUND error.

The easiest way to make bundling work with @sentry/profiling-node and other modules which use native nodejs bindings is
to mark the package as external - this will prevent the code from the package from being bundled, but it means that you
will now need to rely on the package to be installed in your production environment.

To mark the package as external, use the following configuration:

[Next.js 13+](https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages)

```js
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Add the "@sentry/profiling-node" to serverComponentsExternalPackages.
    serverComponentsExternalPackages: ['@sentry/profiling-node'],
  },
};

module.exports = withSentryConfig(nextConfig, {
  /* ... */
});
```

[webpack](https://webpack.js.org/configuration/externals/#externals)

```js
externals: {
  "@sentry/profiling-node": "commonjs @sentry/profiling-node",
},
```

[esbuild](https://esbuild.github.io/api/#external)

```js
{
  entryPoints: ['index.js'],
  platform: 'node',
  external: ['@sentry/profiling-node'],
}
```

[Rollup](https://rollupjs.org/configuration-options/#external)

```js
{
  entry: 'index.js',
  external: '@sentry/profiling-node'
}
```

[serverless-esbuild (serverless.yml)](https://www.serverless.com/plugins/serverless-esbuild#external-dependencies)

```yml
custom:
  esbuild:
    external:
      - @sentry/profiling-node
    packagerOptions:
      scripts:
        - npm install @sentry/profiling-node
```

[vercel-ncc](https://github.com/vercel/ncc#programmatically-from-nodejs)

```js
{
  externals: ["@sentry/profiling-node"],
}
```

[vite](https://vitejs.dev/config/ssr-options.html#ssr-external)

```js
ssr: {
  external: ['@sentry/profiling-node'];
}
```

Marking the package as external is the simplest and most future proof way of ensuring it will work, however if you want
to bundle it, it is possible to do so as well. Bundling has the benefit of improving your script startup time as all of
the code is (usually) inside a single executable .js file, which saves time on module resolution.

In general, when attempting to bundle .node native file extensions, you will need to tell your bundler how to treat
these, as by default it does not know how to handle them. The required approach varies between build tools and you will
need to find which one will work for you.

The result of bundling .node files correctly is that they are placed into your bundle output directory with their
require paths updated to reflect their final location.

Example of bundling @sentry/profiling-node with esbuild and .copy loader

```json
// package.json
{
  "scripts": "node esbuild.serverless.js"
}
```

```js
// esbuild.serverless.js
const { sentryEsbuildPlugin } = require('@sentry/esbuild-plugin');

require('esbuild').build({
  entryPoints: ['./index.js'],
  outfile: './dist',
  platform: 'node',
  bundle: true,
  minify: true,
  sourcemap: true,
  // This is no longer necessary
  // external: ["@sentry/profiling-node"],
  loader: {
    // ensures .node binaries are copied to ./dist
    '.node': 'copy',
  },
  plugins: [
    // See https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/esbuild/
    sentryEsbuildPlugin({
      project: '',
      org: '',
      authToken: '',
      release: '',
      sourcemaps: {
        // Specify the directory containing build artifacts
        assets: './dist/**',
      },
    }),
  ],
});
```

Once you run `node esbuild.serverless.js` esbuild wil bundle and output the files to ./dist folder, but note that all of
the binaries will be copied. This is wasteful as you will likely only need one of these libraries to be available during
runtime.

> **Deprecation notice:** This script will be removed in the next major version. If you depend on it, please comment on
> [this issue](https://github.com/getsentry/sentry-javascript/issues/20567).

To prune the other libraries, profiling-node ships with a small utility script that helps you prune unused binaries:

```bash
npx --package=@sentry/profiling-node sentry-prune-profiler-binaries
```

Use `--help` to see a list of available options or `--dry-run` if you want it to log the binaries that would have been
deleted.

Example of only preserving a binary to run node16 on linux x64 musl.

```bash
npx --package=@sentry/profiling-node sentry-prune-profiler-binaries --target_dir_path=./dist --target_platform=linux --target_node=16 --target_stdlib=musl --target_arch=x64
```

Which will output something like

```
Sentry: pruned ./dist/sentry_cpu_profiler-darwin-x64-108-IFGH3SUR.node (90.41 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-darwin-x64-93-Q7KBVHSP.node (74.16 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-glibc-108-NXSISRTB.node (52.17 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-glibc-83-OEQT5HUK.node (52.08 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-glibc-93-IIXXW2PN.node (52.06 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-musl-108-DSILNYHA.node (48.46 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-musl-83-4CNOBNC3.node (48.37 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-arm64-musl-93-JA5PKNWQ.node (48.38 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-x64-glibc-108-NXSISRTB.node (52.17 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-x64-glibc-83-OEQT5HUK.node (52.08 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-x64-glibc-93-IIXXW2PN.node (52.06 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-x64-musl-108-CX7SL27U.node (51.50 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-linux-x64-musl-83-YD7ZQK2E.node (51.53 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-win32-x64-108-P7V3URQV.node (181.50 KiB)
Sentry: pruned ./dist/sentry_cpu_profiler-win32-x64-93-3PKQDSGE.node (181.50 KiB)
✅ Sentry: pruned 15 binaries, saved 1.06 MiB in total.
```

### Environment flags

The default mode of the v8 CpuProfiler is kEagerLoggin which enables the profiler even when no profiles are active -
this is good because it makes calls to startProfiling fast at the tradeoff for constant CPU overhead. The behavior can
be controlled via the `SENTRY_PROFILER_LOGGING_MODE` environment variable with values of `eager|lazy`. If you opt to use
the lazy logging mode, calls to startProfiling may be slow (depending on environment and node version, it can be in the
order of a few hundred ms).

Example of starting a server with lazy logging mode.

```javascript
SENTRY_PROFILER_LOGGING_MODE=lazy node server.js
```

## FAQ 💭

### Can the profiler leak PII to Sentry?

The profiler does not collect function arguments so leaking any PII is unlikely. We only collect a subset of the values
which may identify the device and os that the profiler is running on (if you are already using tracing, it is likely
that these values are already being collected by the SDK).

There is one way a profiler could leak pii information, but this is unlikely and would only happen for cases where you
might be creating or naming functions which might contain pii information such as

```js
eval('function scriptFor${PII_DATA}....');
```

In that case it is possible that the function name may end up being reported to Sentry.

### Are worker threads supported?

No. All instances of the profiler are scoped per thread In practice, this means that starting a transaction on thread A
and delegating work to thread B will only result in sample stacks being collected from thread A. That said, nothing
should prevent you from starting a transaction on thread B concurrently which will result in two independent profiles
being sent to the Sentry backend. We currently do not do any correlation between such transactions, but we would be open
to exploring the possibilities. Please file an issue if you have suggestions or specific use-cases in mind.

### How much overhead will this profiler add?

The profiler uses the kEagerLogging option by default which trades off fast calls to startProfiling for a small amount
of constant CPU overhead. If you are using kEagerLogging then the tradeoff is reversed and there will be a small CPU
overhead while the profiler is not running, but calls to startProfiling could be slow (in our tests, this varies by
environments and node versions, but could be in the order of a couple 100ms).
