import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
/**
 * Merge brings multiple mono input channels into a single multichannel output channel.
 *
 * @example
 * const merge = new Tone.Merge().toDestination();
 * // routing a sine tone in the left channel
 * const osc = new Tone.Oscillator().connect(merge, 0, 0).start();
 * // and noise in the right channel
 * const noise = new Tone.Noise().connect(merge, 0, 1).start();;
 * @category Component
 */
export class Merge extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Merge.getDefaults(), arguments, [
            "channels",
        ]);
        super(options);
        this.name = "Merge";
        this._merger =
            this.output =
                this.input =
                    this.context.createChannelMerger(options.channels);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            channels: 2,
        });
    }
    dispose() {
        super.dispose();
        this._merger.disconnect();
        return this;
    }
}
//# sourceMappingURL=Merge.js.map