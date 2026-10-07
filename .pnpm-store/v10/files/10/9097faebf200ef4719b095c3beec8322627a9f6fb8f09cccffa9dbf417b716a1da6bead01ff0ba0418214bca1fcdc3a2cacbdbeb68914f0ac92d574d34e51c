import { getContext } from "../Global.js";
import { TransportTimeClass } from "./TransportTime.js";
/**
 * Ticks is a primitive type for encoding Time values.
 * Ticks can be constructed with or without the `new` keyword. Ticks can be passed
 * into the parameter of any method which takes time as an argument.
 * @example
 * const t = Tone.Ticks("4n"); // a quarter note as ticks
 * @category Unit
 */
export class TicksClass extends TransportTimeClass {
    constructor() {
        super(...arguments);
        this.name = "Ticks";
        this.defaultUnits = "i";
    }
    /**
     * Get the current time in the given units
     */
    _now() {
        return this.context.transport.ticks;
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
        return this._getPPQ() * beats;
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
        return Math.floor((seconds / (60 / this._getBpm())) * this._getPPQ());
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
        return ticks;
    }
    /**
     * Return the time in ticks
     */
    toTicks() {
        return this.valueOf();
    }
    /**
     * Return the time in seconds
     */
    toSeconds() {
        return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
    }
}
/**
 * Convert a time representation to ticks
 * @category Unit
 */
export function Ticks(value, units) {
    return new TicksClass(getContext(), value, units);
}
//# sourceMappingURL=Ticks.js.map