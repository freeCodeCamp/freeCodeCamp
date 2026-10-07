<h1 align="center" style="border-bottom: none;">gatsby-plugin-webpack-bundle-analyser-v2</h1>
<h3 align="center">Gatsby plugin with the latest version of <a href="https://github.com/webpack-contrib/webpack-bundle-analyzer">webpack-bundle-analyser</a> to visualize size of output files with an interactive zoomable treemap.</h3>

<p align="center">
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
        <img alt="travis build" src="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/workflows/TESTING/badge.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
        <img alt="travis build" src="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/workflows/PUBLISH/badge.svg">
    </a>
    <a href="https://www.npmjs.com/package/gatsby-plugin-webpack-bundle-analyser-v2">
        <img alt="npm version" src="https://badgen.net/npm/v/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
    <a href="http://npm-stat.com/charts.html?package=gatsby-plugin-webpack-bundle-analyser-v2">
        <img src="https://img.shields.io/npm/dm/gatsby-plugin-webpack-bundle-analyser-v2.svg" alt="NPM downloads">
    </a>
    <a href="#badge">
        <img alt="dependencies status" src="https://badgen.net/david/dep/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
    <a href="#badge">
        <img alt="dev dependencies status" src="https://badgen.net/david/dev/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img alt="prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/blob/master/LICENSE">
        <img alt="license" src="https://badgen.net/github/license/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2">
    </a>
</p>


## Install

`npm i gatsby-plugin-webpack-bundle-analyser-v2 -D`

or

`yarn add gatsby-plugin-webpack-bundle-analyser-v2 -D`

## Usage

Include the plugin in your `gatsby-config.js` file :

```javascript
/* gatsby-config.js */

module.exports = {
  plugins: [
      "gatsby-plugin-webpack-bundle-analyser-v2"
  ]
}
```

Then run a build as normal and the plugin will automatically open a browser window with the bundle analysis.

## Options

This plugin is disabled in development environment (when `process.env.NODE_ENV` is `development`) by default.\
If you want to use it in development environment, set `devMode: true` like this:

```javascript
// in gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
  ],
}
```

Optionally you can disable the analyser, just add `disable: true` in `options : {}`


### Original plugin options

You can add all [available options](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin) of [webpack-bundle-analyser](https://github.com/webpack-contrib/webpack-bundle-analyzer) original plugin like this :

```javascript
// in gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "8888",
        analyzerHost: "http://myhost.com",
        defaultSizes: "gzip"
      },
    },
  ],
}
```

In this plugin, the default original options are :


```javascript
{
  analyzerMode: 'server',
  analyzerPort: 3001,
}
```

which run a server on http://127.0.0.1:3001 with your bundle report.

**Note for [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) users** :

Default options for [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) users change a bit,  `analyzerMode` is set to `static`, and a `report.html` will be generated in `/public` folder.

## Contributing

Contributions are welcome ! See [contributing guidelines](https://github.com/JimmyBeldone/gatsby-plugin-webpack-bundle-analyser-v2/blob/master/CONTRIBUTING.md)

## License

MIT

Copyright (c) 2019 Jimmy Beldone
