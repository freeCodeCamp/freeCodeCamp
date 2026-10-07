import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Param } from "../../core/context/Param.js";
import { assert } from "../../core/util/Debug.js";
/**
 * Thin wrapper around the native Web Audio [BiquadFilterNode](https://webaudio.github.io/web-audio-api/#biquadfilternode).
 * BiquadFilter is similar to {@link Filter} but doesn't have the option to set the "rolloff" value.
 * @category Component
 */
export class BiquadFilter extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(BiquadFilter.getDefaults(), arguments, ["frequency", "type"]);
        super(options);
        this.name = "BiquadFilter";
        this._filter = this.context.createBiquadFilter();
        this.input = this.output = this._filter;
        this.Q = new Param({
            context: this.context,
            units: "number",
            value: options.Q,
            param: this._filter.Q,
        });
        this.frequency = new Param({
            context: this.context,
            units: "frequency",
            value: options.frequency,
            param: this._filter.frequency,
        });
        this.detune = new Param({
            context: this.context,
            units: "cents",
            value: options.detune,
            param: this._filter.detune,
        });
        this.gain = new Param({
            context: this.context,
            units: "decibels",
            convert: false,
            value: options.gain,
            param: this._filter.gain,
        });
        this.type = options.type;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            Q: 1,
            type: "lowpass",
            frequency: 350,
            detune: 0,
            gain: 0,
        });
    }
    /**
     * The type of this BiquadFilterNode. For a complete list of types and their attributes, see the
     * [Web Audio API](https://webaudio.github.io/web-audio-api/#dom-biquadfiltertype-lowpass)
     */
    get type() {
        return this._filter.type;
    }
    set type(type) {
        const types = [
            "lowpass",
            "highpass",
            "bandpass",
            "lowshelf",
            "highshelf",
            "notch",
            "allpass",
            "peaking",
        ];
        assert(types.indexOf(type) !== -1, `Invalid filter type: ${type}`);
        this._filter.type = type;
    }
    /**
     * Get the frequency response curve. This curve represents how the filter
     * responses to frequencies between 20hz-20khz.
     * @param  len The number of values to return
     * @return The frequency response curve between 20-20kHz
     */
    getFrequencyResponse(len = 128) {
        // start with all 1s
        const freqValues = new Float32Array(len);
        for (let i = 0; i < len; i++) {
            const norm = Math.pow(i / len, 2);
            const freq = norm * (20000 - 20) + 20;
            freqValues[i] = freq;
        }
        const magValues = new Float32Array(len);
        const phaseValues = new Float32Array(len);
        // clone the filter to remove any connections which may be changing the value
        const filterClone = this.context.createBiquadFilter();
        filterClone.type = this.type;
        filterClone.Q.value = this.Q.value;
        filterClone.frequency.value = this.frequency.value;
        filterClone.gain.value = this.gain.value;
        filterClone.getFrequencyResponse(freqValues, magValues, phaseValues);
        return magValues;
    }
    dispose() {
        super.dispose();
        this._filter.disconnect();
        this.Q.dispose();
        this.frequency.dispose();
        this.gain.dispose();
        this.detune.dispose();
        return this;
    }
}
//# sourceMappingURL=BiquadFilter.js.map