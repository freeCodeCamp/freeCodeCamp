import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Merge } from "./Merge.js";
/**
 * Mono coerces the incoming mono or stereo signal into a mono signal
 * where both left and right channels have the same value. This can be useful
 * for [stereo imaging](https://en.wikipedia.org/wiki/Stereo_imaging).
 * @category Component
 */
export class Mono extends ToneAudioNode {
    constructor() {
        super(optionsFromArguments(Mono.getDefaults(), arguments));
        this.name = "Mono";
        this.input = new Gain({ context: this.context });
        this._merge = this.output = new Merge({
            channels: 2,
            context: this.context,
        });
        this.input.connect(this._merge, 0, 0);
        this.input.connect(this._merge, 0, 1);
    }
    dispose() {
        super.dispose();
        this._merge.dispose();
        this.input.dispose();
        return this;
    }
}
//# sourceMappingURL=Mono.js.map