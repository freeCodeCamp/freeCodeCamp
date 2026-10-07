import { getContext } from "../Global.js";
import { ftom } from "./Conversions.js";
import { TimeBaseClass, } from "./TimeBase.js";
/**
 * TimeClass is a primitive type for encoding and decoding Time values.
 * TimeClass can be passed into the parameter of any method which takes time as an argument.
 * @param  val    The time value.
 * @param  units  The units of the value.
 * @example
 * const time = Tone.Time("4n"); // a quarter note
 * @category Unit
 */
export class TimeClass extends TimeBaseClass {
    constructor() {
        super(...arguments);
        this.name = "TimeClass";
    }
    _getExpressions() {
        return Object.assign(super._getExpressions(), {
            now: {
                method: (capture) => {
                    return (this._now() +
                        new this.constructor(this.context, capture).valueOf());
                },
                regexp: /^\+(.+)/,
            },
            quantize: {
                method: (capture) => {
                    const quantTo = new TimeClass(this.context, capture).valueOf();
                    return this._secondsToUnits(this.context.transport.nextSubdivision(quantTo));
                },
                regexp: /^@(.+)/,
            },
        });
    }
    /**
     * Quantize the time by the given subdivision. Optionally add a
     * percentage which will move the time value towards the ideal
     * quantized value by that percentage.
     * @param  subdiv    The subdivision to quantize to
     * @param  percent  Move the time value towards the quantized value by a percentage.
     * @example
     * Tone.Time(21).quantize(2); // returns 22
     * Tone.Time(0.6).quantize("4n", 0.5); // returns 0.55
     */
    quantize(subdiv, percent = 1) {
        const subdivision = new this.constructor(this.context, subdiv).valueOf();
        const value = this.valueOf();
        const multiple = Math.round(value / subdivision);
        const ideal = multiple * subdivision;
        const diff = ideal - value;
        return (value + diff * percent);
    }
    //-------------------------------------
    // CONVERSIONS
    //-------------------------------------
    /**
     * Convert a Time to Notation. The notation values are will be the
     * closest representation between 1m to 128th note.
     * @return {Notation}
     * @example
     * // if the Transport is at 120bpm:
     * Tone.Time(2).toNotation(); // returns "1m"
     */
    toNotation() {
        const time = this.toSeconds();
        const testNotations = ["1m"];
        for (let power = 1; power < 9; power++) {
            const subdiv = Math.pow(2, power);
            testNotations.push((subdiv + "n."));
            testNotations.push((subdiv + "n"));
            testNotations.push((subdiv + "t"));
        }
        testNotations.push("0");
        // find the closets notation representation
        let closest = testNotations[0];
        let closestSeconds = new TimeClass(this.context, testNotations[0]).toSeconds();
        testNotations.forEach((notation) => {
            const notationSeconds = new TimeClass(this.context, notation).toSeconds();
            if (Math.abs(notationSeconds - time) <
                Math.abs(closestSeconds - time)) {
                closest = notation;
                closestSeconds = notationSeconds;
            }
        });
        return closest;
    }
    /**
     * Return the time encoded as Bars:Beats:Sixteenths.
     */
    toBarsBeatsSixteenths() {
        const quarterTime = this._beatsToUnits(1);
        let quarters = this.valueOf() / quarterTime;
        quarters = parseFloat(quarters.toFixed(4));
        const measures = Math.floor(quarters / this._getTimeSignature());
        let sixteenths = (quarters % 1) * 4;
        quarters = Math.floor(quarters) % this._getTimeSignature();
        const sixteenthString = sixteenths.toString();
        if (sixteenthString.length > 3) {
            // the additional parseFloat removes insignificant trailing zeroes
            sixteenths = parseFloat(parseFloat(sixteenthString).toFixed(3));
        }
        const progress = [measures, quarters, sixteenths];
        return progress.join(":");
    }
    /**
     * Return the time in ticks.
     */
    toTicks() {
        const quarterTime = this._beatsToUnits(1);
        const quarters = this.valueOf() / quarterTime;
        return quarters * this._getPPQ();
    }
    /**
     * Return the time in seconds.
     */
    toSeconds() {
        return this.valueOf();
    }
    /**
     * Return the value as a midi note.
     */
    toMidi() {
        return ftom(this.toFrequency());
    }
    _now() {
        return this.context.now();
    }
}
/**
 * Create a TimeClass from a time string or number. The time is computed against the
 * global Tone.Context. To use a specific context, use {@link TimeClass}
 * @param value A value which represents time
 * @param units The value's units if they can't be inferred by the value.
 * @category Unit
 * @example
 * const time = Tone.Time("4n").toSeconds();
 * console.log(time);
 * @example
 * const note = Tone.Time(1).toNotation();
 * console.log(note);
 * @example
 * const freq = Tone.Time(0.5).toFrequency();
 * console.log(freq);
 */
export function Time(value, units) {
    return new TimeClass(getContext(), value, units);
}
//# sourceMappingURL=Time.js.map