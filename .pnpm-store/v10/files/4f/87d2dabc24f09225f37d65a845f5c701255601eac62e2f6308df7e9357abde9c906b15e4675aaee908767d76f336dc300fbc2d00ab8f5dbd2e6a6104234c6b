import { optionsFromArguments } from "../core/util/Defaults.js";
import { WaveShaper } from "../signal/WaveShaper.js";
import { Effect } from "./Effect.js";
/**
 * A simple distortion effect using Tone.WaveShaper.
 * Algorithm from [this stackoverflow answer](http://stackoverflow.com/a/22313408).
 * Read more about distortion on [Wikipedia](https://en.wikipedia.org/wiki/Distortion_(music).
 * @example
 * const dist = new Tone.Distortion(0.8).toDestination();
 * const fm = new Tone.FMSynth().connect(dist);
 * fm.triggerAttackRelease("A1", "8n");
 * @category Effect
 */
export class Distortion extends Effect {
    constructor() {
        const options = optionsFromArguments(Distortion.getDefaults(), arguments, ["distortion"]);
        super(options);
        this.name = "Distortion";
        this._shaper = new WaveShaper({
            context: this.context,
            length: 4096,
        });
        this._distortion = options.distortion;
        this.connectEffect(this._shaper);
        this.distortion = options.distortion;
        this.oversample = options.oversample;
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            distortion: 0.4,
            oversample: "none",
        });
    }
    /**
     * The amount of distortion. Nominal range is between 0 and 1.
     */
    get distortion() {
        return this._distortion;
    }
    set distortion(amount) {
        this._distortion = amount;
        const k = amount * 100;
        const deg = Math.PI / 180;
        this._shaper.setMap((x) => {
            if (Math.abs(x) < 0.001) {
                // should output 0 when input is 0
                return 0;
            }
            else {
                return ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
            }
        });
    }
    /**
     * The oversampling of the effect. Can either be "none", "2x" or "4x".
     */
    get oversample() {
        return this._shaper.oversample;
    }
    set oversample(oversampling) {
        this._shaper.oversample = oversampling;
    }
    dispose() {
        super.dispose();
        this._shaper.dispose();
        return this;
    }
}
//# sourceMappingURL=Distortion.js.map