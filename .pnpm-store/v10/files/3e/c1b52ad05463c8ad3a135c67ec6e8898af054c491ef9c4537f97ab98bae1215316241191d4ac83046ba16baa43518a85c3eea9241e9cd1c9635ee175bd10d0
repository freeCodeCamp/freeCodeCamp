import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
/**
 * Panner is an equal power Left/Right Panner. It is a wrapper around the StereoPannerNode.
 * @example
 * return Tone.Offline(() => {
 * // move the input signal from right to left
 * 	const panner = new Tone.Panner(1).toDestination();
 * 	panner.pan.rampTo(-1, 0.5);
 * 	const osc = new Tone.Oscillator(100).connect(panner).start();
 * }, 0.5, 2);
 * @category Component
 */
export class Panner extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Panner.getDefaults(), arguments, [
            "pan",
        ]);
        super(options);
        this.name = "Panner";
        /**
         * the panner node
         */
        this._panner = this.context.createStereoPanner();
        this.input = this._panner;
        this.output = this._panner;
        this.pan = new Param({
            context: this.context,
            param: this._panner.pan,
            value: options.pan,
            minValue: -1,
            maxValue: 1,
        });
        // this is necessary for standardized-audio-context
        // doesn't make any difference for the native AudioContext
        // https://github.com/chrisguttandin/standardized-audio-context/issues/647
        this._panner.channelCount = options.channelCount;
        this._panner.channelCountMode = "explicit";
        // initial value
        readOnly(this, "pan");
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            pan: 0,
            channelCount: 1,
        });
    }
    dispose() {
        super.dispose();
        this._panner.disconnect();
        this.pan.dispose();
        return this;
    }
}
//# sourceMappingURL=Panner.js.map