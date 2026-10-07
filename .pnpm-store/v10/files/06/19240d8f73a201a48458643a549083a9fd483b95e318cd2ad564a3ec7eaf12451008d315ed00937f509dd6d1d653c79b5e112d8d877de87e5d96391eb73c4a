import { TicksClass } from "../type/Ticks.js";
import { TransportEvent } from "./TransportEvent.js";
import { GT, LT } from "../util/Math.js";
/**
 * TransportRepeatEvent is an internal class used by Tone.Transport
 * to schedule repeat events. This class should not be instantiated directly.
 */
export class TransportRepeatEvent extends TransportEvent {
    /**
     * @param transport The transport object which the event belongs to
     */
    constructor(transport, opts) {
        super(transport, opts);
        /**
         * The ID of the current timeline event
         */
        this._currentId = -1;
        /**
         * The ID of the next timeline event
         */
        this._nextId = -1;
        /**
         * The time of the next event
         */
        this._nextTick = this.time;
        /**
         * a reference to the bound start method
         */
        this._boundRestart = this._restart.bind(this);
        const options = Object.assign(TransportRepeatEvent.getDefaults(), opts);
        this.duration = options.duration;
        this._interval = options.interval;
        this._nextTick = options.time;
        this.transport.on("start", this._boundRestart);
        this.transport.on("loopStart", this._boundRestart);
        this.transport.on("ticks", this._boundRestart);
        this.context = this.transport.context;
        this._restart();
    }
    static getDefaults() {
        return Object.assign({}, TransportEvent.getDefaults(), {
            duration: Infinity,
            interval: 1,
            once: false,
        });
    }
    /**
     * Invoke the callback. Returns the tick time which
     * the next event should be scheduled at.
     * @param  time  The AudioContext time in seconds of the event
     */
    invoke(time) {
        // create more events if necessary
        this._createEvents(time);
        // call the super class
        super.invoke(time);
    }
    /**
     * Create an event on the transport on the nextTick
     */
    _createEvent() {
        if (LT(this._nextTick, this.floatTime + this.duration)) {
            return this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
        }
        return -1;
    }
    /**
     * Push more events onto the timeline to keep up with the position of the timeline
     */
    _createEvents(time) {
        // schedule the next event
        // const ticks = this.transport.getTicksAtTime(time);
        // if the next tick is within the bounds set by "duration"
        if (LT(this._nextTick + this._interval, this.floatTime + this.duration)) {
            this._nextTick += this._interval;
            this._currentId = this._nextId;
            this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
        }
    }
    /**
     * Re-compute the events when the transport time has changed from a start/ticks/loopStart event
     */
    _restart(time) {
        this.transport.clear(this._currentId);
        this.transport.clear(this._nextId);
        // start at the first event
        this._nextTick = this.floatTime;
        const ticks = this.transport.getTicksAtTime(time);
        if (GT(ticks, this.time)) {
            // the event is not being scheduled from the beginning and should be offset
            this._nextTick =
                this.floatTime +
                    Math.ceil((ticks - this.floatTime) / this._interval) *
                        this._interval;
        }
        this._currentId = this._createEvent();
        this._nextTick += this._interval;
        this._nextId = this._createEvent();
    }
    /**
     * Clean up
     */
    dispose() {
        super.dispose();
        this.transport.clear(this._currentId);
        this.transport.clear(this._nextId);
        this.transport.off("start", this._boundRestart);
        this.transport.off("loopStart", this._boundRestart);
        this.transport.off("ticks", this._boundRestart);
        return this;
    }
}
//# sourceMappingURL=TransportRepeatEvent.js.map