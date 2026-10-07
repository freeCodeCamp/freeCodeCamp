import { Param } from "../context/Param.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { readOnly } from "../util/Interface.js";
import { ToneAudioNode } from "./ToneAudioNode.js";
/**
 * A thin wrapper around the Native Web Audio GainNode.
 * The GainNode is a basic building block of the Web Audio
 * API and is useful for routing audio and adjusting gains.
 * @category Core
 * @example
 * return Tone.Offline(() => {
 * 	const gainNode = new Tone.Gain(0).toDestination();
 * 	const osc = new Tone.Oscillator(30).connect(gainNode).start();
 * 	gainNode.gain.rampTo(1, 0.1);
 * 	gainNode.gain.rampTo(0, 0.4, 0.2);
 * }, 0.7, 1);
 */
export class Gain extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Gain.getDefaults(), arguments, [
            "gain",
            "units",
        ]);
        super(options);
        this.name = "Gain";
        /**
         * The wrapped GainNode.
         */
        this._gainNode = this.context.createGain();
        // input = output
        this.input = this._gainNode;
        this.output = this._gainNode;
        this.gain = new Param({
            context: this.context,
            convert: options.convert,
            param: this._gainNode.gain,
            units: options.units,
            value: options.gain,
            minValue: options.minValue,
            maxValue: options.maxValue,
        });
        readOnly(this, "gain");
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            convert: true,
            gain: 1,
            units: "gain",
        });
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._gainNode.disconnect();
        this.gain.dispose();
        return this;
    }
}
//# sourceMappingURL=Gain.js.map