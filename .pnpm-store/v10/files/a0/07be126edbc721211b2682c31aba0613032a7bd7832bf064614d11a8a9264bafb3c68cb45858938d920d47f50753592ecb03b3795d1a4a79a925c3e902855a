import { BaseContext } from "../context/BaseContext.js";
import { Seconds, Ticks } from "../type/Units.js";
import { TransportEvent, TransportEventOptions } from "./TransportEvent.js";
import type { TransportClass as Transport } from "./Transport.js";
interface TransportRepeatEventOptions extends TransportEventOptions {
    interval: Ticks;
    duration: Ticks;
}
/**
 * TransportRepeatEvent is an internal class used by Tone.Transport
 * to schedule repeat events. This class should not be instantiated directly.
 */
export declare class TransportRepeatEvent extends TransportEvent {
    /**
     * When the event should stop repeating
     */
    private duration;
    /**
     * The interval of the repeated event
     */
    private _interval;
    /**
     * The ID of the current timeline event
     */
    private _currentId;
    /**
     * The ID of the next timeline event
     */
    private _nextId;
    /**
     * The time of the next event
     */
    private _nextTick;
    /**
     * a reference to the bound start method
     */
    private _boundRestart;
    /**
     * The audio context belonging to this event
     */
    protected context: BaseContext;
    /**
     * @param transport The transport object which the event belongs to
     */
    constructor(transport: Transport, opts: Partial<TransportRepeatEventOptions>);
    static getDefaults(): TransportRepeatEventOptions;
    /**
     * Invoke the callback. Returns the tick time which
     * the next event should be scheduled at.
     * @param  time  The AudioContext time in seconds of the event
     */
    invoke(time: Seconds): void;
    /**
     * Create an event on the transport on the nextTick
     */
    private _createEvent;
    /**
     * Push more events onto the timeline to keep up with the position of the timeline
     */
    private _createEvents;
    /**
     * Re-compute the events when the transport time has changed from a start/ticks/loopStart event
     */
    private _restart;
    /**
     * Clean up
     */
    dispose(): this;
}
export {};
