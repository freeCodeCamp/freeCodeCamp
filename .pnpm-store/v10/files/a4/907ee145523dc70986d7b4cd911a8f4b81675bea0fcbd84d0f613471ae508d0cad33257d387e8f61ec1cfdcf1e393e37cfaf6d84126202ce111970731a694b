import { invariant } from "outvariant";
import {} from '../handlers/RequestHandler.mjs';
import {} from '../handlers/WebSocketHandler.mjs';
import { devUtils } from '../utils/internal/devUtils.mjs';
import { getSiblingHandlers } from '../utils/internal/attachSiblingHandlers.mjs';
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
    for (const sibling of getSiblingHandlers(handler)) {
      pushUnique(sibling.kind, sibling);
    }
  }
  return groups;
}
class HandlersController {
  getInitialState(initialHandlers) {
    invariant(
      this.#validateHandlers(initialHandlers),
      devUtils.formatMessage(
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
    invariant(
      this.#validateHandlers(nextHandlers),
      devUtils.formatMessage(
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
    invariant(
      nextHandlers.length > 0 ? this.#validateHandlers(nextHandlers) : true,
      devUtils.formatMessage(
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
export {
  HandlersController,
  InMemoryHandlersController,
  groupHandlersByKind
};
//# sourceMappingURL=handlers-controller.mjs.map