"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID = exports.STARTUP = exports.PARCEL_VERSION = exports.OPTION_CHANGE = exports.INITIAL_BUILD = exports.HASH_REF_REGEX = exports.HASH_REF_PREFIX = exports.FILE_UPDATE = exports.FILE_DELETE = exports.FILE_CREATE = exports.ERROR = exports.ENV_CHANGE = void 0;

var _package = require("../package.json");

// $FlowFixMe
const PARCEL_VERSION = _package.version;
exports.PARCEL_VERSION = PARCEL_VERSION;
const HASH_REF_PREFIX = 'HASH_REF_';
exports.HASH_REF_PREFIX = HASH_REF_PREFIX;
const HASH_REF_REGEX = new RegExp(`${HASH_REF_PREFIX}\\w{16}`, 'g');
exports.HASH_REF_REGEX = HASH_REF_REGEX;
const VALID = 0;
exports.VALID = VALID;
const INITIAL_BUILD = 1 << 0;
exports.INITIAL_BUILD = INITIAL_BUILD;
const FILE_CREATE = 1 << 1;
exports.FILE_CREATE = FILE_CREATE;
const FILE_UPDATE = 1 << 2;
exports.FILE_UPDATE = FILE_UPDATE;
const FILE_DELETE = 1 << 3;
exports.FILE_DELETE = FILE_DELETE;
const ENV_CHANGE = 1 << 4;
exports.ENV_CHANGE = ENV_CHANGE;
const OPTION_CHANGE = 1 << 5;
exports.OPTION_CHANGE = OPTION_CHANGE;
const STARTUP = 1 << 6;
exports.STARTUP = STARTUP;
const ERROR = 1 << 7;
exports.ERROR = ERROR;