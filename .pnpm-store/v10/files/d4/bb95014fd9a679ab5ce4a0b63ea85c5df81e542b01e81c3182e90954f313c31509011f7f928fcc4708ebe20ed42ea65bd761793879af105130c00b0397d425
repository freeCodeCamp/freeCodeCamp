import { Effect, EffectOptions } from "../effect/Effect.js";
import { Frequency, NormalRange, Time } from "../core/type/Units.js";
import { LFO } from "../source/oscillator/LFO.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
import { Signal } from "../signal/Signal.js";
import { readOnly } from "../core/util/Interface.js";
import { Param } from "../core/context/Param.js";

export interface LFOEffectOptions extends EffectOptions {
	frequency: Frequency;
	type: ToneOscillatorType;
	depth: NormalRange;
}

/**
 * Base class for LFO-based effects.
 */
export abstract class LFOEffect<
	Options extends LFOEffectOptions,
> extends Effect<Options> {
	readonly name: string = "LFOEffect";

	/**
	 * the lfo which drives the filter cutoff
	 */
	protected _lfo: LFO;

	/**
	 * The range of the filter modulating between the min and max frequency.
	 * 0 = no modulation. 1 = full modulation.
	 */
	readonly depth: Param<"normalRange">;

	/**
	 * How fast the filter modulates between min and max.
	 */
	readonly frequency: Signal<"frequency">;

	constructor(options: LFOEffectOptions) {
		super(options);

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

	static getDefaults(): LFOEffectOptions {
		return Object.assign(Effect.getDefaults(), {
			frequency: 1,
			type: "sine" as ToneOscillatorType,
			depth: 1,
		});
	}

	/**
	 * Start the effect.
	 */
	start(time?: Time): this {
		this._lfo.start(time);
		return this;
	}

	/**
	 * Stop the lfo
	 */
	stop(time?: Time): this {
		this._lfo.stop(time);
		return this;
	}

	/**
	 * Sync the filter to the transport.
	 * @see {@link LFO.sync}
	 */
	sync(): this {
		this._lfo.sync();
		return this;
	}

	/**
	 * Unsync the filter from the transport.
	 */
	unsync(): this {
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

	dispose(): this {
		super.dispose();
		this._lfo.dispose();
		this.frequency.dispose();
		this.depth.dispose();
		return this;
	}
}
