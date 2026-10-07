import { Gain } from "../../core/context/Gain.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Envelope } from "./Envelope.js";
/**
 * AmplitudeEnvelope is a Tone.Envelope connected to a gain node.
 * Unlike Tone.Envelope, which outputs the envelope's value, AmplitudeEnvelope accepts
 * an audio signal as the input and will apply the envelope to the amplitude
 * of the signal.
 * Read more about ADSR Envelopes on [Wikipedia](https://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope).
 *
 * @example
 * return Tone.Offline(() => {
 * 	const ampEnv = new Tone.AmplitudeEnvelope({
 * 		attack: 0.1,
 * 		decay: 0.2,
 * 		sustain: 1.0,
 * 		release: 0.8
 * 	}).toDestination();
 * 	// create an oscillator and connect it
 * 	const osc = new Tone.Oscillator().connect(ampEnv).start();
 * 	// trigger the envelopes attack and release "8t" apart
 * 	ampEnv.triggerAttackRelease("8t");
 * }, 1.5, 1);
 * @category Component
 */
export class AmplitudeEnvelope extends Envelope {
    constructor() {
        super(optionsFromArguments(AmplitudeEnvelope.getDefaults(), arguments, [
            "attack",
            "decay",
            "sustain",
            "release",
        ]));
        this.name = "AmplitudeEnvelope";
        this._gainNode = new Gain({
            context: this.context,
            gain: 0,
        });
        this.output = this._gainNode;
        this.input = this._gainNode;
        this._sig.connect(this._gainNode.gain);
        this.output = this._gainNode;
        this.input = this._gainNode;
    }
    /**
     * Clean up
     */
    dispose() {
        super.dispose();
        this._gainNode.dispose();
        return this;
    }
}
//# sourceMappingURL=AmplitudeEnvelope.js.map