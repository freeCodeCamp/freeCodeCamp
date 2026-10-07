import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Gain } from "../core/context/Gain.js";
import { Signal } from "../signal/Signal.js";
import { Degrees, Frequency, NormalRange, Time } from "../core/type/Units.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";

export interface TremoloOptions extends StereoEffectOptions {
	frequency: Frequency;
	type: ToneOscillatorType;
	depth: NormalRange;
	spread: Degrees;
}

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
export class Tremolo extends StereoEffect<TremoloOptions> {
	readonly name: string = "Tremolo";

	/**
	 * The tremolo LFO in the left channel
	 */
	private _lfoL: LFO;

	/**
	 * The tremolo LFO in the left channel
	 */
	private _lfoR: LFO;

	/**
	 * Where the gain is multiplied
	 */
	private _amplitudeL: Gain;

	/**
	 * Where the gain is multiplied
	 */
	private _amplitudeR: Gain;

	/**
	 * The frequency of the tremolo.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The depth of the effect. A depth of 0, has no effect
	 * on the amplitude, and a depth of 1 makes the amplitude
	 * modulate fully between 0 and 1.
	 */
	readonly depth: Signal<"normalRange">;

	/**
	 * @param frequency The rate of the effect.
	 * @param depth The depth of the effect.
	 */
	constructor(frequency?: Frequency, depth?: NormalRange);
	constructor(options?: Partial<TremoloOptions>);
	constructor() {
		const options = optionsFromArguments(Tremolo.getDefaults(), arguments, [
			"frequency",
			"depth",
		]);
		super(options);

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

	static getDefaults(): TremoloOptions {
		return Object.assign(StereoEffect.getDefaults(), {
			frequency: 10,
			type: "sine" as const,
			depth: 0.5,
			spread: 180,
		});
	}

	/**
	 * Start the tremolo.
	 */
	start(time?: Time): this {
		this._lfoL.start(time);
		this._lfoR.start(time);
		return this;
	}

	/**
	 * Stop the tremolo.
	 */
	stop(time?: Time): this {
		this._lfoL.stop(time);
		this._lfoR.stop(time);
		return this;
	}

	/**
	 * Sync the effect to the transport.
	 */
	sync(): this {
		this._lfoL.sync();
		this._lfoR.sync();
		this.context.transport.syncSignal(this.frequency);
		return this;
	}

	/**
	 * Unsync the filter from the transport
	 */
	unsync(): this {
		this._lfoL.unsync();
		this._lfoR.unsync();
		this.context.transport.unsyncSignal(this.frequency);
		return this;
	}

	/**
	 * The oscillator type.
	 */
	get type(): ToneOscillatorType {
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
	get spread(): Degrees {
		return this._lfoR.phase - this._lfoL.phase; // 180
	}
	set spread(spread) {
		this._lfoL.phase = 90 - spread / 2;
		this._lfoR.phase = spread / 2 + 90;
	}

	dispose(): this {
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
