"use strict";

exports.__esModule = true;
exports.default = createMetaResolver;
var _utils = require("./utils");
const PossibleGlobalObjects = new Set(["global", "globalThis", "self", "window"]);
function createMetaResolver(polyfills) {
  const {
    static: staticP,
    instance: instanceP,
    global: globalP
  } = polyfills;
  return meta => {
    if (meta.kind === "global" && globalP && (0, _utils.has)(globalP, meta.name)) {
      return {
        kind: "global",
        desc: globalP[meta.name],
        name: meta.name
      };
    }
    if (meta.kind === "property" || meta.kind === "in") {
      const {
        placement,
        object,
        key
      } = meta;
      if (object && placement === "static") {
        if (globalP && PossibleGlobalObjects.has(object) && (0, _utils.has)(globalP, key)) {
          return {
            kind: "global",
            desc: globalP[key],
            name: key
          };
        }
        if (staticP && (0, _utils.has)(staticP, object) && (0, _utils.has)(staticP[object], key)) {
          return {
            kind: "static",
            desc: staticP[object][key],
            name: `${object}$${key}`
          };
        }
      }
      if (instanceP && (0, _utils.has)(instanceP, key)) {
        return {
          kind: "instance",
          desc: instanceP[key],
          name: `${key}`
        };
      }
    }
  };
}