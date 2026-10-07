import { Tone } from "../Tone.js";
export interface EmitterEventObject {
    [event: string]: Array<(...args: any[]) => void>;
}
/**
 * Emitter gives classes which extend it
 * the ability to listen for and emit events.
 * Inspiration and reference from Jerome Etienne's [MicroEvent](https://github.com/jeromeetienne/microevent.js).
 * MIT (c) 2011 Jerome Etienne.
 * @category Core
 */
export declare class Emitter<EventType extends string = string> extends Tone {
    readonly name: string;
    /**
     * Private container for the events
     */
    private _events?;
    /**
     * Bind a callback to a specific event.
     * @param  event     The name of the event to listen for.
     * @param  callback  The callback to invoke when the event is emitted
     */
    on(event: EventType, callback: (...args: any[]) => void): this;
    /**
     * Bind a callback which is only invoked once
     * @param  event     The name of the event to listen for.
     * @param  callback  The callback to invoke when the event is emitted
     */
    once(event: EventType, callback: (...args: any[]) => void): this;
    /**
     * Remove the event listener.
     * @param  event     The event to stop listening to.
     * @param  callback  The callback which was bound to the event with Emitter.on.
     *                   If no callback is given, all callbacks events are removed.
     */
    off(event: EventType, callback?: (...args: any[]) => void): this;
    /**
     * Invoke all of the callbacks bound to the event
     * with any arguments passed in.
     * @param  event  The name of the event.
     * @param args The arguments to pass to the functions listening.
     */
    emit(event: EventType, ...args: any[]): this;
    /**
     * Add Emitter functions (on/off/emit) to the object
     */
    static mixin(constr: any): void;
    /**
     * Clean up
     */
    dispose(): this;
}
