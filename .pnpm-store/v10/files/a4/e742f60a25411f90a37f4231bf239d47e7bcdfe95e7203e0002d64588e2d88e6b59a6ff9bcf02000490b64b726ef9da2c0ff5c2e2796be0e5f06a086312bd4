## PNPM Compatibility Plugin for Gatsby

[![codecov](https://codecov.io/gh/Js-Brecht/gatsby-plugin-pnpm/branch/master/graph/badge.svg)](https://codecov.io/gh/Js-Brecht/gatsby-plugin-pnpm)

---


### Description

This plugin will configure Webpack module & loader resolution for packages installed
via `pnpm`.

When using `pnpm`, building a Gatsby project will fail because `pnpm` uses a unique
`node_modules` structure, and `webpack` doesn't know how to resolve packages in it.
This plugin will configure `webpack` so that it is able to see `Gatsby`'s dependencies.

---

### How to install

* Add the package to devDependencies

```sh
pnpm add -D gatsby-plugin-pnpm
```

* Include the plugin in your `gatsby-config.js`.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    ...,
    `gatsby-plugin-pnpm`,
    ...
  ]
}
```

That's it.  You should be able to build now.

---

### Extended usage

#### Option: `include` - define custom resolutions

Variations:

* Add resolution for specific package

  * Sometimes, Webpack may need to resolve a module that is a sub-dependency of one of your
    project's dependencies, and due to the way Webpack resolves modules (and sometimes because of
    the way those modules are written), it won't be able to.  If this is the case, we need to point
    Webpack the way to where those sub-dependencies are located.  To do that, please include your
    dependency in question in the `include` plugin option described [below](#available-options).

    * Note: if the `strict` option is `true`, then the package you define in this manner **MUST**
      be one of your project's direct dependencies, because it will be resolved using your project's
      `node_modules` directory.

* add resolutions for directories

  * There are also times where you want Webpack to be able to resolve modules in a directory that
    is not a part of any of your dependencies `node_modules`.  If that's the case, please include
    the directory path in the `include` option described below.
    
    * If you include a relative path, it will be resolved relative to your `process.cwd()`.
    * **MUST BE A DIRECTORY**.

#### Option: `projectPath` - define your Project Root

* This defaults to `process.cwd()`.
* You may encounter a time that your Project root is different than your `process.cwd()`.  In
that case, please define the `projectPath` option described below.
  * **NOTE**: If a relative path is defined, then it will be resolved relative to your `process.cwd()`,
  which may not be desired if you're using this option in the first place.

#### Option: `strict` - module resolution

* This option defaults to `true`.
* There may be times when you need to be able to resolve Gatsby, and whatever package names are defined in
`include, using node's module resolution resolution.
  * `true`: Keep with the `pnpm` philosophy of scoping modules to your current project.
  * `false`: Use Node's module resolution.  This causes `node_modules` to be checked walking backwards up
  your directory tree.

---

### Available Options

| Option   | Description |
|:---------|:------------|
| include  | **OPTIONAL**: A list of package names and/or paths that you would like to be made available to Webpack.  Each of these should either be the name of one of your project's direct dependencies, or a path to a folder containing packages that can be resolved as a module.
| projectPath | **OPTIONAL**: The path to your project; i.e. the folder containing your `package.json`.  This will be used when locating package names defined in `include`, and for resolving your project's `node_modules` directory
| strict | **OPTIONAL**: Defaults to true.<br /> `true` = Resolve modules using the `pnpm` philosophy of limiting the module scope to your project. <br /> `false` = Use `node`'s module resolution, which looks in every `node_modules` walking up your directory tree. |

Plugin options could be defined as follows:

```js
// gatsby-config.js
const path = require('path');

module.exports = {
  plugins: [
    ...
    {
      resolve: `gatsby-plugin-pnpm`,
      options: {
        projectPath: path.dirname(__dirname), // use parent directory as project root
        include: [
          `my-awesome-package`, // <- resolve this package name
          `path/to/my/private/webpack/loaders` // <- resolve from this directory
        ],
        strict: true
      }
    }
  ]
  ...
}
```

## Issues / Contributing

If you notice any issues caused by this plugin, or there seems to be some feature missing,
please feel free to file an issue at <https://github.com/Js-Brecht/gatsby-plugin-pnpm/issues>
