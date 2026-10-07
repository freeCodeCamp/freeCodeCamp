# React Refresh Webpack Plugin

[actions]: https://github.com/pmmmwh/react-refresh-webpack-plugin/actions/workflows/ci.yml
[actions:badge]: https://img.shields.io/github/actions/workflow/status/pmmmwh/react-refresh-webpack-plugin/ci.yml?branch=main
[license:badge]: https://img.shields.io/github/license/pmmmwh/react-refresh-webpack-plugin
[npm:latest]: https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin/v/latest
[npm:latest:badge]: https://img.shields.io/npm/v/@pmmmwh/react-refresh-webpack-plugin/latest
[npm:next]: https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin/v/next
[npm:next:badge]: https://img.shields.io/npm/v/@pmmmwh/react-refresh-webpack-plugin/next

[![GitHub Actions][actions:badge]][actions]
[![License][license:badge]](./LICENSE)
[![Latest Version][npm:latest:badge]][npm:latest]
[![Next Version][npm:next:badge]][npm:next]

An **EXPERIMENTAL** Webpack plugin to enable "Fast Refresh" (also known as _Hot Reloading_) for React components.

> This plugin is not 100% stable.
> We're hoping to land a v1 release soon - please help us by reporting any issues you've encountered!

## Getting Started

### Prerequisites

Ensure that you are using at least the minimum supported versions of this plugin's peer dependencies -
older versions unfortunately do not contain code to orchestrate "Fast Refresh",
and thus cannot be made compatible.

We recommend using the following versions:

| Dependency      | Version                      |
| --------------- | ---------------------------- |
| `react`         | `16.13.0`+, `17.x` or `18.x` |
| `react-dom`     | `16.13.0`+, `17.x` or `18.x` |
| `react-refresh` | `0.10.0`+                    |
| `webpack`       | `4.46.0`+ or `5.2.0`+        |

<details>
<summary>Minimum requirements</summary>
<br />

| Dependency      | Version  |
| --------------- | -------- |
| `react`         | `16.9.0` |
| `react-dom`     | `16.9.0` |
| `react-refresh` | `0.10.0` |
| `webpack`       | `4.43.0` |

</details>

<details>
<summary>Using custom renderers (e.g. <code>react-three-fiber</code>, <code>react-pdf</code>, <code>ink</code>)</summary>
<br />

To ensure full support of "Fast Refresh" with components rendered by custom renderers,
you should ensure the renderer you're using depends on a recent version of `react-reconciler`.

We recommend version `0.25.0` or above, but any versions above `0.22.0` should work.

If the renderer is not compatible, please file them an issue instead.

</details>

### Installation

With all prerequisites met, you can install this plugin using your package manager of choice:

```sh
# if you prefer npm
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh

# if you prefer yarn
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

# if you prefer pnpm
pnpm add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

The `react-refresh` package (from the React team) is a required peer dependency of this plugin.
We recommend using version `0.10.0` or above.

<details>
<summary>Support for TypeScript</summary>
<br />

TypeScript support is available out-of-the-box for those who use `webpack.config.ts`.

Our exported types however depends on `type-fest`, so you'll have to add it as a `devDependency`:

```sh
# if you prefer npm
npm install -D type-fest

# if you prefer yarn
yarn add -D type-fest

# if you prefer pnpm
pnpm add -D type-fest
```

> **:memo: Note**:
>
> `type-fest@4.x` only supports Node.js v16 or above,
> `type-fest@3.x` only supports Node.js v14.16 or above,
> and `type-fest@2.x` only supports Node.js v12.20 or above.
> If you're using an older version of Node.js, please install `type-fest@1.x`.

</details>

### Usage

For most setups, we recommend integrating with `babel-loader`.
It covers the most use cases and is officially supported by the React team.

The example below will assume you're using `webpack-dev-server`.

If you haven't done so, set up your development Webpack configuration for Hot Module Replacement (HMR).

```js
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
  },
};
```

<details>
<summary>Using <code>webpack-hot-middleware</code></summary>
<br />

```js
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  plugins: [isDevelopment && new webpack.HotModuleReplacementPlugin()].filter(Boolean),
};
```

</details>

<details>
<summary>Using <code>webpack-plugin-serve</code></summary>
<br />

```js
const { WebpackPluginServe } = require('webpack-plugin-serve');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  plugins: [isDevelopment && new WebpackPluginServe()].filter(Boolean),
};
```

</details>

Then, add the `react-refresh/babel` plugin to your Babel configuration and this plugin to your Webpack configuration.

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};
```

> **:memo: Note**:
>
> Ensure both the Babel transform (`react-refresh/babel`) and this plugin are enabled only in `development` mode!

<details>
<summary>Using <code>ts-loader</code></summary>
<br />

> **:warning: Warning**:
> This is an un-official integration maintained by the community.

Install [`react-refresh-typescript`](https://github.com/Jack-Works/react-refresh-transformer/tree/main/typescript).
Ensure your TypeScript version is at least 4.0.

```sh
# if you prefer npm
npm install -D react-refresh-typescript

# if you prefer yarn
yarn add -D react-refresh-typescript

# if you prefer pnpm
pnpm add -D react-refresh-typescript
```

Then, instead of wiring up `react-refresh/babel` via `babel-loader`,
you can wire-up `react-refresh-typescript` with `ts-loader`:

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};
```

> It is recommended to run `ts-loader` with `transpileOnly` is set to `true`.
> You can use `ForkTsCheckerWebpackPlugin` as an alternative if you need typechecking during development.

</details>

<details>
<summary>Using <code>swc-loader</code></summary>
<br />

> **:warning: Warning**:
> This is an un-official integration maintained by the community.

Ensure your `@swc/core` version is at least `1.2.86`.
It is also recommended to use `swc-loader` version `0.1.13` or above.

Then, instead of wiring up `react-refresh/babel` via `babel-loader`,
you can wire-up `swc-loader` and use the `refresh` transform:

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('swc-loader'),
            options: {
              jsc: {
                transform: {
                  react: {
                    development: isDevelopment,
                    refresh: isDevelopment,
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};
```

> Starting from version `0.1.13`, `swc-loader` will set the `development` option based on Webpack's `mode` option.
> `swc` won't enable fast refresh when `development` is `false`.

</details>

For more information on how to set up "Fast Refresh" with different integrations,
please check out [our examples](examples).

### Overlay Integration

This plugin integrates with the most common Webpack HMR solutions to surface errors during development -
in the form of an error overlay.

By default, `webpack-dev-server` is used,
but you can set the [`overlay.sockIntegration`](docs/API.md#sockintegration) option to match what you're using.

The supported versions are as follows:

| Dependency               | Version                    |
| ------------------------ | -------------------------- |
| `webpack-dev-server`     | `3.6.0`+ or `4.x` or `5.x` |
| `webpack-hot-middleware` | `2.x`                      |
| `webpack-plugin-serve`   | `0.x` or `1.x`             |

## API

Please refer to [the API docs](docs/API.md) for all available options.

## FAQs and Troubleshooting

Please refer to [the Troubleshooting guide](docs/TROUBLESHOOTING.md) for FAQs and resolutions to common issues.

## License

This project is licensed under the terms of the [MIT License](/LICENSE).

## Special Thanks

<a href="https://jb.gg/OpenSource?from=ReactRefreshWebpackPlugin" target="_blank">
  <img
    alt="JetBrains Logo"
    src="https://user-images.githubusercontent.com/9338255/132110580-61d3dba5-f5c7-4479-bd8e-39cd65b42fc5.png"
    width="120"
  />
</a>
