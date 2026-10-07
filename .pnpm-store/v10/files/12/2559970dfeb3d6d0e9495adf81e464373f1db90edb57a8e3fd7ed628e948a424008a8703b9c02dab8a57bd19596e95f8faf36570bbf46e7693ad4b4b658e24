import { __awaiter } from "tslib";
import { Gain } from "../../core/context/Gain.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { Multiply } from "../../signal/Multiply.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import { generateWaveform, } from "./OscillatorInterface.js";
/**
 * FMOscillator implements a frequency modulation synthesis
 * ```
 *                                              +-------------+
 * +---------------+        +-------------+     | Carrier Osc |
 * | Modulator Osc +>-------> GainNode    |     |             +--->Output
 * +---------------+        |             +>----> frequency   |
 *                       +--> gain        |     +-------------+
 *                       |  +-------------+
 * +-----------------+   |
 * | modulationIndex +>--+
 * +-----------------+
 * ```
 *
 * @example
 * return Tone.Offline(() => {
 * 	const fmOsc = new Tone.FMOscillator({
 * 		frequency: 200,
 * 		type: "square",
 * 		modulationType: "triangle",
 * 		harmonicity: 0.2,
 * 		modulationIndex: 3
 * 	}).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export class FMOscillator extends Source {
    constructor() {
        const options = optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
        super(options);
        this.name = "FMOscillator";
        /**
         * the node where the modulation happens
         */
        this._modulationNode = new Gain({
            context: this.context,
            gain: 0,
        });
        this._carrier = new Oscillator({
            context: this.context,
            detune: options.detune,
            frequency: 0,
            onstop: () => this.onstop(this),
            phase: options.phase,
            type: options.type,
        });
        this.detune = this._carrier.detune;
        this.frequency = new Signal({
            context: this.context,
            units: "frequency",
            value: options.frequency,
        });
        this._modulator = new Oscillator({
            context: this.context,
            phase: options.phase,
            type: options.modulationType,
        });
        this.harmonicity = new Multiply({
            context: this.context,
            units: "positive",
            value: options.harmonicity,
        });
        this.modulationIndex = new Multiply({
            context: this.context,
            units: "positive",
            value: options.modulationIndex,
        });
        // connections
        this.frequency.connect(this._carrier.frequency);
        this.frequency.chain(this.harmonicity, this._modulator.frequency);
        this.frequency.chain(this.modulationIndex, this._modulationNode);
        this._modulator.connect(this._modulationNode.gain);
        this._modulationNode.connect(this._carrier.frequency);
        this._carrier.connect(this.output);
        this.detune.connect(this._modulator.detune);
        readOnly(this, [
            "modulationIndex",
            "frequency",
            "detune",
            "harmonicity",
        ]);
    }
    static getDefaults() {
        return Object.assign(Oscillator.getDefaults(), {
            harmonicity: 1,
            modulationIndex: 2,
            modulationType: "square",
        });
    }
    /**
     * start the oscillator
     */
    _start(time) {
        this._modulator.start(time);
        this._carrier.start(time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
        this._modulator.stop(time);
        this._carrier.stop(time);
    }
    _restart(time) {
        this._modulator.restart(time);
        this._carrier.restart(time);
        return this;
    }
    get type() {
        return this._carrier.type;
    }
    set type(type) {
        this._carrier.type = type;
    }
    get baseType() {
        return this._carrier.baseType;
    }
    set baseType(baseType) {
        this._carrier.baseType = baseType;
    }
    get partialCount() {
        return this._carrier.partialCount;
    }
    set partialCount(partialCount) {
        this._carrier.partialCount = partialCount;
    }
    /**
     * The type of the modulator oscillator
     */
    get modulationType() {
        return this._modulator.type;
    }
    set modulationType(type) {
        this._modulator.type = type;
    }
    get phase() {
        return this._carrier.phase;
    }
    set phase(phase) {
        this._carrier.phase = phase;
        this._modulator.phase = phase;
    }
    get partials() {
        return this._carrier.partials;
    }
    set partials(partials) {
        this._carrier.partials = partials;
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
        this.frequency.dispose();
        this.harmonicity.dispose();
        this._carrier.dispose();
        this._modulator.dispose();
        this._modulationNode.dispose();
        this.modulationIndex.dispose();
        return this;
    }
}
//# sourceMappingURL=FMOscillator.js.map