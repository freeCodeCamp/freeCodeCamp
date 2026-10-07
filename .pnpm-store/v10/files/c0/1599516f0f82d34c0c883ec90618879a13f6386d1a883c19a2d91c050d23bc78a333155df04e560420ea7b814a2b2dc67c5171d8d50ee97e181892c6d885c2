import { Emitter } from "rettime";
import {} from '../sharedOptions.mjs';
import {
  InMemoryHandlersController
} from './handlers-controller.mjs';
import { Disposable } from '../utils/internal/Disposable.mjs';
import { toReadonlyArray } from '../utils/internal/toReadonlyArray.mjs';
class SetupApi extends Disposable {
  handlersController;
  emitter;
  publicEmitter;
  events;
  constructor(...initialHandlers) {
    super();
    this.handlersController = new InMemoryHandlersController(initialHandlers);
    this.emitter = new Emitter();
    this.publicEmitter = new Emitter();
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
    return toReadonlyArray(this.handlersController.currentHandlers());
  }
}
export {
  SetupApi
};
//# sourceMappingURL=setup-api.mjs.map