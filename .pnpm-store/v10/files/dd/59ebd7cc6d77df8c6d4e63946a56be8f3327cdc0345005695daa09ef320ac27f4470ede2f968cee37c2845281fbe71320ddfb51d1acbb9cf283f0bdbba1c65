"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.stopTracer = exports.initTracer = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _path = _interopRequireDefault(require("path"));
var _opentracing = require("opentracing");
let tracerProvider;

/**
 * tracerFile should be a js file that exports two functions.
 *
 * `create` - Create and return an open-tracing compatible tracer. See
 * https://github.com/opentracing/opentracing-javascript/blob/master/src/tracer.ts
 *
 * `stop` - Run any tracer cleanup required before the node.js process
 * exits
 */
const initTracer = async tracerFile => {
  let tracer;
  if (tracerFile) {
    process.env.GATSBY_OPEN_TRACING_CONFIG_FILE = tracerFile;
    const resolvedPath = (0, _gatsbyCoreUtils.slash)(_path.default.resolve(tracerFile));
    tracerProvider = require(resolvedPath);
    tracer = await tracerProvider.create();
  } else {
    tracer = new _opentracing.Tracer(); // Noop
  }

  (0, _opentracing.initGlobalTracer)(tracer);
  return tracer;
};
exports.initTracer = initTracer;
const stopTracer = async () => {
  var _tracerProvider;
  if ((_tracerProvider = tracerProvider) !== null && _tracerProvider !== void 0 && _tracerProvider.stop) {
    await tracerProvider.stop();
  }
};
exports.stopTracer = stopTracer;
//# sourceMappingURL=index.js.map