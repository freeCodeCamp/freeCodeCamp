/**
 * @private
 * (For internal use in stripe-node.)
 * Wrapper around the Event Web API.
 */
class _StripeEvent extends Event {
    constructor(eventName, data) {
        super(eventName);
        this.data = data;
    }
}
/** Minimal EventEmitter wrapper around EventTarget. */
export class StripeEmitter {
    constructor() {
        this.eventTarget = new EventTarget();
        this.listenerMapping = new Map();
    }
    on(eventName, listener) {
        const listenerWrapper = (event) => {
            listener(event.data);
        };
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }
    removeListener(eventName, listener) {
        const listenerWrapper = this.listenerMapping.get(listener);
        this.listenerMapping.delete(listener);
        return this.eventTarget.removeEventListener(eventName, listenerWrapper);
    }
    once(eventName, listener) {
        const listenerWrapper = (event) => {
            listener(event.data);
        };
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper, {
            once: true,
        });
    }
    emit(eventName, data) {
        return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
    }
}
