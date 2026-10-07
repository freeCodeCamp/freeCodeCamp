"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CoreJSResolver = void 0;
var _path = _interopRequireDefault(require("path"));
// Core-js uses es6, es7 & web prefixes, which we'll convert to core-js 3
const coreJs2FileRegex = /\/modules\/(es6|es7|web)\.|\/es6\/|\/es7\//;

// Try to replace core-js2 files to core-js@3 to reduce file size
const replaceMap = [[`/es6.`, `/es.`], [`/es7.`, `/es.`], [`/es6/`, `/es/`], [`/es7/`, `/es/`], [`/es7/`, `/es/`], [`web.dom.iterable`, `web.dom-collections.iterator.js`], [`typed.data-view`, `data-view`], [`regexp.match`, `string.match`], [`regexp.replace`, `string.replace`], [`regexp.search`, `string.search`], [`regexp.split`, `string.split`]];
/**
 * Babel-preset is set to corejs@3 which will add automatic polyfills. If a project has core-js@2 installed in their root or a package got compiled with core-js@2
 * we need to convert it to corejs@3 because core-js@2 isn't available or we might add multiple polyfills for the same problem.
 *
 * The resolver converts core-js@2 imports to core-js@3 imports to make our bundle as small as possible.
 */
class CoreJSResolver {
  constructor() {
    // Get the nodemodules directory where core-js of gatsby lives
    // it might be inside gatsby/node_modules when multiple core-js versions are loaded
    this._coreJSNodeModulesPath = _path.default.dirname(_path.default.dirname(require.resolve(`core-js`)));
  }
  apply(resolver) {
    const target = resolver.ensureHook(`resolve`);
    const coreJsModulePath = this._coreJSNodeModulesPath;
    function resolve(request, resolveContext, callback) {
      const innerRequest = request.request || request.path;

      // we only care about core-js
      if (!innerRequest || !innerRequest.startsWith(`core-js/`)) {
        return void callback();
      }
      let coreJsRequest = innerRequest;
      let resolveMessage = `alias core-js@3 to gatsby's core-js package`;

      // preset-env adds packages from modules/ so we rewrite them to our gatsby package
      if (coreJs2FileRegex.test(coreJsRequest)) {
        replaceMap.forEach(([search, replace]) => {
          coreJsRequest = coreJsRequest.replace(search, replace);
        });
        resolveMessage = `map core-js@2(${innerRequest}) to corejs@3(${coreJsRequest})`;
      }
      return void resolver.doResolve(target, {
        ...request,
        request: _path.default.resolve(coreJsModulePath, coreJsRequest)
      }, resolveMessage, resolveContext, (err, result) => {
        if (err) {
          return callback(err);
        }

        // if a rename fails we try to load the original file
        // this could error when our mapping isn't complete. I've tested this on a couple of sites
        // and couldn't find anything but you never know.
        if (result === undefined) {
          return callback();
        }
        return callback(null, result);
      });
    }
    resolver.getHook(`described-resolve`).tapAsync(`CoreJSResolver`, resolve);
    resolver.getHook(`file`).tapAsync(`CoreJSResolver`, resolve);
  }
}
exports.CoreJSResolver = CoreJSResolver;
//# sourceMappingURL=corejs-resolver.js.map