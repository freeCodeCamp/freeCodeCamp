"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _json() {
  const data = _interopRequireDefault(require("json5"));

  _json = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new (_plugin().Transformer)({
  async transform({
    asset
  }) {
    asset.type = 'js'; // Use JSON.parse("...") for faster script parsing, see
    // https://v8.dev/blog/cost-of-javascript-2019#json.
    // Apply `JSON.stringify` twice to make it a valid string literal.

    asset.setCode(`module.exports = JSON.parse(${JSON.stringify(JSON.stringify(_json().default.parse(await asset.getCode())))});`);
    return [asset];
  }

});

exports.default = _default;