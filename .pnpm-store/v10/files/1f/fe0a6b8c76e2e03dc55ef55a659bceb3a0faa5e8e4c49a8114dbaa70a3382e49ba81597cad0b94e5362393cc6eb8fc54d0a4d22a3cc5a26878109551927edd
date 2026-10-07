import { optionsFromArguments } from "../core/util/Defaults.js";
import { isArray, isFunction } from "../core/util/TypeCheck.js";
import { assert } from "../core/util/Debug.js";
import { Signal } from "./Signal.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Wraps the native Web Audio API
 * [WaveShaperNode](http://webaudio.github.io/web-audio-api/#the-waveshapernode-interface).
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination().start();
 * // multiply the output of the signal by 2 using the waveshaper's function
 * const timesTwo = new Tone.WaveShaper((val) => val * 2, 2048).connect(osc.frequency);
 * const signal = new Tone.Signal(440).connect(timesTwo);
 * @category Signal
 */
export class WaveShaper extends SignalOperator {
    constructor() {
        const options = optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"]);
        super(options);
        this.name = "WaveShaper";
        /**
         * the waveshaper node
         */
        this._shaper = this.context.createWaveShaper();
        /**
         * The input to the waveshaper node.
         */
        this.input = this._shaper;
        /**
         * The output from the waveshaper node
         */
        this.output = this._shaper;
        if (isArray(options.mapping) ||
            options.mapping instanceof Float32Array) {
            this.curve = Float32Array.from(options.mapping);
        }
        else if (isFunction(options.mapping)) {
            this.setMap(options.mapping, options.length);
        }
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            length: 1024,
        });
    }
    /**
     * Uses a mapping function to set the value of the curve.
     * @param mapping The function used to define the values.
     *                The mapping function take two arguments:
     *                the first is the value at the current position
     *                which goes from -1 to 1 over the number of elements
     *                in the curve array. The second argument is the array position.
     * @example
     * const shaper = new Tone.WaveShaper();
     * // map the input signal from [-1, 1] to [0, 10]
     * shaper.setMap((val, index) => (val + 1) * 5);
     */
    setMap(mapping, length = 1024) {
        const array = new Float32Array(length);
        for (let i = 0, len = length; i < len; i++) {
            const normalized = (i / (len - 1)) * 2 - 1;
            array[i] = mapping(normalized, i);
        }
        this.curve = array;
        return this;
    }
    /**
     * The array to set as the waveshaper curve. For linear curves
     * array length does not make much difference, but for complex curves
     * longer arrays will provide smoother interpolation.
     */
    get curve() {
        return this._shaper.curve;
    }
    set curve(mapping) {
        this._shaper.curve = mapping;
    }
    /**
     * Specifies what type of oversampling (if any) should be used when
     * applying the shaping curve. Can either be "none", "2x" or "4x".
     */
    get oversample() {
        return this._shaper.oversample;
    }
    set oversample(oversampling) {
        const isOverSampleType = ["none", "2x", "4x"].some((str) => str.includes(oversampling));
        assert(isOverSampleType, "oversampling must be either 'none', '2x', or '4x'");
        this._shaper.oversample = oversampling;
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._shaper.disconnect();
        return this;
    }
}
//# sourceMappingURL=WaveShaper.js.map