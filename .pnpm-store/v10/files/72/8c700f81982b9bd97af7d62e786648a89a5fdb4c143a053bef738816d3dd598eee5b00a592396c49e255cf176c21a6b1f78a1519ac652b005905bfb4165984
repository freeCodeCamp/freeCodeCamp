"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.make = exports.formatLabel = void 0;
/** @internal */
const make = (label, startTime) => ({
  label,
  startTime
});
/**
 * Sanitize a given string by replacing spaces, equal signs, and double quotes with underscores.
 *
 * @internal
 */
exports.make = make;
const formatLabel = key => key.replace(/[\s="]/g, "_");
/** @internal */
exports.formatLabel = formatLabel;
const render = now => self => {
  const label = formatLabel(self.label);
  return `${label}=${now - self.startTime}ms`;
};
exports.render = render;
//# sourceMappingURL=logSpan.js.map