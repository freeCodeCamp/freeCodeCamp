"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CacheFolderResolver = void 0;
var _module = _interopRequireDefault(require("module"));
/**
 * To support Yarn PNP and pnpm we have to make sure dependencies resolved from
 * the .cache folder should be resolved from the gatsby package directory
 * If you see error like
 *
 * ModuleNotFoundError: Module not found: Error: Can't resolve 'prop-types'
 * in 'site-directory/.cache'
 *
 * it probably means this plugin is not enabled when it should be and there
 * might be need to adjust conditions for setting `this.isEnabled` in the
 * constructor.
 *
 * It's not enabled always because of legacy behavior and to limit potential
 * regressions. Might be good idea to enable it always in the future
 * OR remove the need for the plugin completely by not copying `cache-dir`
 * contents to `.cache` folder and instead adjust setup to use those browser/node
 * html renderer runtime files directly from gatsby package
 */
class CacheFolderResolver {
  isEnabled = false;
  constructor(requestsFolder) {
    var _process$env$NODE_PAT;
    this.requestsFolder = requestsFolder;
    if (process.versions.pnp) {
      // Yarn PnP
      this.isEnabled = true;
    } else if (/node_modules[/\\]\.pnpm/.test((_process$env$NODE_PAT = process.env.NODE_PATH) !== null && _process$env$NODE_PAT !== void 0 ? _process$env$NODE_PAT : ``)) {
      // pnpm when executing through `pnpm` CLI
      this.isEnabled = true;
    } else {
      // pnpm when executing through regular `gatsby` CLI / `./node_modules/.bin/gatsby`
      // would not set NODE_PATH, but node_modules structure would not allow to resolve
      // gatsby deps from the cache folder (unless user would install same deps too)
      // so we are checking if we can resolve deps from the cache folder
      // this check is not limited to pnpm and other package managers could hit this path too

      // Hardcoded list of gatsby deps used in gatsby browser and ssr runtimes
      // instead of checking if we use Yarn PnP (via `process.versions.pnp`),
      // we check if we can resolve the external deps from the cache-dir folder
      // to know if we need to enable this plugin so we also cover pnpm
      // It might be good idea to always enable it overall, but to limit potential
      // regressions we only enable it if we are sure we need it.
      const modulesToCheck = [`prop-types`, `lodash/isEqual`, `mitt`, `shallow-compare`, `@gatsbyjs/reach-router`, `gatsby-react-router-scroll`, `react-server-dom-webpack`, `gatsby-link`];

      // test if we can resolve deps from the cache folder
      let isEverythingResolvableFromCacheDir = true;
      const cacheDirReq = _module.default.createRequire(requestsFolder);
      for (const cacheDirDep of modulesToCheck) {
        try {
          cacheDirReq.resolve(cacheDirDep);
        } catch {
          // something is not resolvable from the cache folder, so we should not enable this plugin
          isEverythingResolvableFromCacheDir = false;
          break;
        }
      }

      // test if we can resolve deps from the gatsby package
      let isEverythingResolvableFromGatsbyPackage = true;
      for (const cacheDirDep of modulesToCheck) {
        try {
          require.resolve(cacheDirDep);
        } catch {
          // something is not resolvable from the gatsby package
          isEverythingResolvableFromGatsbyPackage = false;
          break;
        }
      }

      // we only enable this plugin if we are unable to resolve cache-dir deps from .cache folder
      // and we can resolve them from gatsby package
      if (!isEverythingResolvableFromCacheDir && isEverythingResolvableFromGatsbyPackage) {
        this.isEnabled = true;
      }
    }
  }
  apply(resolver) {
    if (!this.isEnabled) {
      return;
    }
    const target = resolver.ensureHook(`raw-module`);
    resolver.getHook(`raw-module`).tapAsync(`CacheFolderResolver`, (request, resolveContext, callback) => {
      const req = request.request;
      if (!req) {
        return callback();
      }
      if (!request.path.startsWith(this.requestsFolder)) {
        return callback();
      }
      const packageMatch = /^(@[^/]+\/)?[^/]+/.exec(req);
      if (!packageMatch) {
        return callback();
      }

      // We change the issuer but keep everything as is and re-run resolve
      const obj = {
        ...request,
        path: __dirname
      };
      return resolver.doResolve(target, obj, `change issuer to gatsby package by cache-folder-resolver to fix pnp`, resolveContext, callback);
    });
  }
}
exports.CacheFolderResolver = CacheFolderResolver;
//# sourceMappingURL=cache-folder-resolver.js.map