"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function printComponent(component) {
  return JSON.stringify(component, componentAttributeSerializer, 4);
}

function componentAttributeSerializer(key, value) {
  if (typeof value === 'function') {
    return value.toString();
  }

  return value;
}

var _default = printComponent;
exports.default = _default;