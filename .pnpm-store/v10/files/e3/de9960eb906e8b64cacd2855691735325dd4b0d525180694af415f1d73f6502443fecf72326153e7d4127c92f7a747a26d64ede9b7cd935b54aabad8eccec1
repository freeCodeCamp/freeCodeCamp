import { Tone } from "../Tone.js";
import { isDefined, isObject, isString, isUndef } from "../util/TypeCheck.js";
/**
 * TimeBase is a flexible encoding of time which can be evaluated to and from a string.
 */
export class TimeBaseClass extends Tone {
    /**
     * @param context The context associated with the time value. Used to compute
     * Transport and context-relative timing.
     * @param  value  The time value as a number, string or object
     * @param  units  Unit values
     */
    constructor(context, value, units) {
        super();
        /**
         * The default units
         */
        this.defaultUnits = "s";
        this._val = value;
        this._units = units;
        this.context = context;
        this._expressions = this._getExpressions();
    }
    /**
     * All of the time encoding expressions
     */
    _getExpressions() {
        return {
            hz: {
                method: (value) => {
                    return this._frequencyToUnits(parseFloat(value));
                },
                regexp: /^(\d+(?:\.\d+)?)hz$/i,
            },
            i: {
                method: (value) => {
                    return this._ticksToUnits(parseInt(value, 10));
                },
                regexp: /^(\d+)i$/i,
            },
            m: {
                method: (value) => {
                    return this._beatsToUnits(parseInt(value, 10) * this._getTimeSignature());
                },
                regexp: /^(\d+)m$/i,
            },
            n: {
                method: (value, dot) => {
                    const numericValue = parseInt(value, 10);
                    const scalar = dot === "." ? 1.5 : 1;
                    if (numericValue === 1) {
                        return (this._beatsToUnits(this._getTimeSignature()) *
                            scalar);
                    }
                    else {
                        return (this._beatsToUnits(4 / numericValue) *
                            scalar);
                    }
                },
                regexp: /^(\d+)n(\.?)$/i,
            },
            number: {
                method: (value) => {
                    return this._expressions[this.defaultUnits].method.call(this, value);
                },
                regexp: /^(\d+(?:\.\d+)?)$/,
            },
            s: {
                method: (value) => {
                    return this._secondsToUnits(parseFloat(value));
                },
                regexp: /^(\d+(?:\.\d+)?)s$/,
            },
            samples: {
                method: (value) => {
                    return (parseInt(value, 10) /
                        this.context.sampleRate);
                },
                regexp: /^(\d+)samples$/,
            },
            t: {
                method: (value) => {
                    const numericValue = parseInt(value, 10);
                    return this._beatsToUnits(8 / (Math.floor(numericValue) * 3));
                },
                regexp: /^(\d+)t$/i,
            },
            tr: {
                method: (m, q, s) => {
                    let total = 0;
                    if (m && m !== "0") {
                        total += this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
                    }
                    if (q && q !== "0") {
                        total += this._beatsToUnits(parseFloat(q));
                    }
                    if (s && s !== "0") {
                        total += this._beatsToUnits(parseFloat(s) / 4);
                    }
                    return total;
                },
                regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
            },
        };
    }
    //-------------------------------------
    // 	VALUE OF
    //-------------------------------------
    /**
     * Evaluate the time value. Returns the time in seconds.
     */
    valueOf() {
        if (this._val instanceof TimeBaseClass) {
            this.fromType(this._val);
        }
        if (isUndef(this._val)) {
            return this._noArg();
        }
        else if (isString(this._val) && isUndef(this._units)) {
            for (const units in this._expressions) {
                if (this._expressions[units].regexp.test(this._val.trim())) {
                    this._units = units;
                    break;
                }
            }
        }
        else if (isObject(this._val)) {
            let total = 0;
            for (const typeName in this._val) {
                if (isDefined(this._val[typeName])) {
                    const quantity = this._val[typeName];
                    const time = 
                    // @ts-ignore
                    new this.constructor(this.context, typeName).valueOf() *
                        quantity;
                    total += time;
                }
            }
            return total;
        }
        if (isDefined(this._units)) {
            const expr = this._expressions[this._units];
            const matching = this._val.toString().trim().match(expr.regexp);
            if (matching) {
                return expr.method.apply(this, matching.slice(1));
            }
            else {
                return expr.method.call(this, this._val);
            }
        }
        else if (isString(this._val)) {
            return parseFloat(this._val);
        }
        else {
            return this._val;
        }
    }
    //-------------------------------------
    // 	UNIT CONVERSIONS
    //-------------------------------------
    /**
     * Returns the value of a frequency in the current units
     */
    _frequencyToUnits(freq) {
        return (1 / freq);
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
        return ((60 / this._getBpm()) * beats);
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
        return seconds;
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
        return ((ticks * this._beatsToUnits(1)) / this._getPPQ());
    }
    /**
     * With no arguments, return 'now'
     */
    _noArg() {
        return this._now();
    }
    //-------------------------------------
    // 	TEMPO CONVERSIONS
    //-------------------------------------
    /**
     * Return the bpm
     */
    _getBpm() {
        return this.context.transport.bpm.value;
    }
    /**
     * Return the timeSignature
     */
    _getTimeSignature() {
        return this.context.transport.timeSignature;
    }
    /**
     * Return the PPQ or 192 if Transport is not available
     */
    _getPPQ() {
        return this.context.transport.PPQ;
    }
    //-------------------------------------
    // 	CONVERSION INTERFACE
    //-------------------------------------
    /**
     * Coerce a time type into this units type.
     * @param type Any time type units
     */
    fromType(type) {
        this._units = undefined;
        switch (this.defaultUnits) {
            case "s":
                this._val = type.toSeconds();
                break;
            case "i":
                this._val = type.toTicks();
                break;
            case "hz":
                this._val = type.toFrequency();
                break;
            case "midi":
                this._val = type.toMidi();
                break;
        }
        return this;
    }
    /**
     * Return the value in hertz
     */
    toFrequency() {
        return 1 / this.toSeconds();
    }
    /**
     * Return the time in samples
     */
    toSamples() {
        return this.toSeconds() * this.context.sampleRate;
    }
    /**
     * Return the time in milliseconds.
     */
    toMilliseconds() {
        return this.toSeconds() * 1000;
    }
}
//# sourceMappingURL=TimeBase.js.map