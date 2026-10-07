import { connect } from "../../core/context/ToneAudioNode.js";
import { Param } from "../../core/context/Param.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { OneShotSource } from "../OneShotSource.js";
import { readOnly } from "../../core/util/Interface.js";
/**
 * Wrapper around the native fire-and-forget OscillatorNode.
 * Adds the ability to reschedule the stop method.
 * ***{@link Oscillator} is better for most use-cases***
 * @category Source
 */
export class ToneOscillatorNode extends OneShotSource {
    constructor() {
        const options = optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]);
        super(options);
        this.name = "ToneOscillatorNode";
        /**
         * The oscillator
         */
        this._oscillator = this.context.createOscillator();
        this._internalChannels = [this._oscillator];
        connect(this._oscillator, this._gainNode);
        this.type = options.type;
        this.frequency = new Param({
            context: this.context,
            param: this._oscillator.frequency,
            units: "frequency",
            value: options.frequency,
        });
        this.detune = new Param({
            context: this.context,
            param: this._oscillator.detune,
            units: "cents",
            value: options.detune,
        });
        readOnly(this, ["frequency", "detune"]);
    }
    static getDefaults() {
        return Object.assign(OneShotSource.getDefaults(), {
            detune: 0,
            frequency: 440,
            type: "sine",
        });
    }
    /**
     * Start the oscillator node at the given time
     * @param  time When to start the oscillator
     */
    start(time) {
        const computedTime = this.toSeconds(time);
        this.log("start", computedTime);
        this._startGain(computedTime);
        this._oscillator.start(computedTime);
        return this;
    }
    _stopSource(time) {
        this._oscillator.stop(time);
    }
    /**
     * Sets an arbitrary custom periodic waveform given a PeriodicWave.
     * @param  periodicWave PeriodicWave should be created with context.createPeriodicWave
     */
    setPeriodicWave(periodicWave) {
        this._oscillator.setPeriodicWave(periodicWave);
        return this;
    }
    /**
     * The oscillator type. Either 'sine', 'sawtooth', 'square', or 'triangle'
     */
    get type() {
        return this._oscillator.type;
    }
    set type(type) {
        this._oscillator.type = type;
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        if (this.state === "started") {
            this.stop();
        }
        this._oscillator.disconnect();
        this.frequency.dispose();
        this.detune.dispose();
        return this;
    }
}
//# sourceMappingURL=ToneOscillatorNode.js.map