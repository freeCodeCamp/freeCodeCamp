import { __awaiter } from "tslib";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { Multiply } from "../../signal/Multiply.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import { generateWaveform, } from "./OscillatorInterface.js";
import { PulseOscillator } from "./PulseOscillator.js";
/**
 * PWMOscillator modulates the width of a Tone.PulseOscillator
 * at the modulationFrequency. This has the effect of continuously
 * changing the timbre of the oscillator by altering the harmonics
 * generated.
 * @example
 * return Tone.Offline(() => {
 * 	const pwm = new Tone.PWMOscillator(60, 0.3).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export class PWMOscillator extends Source {
    constructor() {
        const options = optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
        super(options);
        this.name = "PWMOscillator";
        this.sourceType = "pwm";
        /**
         * Scale the oscillator so it doesn't go silent
         * at the extreme values.
         */
        this._scale = new Multiply({
            context: this.context,
            value: 2,
        });
        this._pulse = new PulseOscillator({
            context: this.context,
            frequency: options.modulationFrequency,
        });
        // change the pulse oscillator type
        this._pulse.carrierType = "sine";
        this.modulationFrequency = this._pulse.frequency;
        this._modulator = new Oscillator({
            context: this.context,
            detune: options.detune,
            frequency: options.frequency,
            onstop: () => this.onstop(this),
            phase: options.phase,
        });
        this.frequency = this._modulator.frequency;
        this.detune = this._modulator.detune;
        // connections
        this._modulator.chain(this._scale, this._pulse.width);
        this._pulse.connect(this.output);
        readOnly(this, ["modulationFrequency", "frequency", "detune"]);
    }
    static getDefaults() {
        return Object.assign(Source.getDefaults(), {
            detune: 0,
            frequency: 440,
            modulationFrequency: 0.4,
            phase: 0,
            type: "pwm",
        });
    }
    /**
     * start the oscillator
     */
    _start(time) {
        time = this.toSeconds(time);
        this._modulator.start(time);
        this._pulse.start(time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
        time = this.toSeconds(time);
        this._modulator.stop(time);
        this._pulse.stop(time);
    }
    /**
     * restart the oscillator
     */
    _restart(time) {
        this._modulator.restart(time);
        this._pulse.restart(time);
    }
    /**
     * The type of the oscillator. Always returns "pwm".
     */
    get type() {
        return "pwm";
    }
    /**
     * The baseType of the oscillator. Always returns "pwm".
     */
    get baseType() {
        return "pwm";
    }
    /**
     * The partials of the waveform. Cannot set partials for this waveform type
     */
    get partials() {
        return [];
    }
    /**
     * No partials for this waveform type.
     */
    get partialCount() {
        return 0;
    }
    /**
     * The phase of the oscillator in degrees.
     */
    get phase() {
        return this._modulator.phase;
    }
    set phase(phase) {
        this._modulator.phase = phase;
    }
    asArray() {
        return __awaiter(this, arguments, void 0, function* (length = 1024) {
            return generateWaveform(this, length);
        });
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._pulse.dispose();
        this._scale.dispose();
        this._modulator.dispose();
        return this;
    }
}
//# sourceMappingURL=PWMOscillator.js.map