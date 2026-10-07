import { Envelope } from "../component/envelope/Envelope.js";
import { Filter } from "../component/filter/Filter.js";
import { Gain } from "../core/context/Gain.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { deepMerge, omitFromObject, optionsFromArguments, } from "../core/util/Defaults.js";
import { noOp } from "../core/util/Interface.js";
import { Multiply } from "../signal/Multiply.js";
import { Scale } from "../signal/Scale.js";
import { Signal } from "../signal/Signal.js";
import { FMOscillator } from "../source/oscillator/FMOscillator.js";
import { Monophonic } from "./Monophonic.js";
/**
 * Inharmonic ratio of frequencies based on the Roland TR-808
 * Taken from https://ccrma.stanford.edu/papers/tr-808-cymbal-physically-informed-circuit-bendable-digital-model
 */
const inharmRatios = [1.0, 1.483, 1.932, 2.546, 2.63, 3.897];
/**
 * A highly inharmonic and spectrally complex source with a highpass filter
 * and amplitude envelope which is good for making metallophone sounds.
 * Based on CymbalSynth by [@polyrhythmatic](https://github.com/polyrhythmatic).
 * @category Instrument
 */
export class MetalSynth extends Monophonic {
    constructor() {
        const options = optionsFromArguments(MetalSynth.getDefaults(), arguments);
        super(options);
        this.name = "MetalSynth";
        /**
         * The array of FMOscillators
         */
        this._oscillators = [];
        /**
         * The frequency multipliers
         */
        this._freqMultipliers = [];
        this.detune = new Signal({
            context: this.context,
            units: "cents",
            value: options.detune,
        });
        this.frequency = new Signal({
            context: this.context,
            units: "frequency",
        });
        this._amplitude = new Gain({
            context: this.context,
            gain: 0,
        }).connect(this.output);
        this._highpass = new Filter({
            // Q: -3.0102999566398125,
            Q: 0,
            context: this.context,
            type: "highpass",
        }).connect(this._amplitude);
        for (let i = 0; i < inharmRatios.length; i++) {
            const osc = new FMOscillator({
                context: this.context,
                harmonicity: options.harmonicity,
                modulationIndex: options.modulationIndex,
                modulationType: "square",
                onstop: i === 0 ? () => this.onsilence(this) : noOp,
                type: "square",
            });
            osc.connect(this._highpass);
            this._oscillators[i] = osc;
            const mult = new Multiply({
                context: this.context,
                value: inharmRatios[i],
            });
            this._freqMultipliers[i] = mult;
            this.frequency.chain(mult, osc.frequency);
            this.detune.connect(osc.detune);
        }
        this._filterFreqScaler = new Scale({
            context: this.context,
            max: 7000,
            min: this.toFrequency(options.resonance),
        });
        this.envelope = new Envelope({
            attack: options.envelope.attack,
            attackCurve: "linear",
            context: this.context,
            decay: options.envelope.decay,
            release: options.envelope.release,
            sustain: 0,
        });
        this.envelope.chain(this._filterFreqScaler, this._highpass.frequency);
        this.envelope.connect(this._amplitude.gain);
        // set the octaves
        this._octaves = options.octaves;
        this.octaves = options.octaves;
    }
    static getDefaults() {
        return deepMerge(Monophonic.getDefaults(), {
            envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.001,
                decay: 1.4,
                release: 0.2,
            }),
            harmonicity: 5.1,
            modulationIndex: 32,
            octaves: 1.5,
            resonance: 4000,
        });
    }
    /**
     * Trigger the attack.
     * @param time When the attack should be triggered.
     * @param velocity The velocity that the envelope should be triggered at.
     */
    _triggerEnvelopeAttack(time, velocity = 1) {
        this.envelope.triggerAttack(time, velocity);
        this._oscillators.forEach((osc) => osc.start(time));
        if (this.envelope.sustain === 0) {
            this._oscillators.forEach((osc) => {
                osc.stop(time +
                    this.toSeconds(this.envelope.attack) +
                    this.toSeconds(this.envelope.decay));
            });
        }
        return this;
    }
    /**
     * Trigger the release of the envelope.
     * @param time When the release should be triggered.
     */
    _triggerEnvelopeRelease(time) {
        this.envelope.triggerRelease(time);
        this._oscillators.forEach((osc) => osc.stop(time + this.toSeconds(this.envelope.release)));
        return this;
    }
    getLevelAtTime(time) {
        time = this.toSeconds(time);
        return this.envelope.getValueAtTime(time);
    }
    /**
     * The modulationIndex of the oscillators which make up the source.
     * see {@link FMOscillator.modulationIndex}
     * @min 1
     * @max 100
     */
    get modulationIndex() {
        return this._oscillators[0].modulationIndex.value;
    }
    set modulationIndex(val) {
        this._oscillators.forEach((osc) => (osc.modulationIndex.value = val));
    }
    /**
     * The harmonicity of the oscillators which make up the source.
     * see Tone.FMOscillator.harmonicity
     * @min 0.1
     * @max 10
     */
    get harmonicity() {
        return this._oscillators[0].harmonicity.value;
    }
    set harmonicity(val) {
        this._oscillators.forEach((osc) => (osc.harmonicity.value = val));
    }
    /**
     * The lower level of the highpass filter which is attached to the envelope.
     * This value should be between [0, 7000]
     * @min 0
     * @max 7000
     */
    get resonance() {
        return this._filterFreqScaler.min;
    }
    set resonance(val) {
        this._filterFreqScaler.min = this.toFrequency(val);
        this.octaves = this._octaves;
    }
    /**
     * The number of octaves above the "resonance" frequency
     * that the filter ramps during the attack/decay envelope
     * @min 0
     * @max 8
     */
    get octaves() {
        return this._octaves;
    }
    set octaves(val) {
        this._octaves = val;
        this._filterFreqScaler.max =
            this._filterFreqScaler.min * Math.pow(2, val);
    }
    dispose() {
        super.dispose();
        this._oscillators.forEach((osc) => osc.dispose());
        this._freqMultipliers.forEach((freqMult) => freqMult.dispose());
        this.frequency.dispose();
        this.detune.dispose();
        this._filterFreqScaler.dispose();
        this._amplitude.dispose();
        this.envelope.dispose();
        this._highpass.dispose();
        return this;
    }
}
//# sourceMappingURL=MetalSynth.js.map