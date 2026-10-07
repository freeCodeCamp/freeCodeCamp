#!/usr/bin/env node

/*
This is used mostly for development purposes, but can be attempted to be used
to regenerate just engines for local platform/arch if previous full build
was done to deploy on platform with different arch/platform.

For development purposes this is used to be able to run `gatsby build` once to
source data and print schema and then just rebundle graphql-engine
with source file changes and test re-built engine quickly

Usage:
There need to be at least one successful `gatsby build`
before starting to use this script (warm up datastore,
generate "page-ssr" bundle). Once that's done you can
run following command in site directory:

```shell
node node_modules/gatsby/dist/schema/graphql-engine/standalone-regenerate.js
```
*/
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _bundleWebpack = require("./bundle-webpack");
var _bundleWebpack2 = require("./../../utils/page-ssr-module/bundle-webpack");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _loadConfigAndPlugins = require("../../utils/worker/child/load-config-and-plugins");
var fs = _interopRequireWildcard(require("fs-extra"));
var _redux = require("../../redux");
var _validateEngines = require("../../utils/validate-engines");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
async function run() {
  process.env.GATSBY_SLICES = `1`;
  // load config
  _reporter.default.verbose(`loading config and plugins`);
  await (0, _loadConfigAndPlugins.loadConfigAndPlugins)({
    siteDirectory: process.cwd()
  });
  try {
    _reporter.default.verbose(`clearing webpack cache`);
    // get rid of cache if it exist
    await fs.remove(process.cwd() + `/.cache/webpack/query-engine`);
    await fs.remove(process.cwd() + `/.cache/webpack/page-ssr`);
  } catch (e) {
    // eslint-disable no-empty
  }
  const state = _redux.store.getState();

  // recompile
  const buildActivityTimer = _reporter.default.activityTimer(`(Re)Building Rendering Engines`);
  try {
    buildActivityTimer.start();
    await Promise.all([(0, _bundleWebpack.createGraphqlEngineBundle)(process.cwd(), _reporter.default, true), (0, _bundleWebpack2.createPageSSRBundle)({
      rootDir: process.cwd(),
      components: _redux.store.getState().components,
      staticQueriesByTemplate: state.staticQueriesByTemplate,
      webpackCompilationHash: state.webpackCompilationHash,
      // we set webpackCompilationHash above
      reporter: _reporter.default,
      isVerbose: state.program.verbose
    })]);
  } catch (err) {
    buildActivityTimer.panic(err);
  } finally {
    buildActivityTimer.end();
  }
  await (0, _validateEngines.validateEnginesWithActivity)(process.cwd());
  _reporter.default.info(`Rebuilding Rendering Engines finished`);
}
run();
//# sourceMappingURL=standalone-regenerate.js.map