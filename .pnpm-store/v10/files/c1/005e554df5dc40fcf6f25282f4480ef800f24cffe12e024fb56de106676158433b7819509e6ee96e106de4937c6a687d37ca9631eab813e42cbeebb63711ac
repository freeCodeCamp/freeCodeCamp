import { BaseContext } from "../../core/context/BaseContext.js";
import { Gain } from "../../core/context/Gain.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";

export interface SoloOptions extends ToneAudioNodeOptions {
	solo: boolean;
}

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
export class Solo extends ToneAudioNode<SoloOptions> {
	readonly name: string = "Solo";

	readonly input: Gain;
	readonly output: Gain;

	/**
	 * @param solo If the connection should be initially solo'ed.
	 */
	constructor(solo?: boolean);
	constructor(options?: Partial<SoloOptions>);
	constructor() {
		const options = optionsFromArguments(Solo.getDefaults(), arguments, [
			"solo",
		]);
		super(options);

		this.input = this.output = new Gain({
			context: this.context,
		});

		if (!Solo._allSolos.has(this.context)) {
			Solo._allSolos.set(this.context, new Set());
		}
		(Solo._allSolos.get(this.context) as Set<Solo>).add(this);

		// set initially
		this.solo = options.solo;
	}

	static getDefaults(): SoloOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			solo: false,
		});
	}

	/**
	 * Hold all of the solo'ed tracks belonging to a specific context
	 */
	private static _allSolos: Map<BaseContext, Set<Solo>> = new Map();

	/**
	 * Hold the currently solo'ed instance(s)
	 */
	private static _soloed: Map<BaseContext, Set<Solo>> = new Map();

	/**
	 * Isolates this instance and mutes all other instances of Solo.
	 * Only one instance can be soloed at a time. A soloed
	 * instance will report `solo=false` when another instance is soloed.
	 */
	get solo(): boolean {
		return this._isSoloed();
	}
	set solo(solo) {
		if (solo) {
			this._addSolo();
		} else {
			this._removeSolo();
		}
		(Solo._allSolos.get(this.context) as Set<Solo>).forEach((instance) =>
			instance._updateSolo()
		);
	}

	/**
	 * If the current instance is muted, i.e. another instance is soloed
	 */
	get muted(): boolean {
		return this.input.gain.value === 0;
	}

	/**
	 * Add this to the soloed array
	 */
	private _addSolo(): void {
		if (!Solo._soloed.has(this.context)) {
			Solo._soloed.set(this.context, new Set());
		}
		(Solo._soloed.get(this.context) as Set<Solo>).add(this);
	}

	/**
	 * Remove this from the soloed array
	 */
	private _removeSolo(): void {
		if (Solo._soloed.has(this.context)) {
			(Solo._soloed.get(this.context) as Set<Solo>).delete(this);
		}
	}

	/**
	 * Is this on the soloed array
	 */
	private _isSoloed(): boolean {
		return (
			Solo._soloed.has(this.context) &&
			(Solo._soloed.get(this.context) as Set<Solo>).has(this)
		);
	}

	/**
	 * Returns true if no one is soloed
	 */
	private _noSolos(): boolean {
		// either does not have any soloed added
		return (
			!Solo._soloed.has(this.context) ||
			// or has a solo set but doesn't include any items
			(Solo._soloed.has(this.context) &&
				(Solo._soloed.get(this.context) as Set<Solo>).size === 0)
		);
	}

	/**
	 * Solo the current instance and unsolo all other instances.
	 */
	private _updateSolo(): void {
		if (this._isSoloed()) {
			this.input.gain.value = 1;
		} else if (this._noSolos()) {
			// no one is soloed
			this.input.gain.value = 1;
		} else {
			this.input.gain.value = 0;
		}
	}

	dispose(): this {
		super.dispose();
		(Solo._allSolos.get(this.context) as Set<Solo>).delete(this);
		this._removeSolo();
		return this;
	}
}
