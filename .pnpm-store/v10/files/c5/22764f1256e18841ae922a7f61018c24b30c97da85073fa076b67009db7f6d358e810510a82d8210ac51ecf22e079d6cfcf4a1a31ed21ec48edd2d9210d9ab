# Bundling

Due to its internal architecture based on Worker Threads, it is not possible to bundle Pino *without* generating additional files.

In particular, a bundler must ensure that the following files are also bundled separately:

* `lib/worker.js` from the `thread-stream` dependency
* `file.js`
* `lib/worker.js`
* Any transport used by the user (like `pino-pretty`)

Once the files above have been generated, the bundler must also add information about the files above by injecting a code that sets `__bundlerPathsOverrides` in the `globalThis` object.

The variable is an object whose keys are an identifier for the files and the values are the paths of files relative to the currently bundle files.

Example:

```javascript
// Inject this using your bundle plugin
globalThis.__bundlerPathsOverrides = {
  'thread-stream-worker': pinoWebpackAbsolutePath('./thread-stream-worker.js')
  'pino/file': pinoWebpackAbsolutePath('./pino-file.js'),
  'pino-worker': pinoWebpackAbsolutePath('./pino-worker.js'),
  'pino-pretty': pinoWebpackAbsolutePath('./pino-pretty.js'),
};
```

Note that `pino/file`, `pino-worker` and `thread-stream-worker` are required identifiers. Other identifiers are possible based on the user configuration.

## Webpack Plugin

If you are a Webpack user, you can achieve this with [pino-webpack-plugin](https://github.com/pinojs/pino-webpack-plugin) without manual configuration of `__bundlerPathsOverrides`; however, you still need to configure it manually if you are using other bundlers.

## Esbuild Plugin

[esbuild-plugin-pino](https://github.com/davipon/esbuild-plugin-pino) is the esbuild plugin to generate extra pino files for bundling.

## Bun Plugin

[bun-plugin-pino](https://github.com/vktrl/bun-plugin-pino) is the Bun plugin to generate extra pino files for bundling.