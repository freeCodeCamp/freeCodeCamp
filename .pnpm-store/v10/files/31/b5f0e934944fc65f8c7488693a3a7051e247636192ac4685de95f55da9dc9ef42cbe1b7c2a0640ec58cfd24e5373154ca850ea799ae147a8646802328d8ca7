# babel-preset-gatsby

Gatsby uses the phenomenal project [Babel](https://babeljs.io/) to enable support for writing modern JavaScript — while still supporting older browsers. This package contains the default Babel setup for all Gatsby projects.

For more information on how to customize the Babel configuration of your Gatsby site, check out [our documentation](https://www.gatsbyjs.com/docs/babel/).

## Packages

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react)
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)
- [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros)
- [`babel-plugin-transform-react-remove-prop-types`](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
- [`@babel/plugin-proposal-nullish-coalescing-operator`](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator)
- [`@babel/plugin-proposal-optional-chaining`](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
- [`babel-plugin-optimize-hook-destructuring`](src/optimize-hook-destructuring.ts)

## Usage

Install `babel-preset-gatsby` and add a `.babelrc` file with the following content to the root of your project:

```shell
npm install --dev babel-preset-gatsby
```

```json
{
  "presets": ["babel-preset-gatsby"]
}
```

## Options

### `targets`

`{ [string]: number | string }`, defaults to `{ "browsers": ["last 4 versions", "safari >= 7", "ie >= 9"] }` in production and `{ "browsers": ["last 2 versions", "not ie <= 11", "not android 4.4.3"] }` in development when targeting the browser and `{ "node": 6 }` in production and `{ "node": "current" }` in development when targeting Node.js.

Use this option to configure [custom target browsers](https://www.gatsbyjs.com/docs/how-to/custom-configuration/babel/).

### `reactRuntime`

`'classic' | 'automatic'`, defaults to `'classic'`. Allows the use of JSX without having to import React (learn more in the [official blog post](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)). If you only want to set the runtime to `automatic` without a custom JSX transformer, you can use the [`gatsby-config` option](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#jsxruntime).

### `reactImportSource`

`string`, defaults to `null`. Set which package React should use as underlying JSX transformer. For example you can set it to `@emotion/react` so by default `@emotion/react` is used instead of the react package. In order to use `reactImportSource` you must set `reactRuntime` to automatic.

Example:

```json
{
  "presets": [
    [
      "babel-preset-gatsby",
      {
        "reactRuntime": "automatic",
        "reactImportSource": "@emotion/react"
      }
    ]
  ]
}
```
