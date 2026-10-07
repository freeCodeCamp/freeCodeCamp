"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadBlockHoistPlugin;
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _plugin = require("../config/plugin.js");
let LOADED_PLUGIN;
const blockHoistPlugin = {
  name: "internal.blockHoist",
  visitor: {
    Block: {
      exit({
        node
      }) {
        const {
          body
        } = node;
        let max = Math.pow(2, 30) - 1;
        let hasChange = false;
        for (let i = 0; i < body.length; i++) {
          const n = body[i];
          const p = priority(n);
          if (p > max) {
            hasChange = true;
            break;
          }
          max = p;
        }
        if (!hasChange) return;
        node.body = stableSort(body.slice());
      }
    }
  }
};
function loadBlockHoistPlugin() {
  if (!LOADED_PLUGIN) {
    LOADED_PLUGIN = new _plugin.default(Object.assign({}, blockHoistPlugin, {
      visitor: _traverse().default.explode(blockHoistPlugin.visitor)
    }), {});
  }
  return LOADED_PLUGIN;
}
function priority(bodyNode) {
  const priority = bodyNode == null ? void 0 : bodyNode._blockHoist;
  if (priority == null) return 1;
  if (priority === true) return 2;
  return priority;
}
function stableSort(body) {
  const buckets = Object.create(null);
  for (let i = 0; i < body.length; i++) {
    const n = body[i];
    const p = priority(n);
    const bucket = buckets[p] || (buckets[p] = []);
    bucket.push(n);
  }
  const keys = Object.keys(buckets).map(k => +k).sort((a, b) => b - a);
  let index = 0;
  for (const key of keys) {
    const bucket = buckets[key];
    for (const n of bucket) {
      body[index++] = n;
    }
  }
  return body;
}
0 && 0;

//# sourceMappingURL=block-hoist-plugin.js.map
