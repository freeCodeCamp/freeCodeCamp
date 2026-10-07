import { Param } from "../core/context/Param.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { connect } from "../core/context/ToneAudioNode.js";
import { isAudioParam } from "../core/util/AdvancedTypeCheck.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { ToneConstantSource } from "./ToneConstantSource.js";
/**
 * A signal is an audio-rate value. Tone.Signal is a core component of the library.
 * Unlike a number, Signals can be scheduled with sample-level accuracy. Tone.Signal
 * has all of the methods available to native Web Audio
 * [AudioParam](http://webaudio.github.io/web-audio-api/#the-audioparam-interface)
 * as well as additional conveniences. Read more about working with signals
 * [here](https://github.com/Tonejs/Tone.js/wiki/Signals).
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination().start();
 * // a scheduleable signal which can be connected to control an AudioParam or another Signal
 * const signal = new Tone.Signal({
 * 	value: "C4",
 * 	units: "frequency"
 * }).connect(osc.frequency);
 * // the scheduled ramp controls the connected signal
 * signal.rampTo("C2", 4, "+0.5");
 * @category Signal
 */
export class Signal extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Signal.getDefaults(), arguments, [
            "value",
            "units",
        ]);
        super(options);
        this.name = "Signal";
        /**
         * Indicates if the value should be overridden on connection.
         */
        this.override = true;
        this.output = this._constantSource = new ToneConstantSource({
            context: this.context,
            convert: options.convert,
            offset: options.value,
            units: options.units,
            minValue: options.minValue,
            maxValue: options.maxValue,
        });
        this._constantSource.start(0);
        this.input = this._param = this._constantSource.offset;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            convert: true,
            units: "number",
            value: 0,
        });
    }
    connect(destination, outputNum = 0, inputNum = 0) {
        // start it only when connected to something
        connectSignal(this, destination, outputNum, inputNum);
        return this;
    }
    dispose() {
        super.dispose();
        this._param.dispose();
        this._constantSource.dispose();
        return this;
    }
    //-------------------------------------
    // ABSTRACT PARAM INTERFACE
    // just a proxy for the ConstantSourceNode's offset AudioParam
    // all docs are generated from AbstractParam.ts
    //-------------------------------------
    setValueAtTime(value, time) {
        this._param.setValueAtTime(value, time);
        return this;
    }
    getValueAtTime(time) {
        return this._param.getValueAtTime(time);
    }
    setRampPoint(time) {
        this._param.setRampPoint(time);
        return this;
    }
    linearRampToValueAtTime(value, time) {
        this._param.linearRampToValueAtTime(value, time);
        return this;
    }
    exponentialRampToValueAtTime(value, time) {
        this._param.exponentialRampToValueAtTime(value, time);
        return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
        this._param.exponentialRampTo(value, rampTime, startTime);
        return this;
    }
    linearRampTo(value, rampTime, startTime) {
        this._param.linearRampTo(value, rampTime, startTime);
        return this;
    }
    targetRampTo(value, rampTime, startTime) {
        this._param.targetRampTo(value, rampTime, startTime);
        return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
        this._param.exponentialApproachValueAtTime(value, time, rampTime);
        return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
        this._param.setTargetAtTime(value, startTime, timeConstant);
        return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling) {
        this._param.setValueCurveAtTime(values, startTime, duration, scaling);
        return this;
    }
    cancelScheduledValues(time) {
        this._param.cancelScheduledValues(time);
        return this;
    }
    cancelAndHoldAtTime(time) {
        this._param.cancelAndHoldAtTime(time);
        return this;
    }
    rampTo(value, rampTime, startTime) {
        this._param.rampTo(value, rampTime, startTime);
        return this;
    }
    get value() {
        return this._param.value;
    }
    set value(value) {
        this._param.value = value;
    }
    get convert() {
        return this._param.convert;
    }
    set convert(convert) {
        this._param.convert = convert;
    }
    get units() {
        return this._param.units;
    }
    get overridden() {
        return this._param.overridden;
    }
    set overridden(overridden) {
        this._param.overridden = overridden;
    }
    get maxValue() {
        return this._param.maxValue;
    }
    get minValue() {
        return this._param.minValue;
    }
    /**
     * @see {@link Param.apply}.
     */
    apply(param) {
        this._param.apply(param);
        return this;
    }
}
/**
 * When connecting from a signal, it's necessary to zero out the node destination
 * node if that node is also a signal. If the destination is not 0, then the values
 * will be summed. This method insures that the output of the destination signal will
 * be the same as the source signal, making the destination signal a pass through node.
 * @param signal The output signal to connect from
 * @param destination the destination to connect to
 * @param outputNum the optional output number
 * @param inputNum the input number
 */
export function connectSignal(signal, destination, outputNum, inputNum) {
    if (destination instanceof Param ||
        isAudioParam(destination) ||
        (destination instanceof Signal && destination.override)) {
        // cancel changes
        destination.cancelScheduledValues(0);
        // reset the value
        destination.setValueAtTime(0, 0);
        // mark the value as overridden
        if (destination instanceof Signal) {
            destination.overridden = true;
        }
    }
    connect(signal, destination, outputNum, inputNum);
}
//# sourceMappingURL=Signal.js.map