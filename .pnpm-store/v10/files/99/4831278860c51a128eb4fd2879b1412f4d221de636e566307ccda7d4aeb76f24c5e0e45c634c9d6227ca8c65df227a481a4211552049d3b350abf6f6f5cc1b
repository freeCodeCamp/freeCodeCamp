import { readOnly } from "../../core/util/Interface.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Panner } from "./Panner.js";
import { Volume } from "./Volume.js";
/**
 * PanVol is a Tone.Panner and Tone.Volume in one.
 * @example
 * // pan the incoming signal left and drop the volume
 * const panVol = new Tone.PanVol(-0.25, -12).toDestination();
 * const osc = new Tone.Oscillator().connect(panVol).start();
 * @category Component
 */
export class PanVol extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(PanVol.getDefaults(), arguments, [
            "pan",
            "volume",
        ]);
        super(options);
        this.name = "PanVol";
        this._panner = this.input = new Panner({
            context: this.context,
            pan: options.pan,
            channelCount: options.channelCount,
        });
        this.pan = this._panner.pan;
        this._volume = this.output = new Volume({
            context: this.context,
            volume: options.volume,
        });
        this.volume = this._volume.volume;
        // connections
        this._panner.connect(this._volume);
        this.mute = options.mute;
        readOnly(this, ["pan", "volume"]);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            mute: false,
            pan: 0,
            volume: 0,
            channelCount: 1,
        });
    }
    /**
     * Mute/unmute the volume
     */
    get mute() {
        return this._volume.mute;
    }
    set mute(mute) {
        this._volume.mute = mute;
    }
    dispose() {
        super.dispose();
        this._panner.dispose();
        this.pan.dispose();
        this._volume.dispose();
        this.volume.dispose();
        return this;
    }
}
//# sourceMappingURL=PanVol.js.map