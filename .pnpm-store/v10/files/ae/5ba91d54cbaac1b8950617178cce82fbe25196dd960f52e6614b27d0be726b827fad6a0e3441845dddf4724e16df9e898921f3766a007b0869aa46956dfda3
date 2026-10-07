"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigItem = createConfigItem;
exports.createConfigItemAsync = createConfigItemAsync;
exports.createConfigItemSync = createConfigItemSync;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _full.default;
  }
});
exports.loadOptions = loadOptions;
exports.loadOptionsAsync = loadOptionsAsync;
exports.loadOptionsSync = loadOptionsSync;
exports.loadPartialConfig = loadPartialConfig;
exports.loadPartialConfigAsync = loadPartialConfigAsync;
exports.loadPartialConfigSync = loadPartialConfigSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _full = require("./full.js");
var _partial = require("./partial.js");
var _item = require("./item.js");
var _rewriteStackTrace = require("../errors/rewrite-stack-trace.js");
const loadPartialConfigRunner = _gensync()(_partial.loadPartialConfig);
function loadPartialConfigAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(loadPartialConfigRunner.async)(...args);
}
function loadPartialConfigSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(loadPartialConfigRunner.sync)(...args);
}
function loadPartialConfig(opts, callback) {
  if (callback !== undefined) {
    (0, _rewriteStackTrace.beginHiddenCallStack)(loadPartialConfigRunner.errback)(opts, callback);
  } else if (typeof opts === "function") {
    (0, _rewriteStackTrace.beginHiddenCallStack)(loadPartialConfigRunner.errback)(undefined, opts);
  } else {
    {
      return loadPartialConfigSync(opts);
    }
  }
}
function* loadOptionsImpl(opts) {
  var _config$options;
  const config = yield* (0, _full.default)(opts);
  return (_config$options = config == null ? void 0 : config.options) != null ? _config$options : null;
}
const loadOptionsRunner = _gensync()(loadOptionsImpl);
function loadOptionsAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(loadOptionsRunner.async)(...args);
}
function loadOptionsSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(loadOptionsRunner.sync)(...args);
}
function loadOptions(opts, callback) {
  if (callback !== undefined) {
    (0, _rewriteStackTrace.beginHiddenCallStack)(loadOptionsRunner.errback)(opts, callback);
  } else if (typeof opts === "function") {
    (0, _rewriteStackTrace.beginHiddenCallStack)(loadOptionsRunner.errback)(undefined, opts);
  } else {
    {
      return loadOptionsSync(opts);
    }
  }
}
const createConfigItemRunner = _gensync()(_item.createConfigItem);
function createConfigItemAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(createConfigItemRunner.async)(...args);
}
function createConfigItemSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(createConfigItemRunner.sync)(...args);
}
function createConfigItem(target, options, callback) {
  if (callback !== undefined) {
    (0, _rewriteStackTrace.beginHiddenCallStack)(createConfigItemRunner.errback)(target, options, callback);
  } else if (typeof options === "function") {
    (0, _rewriteStackTrace.beginHiddenCallStack)(createConfigItemRunner.errback)(target, undefined, callback);
  } else {
    {
      return createConfigItemSync(target, options);
    }
  }
}
0 && 0;

//# sourceMappingURL=index.js.map
