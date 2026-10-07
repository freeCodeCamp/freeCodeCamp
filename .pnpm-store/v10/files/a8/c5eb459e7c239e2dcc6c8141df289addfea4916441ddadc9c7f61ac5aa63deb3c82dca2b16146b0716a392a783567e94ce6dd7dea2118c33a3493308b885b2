import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
/**
 * Volume is a simple volume node, useful for creating a volume fader.
 *
 * @example
 * const vol = new Tone.Volume(-12).toDestination();
 * const osc = new Tone.Oscillator().connect(vol).start();
 * @category Component
 */
export class Volume extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Volume.getDefaults(), arguments, [
            "volume",
        ]);
        super(options);
        this.name = "Volume";
        this.input = this.output = new Gain({
            context: this.context,
            gain: options.volume,
            units: "decibels",
        });
        this.volume = this.output.gain;
        readOnly(this, "volume");
        this._unmutedVolume = options.volume;
        // set the mute initially
        this.mute = options.mute;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            mute: false,
            volume: 0,
        });
    }
    /**
     * Mute the output.
     * @example
     * const vol = new Tone.Volume(-12).toDestination();
     * const osc = new Tone.Oscillator().connect(vol).start();
     * // mute the output
     * vol.mute = true;
     */
    get mute() {
        return this.volume.value === -Infinity;
    }
    set mute(mute) {
        if (!this.mute && mute) {
            this._unmutedVolume = this.volume.value;
            // maybe it should ramp here?
            this.volume.value = -Infinity;
        }
        else if (this.mute && !mute) {
            this.volume.value = this._unmutedVolume;
        }
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        this.input.dispose();
        this.volume.dispose();
        return this;
    }
}
//# sourceMappingURL=Volume.js.map