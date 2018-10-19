---
title: NPM
---
## NPM


Node.js makes it possible to write applications in JavaScript on the server. It’s built on the V8 JavaScript runtime and written in C++ — so it’s fast. Originally, it was intended as a server environment for applications, but developers started using it to create modules to aid them in local task automation. Since then, a whole new ecosystem of Node-based tools has evolved to transform the face of front-end development.

To make use of these modules (or packages) in Node.js we need to be able to install and manage them in a useful way. This is where npm, the Node package manager, comes in. It installs the packages you want to use and provides a useful interface to work with them.

## Installing NPM

To install `npm` we have to download Nodejs binaries in your local envrionment. Node.js binaries include the latest version of npm. To verify that:

```shell
npm -v
5.6.0
```

Node Package Manager (NPM) provides two main functionalities −

* Online repositories for node.js packages/modules which are searchable on `npmjs.com`.

* Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.

## Installing Modules using NPM

`npm` can install packages in local or global mode. By default, NPM installs any dependency in the local mode. In local mode it installs the package in a node_modules folder in your parent working directory. This location is owned by the current user. Global packages are installed in {prefix}`/lib/node_modules/` which is owned by root, where {prefix} is usually `/usr/ or /usr/local`. This means you would have to use sudo to install packages globally, which could cause permission errors when resolving third-party dependencies, as well as being a security concern.

### Installing Packages in Global Mode

Any packages installed globally will become available from the command line. We use the --global flag or -g to install packages globally.

```shell
$ npm install uglify-js --global
```

We can list the global packages we have installed with the npm list command.

```shell
$ npm list --global
/usr/local/lib
├─┬ npm@5.6.0
│ ├── abbrev@1.1.0
│ ├── ansi-regex@2.1.1
│ ├── ansicolors@0.3.2
│ ├── ansistyles@0.1.3
....................
└─┬ uglify-js@3.0.15
  ├─┬ commander@2.9.0
  │ └── graceful-readlink@1.0.1
  └── source-map@0.5.6
```

The output however, is rather verbose. We can change that with the --depth=0 option.

```js
$ npm list -g --depth=0
/usr/local/lib
├── npm@5.6.0
└── uglify-js@3.0.15
```

### Installing Packages in Local Mode

When you install packages locally, you normally do so using a package.json file.

```shell
npm install --save express
```

Now you can use this module in your js file as following

```js
const express = require('express');
```

Local modules are further divided into two types of depenedencies: `devDepenednecies` and `dependencies`. The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an `npm install --save-dev`, instead of just an `npm install --save`.

A nice shorthand for installing a devDependency that I like to use is `npm i -D`. The shorthand for saving a regular dependency is `-S` instead of `-D`.

We can list the local packages we have installed locally with the npm list command.
```js 
$ npm list --depth=0
/usr/local/someDirectory
└── express@4.16.4
```

### Installing a Specific Version of a Package

To do so, we mention the package version we want to install.

```shell
$ npm install underscore@1.8.2 -S
```

To remove a global dependency, use `-g` flag.

### Uninstalling Local Packages

npm is a package manager so it must be able to remove a package. We can remove the package:

```shell
$ npm uninstall underscore -S
```

To update a global dependency, use `-g` flag.

### Updating a Package

To update a package, you can do:

```
$ npm update underscore -S
```

To check if there is an update available for any package associated with our project:

```shell
$ npm outdated

Package     Current  Wanted  Latest  Location
underscore    1.8.2   1.8.3   1.8.3  project
```

The Current column shows us the version that is installed locally. The Latest column tells us the latest version of the package. And the Wanted column tells us the latest version of the package we can upgrade to without breaking our existing code.

## Managing Dependencies with package.json

If not using a specific flag and installing a module like `npm install express` will install the module in `node_modules` folder locally but the `package.json` that keep records of every dependency we are using in a project will not be updated with our addition. Thus, the package will be development specific, will not be installed in runtimme environment. Make sure, you always use a proper flag and keep `package.json` file updated.

When you install packages locally, you need a package.json file. To generate one you can do that by using `npm init` command. It will prompt up with some questions that by pressing enter you can keep the default values.

