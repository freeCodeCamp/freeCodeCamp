import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Analyser } from "./Analyser.js";
/**
 * The base class for Metering classes.
 */
export class MeterBase extends ToneAudioNode {
    constructor() {
        super(optionsFromArguments(MeterBase.getDefaults(), arguments));
        this.name = "MeterBase";
        this.input =
            this.output =
                this._analyser =
                    new Analyser({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                    });
    }
    dispose() {
        super.dispose();
        this._analyser.dispose();
        return this;
    }
}
//# sourceMappingURL=MeterBase.js.map