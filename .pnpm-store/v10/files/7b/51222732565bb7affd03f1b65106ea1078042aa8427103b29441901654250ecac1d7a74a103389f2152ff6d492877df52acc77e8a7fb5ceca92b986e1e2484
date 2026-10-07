"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadEnv;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _dotenv() {
  const data = _interopRequireDefault(require("dotenv"));

  _dotenv = function () {
    return data;
  };

  return data;
}

function _dotenvExpand() {
  const data = _interopRequireDefault(require("dotenv-expand"));

  _dotenvExpand = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loadEnv(env, fs, filePath, projectRoot) {
  var _env$NODE_ENV;

  const NODE_ENV = (_env$NODE_ENV = env.NODE_ENV) !== null && _env$NODE_ENV !== void 0 ? _env$NODE_ENV : 'development';
  const dotenvFiles = ['.env', // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV === 'test' ? null : '.env.local', `.env.${NODE_ENV}`, `.env.${NODE_ENV}.local`].filter(Boolean);
  let envs = await Promise.all(dotenvFiles.map(async dotenvFile => {
    const envPath = await (0, _utils().resolveConfig)(fs, filePath, [dotenvFile], projectRoot);

    if (envPath == null) {
      return;
    } // `ignoreProcessEnv` prevents dotenv-expand from writing values into `process.env`:
    // https://github.com/motdotla/dotenv-expand/blob/ddb73d02322fe8522b4e05b73e1c1ad24ea7c14a/lib/main.js#L5


    let output = (0, _dotenvExpand().default)({
      parsed: _dotenv().default.parse(await fs.readFile(envPath)),
      ignoreProcessEnv: true
    });

    if (output.error != null) {
      throw output.error;
    }

    return output.parsed;
  }));
  return Object.assign({}, ...envs);
}