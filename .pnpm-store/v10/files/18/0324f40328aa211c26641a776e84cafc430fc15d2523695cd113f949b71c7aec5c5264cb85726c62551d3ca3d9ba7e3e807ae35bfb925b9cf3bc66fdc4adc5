import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Gain } from "../../core/context/Gain.js";
/**
 * A one pole filter with 6db-per-octave rolloff. Either "highpass" or "lowpass".
 * Note that changing the type or frequency may result in a discontinuity which
 * can sound like a click or pop.
 * References:
 * * http://www.earlevel.com/main/2012/12/15/a-one-pole-filter/
 * * http://www.dspguide.com/ch19/2.htm
 * * https://github.com/vitaliy-bobrov/js-rocks/blob/master/src/app/audio/effects/one-pole-filters.ts
 * @category Component
 */
export class OnePoleFilter extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(OnePoleFilter.getDefaults(), arguments, ["frequency", "type"]);
        super(options);
        this.name = "OnePoleFilter";
        this._frequency = options.frequency;
        this._type = options.type;
        this.input = new Gain({ context: this.context });
        this.output = new Gain({ context: this.context });
        this._createFilter();
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            frequency: 880,
            type: "lowpass",
        });
    }
    /**
     * Create a filter and dispose the old one
     */
    _createFilter() {
        const oldFilter = this._filter;
        const freq = this.toFrequency(this._frequency);
        const t = 1 / (2 * Math.PI * freq);
        if (this._type === "lowpass") {
            const a0 = 1 / (t * this.context.sampleRate);
            const b1 = a0 - 1;
            this._filter = this.context.createIIRFilter([a0, 0], [1, b1]);
        }
        else {
            const b1 = 1 / (t * this.context.sampleRate) - 1;
            this._filter = this.context.createIIRFilter([1, -1], [1, b1]);
        }
        this.input.chain(this._filter, this.output);
        if (oldFilter) {
            // dispose it on the next block
            this.context.setTimeout(() => {
                if (!this.disposed) {
                    this.input.disconnect(oldFilter);
                    oldFilter.disconnect();
                }
            }, this.blockTime);
        }
    }
    /**
     * The frequency value.
     */
    get frequency() {
        return this._frequency;
    }
    set frequency(fq) {
        this._frequency = fq;
        this._createFilter();
    }
    /**
     * The OnePole Filter type, either "highpass" or "lowpass"
     */
    get type() {
        return this._type;
    }
    set type(t) {
        this._type = t;
        this._createFilter();
    }
    /**
     * Get the frequency response curve. This curve represents how the filter
     * responses to frequencies between 20hz-20khz.
     * @param  len The number of values to return
     * @return The frequency response curve between 20-20kHz
     */
    getFrequencyResponse(len = 128) {
        const freqValues = new Float32Array(len);
        for (let i = 0; i < len; i++) {
            const norm = Math.pow(i / len, 2);
            const freq = norm * (20000 - 20) + 20;
            freqValues[i] = freq;
        }
        const magValues = new Float32Array(len);
        const phaseValues = new Float32Array(len);
        this._filter.getFrequencyResponse(freqValues, magValues, phaseValues);
        return magValues;
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this.output.dispose();
        this._filter.disconnect();
        return this;
    }
}
//# sourceMappingURL=OnePoleFilter.js.map