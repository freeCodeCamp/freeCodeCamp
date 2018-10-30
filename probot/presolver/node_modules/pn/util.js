var util = require("util");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  TextDecoder: { enumerable: true, value: util.TextDecoder },
  TextEncoder: { enumerable: true, value: util.TextEncoder },
  //_errnoException: // skipping
  //_exceptionWithHostPort: // skipping
  //_extend: // skipping
  callbackify: { enumerable: true, value: bind(util, util.callbackify) },
  debug: { enumerable: true, value: bind(util, util.debug) },
  debuglog: { enumerable: true, value: bind(util, util.debuglog) },
  deprecate: { enumerable: true, value: bind(util, util.deprecate) },
  error: { enumerable: true, value: bind(util, util.error) },
  exec: { enumerable: true, value: bind(util, util.exec) },
  format: { enumerable: true, value: bind(util, util.format) },
  inherits: { enumerable: true, value: bind(util, util.inherits) },
  inspect: { enumerable: true, value: bind(util, util.inspect) },
  isArray: { enumerable: true, value: bind(util, util.isArray) },
  isBoolean: { enumerable: true, value: bind(util, util.isBoolean) },
  isBuffer: { enumerable: true, value: bind(util, util.isBuffer) },
  isDate: { enumerable: true, value: bind(util, util.isDate) },
  isDeepStrictEqual: { enumerable: true, value: bind(util, util.isDeepStrictEqual) },
  isError: { enumerable: true, value: bind(util, util.isError) },
  isFunction: { enumerable: true, value: bind(util, util.isFunction) },
  isNull: { enumerable: true, value: bind(util, util.isNull) },
  isNullOrUndefined: { enumerable: true, value: bind(util, util.isNullOrUndefined) },
  isNumber: { enumerable: true, value: bind(util, util.isNumber) },
  isObject: { enumerable: true, value: bind(util, util.isObject) },
  isPrimitive: { enumerable: true, value: bind(util, util.isPrimitive) },
  isRegExp: { enumerable: true, value: bind(util, util.isRegExp) },
  isString: { enumerable: true, value: bind(util, util.isString) },
  isSymbol: { enumerable: true, value: bind(util, util.isSymbol) },
  isUndefined: { enumerable: true, value: bind(util, util.isUndefined) },
  log: { enumerable: true, value: bind(util, util.log) },
  p: { enumerable: true, value: bind(util, util.p) },
  print: { enumerable: true, value: bind(util, util.print) },
  promisify: { enumerable: true, value: bind(util, util.promisify) },
  pump: { enumerable: true, value: promisify(util, util.pump, 2) },
  puts: { enumerable: true, value: bind(util, util.puts) },
});