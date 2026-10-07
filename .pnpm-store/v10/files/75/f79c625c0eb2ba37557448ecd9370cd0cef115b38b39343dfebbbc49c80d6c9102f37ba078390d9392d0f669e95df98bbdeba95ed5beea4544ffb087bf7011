"use strict";

const plugins = require(`./api-runner-browser-plugins`);
const {
  getResourceURLsForPathname,
  loadPage,
  loadPageSync
} = require(`./loader`).publicLoader;
exports.apiRunner = (api, args = {}, defaultReturn, argTransform) => {
  // Hooks for gatsby-cypress's API handler
  if (process.env.CYPRESS_SUPPORT) {
    if (window.___apiHandler) {
      window.___apiHandler(api);
    } else if (window.___resolvedAPIs) {
      window.___resolvedAPIs.push(api);
    } else {
      window.___resolvedAPIs = [api];
    }
  }
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    args.getResourceURLsForPathname = getResourceURLsForPathname;
    args.loadPage = loadPage;
    args.loadPageSync = loadPageSync;
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({
        args,
        result,
        plugin
      });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`);
  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};
exports.apiRunnerAsync = (api, args, defaultReturn) => plugins.reduce((previous, next) => next.plugin[api] ? previous.then(() => next.plugin[api](args, next.options)) : previous, Promise.resolve());
//# sourceMappingURL=api-runner-browser.js.map