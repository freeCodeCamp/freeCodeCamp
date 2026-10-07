"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var setup_api_exports = {};
__export(setup_api_exports, {
  SetupApi: () => SetupApi
});
module.exports = __toCommonJS(setup_api_exports);
var import_rettime = require("rettime");
var import_sharedOptions = require("../sharedOptions");
var import_handlers_controller = require("./handlers-controller");
var import_Disposable = require("../utils/internal/Disposable");
var import_toReadonlyArray = require("../utils/internal/toReadonlyArray");
class SetupApi extends import_Disposable.Disposable {
  handlersController;
  emitter;
  publicEmitter;
  events;
  constructor(...initialHandlers) {
    super();
    this.handlersController = new import_handlers_controller.InMemoryHandlersController(initialHandlers);
    this.emitter = new import_rettime.Emitter();
    this.publicEmitter = new import_rettime.Emitter();
    this.events = this.emitter;
    this.subscriptions.push(() => {
      this.emitter.removeAllListeners();
      this.publicEmitter.removeAllListeners();
    });
  }
  use(...runtimeHandlers) {
    this.handlersController.use(runtimeHandlers);
  }
  restoreHandlers() {
    this.handlersController.restore();
  }
  resetHandlers(...nextHandlers) {
    this.handlersController.reset(nextHandlers);
  }
  listHandlers() {
    return (0, import_toReadonlyArray.toReadonlyArray)(this.handlersController.currentHandlers());
  }
}
//# sourceMappingURL=setup-api.js.map