```shell
$ npm init
package name: (project)
version: (1.0.0)
description: Demo of package.json
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

Think of `package.json` as the keeper of all dependencies or manifestation of a Node.js project. If you want a quicker way to generate a package.json file use `npm init --y`.

List of Common Attributes in a `package.json` file:

* name − name of the package

* version − semantic version of the package

* description − description of the package

* homepage − homepage of the package

* author − author of the package

* contributors − name of the contributors to the package

* dependencies − list of dependencies. NPM automatically installs all the dependencies mentioned here in the node_module folder of the package.

* devDependencies - list of all development specific dependencies

* repository − repository type and URL of the package

* main − entry point of the package

* keywords − keywords

* license - a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

* scripts - The "scripts" property is a dictionary containing script commands that are run at various times in the lifecycle of your package.

* config - object that can be used to set configuration parameters used in package scripts that persist across upgrades.

An example:

```json
{
   "name": "express",
      "description": "Fast, unopinionated, minimalist web framework",
      "version": "4.11.2",
      "author": {

         "name": "TJ Holowaychuk",
         "email": "tj@vision-media.ca"
      },

   "contributors": [{
      "name": "Aaron Heckmann",
      "email": "aaron.heckmann+github@gmail.com"
   },

    ],
   "license": "MIT", "repository": {
      "type": "git",
      "url": "https://github.com/strongloop/express"
   },
   "homepage": "https://expressjs.com/", "keywords": [
      "express",
      "framework",
      "sinatra",
      "web",
      "rest",
      "restful",
      "router",
      "app",
      "api"
   ],
   "dependencies": {
      "serve-static": "~1.8.1",

   },
   "devDependencies": {
      "jade": "~1.9.1",
   },
   "engines": {
      "node": ">= 0.10.0"
   },
   "files": [
      "LICENSE",
      "History.md",
      "Readme.md",
      "index.js",
      "lib/"
   ],
   "scripts": {
      "test": "mocha --require test/support/env
         --reporter spec --bail --check-leaks test/ test/acceptance/",
      "test-cov": "istanbul cover node_modules/mocha/bin/_mocha
         -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/",
      "test-tap": "mocha --require test/support/env
         --reporter tap --check-leaks test/ test/acceptance/",
      "test-travis": "istanbul cover node_modules/mocha/bin/_mocha
         --report lcovonly -- --require test/support/env
         --reporter spec --check-leaks test/ test/acceptance/"
   },

}
```

## npm Scripts

`npm` scripts are used to automate repetitive tasks. For example, building your project, minifying Cascading Style Sheets (CSS) and JavaScript (JS) files. Scripts are also used in deleting temporary files and folders, etc. They can be customized and are accessible via `scripts` object in `package.json`.

```json
{
  "name": "super-cool-package",
  "version": "1.0.0",
  "scripts": {}
}
```

An example of the most popular NPM script:

```json
"scripts": {
    "start": "node index.js",
    ...
}
```

## npm Cache

When npm installs a package it keeps a copy, so the next time you want to install that package, it doesn’t need to hit the network. The copies are cached in the .npm directory in your home path.

```shell
$ ls ~/.npm
lodash.zipobject
log-driver
log-symbols
logalot
logfmt
loglevel
long-timeout
longest
longest-strea
```

This directory will get cluttered with old packages over time, so it’s useful to clean it up occasionally.

```shell
$ npm cache clean
```

## Yarn - an alternative to npm

Yarn is also a JavaScript package manager developed and maintained by Facebook. Both share high level similarities when it come to using them. It may run faster than npm, but other key features (such as having a lockfile) are now present in npm as of version 5. To install it:

```shell
npm install -g yarn
```

Yarn doesn't intend to replace npm, more like improving on it. It uses the same package.json file, and saves dependencies to the `node_modules/`folder. To initialise a projcet, you will use:

```shell
yarn init
```

### Adding, Upgrading, and Removing Dependencies

Adding a new dependency is easy and similar to npm:

```shell
yarn add [package-name]
```

If you want a specific package version or tag, you can do this.

```shell
yarn add express@4.14.1
```

For dev dependencies, peer dependencies and optional dependencies you pass the --dev --peer --optional respectively.

```shell
yarn add gulp --dev
```

Will save gulp under devDependencies. To upgrade or remove a package, you just replace the add command with either upgrade or remove followed by the package name.

```shell
# upgrade a gulp from 3.9.1 to version 4
yarn upgrade gulp@4.0

# remove a gulp
yarn remove gulp
```

After every install, upgrade or removal, yarn updates a yarn.lock file which keeps track of the exact package version installed in node_modules directory. Similar feature has been updated in npm. Now there is a `package-lock.json` which behave exactly in the same manner as `yarn.lock` in newer versions of npm.

### Package Version Numbers, and What they Mean

A first release of a npm package is always 1.0.0

Bug fixes, or minor changes increment the third digit, hense 1.0.0 would become 1.0.1

New features that dont break previous versions of a package increment the second digit, hense 1.0.0 would become 1.1.0

All changes that break the previous releases of a package increment the first digit, hense 1.0.0 would become 2.0.0

It is important to remember this when updateing packages to keep your project stable!
