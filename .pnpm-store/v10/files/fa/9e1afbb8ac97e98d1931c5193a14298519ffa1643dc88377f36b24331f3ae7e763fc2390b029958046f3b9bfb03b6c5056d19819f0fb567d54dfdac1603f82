"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = exports.default = void 0;

function _module() {
  const data = require("module");

  _module = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe this is untyped
// flowlint-next-line untyped-import:off
const empty = require.resolve('./_empty.js');

exports.empty = empty;
let builtins = // $FlowFixMe
Object.create(null); // use definite (current) list of Node builtins

for (let key of _module().builtinModules) {
  builtins[key] = {
    name: empty,
    range: null
  };
}

let polyfills = {
  assert: 'assert',
  buffer: 'buffer',
  console: 'console-browserify',
  constants: 'constants-browserify',
  crypto: 'crypto-browserify',
  domain: 'domain-browser',
  events: 'events',
  http: 'stream-http',
  https: 'https-browserify',
  os: 'os-browserify',
  path: 'path-browserify',
  process: 'process',
  punycode: 'punycode',
  querystring: 'querystring-es3',
  stream: 'stream-browserify',
  string_decoder: 'string_decoder',
  sys: 'util',
  timers: 'timers-browserify',
  tty: 'tty-browserify',
  url: 'url',
  util: 'util',
  vm: 'vm-browserify',
  zlib: 'browserify-zlib'
};

for (let k in polyfills) {
  let polyfill = polyfills[k];
  builtins[k] = {
    name: polyfill + (_module().builtinModules.includes(polyfill) ? '/' : ''),
    range: (0, _nullthrows().default)(_package.default.devDependencies[polyfill])
  };
}

var _default = builtins;
exports.default = _default;