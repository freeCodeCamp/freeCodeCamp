"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeRaw = exports.deserializeRaw = void 0;

function _buffer() {
  const data = require("buffer");

  _buffer = function () {
    return data;
  };

  return data;
}

function msgpackr() {
  const data = _interopRequireWildcard(require("msgpackr"));

  msgpackr = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let encoder = new (msgpackr().Encoder)({
  structuredClone: true
});

let serializeRaw = v => _buffer().Buffer.from(encoder.encode(v));

exports.serializeRaw = serializeRaw;

let deserializeRaw = v => encoder.decode(v);

exports.deserializeRaw = deserializeRaw;