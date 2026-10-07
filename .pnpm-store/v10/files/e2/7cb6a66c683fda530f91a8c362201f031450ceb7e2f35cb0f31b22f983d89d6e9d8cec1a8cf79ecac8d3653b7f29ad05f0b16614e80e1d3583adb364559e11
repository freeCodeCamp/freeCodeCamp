import { Effect } from "./Effect.js";
import { Filter } from "../component/filter/Filter.js";
import { Follower } from "../component/analysis/Follower.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Gain } from "../core/context/Gain.js";
import { dbToGain, gainToDb } from "../core/type/Conversions.js";
import { ScaleExp } from "../signal/ScaleExp.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * AutoWah connects a {@link Follower} to a {@link Filter}.
 * The frequency of the filter, follows the input amplitude curve.
 * Inspiration from [Tuna.js](https://github.com/Dinahmoe/tuna).
 *
 * @example
 * const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
 * // initialize the synth and connect to autowah
 * const synth = new Tone.Synth().connect(autoWah);
 * // Q value influences the effect of the wah - default is 2
 * autoWah.Q.value = 6;
 * // more audible on higher notes
 * synth.triggerAttackRelease("C4", "8n");
 * @category Effect
 */
export class AutoWah extends Effect {
    constructor() {
        const options = optionsFromArguments(AutoWah.getDefaults(), arguments, [
            "baseFrequency",
            "octaves",
            "sensitivity",
        ]);
        super(options);
        this.name = "AutoWah";
        this._follower = new Follower({
            context: this.context,
            smoothing: options.follower,
        });
        this._sweepRange = new ScaleExp({
            context: this.context,
            min: 0,
            max: 1,
            exponent: 0.5,
        });
        this._baseFrequency = this.toFrequency(options.baseFrequency);
        this._octaves = options.octaves;
        this._inputBoost = new Gain({ context: this.context });
        this._bandpass = new Filter({
            context: this.context,
            rolloff: -48,
            frequency: 0,
            Q: options.Q,
        });
        this._peaking = new Filter({
            context: this.context,
            type: "peaking",
        });
        this._peaking.gain.value = options.gain;
        this.gain = this._peaking.gain;
        this.Q = this._bandpass.Q;
        // the control signal path
        this.effectSend.chain(this._inputBoost, this._follower, this._sweepRange);
        this._sweepRange.connect(this._bandpass.frequency);
        this._sweepRange.connect(this._peaking.frequency);
        // the filtered path
        this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn);
        // set the initial value
        this._setSweepRange();
        this.sensitivity = options.sensitivity;
        readOnly(this, ["gain", "Q"]);
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            baseFrequency: 100,
            octaves: 6,
            sensitivity: 0,
            Q: 2,
            gain: 2,
            follower: 0.2,
        });
    }
    /**
     * The number of octaves that the filter will sweep above the baseFrequency.
     */
    get octaves() {
        return this._octaves;
    }
    set octaves(octaves) {
        this._octaves = octaves;
        this._setSweepRange();
    }
    /**
     * The follower's smoothing time
     */
    get follower() {
        return this._follower.smoothing;
    }
    set follower(follower) {
        this._follower.smoothing = follower;
    }
    /**
     * The base frequency from which the sweep will start from.
     */
    get baseFrequency() {
        return this._baseFrequency;
    }
    set baseFrequency(baseFreq) {
        this._baseFrequency = this.toFrequency(baseFreq);
        this._setSweepRange();
    }
    /**
     * The sensitivity to control how responsive to the input signal the filter is.
     */
    get sensitivity() {
        return gainToDb(1 / this._inputBoost.gain.value);
    }
    set sensitivity(sensitivity) {
        this._inputBoost.gain.value = 1 / dbToGain(sensitivity);
    }
    /**
     * sets the sweep range of the scaler
     */
    _setSweepRange() {
        this._sweepRange.min = this._baseFrequency;
        this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
    }
    dispose() {
        super.dispose();
        this._follower.dispose();
        this._sweepRange.dispose();
        this._bandpass.dispose();
        this._peaking.dispose();
        this._inputBoost.dispose();
        return this;
    }
}
//# sourceMappingURL=AutoWah.js.map