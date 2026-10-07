import {
	AudioRange,
	Degrees,
	Frequency,
	Radians,
	Time,
} from "../../core/type/Units.js";
import { deepEquals, optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { isDefined } from "../../core/util/TypeCheck.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import {
	generateWaveform,
	ToneOscillatorConstructorOptions,
	ToneOscillatorInterface,
	ToneOscillatorOptions,
	ToneOscillatorType,
} from "./OscillatorInterface.js";
import { ToneOscillatorNode } from "./ToneOscillatorNode.js";
import { assertRange } from "../../core/util/Debug.js";
import { clamp } from "../../core/util/Math.js";
export {
	ToneOscillatorOptions,
	ToneOscillatorType,
} from "./OscillatorInterface.js";
/**
 * Oscillator supports a number of features including
 * phase rotation, multiple oscillator types (see Oscillator.type),
 * and Transport syncing (see Oscillator.syncFrequency).
 *
 * @example
 * // make and start a 440hz sine tone
 * const osc = new Tone.Oscillator(440, "sine").toDestination().start();
 * @category Source
 */
export class Oscillator
	extends Source<ToneOscillatorOptions>
	implements ToneOscillatorInterface
{
	readonly name: string = "Oscillator";

	/**
	 * the main oscillator
	 */
	private _oscillator: ToneOscillatorNode | null = null;

	/**
	 * The frequency control.
	 */
	frequency: Signal<"frequency">;

	/**
	 * The detune control signal.
	 */
	detune: Signal<"cents">;

	/**
	 * the periodic wave
	 */
	private _wave?: PeriodicWave;

	/**
	 * The partials of the oscillator
	 */
	private _partials: number[];

	/**
	 * The number of partials to limit or extend the periodic wave by
	 */
	private _partialCount: number;

	/**
	 * the phase of the oscillator between 0 - 360
	 */
	private _phase!: Radians;

	/**
	 * the type of the oscillator
	 */
	private _type: ToneOscillatorType;

	/**
	 * @param frequency Starting frequency
	 * @param type The oscillator type. Read more about type below.
	 */
	constructor(frequency?: Frequency, type?: ToneOscillatorType);
	constructor(options?: Partial<ToneOscillatorConstructorOptions>);
	constructor() {
		const options = optionsFromArguments(
			Oscillator.getDefaults(),
			arguments,
			["frequency", "type"]
		);
		super(options);

		this.frequency = new Signal<"frequency">({
			context: this.context,
			units: "frequency",
			value: options.frequency,
		});
		readOnly(this, "frequency");

		this.detune = new Signal<"cents">({
			context: this.context,
			units: "cents",
			value: options.detune,
		});
		readOnly(this, "detune");

		this._partials = options.partials;
		this._partialCount = options.partialCount;
		this._type = options.type;

		if (options.partialCount && options.type !== "custom") {
			this._type = (this.baseType +
				options.partialCount.toString()) as ToneOscillatorType;
		}
		this.phase = options.phase;
	}

	static getDefaults(): ToneOscillatorOptions {
		return Object.assign(Source.getDefaults(), {
			detune: 0,
			frequency: 440,
			partialCount: 0,
			partials: [],
			phase: 0,
			type: "sine" as const,
		});
	}

	/**
	 * start the oscillator
	 */
	protected _start(time?: Time): void {
		const computedTime = this.toSeconds(time);
		// new oscillator with previous values
		const oscillator = new ToneOscillatorNode({
			context: this.context,
			onended: () => this.onstop(this),
		});
		this._oscillator = oscillator;
		if (this._wave) {
			this._oscillator.setPeriodicWave(this._wave);
		} else {
			this._oscillator.type = this._type as OscillatorType;
		}
		// connect the control signal to the oscillator frequency & detune
		this._oscillator.connect(this.output);
		this.frequency.connect(this._oscillator.frequency);
		this.detune.connect(this._oscillator.detune);

		// start the oscillator
		this._oscillator.start(computedTime);
	}

	/**
	 * stop the oscillator
	 */
	protected _stop(time?: Time): void {
		const computedTime = this.toSeconds(time);
		if (this._oscillator) {
			this._oscillator.stop(computedTime);
		}
	}

	/**
	 * Restart the oscillator. Does not stop the oscillator, but instead
	 * just cancels any scheduled 'stop' from being invoked.
	 */
	protected _restart(time?: Time): this {
		const computedTime = this.toSeconds(time);
		this.log("restart", computedTime);
		if (this._oscillator) {
			this._oscillator.cancelStop();
		}
		this._state.cancel(computedTime);
		return this;
	}

	/**
	 * Sync the signal to the Transport's bpm. Any changes to the transports bpm,
	 * will also affect the oscillators frequency.
	 * @example
	 * const osc = new Tone.Oscillator().toDestination().start();
	 * osc.frequency.value = 440;
	 * // the ratio between the bpm and the frequency will be maintained
	 * osc.syncFrequency();
	 * // double the tempo
	 * Tone.Transport.bpm.value *= 2;
	 * // the frequency of the oscillator is doubled to 880
	 */
	syncFrequency(): this {
		this.context.transport.syncSignal(this.frequency);
		return this;
	}

	/**
	 * Unsync the oscillator's frequency from the Transport.
	 * @see {@link syncFrequency}
	 */
	unsyncFrequency(): this {
		this.context.transport.unsyncSignal(this.frequency);
		return this;
	}

	/**
	 * Cache the periodic waves to avoid having to redo computations
	 */
	private static _periodicWaveCache: Array<{
		partials: number[];
		phase: number;
		type: string;
		partialCount: number;
		real: Float32Array;
		imag: Float32Array;
		wave: PeriodicWave;
	}> = [];

	/**
	 * Get a cached periodic wave. Avoids having to recompute
	 * the oscillator values when they have already been computed
	 * with the same values.
	 */
	private _getCachedPeriodicWave():
		| {
				real: Float32Array;
				imag: Float32Array;
				partials: number[];
				wave: PeriodicWave;
		  }
		| undefined {
		if (this._type === "custom") {
			const oscProps = Oscillator._periodicWaveCache.find(
				(description) => {
					return (
						description.phase === this._phase &&
						deepEquals(description.partials, this._partials)
					);
				}
			);
			return oscProps;
		} else {
			const oscProps = Oscillator._periodicWaveCache.find(
				(description) => {
					return (
						description.type === this._type &&
						description.phase === this._phase
					);
				}
			);
			this._partialCount = oscProps
				? oscProps.partialCount
				: this._partialCount;
			return oscProps;
		}
	}

	get type(): ToneOscillatorType {
		return this._type;
	}
	set type(type) {
		this._type = type;
		const isBasicType =
			["sine", "square", "sawtooth", "triangle"].indexOf(type) !== -1;
		if (this._phase === 0 && isBasicType) {
			this._wave = undefined;
			this._partialCount = 0;
			// just go with the basic approach
			if (this._oscillator !== null) {
				// already tested that it's a basic type
				this._oscillator.type = type as OscillatorType;
			}
		} else {
			// first check if the value is cached
			const cache = this._getCachedPeriodicWave();
			if (isDefined(cache)) {
				const { partials, wave } = cache;
				this._wave = wave;
				this._partials = partials;
				if (this._oscillator !== null) {
					this._oscillator.setPeriodicWave(this._wave);
				}
			} else {
				const [real, imag] = this._getRealImaginary(type, this._phase);
				const periodicWave = this.context.createPeriodicWave(
					real,
					imag
				);
				this._wave = periodicWave;
				if (this._oscillator !== null) {
					this._oscillator.setPeriodicWave(this._wave);
				}
				// set the cache
				Oscillator._periodicWaveCache.push({
					imag,
					partialCount: this._partialCount,
					partials: this._partials,
					phase: this._phase,
					real,
					type: this._type,
					wave: this._wave,
				});
				if (Oscillator._periodicWaveCache.length > 100) {
					Oscillator._periodicWaveCache.shift();
				}
			}
		}
	}

	get baseType(): OscillatorType {
		return (this._type as string).replace(
			this.partialCount.toString(),
			""
		) as OscillatorType;
	}
	set baseType(baseType) {
		if (
			this.partialCount &&
			this._type !== "custom" &&
			baseType !== "custom"
		) {
			this.type = (baseType + this.partialCount) as ToneOscillatorType;
		} else {
			this.type = baseType;
		}
	}

	get partialCount(): number {
		return this._partialCount;
	}
	set partialCount(p) {
		assertRange(p, 0);
		let type = this._type;
		const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(
			this._type
		);
		if (partial) {
			type = partial[1] as OscillatorType;
		}
		if (this._type !== "custom") {
			if (p === 0) {
				this.type = type;
			} else {
				this.type = (type + p.toString()) as ToneOscillatorType;
			}
		} else {
			// extend or shorten the partials array
			const fullPartials = new Float32Array(p);
			// copy over the partials array
			this._partials.forEach((v, i) => (fullPartials[i] = v));
			this._partials = Array.from(fullPartials);
			this.type = this._type;
		}
	}

	/**
	 * Returns the real and imaginary components based
	 * on the oscillator type.
	 * @returns [real: Float32Array, imaginary: Float32Array]
	 */
	private _getRealImaginary(
		type: ToneOscillatorType,
		phase: Radians
	): Float32Array[] {
		const fftSize = 4096;
		let periodicWaveSize = fftSize / 2;

		const real = new Float32Array(periodicWaveSize);
		const imag = new Float32Array(periodicWaveSize);

		let partialCount = 1;
		if (type === "custom") {
			partialCount = this._partials.length + 1;
			this._partialCount = this._partials.length;
			periodicWaveSize = partialCount;
			// if the partial count is 0, don't bother doing any computation
			if (this._partials.length === 0) {
				return [real, imag];
			}
		} else {
			const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(type);
			if (partial) {
				partialCount = parseInt(partial[2], 10) + 1;
				this._partialCount = parseInt(partial[2], 10);
				type = partial[1] as ToneOscillatorType;
				partialCount = Math.max(partialCount, 2);
				periodicWaveSize = partialCount;
			} else {
				this._partialCount = 0;
			}
			this._partials = [];
		}

		for (let n = 1; n < periodicWaveSize; ++n) {
			const piFactor = 2 / (n * Math.PI);
			let b;
			switch (type) {
				case "sine":
					b = n <= partialCount ? 1 : 0;
					this._partials[n - 1] = b;
					break;
				case "square":
					b = n & 1 ? 2 * piFactor : 0;
					this._partials[n - 1] = b;
					break;
				case "sawtooth":
					b = piFactor * (n & 1 ? 1 : -1);
					this._partials[n - 1] = b;
					break;
				case "triangle":
					if (n & 1) {
						b =
							2 *
							(piFactor * piFactor) *
							(((n - 1) >> 1) & 1 ? -1 : 1);
					} else {
						b = 0;
					}
					this._partials[n - 1] = b;
					break;
				case "custom":
					b = this._partials[n - 1];
					break;
				default:
					throw new TypeError("Oscillator: invalid type: " + type);
			}
			if (b !== 0) {
				real[n] = -b * Math.sin(phase * n);
				imag[n] = b * Math.cos(phase * n);
			} else {
				real[n] = 0;
				imag[n] = 0;
			}
		}
		return [real, imag];
	}

	/**
	 * Compute the inverse FFT for a given phase.
	 */
	private _inverseFFT(
		real: Float32Array,
		imag: Float32Array,
		phase: Radians
	): number {
		let sum = 0;
		const len = real.length;
		for (let i = 0; i < len; i++) {
			sum +=
				real[i] * Math.cos(i * phase) + imag[i] * Math.sin(i * phase);
		}
		return sum;
	}

	/**
	 * Returns the initial value of the oscillator when stopped.
	 * E.g. a "sine" oscillator with phase = 90 would return an initial value of -1.
	 */
	getInitialValue(): AudioRange {
		const [real, imag] = this._getRealImaginary(this._type, 0);
		let maxValue = 0;
		const twoPi = Math.PI * 2;
		const testPositions = 32;
		// check for peaks in 16 places
		for (let i = 0; i < testPositions; i++) {
			maxValue = Math.max(
				this._inverseFFT(real, imag, (i / testPositions) * twoPi),
				maxValue
			);
		}
		return clamp(
			-this._inverseFFT(real, imag, this._phase) / maxValue,
			-1,
			1
		);
	}

	get partials(): number[] {
		return this._partials.slice(0, this.partialCount);
	}
	set partials(partials) {
		this._partials = partials;
		this._partialCount = this._partials.length;
		if (partials.length) {
			this.type = "custom";
		}
	}

	get phase(): Degrees {
		return this._phase * (180 / Math.PI);
	}
	set phase(phase) {
		this._phase = (phase * Math.PI) / 180;
		// reset the type
		this.type = this._type;
	}

	async asArray(length = 1024): Promise<Float32Array> {
		return generateWaveform(this, length);
	}

	dispose(): this {
		super.dispose();
		if (this._oscillator !== null) {
			this._oscillator.dispose();
		}
		this._wave = undefined;
		this.frequency.dispose();
		this.detune.dispose();
		return this;
	}
}
