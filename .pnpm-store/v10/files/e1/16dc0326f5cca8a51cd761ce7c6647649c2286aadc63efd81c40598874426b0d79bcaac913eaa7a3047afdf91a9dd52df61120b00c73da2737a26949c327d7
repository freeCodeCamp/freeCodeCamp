import { __awaiter } from "tslib";
import { Gain } from "../../core/context/Gain.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { AudioToGain } from "../../signal/AudioToGain.js";
import { Multiply } from "../../signal/Multiply.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import { generateWaveform, } from "./OscillatorInterface.js";
/**
 * An amplitude modulated oscillator node. It is implemented with
 * two oscillators, one which modulators the other's amplitude
 * through a gain node.
 * ```
 *    +-------------+       +----------+
 *    | Carrier Osc +>------> GainNode |
 *    +-------------+       |          +--->Output
 *                      +---> gain     |
 * +---------------+    |   +----------+
 * | Modulator Osc +>---+
 * +---------------+
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const amOsc = new Tone.AMOscillator(30, "sine", "square").toDestination().start();
 * }, 0.2, 1);
 * @category Source
 */
export class AMOscillator extends Source {
    constructor() {
        const options = optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
        super(options);
        this.name = "AMOscillator";
        /**
         * convert the -1,1 output to 0,1
         */
        this._modulationScale = new AudioToGain({ context: this.context });
        /**
         * the node where the modulation happens
         */
        this._modulationNode = new Gain({
            context: this.context,
        });
        this._carrier = new Oscillator({
            context: this.context,
            detune: options.detune,
            frequency: options.frequency,
            onstop: () => this.onstop(this),
            phase: options.phase,
            type: options.type,
        });
        (this.frequency = this._carrier.frequency),
            (this.detune = this._carrier.detune);
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
        // connections
        this.frequency.chain(this.harmonicity, this._modulator.frequency);
        this._modulator.chain(this._modulationScale, this._modulationNode.gain);
        this._carrier.chain(this._modulationNode, this.output);
        readOnly(this, ["frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
        return Object.assign(Oscillator.getDefaults(), {
            harmonicity: 1,
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
    }
    /**
     * The type of the carrier oscillator
     */
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
        this.detune.dispose();
        this.harmonicity.dispose();
        this._carrier.dispose();
        this._modulator.dispose();
        this._modulationNode.dispose();
        this._modulationScale.dispose();
        return this;
    }
}
//# sourceMappingURL=AMOscillator.js.map