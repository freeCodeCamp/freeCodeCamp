import { Seconds, Ticks } from "../type/Units.js";
import type { TransportClass as Transport } from "./Transport.js";
export interface TransportEventOptions {
    callback: (time: number) => void;
    once: boolean;
    time: Ticks;
}
/**
 * TransportEvent is an internal class used by {@link TransportClass}
 * to schedule events. Do no invoke this class directly, it is
 * handled from within Tone.Transport.
 */
export declare class TransportEvent {
    /**
     * Reference to the Transport that created it
     */
    protected transport: Transport;
    /**
     * The unique id of the event
     */
    id: number;
    /**
     * The time the event starts
     */
    time: Ticks;
    /**
     * The callback to invoke
     */
    private callback?;
    /**
     * If the event should be removed after being invoked.
     */
    private _once;
    /**
     * The remaining value between the passed in time, and Math.floor(time).
     * This value is later added back when scheduling to get sub-tick precision.
     */
    protected _remainderTime: number;
    /**
     * @param transport The transport object which the event belongs to
     */
    constructor(transport: Transport, opts: Partial<TransportEventOptions>);
    static getDefaults(): TransportEventOptions;
    /**
     * Current ID counter
     */
    private static _eventId;
    /**
     * Get the time and remainder time.
     */
    protected get floatTime(): number;
    /**
     * Invoke the event callback.
     * @param  time  The AudioContext time in seconds of the event
     */
    invoke(time: Seconds): void;
    /**
     * Clean up
     */
    dispose(): this;
}
