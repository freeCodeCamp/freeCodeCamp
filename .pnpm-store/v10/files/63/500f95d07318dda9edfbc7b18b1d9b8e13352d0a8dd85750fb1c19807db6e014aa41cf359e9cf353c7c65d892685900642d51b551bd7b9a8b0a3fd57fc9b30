import { optionsFromArguments } from "../../core/util/Defaults.js";
import { MeterBase } from "./MeterBase.js";
/**
 * Get the current waveform data of the connected audio source.
 * @category Component
 */
export class Waveform extends MeterBase {
    constructor() {
        const options = optionsFromArguments(Waveform.getDefaults(), arguments, ["size"]);
        super(options);
        this.name = "Waveform";
        this._analyser.type = "waveform";
        this.size = options.size;
    }
    static getDefaults() {
        return Object.assign(MeterBase.getDefaults(), {
            size: 1024,
        });
    }
    /**
     * Return the waveform for the current time as a Float32Array where each value in the array
     * represents a sample in the waveform.
     */
    getValue() {
        return this._analyser.getValue();
    }
    /**
     * The size of analysis. This must be a power of two in the range 16 to 16384.
     * Determines the size of the array returned by {@link getValue}.
     */
    get size() {
        return this._analyser.size;
    }
    set size(size) {
        this._analyser.size = size;
    }
}
//# sourceMappingURL=Waveform.js.map