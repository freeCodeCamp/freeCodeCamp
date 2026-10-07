import {
	ToneAudioWorklet,
	ToneAudioWorkletOptions,
} from "../core/worklet/ToneAudioWorklet.js";
import { Effect, EffectOptions } from "./Effect.js";
import { Positive } from "../core/type/Units.js";
import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { connectSeries } from "../core/context/ToneAudioNode.js";
import { Param } from "../core/context/Param.js";
import { workletName } from "./BitCrusher.worklet.js";

export interface BitCrusherOptions extends EffectOptions {
	bits: Positive;
}

/**
 * BitCrusher down-samples the incoming signal to a different bit depth.
 * Lowering the bit depth of the signal creates distortion. Read more about BitCrushing
 * on [Wikipedia](https://en.wikipedia.org/wiki/Bitcrusher).
 * @example
 * // initialize crusher and route a synth through it
 * const crusher = new Tone.BitCrusher(4).toDestination();
 * const synth = new Tone.Synth().connect(crusher);
 * synth.triggerAttackRelease("C2", 2);
 *
 * @category Effect
 */
export class BitCrusher extends Effect<BitCrusherOptions> {
	readonly name: string = "BitCrusher";

	/**
	 * The bit depth of the effect
	 * @min 1
	 * @max 16
	 */
	readonly bits: Param<"positive">;

	/**
	 * The node which does the bit crushing effect. Runs in an AudioWorklet when possible.
	 */
	private _bitCrusherWorklet: BitCrusherWorklet;

	constructor(bits?: Positive);
	constructor(options?: Partial<BitCrusherWorkletOptions>);
	constructor() {
		const options = optionsFromArguments(
			BitCrusher.getDefaults(),
			arguments,
			["bits"]
		);
		super(options);

		this._bitCrusherWorklet = new BitCrusherWorklet({
			context: this.context,
			bits: options.bits,
		});
		// connect it up
		this.connectEffect(this._bitCrusherWorklet);

		this.bits = this._bitCrusherWorklet.bits;
	}

	static getDefaults(): BitCrusherOptions {
		return Object.assign(Effect.getDefaults(), {
			bits: 4,
		});
	}

	dispose(): this {
		super.dispose();
		this._bitCrusherWorklet.dispose();
		return this;
	}
}

interface BitCrusherWorkletOptions extends ToneAudioWorkletOptions {
	bits: number;
}

/**
 * Internal class which creates an AudioWorklet to do the bit crushing
 */
class BitCrusherWorklet extends ToneAudioWorklet<BitCrusherWorkletOptions> {
	readonly name: string = "BitCrusherWorklet";

	readonly input: Gain;
	readonly output: Gain;

	readonly bits: Param<"positive">;

	constructor(options?: Partial<BitCrusherWorkletOptions>);
	constructor() {
		const options = optionsFromArguments(
			BitCrusherWorklet.getDefaults(),
			arguments
		);
		super(options);

		this.input = new Gain({ context: this.context });
		this.output = new Gain({ context: this.context });

		this.bits = new Param<"positive">({
			context: this.context,
			value: options.bits,
			units: "positive",
			minValue: 1,
			maxValue: 16,
			param: this._dummyParam,
			swappable: true,
		});
	}

	static getDefaults(): BitCrusherWorkletOptions {
		return Object.assign(ToneAudioWorklet.getDefaults(), {
			bits: 12,
		});
	}

	protected _audioWorkletName(): string {
		return workletName;
	}

	onReady(node: AudioWorkletNode) {
		connectSeries(this.input, node, this.output);
		const bits = node.parameters.get("bits") as AudioParam;
		this.bits.setParam(bits);
	}

	dispose(): this {
		super.dispose();
		this.input.dispose();
		this.output.dispose();
		this.bits.dispose();
		return this;
	}
}
