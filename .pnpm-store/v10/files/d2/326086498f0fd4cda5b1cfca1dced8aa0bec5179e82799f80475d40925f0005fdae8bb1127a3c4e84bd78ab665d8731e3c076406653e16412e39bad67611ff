"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigItem = createConfigItem;
exports.createItemFromDescriptor = createItemFromDescriptor;
exports.getItemDescriptor = getItemDescriptor;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _configDescriptors = require("./config-descriptors.js");
function createItemFromDescriptor(desc) {
  return new ConfigItem(desc);
}
function* createConfigItem(value, {
  dirname = ".",
  type
} = {}) {
  const descriptor = yield* (0, _configDescriptors.createDescriptor)(value, _path().resolve(dirname), {
    type,
    alias: "programmatic item"
  });
  return createItemFromDescriptor(descriptor);
}
const CONFIG_ITEM_BRAND = Symbol.for("@babel/core@7 - ConfigItem");
function getItemDescriptor(item) {
  if (item != null && item[CONFIG_ITEM_BRAND]) {
    return item._descriptor;
  }
  return undefined;
}
class ConfigItem {
  constructor(descriptor) {
    this._descriptor = void 0;
    this[CONFIG_ITEM_BRAND] = true;
    this.value = void 0;
    this.options = void 0;
    this.dirname = void 0;
    this.name = void 0;
    this.file = void 0;
    this._descriptor = descriptor;
    Object.defineProperty(this, "_descriptor", {
      enumerable: false
    });
    Object.defineProperty(this, CONFIG_ITEM_BRAND, {
      enumerable: false
    });
    this.value = this._descriptor.value;
    this.options = this._descriptor.options;
    this.dirname = this._descriptor.dirname;
    this.name = this._descriptor.name;
    this.file = this._descriptor.file ? {
      request: this._descriptor.file.request,
      resolved: this._descriptor.file.resolved
    } : undefined;
    Object.freeze(this);
  }
}
Object.freeze(ConfigItem.prototype);
0 && 0;

//# sourceMappingURL=item.js.map
