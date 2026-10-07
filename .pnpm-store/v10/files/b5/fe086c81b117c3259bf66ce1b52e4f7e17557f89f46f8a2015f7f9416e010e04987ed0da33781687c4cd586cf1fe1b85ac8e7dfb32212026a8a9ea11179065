import { StereoEffect } from "./StereoEffect.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Gain } from "../core/context/Gain.js";
import { Signal } from "../signal/Signal.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Tremolo modulates the amplitude of an incoming signal using an {@link LFO}.
 * The effect is a stereo effect where the modulation phase is inverted in each channel.
 *
 * @example
 * // create a tremolo and start it's LFO
 * const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
 * // route an oscillator through the tremolo and start it
 * const oscillator = new Tone.Oscillator().connect(tremolo).start();
 *
 * @category Effect
 */
export class Tremolo extends StereoEffect {
    constructor() {
        const options = optionsFromArguments(Tremolo.getDefaults(), arguments, [
            "frequency",
            "depth",
        ]);
        super(options);
        this.name = "Tremolo";
        this._lfoL = new LFO({
            context: this.context,
            type: options.type,
            min: 1,
            max: 0,
        });
        this._lfoR = new LFO({
            context: this.context,
            type: options.type,
            min: 1,
            max: 0,
        });
        this._amplitudeL = new Gain({ context: this.context });
        this._amplitudeR = new Gain({ context: this.context });
        this.frequency = new Signal({
            context: this.context,
            value: options.frequency,
            units: "frequency",
        });
        this.depth = new Signal({
            context: this.context,
            value: options.depth,
            units: "normalRange",
        });
        readOnly(this, ["frequency", "depth"]);
        this.connectEffectLeft(this._amplitudeL);
        this.connectEffectRight(this._amplitudeR);
        this._lfoL.connect(this._amplitudeL.gain);
        this._lfoR.connect(this._amplitudeR.gain);
        this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency);
        this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude);
        this.spread = options.spread;
    }
    static getDefaults() {
        return Object.assign(StereoEffect.getDefaults(), {
            frequency: 10,
            type: "sine",
            depth: 0.5,
            spread: 180,
        });
    }
    /**
     * Start the tremolo.
     */
    start(time) {
        this._lfoL.start(time);
        this._lfoR.start(time);
        return this;
    }
    /**
     * Stop the tremolo.
     */
    stop(time) {
        this._lfoL.stop(time);
        this._lfoR.stop(time);
        return this;
    }
    /**
     * Sync the effect to the transport.
     */
    sync() {
        this._lfoL.sync();
        this._lfoR.sync();
        this.context.transport.syncSignal(this.frequency);
        return this;
    }
    /**
     * Unsync the filter from the transport
     */
    unsync() {
        this._lfoL.unsync();
        this._lfoR.unsync();
        this.context.transport.unsyncSignal(this.frequency);
        return this;
    }
    /**
     * The oscillator type.
     */
    get type() {
        return this._lfoL.type;
    }
    set type(type) {
        this._lfoL.type = type;
        this._lfoR.type = type;
    }
    /**
     * Amount of stereo spread. When set to 0, both LFO's will be panned centrally.
     * When set to 180, LFO's will be panned hard left and right respectively.
     */
    get spread() {
        return this._lfoR.phase - this._lfoL.phase; // 180
    }
    set spread(spread) {
        this._lfoL.phase = 90 - spread / 2;
        this._lfoR.phase = spread / 2 + 90;
    }
    dispose() {
        super.dispose();
        this._lfoL.dispose();
        this._lfoR.dispose();
        this._amplitudeL.dispose();
        this._amplitudeR.dispose();
        this.frequency.dispose();
        this.depth.dispose();
        return this;
    }
}
//# sourceMappingURL=Tremolo.js.map