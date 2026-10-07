import { AudioToGain } from "../signal/AudioToGain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { ModulationSynth } from "./ModulationSynth.js";
/**
 * AMSynth uses the output of one Tone.Synth to modulate the
 * amplitude of another Tone.Synth. The harmonicity (the ratio between
 * the two signals) affects the timbre of the output signal greatly.
 * Read more about Amplitude Modulation Synthesis on
 * [SoundOnSound](https://web.archive.org/web/20160404103653/http://www.soundonsound.com:80/sos/mar00/articles/synthsecrets.htm).
 *
 * @example
 * const synth = new Tone.AMSynth().toDestination();
 * synth.triggerAttackRelease("C4", "4n");
 *
 * @category Instrument
 */
export class AMSynth extends ModulationSynth {
    constructor() {
        super(optionsFromArguments(AMSynth.getDefaults(), arguments));
        this.name = "AMSynth";
        this._modulationScale = new AudioToGain({
            context: this.context,
        });
        // control the two voices frequency
        this.frequency.connect(this._carrier.frequency);
        this.frequency.chain(this.harmonicity, this._modulator.frequency);
        this.detune.fan(this._carrier.detune, this._modulator.detune);
        this._modulator.chain(this._modulationScale, this._modulationNode.gain);
        this._carrier.chain(this._modulationNode, this.output);
    }
    dispose() {
        super.dispose();
        this._modulationScale.dispose();
        return this;
    }
}
//# sourceMappingURL=AMSynth.js.map