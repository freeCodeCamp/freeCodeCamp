import { Emitter, TypedEvent } from "rettime";
import {
} from '../frames/network-frame.mjs';
class NetworkFrameEvent extends TypedEvent {
  frame;
  constructor(type, frame) {
    super(...[type, {}]);
    this.frame = frame;
  }
}
class NetworkSource {
  emitter;
  constructor() {
    this.emitter = new Emitter();
  }
  async queue(frame) {
    await this.emitter.emitAsPromise(
      // @ts-expect-error Trouble handling a conditional type parameter.
      new NetworkFrameEvent("frame", frame)
    );
  }
  on(type, listener, options) {
    this.emitter.on(type, listener, options);
  }
  disable() {
    this.emitter.removeAllListeners();
  }
}
export {
  NetworkSource
};
//# sourceMappingURL=network-source.mjs.map