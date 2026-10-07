import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
/**
 * Solo lets you isolate a specific audio stream. When an instance is set to `solo=true`,
 * it will mute all other instances of Solo.
 * @example
 * const soloA = new Tone.Solo().toDestination();
 * const oscA = new Tone.Oscillator("C4", "sawtooth").connect(soloA);
 * const soloB = new Tone.Solo().toDestination();
 * const oscB = new Tone.Oscillator("E4", "square").connect(soloB);
 * soloA.solo = true;
 * // no audio will pass through soloB
 * @category Component
 */
export class Solo extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Solo.getDefaults(), arguments, [
            "solo",
        ]);
        super(options);
        this.name = "Solo";
        this.input = this.output = new Gain({
            context: this.context,
        });
        if (!Solo._allSolos.has(this.context)) {
            Solo._allSolos.set(this.context, new Set());
        }
        Solo._allSolos.get(this.context).add(this);
        // set initially
        this.solo = options.solo;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            solo: false,
        });
    }
    /**
     * Isolates this instance and mutes all other instances of Solo.
     * Only one instance can be soloed at a time. A soloed
     * instance will report `solo=false` when another instance is soloed.
     */
    get solo() {
        return this._isSoloed();
    }
    set solo(solo) {
        if (solo) {
            this._addSolo();
        }
        else {
            this._removeSolo();
        }
        Solo._allSolos.get(this.context).forEach((instance) => instance._updateSolo());
    }
    /**
     * If the current instance is muted, i.e. another instance is soloed
     */
    get muted() {
        return this.input.gain.value === 0;
    }
    /**
     * Add this to the soloed array
     */
    _addSolo() {
        if (!Solo._soloed.has(this.context)) {
            Solo._soloed.set(this.context, new Set());
        }
        Solo._soloed.get(this.context).add(this);
    }
    /**
     * Remove this from the soloed array
     */
    _removeSolo() {
        if (Solo._soloed.has(this.context)) {
            Solo._soloed.get(this.context).delete(this);
        }
    }
    /**
     * Is this on the soloed array
     */
    _isSoloed() {
        return (Solo._soloed.has(this.context) &&
            Solo._soloed.get(this.context).has(this));
    }
    /**
     * Returns true if no one is soloed
     */
    _noSolos() {
        // either does not have any soloed added
        return (!Solo._soloed.has(this.context) ||
            // or has a solo set but doesn't include any items
            (Solo._soloed.has(this.context) &&
                Solo._soloed.get(this.context).size === 0));
    }
    /**
     * Solo the current instance and unsolo all other instances.
     */
    _updateSolo() {
        if (this._isSoloed()) {
            this.input.gain.value = 1;
        }
        else if (this._noSolos()) {
            // no one is soloed
            this.input.gain.value = 1;
        }
        else {
            this.input.gain.value = 0;
        }
    }
    dispose() {
        super.dispose();
        Solo._allSolos.get(this.context).delete(this);
        this._removeSolo();
        return this;
    }
}
/**
 * Hold all of the solo'ed tracks belonging to a specific context
 */
Solo._allSolos = new Map();
/**
 * Hold the currently solo'ed instance(s)
 */
Solo._soloed = new Map();
//# sourceMappingURL=Solo.js.map