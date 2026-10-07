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
var handlers_controller_exports = {};
__export(handlers_controller_exports, {
  HandlersController: () => HandlersController,
  InMemoryHandlersController: () => InMemoryHandlersController,
  groupHandlersByKind: () => groupHandlersByKind
});
module.exports = __toCommonJS(handlers_controller_exports);
var import_outvariant = require("outvariant");
var import_RequestHandler = require("../handlers/RequestHandler");
var import_WebSocketHandler = require("../handlers/WebSocketHandler");
var import_devUtils = require("../utils/internal/devUtils");
var import_attachSiblingHandlers = require("../utils/internal/attachSiblingHandlers");
function groupHandlersByKind(handlers) {
  const groups = {};
  const pushUnique = (kind, handler) => {
    const bucket = groups[kind] ||= [];
    if (!bucket.includes(handler)) {
      bucket.push(handler);
    }
  };
  for (const handler of handlers) {
    pushUnique(handler.kind, handler);
    for (const sibling of (0, import_attachSiblingHandlers.getSiblingHandlers)(handler)) {
      pushUnique(sibling.kind, sibling);
    }
  }
  return groups;
}
class HandlersController {
  getInitialState(initialHandlers) {
    (0, import_outvariant.invariant)(
      this.#validateHandlers(initialHandlers),
      import_devUtils.devUtils.formatMessage(
        "Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?"
      )
    );
    const normalizedInitialHandlers = groupHandlersByKind(initialHandlers);
    return {
      initialHandlers: normalizedInitialHandlers,
      handlers: { ...normalizedInitialHandlers }
    };
  }
  currentHandlers() {
    return Object.values(this.getState().handlers).flat().filter((handler) => handler != null);
  }
  getHandlersByKind(kind) {
    return this.getState().handlers[kind] || [];
  }
  use(nextHandlers) {
    (0, import_outvariant.invariant)(
      this.#validateHandlers(nextHandlers),
      import_devUtils.devUtils.formatMessage(
        '[MSW] Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?'
      )
    );
    if (nextHandlers.length === 0) {
      return;
    }
    const { handlers } = this.getState();
    const overrides = groupHandlersByKind(nextHandlers);
    for (const kind in overrides) {
      const overridesForKind = overrides[kind];
      const existingForKind = handlers[kind];
      handlers[kind] = existingForKind ? [...overridesForKind, ...existingForKind] : overridesForKind;
    }
    this.setState({ handlers });
  }
  reset(nextHandlers) {
    (0, import_outvariant.invariant)(
      nextHandlers.length > 0 ? this.#validateHandlers(nextHandlers) : true,
      import_devUtils.devUtils.formatMessage(
        "Failed to replace initial handlers during reset: invalid handlers. Did you forget to spread the handlers array?"
      )
    );
    for (const handler of this.currentHandlers()) {
      if ("reset" in handler) {
        handler["reset"]();
      }
    }
    const { initialHandlers } = this.getState();
    if (nextHandlers.length === 0) {
      this.setState({
        handlers: { ...initialHandlers }
      });
      return;
    }
    const normalizedNextHandlers = groupHandlersByKind(nextHandlers);
    this.setState({
      initialHandlers: normalizedNextHandlers,
      handlers: { ...normalizedNextHandlers }
    });
  }
  restore() {
    for (const handler of this.currentHandlers()) {
      if ("restore" in handler) {
        handler["restore"]();
      }
    }
  }
  #validateHandlers(handlers) {
    return handlers.every((handler) => !Array.isArray(handler));
  }
}
class InMemoryHandlersController extends HandlersController {
  #handlers;
  #initialHandlers;
  constructor(initialHandlers) {
    super();
    const initialState = this.getInitialState(initialHandlers);
    this.#initialHandlers = initialState.initialHandlers;
    this.#handlers = initialState.handlers;
  }
  getState() {
    return {
      initialHandlers: this.#initialHandlers,
      handlers: this.#handlers
    };
  }
  setState(nextState) {
    if (nextState.initialHandlers) {
      this.#initialHandlers = nextState.initialHandlers;
    }
    if (nextState.handlers) {
      this.#handlers = nextState.handlers;
    }
  }
}
//# sourceMappingURL=handlers-controller.js.map