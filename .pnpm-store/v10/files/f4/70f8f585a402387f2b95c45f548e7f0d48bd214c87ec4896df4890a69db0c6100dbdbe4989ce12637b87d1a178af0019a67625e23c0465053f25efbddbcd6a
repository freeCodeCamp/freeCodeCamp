import { optionsFromArguments } from "../core/util/Defaults.js";
import { Multiply } from "../signal/Multiply.js";
import { ModulationSynth } from "./ModulationSynth.js";
/**
 * FMSynth is composed of two Tone.Synths where one Tone.Synth modulates
 * the frequency of a second Tone.Synth. A lot of spectral content
 * can be explored using the modulationIndex parameter. Read more about
 * frequency modulation synthesis on Sound On Sound: [Part 1](https://web.archive.org/web/20160403123704/http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm), [Part 2](https://web.archive.org/web/20160403115835/http://www.soundonsound.com/sos/may00/articles/synth.htm).
 *
 * @example
 * const fmSynth = new Tone.FMSynth().toDestination();
 * fmSynth.triggerAttackRelease("C5", "4n");
 *
 * @category Instrument
 */
export class FMSynth extends ModulationSynth {
    constructor() {
        const options = optionsFromArguments(FMSynth.getDefaults(), arguments);
        super(options);
        this.name = "FMSynth";
        this.modulationIndex = new Multiply({
            context: this.context,
            value: options.modulationIndex,
        });
        // control the two voices frequency
        this.frequency.connect(this._carrier.frequency);
        this.frequency.chain(this.harmonicity, this._modulator.frequency);
        this.frequency.chain(this.modulationIndex, this._modulationNode);
        this.detune.fan(this._carrier.detune, this._modulator.detune);
        this._modulator.connect(this._modulationNode.gain);
        this._modulationNode.connect(this._carrier.frequency);
        this._carrier.connect(this.output);
    }
    static getDefaults() {
        return Object.assign(ModulationSynth.getDefaults(), {
            modulationIndex: 10,
        });
    }
    dispose() {
        super.dispose();
        this.modulationIndex.dispose();
        return this;
    }
}
//# sourceMappingURL=FMSynth.js.map