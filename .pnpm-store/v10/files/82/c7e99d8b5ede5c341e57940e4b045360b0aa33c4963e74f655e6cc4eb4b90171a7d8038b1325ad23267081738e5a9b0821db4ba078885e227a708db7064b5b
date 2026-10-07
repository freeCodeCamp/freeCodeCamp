var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AbortController: () => AbortController,
  AbortHandler: () => import_types.AbortHandler,
  AbortSignal: () => AbortSignal,
  IAbortController: () => import_types.AbortController,
  IAbortSignal: () => import_types.AbortSignal
});
module.exports = __toCommonJS(src_exports);

// src/AbortController.ts


// src/AbortSignal.ts
var import_types = require("@smithy/types");
var _AbortSignal = class _AbortSignal {
  constructor() {
    this.onabort = null;
    this._aborted = false;
    Object.defineProperty(this, "_aborted", {
      value: false,
      writable: true
    });
  }
  /**
   * Whether the associated operation has already been cancelled.
   */
  get aborted() {
    return this._aborted;
  }
  /**
   * @internal
   */
  abort() {
    this._aborted = true;
    if (this.onabort) {
      this.onabort(this);
      this.onabort = null;
    }
  }
};
__name(_AbortSignal, "AbortSignal");
var AbortSignal = _AbortSignal;

// src/AbortController.ts
var _AbortController = class _AbortController {
  constructor() {
    this.signal = new AbortSignal();
  }
  abort() {
    this.signal.abort();
  }
};
__name(_AbortController, "AbortController");
var AbortController = _AbortController;
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  AbortController,
  AbortSignal
});

