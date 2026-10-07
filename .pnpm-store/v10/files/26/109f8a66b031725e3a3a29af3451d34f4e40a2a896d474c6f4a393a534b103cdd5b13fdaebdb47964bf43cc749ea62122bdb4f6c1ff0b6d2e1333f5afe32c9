import { Effect } from "../effect/Effect.js";
import { LFO } from "../source/oscillator/LFO.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Base class for LFO-based effects.
 */
export class LFOEffect extends Effect {
    constructor(options) {
        super(options);
        this.name = "LFOEffect";
        this._lfo = new LFO({
            context: this.context,
            frequency: options.frequency,
            amplitude: options.depth,
        });
        this.depth = this._lfo.amplitude;
        this.frequency = this._lfo.frequency;
        this.type = options.type;
        readOnly(this, ["frequency", "depth"]);
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            frequency: 1,
            type: "sine",
            depth: 1,
        });
    }
    /**
     * Start the effect.
     */
    start(time) {
        this._lfo.start(time);
        return this;
    }
    /**
     * Stop the lfo
     */
    stop(time) {
        this._lfo.stop(time);
        return this;
    }
    /**
     * Sync the filter to the transport.
     * @see {@link LFO.sync}
     */
    sync() {
        this._lfo.sync();
        return this;
    }
    /**
     * Unsync the filter from the transport.
     */
    unsync() {
        this._lfo.unsync();
        return this;
    }
    /**
     * The type of the LFO's oscillator.
     * @see {@link Oscillator.type}
     * @example
     * const autoFilter = new Tone.AutoFilter().start().toDestination();
     * const noise = new Tone.Noise().start().connect(autoFilter);
     * autoFilter.type = "square";
     */
    get type() {
        return this._lfo.type;
    }
    set type(type) {
        this._lfo.type = type;
    }
    dispose() {
        super.dispose();
        this._lfo.dispose();
        this.frequency.dispose();
        this.depth.dispose();
        return this;
    }
}
//# sourceMappingURL=LFOEffect.js.map