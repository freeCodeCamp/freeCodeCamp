import { dbToGain, gainToDb } from "../type/Conversions.js";
import { isAudioParam } from "../util/AdvancedTypeCheck.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { Timeline } from "../util/Timeline.js";
import { isDefined } from "../util/TypeCheck.js";
import { ToneWithContext } from "./ToneWithContext.js";
import { EQ } from "../util/Math.js";
import { assert, assertRange } from "../util/Debug.js";
/**
 * Param wraps the native Web Audio's AudioParam to provide
 * additional unit conversion functionality. It also
 * serves as a base-class for classes which have a single,
 * automatable parameter.
 * @category Core
 */
export class Param extends ToneWithContext {
    constructor() {
        const options = optionsFromArguments(Param.getDefaults(), arguments, [
            "param",
            "units",
            "convert",
        ]);
        super(options);
        this.name = "Param";
        this.overridden = false;
        /**
         * The minimum output value
         */
        this._minOutput = 1e-7;
        assert(isDefined(options.param) &&
            (isAudioParam(options.param) || options.param instanceof Param), "param must be an AudioParam");
        while (!isAudioParam(options.param)) {
            options.param = options.param._param;
        }
        this._swappable = isDefined(options.swappable)
            ? options.swappable
            : false;
        if (this._swappable) {
            this.input = this.context.createGain();
            // initialize
            this._param = options.param;
            this.input.connect(this._param);
        }
        else {
            this._param = this.input = options.param;
        }
        this._events = new Timeline(1000);
        this._initialValue = this._param.defaultValue;
        this.units = options.units;
        this.convert = options.convert;
        this._minValue = options.minValue;
        this._maxValue = options.maxValue;
        // if the value is defined, set it immediately
        if (isDefined(options.value) &&
            options.value !== this._toType(this._initialValue)) {
            this.setValueAtTime(options.value, 0);
        }
    }
    static getDefaults() {
        return Object.assign(ToneWithContext.getDefaults(), {
            convert: true,
            units: "number",
        });
    }
    get value() {
        const now = this.now();
        return this.getValueAtTime(now);
    }
    set value(value) {
        this.cancelScheduledValues(this.now());
        this.setValueAtTime(value, this.now());
    }
    get minValue() {
        // if it's not the default minValue, return it
        if (isDefined(this._minValue)) {
            return this._minValue;
        }
        else if (this.units === "time" ||
            this.units === "frequency" ||
            this.units === "normalRange" ||
            this.units === "positive" ||
            this.units === "transportTime" ||
            this.units === "ticks" ||
            this.units === "bpm" ||
            this.units === "hertz" ||
            this.units === "samples") {
            return 0;
        }
        else if (this.units === "audioRange") {
            return -1;
        }
        else if (this.units === "decibels") {
            return -Infinity;
        }
        else {
            return this._param.minValue;
        }
    }
    get maxValue() {
        if (isDefined(this._maxValue)) {
            return this._maxValue;
        }
        else if (this.units === "normalRange" ||
            this.units === "audioRange") {
            return 1;
        }
        else {
            return this._param.maxValue;
        }
    }
    /**
     * Type guard based on the unit name
     */
    _is(arg, type) {
        return this.units === type;
    }
    /**
     * Make sure the value is always in the defined range
     */
    _assertRange(value) {
        if (isDefined(this.maxValue) && isDefined(this.minValue)) {
            assertRange(value, this._fromType(this.minValue), this._fromType(this.maxValue));
        }
        return value;
    }
    /**
     * Convert the given value from the type specified by Param.units
     * into the destination value (such as Gain or Frequency).
     */
    _fromType(val) {
        if (this.convert && !this.overridden) {
            if (this._is(val, "time")) {
                return this.toSeconds(val);
            }
            else if (this._is(val, "decibels")) {
                return dbToGain(val);
            }
            else if (this._is(val, "frequency")) {
                return this.toFrequency(val);
            }
            else {
                return val;
            }
        }
        else if (this.overridden) {
            // if it's overridden, should only schedule 0s
            return 0;
        }
        else {
            return val;
        }
    }
    /**
     * Convert the parameters value into the units specified by Param.units.
     */
    _toType(val) {
        if (this.convert && this.units === "decibels") {
            return gainToDb(val);
        }
        else {
            return val;
        }
    }
    //-------------------------------------
    // ABSTRACT PARAM INTERFACE
    // all docs are generated from ParamInterface.ts
    //-------------------------------------
    setValueAtTime(value, time) {
        const computedTime = this.toSeconds(time);
        const numericValue = this._fromType(value);
        assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(time)}`);
        this._assertRange(numericValue);
        this.log(this.units, "setValueAtTime", value, computedTime);
        this._events.add({
            time: computedTime,
            type: "setValueAtTime",
            value: numericValue,
        });
        this._param.setValueAtTime(numericValue, computedTime);
        return this;
    }
    getValueAtTime(time) {
        const computedTime = Math.max(this.toSeconds(time), 0);
        const after = this._events.getAfter(computedTime);
        const before = this._events.get(computedTime);
        let value = this._initialValue;
        // if it was set by
        if (before === null) {
            value = this._initialValue;
        }
        else if (before.type === "setTargetAtTime" &&
            (after === null || after.type === "setValueAtTime")) {
            const previous = this._events.getBefore(before.time);
            let previousVal;
            if (previous === null) {
                previousVal = this._initialValue;
            }
            else {
                previousVal = previous.value;
            }
            if (before.type === "setTargetAtTime") {
                value = this._exponentialApproach(before.time, previousVal, before.value, before.constant, computedTime);
            }
        }
        else if (after === null) {
            value = before.value;
        }
        else if (after.type === "linearRampToValueAtTime" ||
            after.type === "exponentialRampToValueAtTime") {
            let beforeValue = before.value;
            if (before.type === "setTargetAtTime") {
                const previous = this._events.getBefore(before.time);
                if (previous === null) {
                    beforeValue = this._initialValue;
                }
                else {
                    beforeValue = previous.value;
                }
            }
            if (after.type === "linearRampToValueAtTime") {
                value = this._linearInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
            }
            else {
                value = this._exponentialInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
            }
        }
        else {
            value = before.value;
        }
        return this._toType(value);
    }
    setRampPoint(time) {
        time = this.toSeconds(time);
        let currentVal = this.getValueAtTime(time);
        this.cancelAndHoldAtTime(time);
        if (this._fromType(currentVal) === 0) {
            currentVal = this._toType(this._minOutput);
        }
        this.setValueAtTime(currentVal, time);
        return this;
    }
    linearRampToValueAtTime(value, endTime) {
        const numericValue = this._fromType(value);
        const computedTime = this.toSeconds(endTime);
        assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
        this._assertRange(numericValue);
        this._events.add({
            time: computedTime,
            type: "linearRampToValueAtTime",
            value: numericValue,
        });
        this.log(this.units, "linearRampToValueAtTime", value, computedTime);
        this._param.linearRampToValueAtTime(numericValue, computedTime);
        return this;
    }
    exponentialRampToValueAtTime(value, endTime) {
        let numericValue = this._fromType(value);
        // the value can't be 0
        numericValue = EQ(numericValue, 0) ? this._minOutput : numericValue;
        this._assertRange(numericValue);
        const computedTime = this.toSeconds(endTime);
        assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
        // store the event
        this._events.add({
            time: computedTime,
            type: "exponentialRampToValueAtTime",
            value: numericValue,
        });
        this.log(this.units, "exponentialRampToValueAtTime", value, computedTime);
        this._param.exponentialRampToValueAtTime(numericValue, computedTime);
        return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
        startTime = this.toSeconds(startTime);
        this.setRampPoint(startTime);
        this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
        return this;
    }
    linearRampTo(value, rampTime, startTime) {
        startTime = this.toSeconds(startTime);
        this.setRampPoint(startTime);
        this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
        return this;
    }
    targetRampTo(value, rampTime, startTime) {
        startTime = this.toSeconds(startTime);
        this.setRampPoint(startTime);
        this.exponentialApproachValueAtTime(value, startTime, rampTime);
        return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
        time = this.toSeconds(time);
        rampTime = this.toSeconds(rampTime);
        const timeConstant = Math.log(rampTime + 1) / Math.log(200);
        this.setTargetAtTime(value, time, timeConstant);
        // at 90% start a linear ramp to the final value
        this.cancelAndHoldAtTime(time + rampTime * 0.9);
        this.linearRampToValueAtTime(value, time + rampTime);
        return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
        const numericValue = this._fromType(value);
        // The value will never be able to approach without timeConstant > 0.
        assert(isFinite(timeConstant) && timeConstant > 0, "timeConstant must be a number greater than 0");
        const computedTime = this.toSeconds(startTime);
        this._assertRange(numericValue);
        assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(value)}, ${JSON.stringify(startTime)}`);
        this._events.add({
            constant: timeConstant,
            time: computedTime,
            type: "setTargetAtTime",
            value: numericValue,
        });
        this.log(this.units, "setTargetAtTime", value, computedTime, timeConstant);
        this._param.setTargetAtTime(numericValue, computedTime, timeConstant);
        return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling = 1) {
        duration = this.toSeconds(duration);
        startTime = this.toSeconds(startTime);
        const startingValue = this._fromType(values[0]) * scaling;
        this.setValueAtTime(this._toType(startingValue), startTime);
        const segTime = duration / (values.length - 1);
        for (let i = 1; i < values.length; i++) {
            const numericValue = this._fromType(values[i]) * scaling;
            this.linearRampToValueAtTime(this._toType(numericValue), startTime + i * segTime);
        }
        return this;
    }
    cancelScheduledValues(time) {
        const computedTime = this.toSeconds(time);
        assert(isFinite(computedTime), `Invalid argument to cancelScheduledValues: ${JSON.stringify(time)}`);
        this._events.cancel(computedTime);
        this._param.cancelScheduledValues(computedTime);
        this.log(this.units, "cancelScheduledValues", computedTime);
        return this;
    }
    cancelAndHoldAtTime(time) {
        const computedTime = this.toSeconds(time);
        const valueAtTime = this._fromType(this.getValueAtTime(computedTime));
        // remove the schedule events
        assert(isFinite(computedTime), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(time)}`);
        this.log(this.units, "cancelAndHoldAtTime", computedTime, "value=" + valueAtTime);
        // if there is an event at the given computedTime
        // and that even is not a "set"
        const before = this._events.get(computedTime);
        const after = this._events.getAfter(computedTime);
        if (before && EQ(before.time, computedTime)) {
            // remove everything after
            if (after) {
                this._param.cancelScheduledValues(after.time);
                this._events.cancel(after.time);
            }
            else {
                this._param.cancelAndHoldAtTime(computedTime);
                this._events.cancel(computedTime + this.sampleTime);
            }
        }
        else if (after) {
            this._param.cancelScheduledValues(after.time);
            // cancel the next event(s)
            this._events.cancel(after.time);
            if (after.type === "linearRampToValueAtTime") {
                this.linearRampToValueAtTime(this._toType(valueAtTime), computedTime);
            }
            else if (after.type === "exponentialRampToValueAtTime") {
                this.exponentialRampToValueAtTime(this._toType(valueAtTime), computedTime);
            }
        }
        // set the value at the given time
        this._events.add({
            time: computedTime,
            type: "setValueAtTime",
            value: valueAtTime,
        });
        this._param.setValueAtTime(valueAtTime, computedTime);
        return this;
    }
    rampTo(value, rampTime = 0.1, startTime) {
        if (this.units === "frequency" ||
            this.units === "bpm" ||
            this.units === "decibels") {
            this.exponentialRampTo(value, rampTime, startTime);
        }
        else {
            this.linearRampTo(value, rampTime, startTime);
        }
        return this;
    }
    /**
     * Apply all of the previously scheduled events to the passed in Param or AudioParam.
     * The applied values will start at the context's current time and schedule
     * all of the events which are scheduled on this Param onto the passed in param.
     */
    apply(param) {
        const now = this.context.currentTime;
        // set the param's value at the current time and schedule everything else
        param.setValueAtTime(this.getValueAtTime(now), now);
        // if the previous event was a curve, then set the rest of it
        const previousEvent = this._events.get(now);
        if (previousEvent && previousEvent.type === "setTargetAtTime") {
            // approx it until the next event with linear ramps
            const nextEvent = this._events.getAfter(previousEvent.time);
            // or for 2 seconds if there is no event
            const endTime = nextEvent ? nextEvent.time : now + 2;
            const subdivisions = (endTime - now) / 10;
            for (let i = now; i < endTime; i += subdivisions) {
                param.linearRampToValueAtTime(this.getValueAtTime(i), i);
            }
        }
        this._events.forEachAfter(this.context.currentTime, (event) => {
            if (event.type === "cancelScheduledValues") {
                param.cancelScheduledValues(event.time);
            }
            else if (event.type === "setTargetAtTime") {
                param.setTargetAtTime(event.value, event.time, event.constant);
            }
            else {
                param[event.type](event.value, event.time);
            }
        });
        return this;
    }
    /**
     * Replace the Param's internal AudioParam. Will apply scheduled curves
     * onto the parameter and replace the connections.
     */
    setParam(param) {
        assert(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
        const input = this.input;
        input.disconnect(this._param);
        this.apply(param);
        this._param = param;
        input.connect(this._param);
        return this;
    }
    dispose() {
        super.dispose();
        this._events.dispose();
        return this;
    }
    get defaultValue() {
        return this._toType(this._param.defaultValue);
    }
    //-------------------------------------
    // 	AUTOMATION CURVE CALCULATIONS
    // 	MIT License, copyright (c) 2014 Jordan Santell
    //-------------------------------------
    // Calculates the the value along the curve produced by setTargetAtTime
    _exponentialApproach(t0, v0, v1, timeConstant, t) {
        return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
    }
    // Calculates the the value along the curve produced by linearRampToValueAtTime
    _linearInterpolate(t0, v0, t1, v1, t) {
        return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
    }
    // Calculates the the value along the curve produced by exponentialRampToValueAtTime
    _exponentialInterpolate(t0, v0, t1, v1, t) {
        return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
    }
}
//# sourceMappingURL=Param.js.map