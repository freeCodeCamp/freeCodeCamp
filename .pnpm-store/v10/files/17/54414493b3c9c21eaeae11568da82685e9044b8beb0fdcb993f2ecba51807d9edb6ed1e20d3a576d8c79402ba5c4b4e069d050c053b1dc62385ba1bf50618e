# napi-build-utils

[![npm](https://img.shields.io/npm/v/napi-build-utils.svg)](https://www.npmjs.com/package/napi-build-utils)
![Node version](https://img.shields.io/node/v/prebuild.svg)
![Build Status](https://github.com/inspiredware/napi-build-utils/actions/workflows/run-npm-tests.yml/badge.svg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A set of utilities to assist developers of tools that build [Node-API](https://nodejs.org/api/n-api.html#n_api_n_api) native add-ons.

## Background

This module is targeted to developers creating tools that build Node-API native add-ons.

It implements a set of functions that aid in determining the Node-API version supported by the currently running Node instance and the set of Node-API versions against which the Node-API native add-on is designed to be built. Other functions determine whether a particular Node-API version can be built and can issue console warnings for unsupported Node-API versions.

Unlike the modules this code is designed to facilitate building, this module is written entirely in JavaScript.

## Quick start

```bash
npm install napi-build-utils
```

The module exports a set of functions documented [here](./index.md). For example:

```javascript
var napiBuildUtils = require('napi-build-utils');
var napiVersion = napiBuildUtils.getNapiVersion(); // Node-API version supported by Node, or undefined.
```

## Declaring supported Node-API versions

Native modules that are designed to work with [Node-API](https://nodejs.org/api/n-api.html#n_api_n_api) must explicitly declare the Node-API version(s) against which they are coded to build. This is accomplished by including a `binary.napi_versions` property in the module's `package.json` file. For example:

```json
"binary": {
  "napi_versions": [2,3]
}
```

In the absence of a need to compile against a specific Node-API version, the value `3` is a good choice as this is the Node-API version that was supported when Node-API left experimental status.

Modules that are built against a specific Node-API version will continue to operate indefinitely, even as later versions of Node-API are introduced.

## History

**v2.0.0** This version was introduced to address a limitation when the Node-API version reached `10` in NodeJS `v23.6.0`. There was no change in the API, but a SemVer bump to `2.0.0` was made out of an abundance of caution.

## Support

If you run into problems or limitations, please file an issue and we'll take a look. Pull requests are also welcome.
