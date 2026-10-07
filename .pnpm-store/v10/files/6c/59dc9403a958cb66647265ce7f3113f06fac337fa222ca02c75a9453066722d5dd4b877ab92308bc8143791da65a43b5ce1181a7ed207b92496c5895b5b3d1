import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { NormalRange, PowerOfTwo } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Split } from "../channel/Split.js";
import { Gain } from "../../core/context/Gain.js";
import { assert, assertRange } from "../../core/util/Debug.js";

export type AnalyserType = "fft" | "waveform";

export interface AnalyserOptions extends ToneAudioNodeOptions {
	size: PowerOfTwo;
	type: AnalyserType;
	smoothing: NormalRange;
	channels: number;
}

/**
 * Wrapper around the native Web Audio's [AnalyserNode](http://webaudio.github.io/web-audio-api/#idl-def-AnalyserNode).
 * Extracts FFT or Waveform data from the incoming signal.
 * @category Component
 */
export class Analyser extends ToneAudioNode<AnalyserOptions> {
	readonly name: string = "Analyser";

	readonly input: InputNode;
	readonly output: OutputNode;

	/**
	 * The analyser node.
	 */
	private _analysers: AnalyserNode[] = [];

	/**
	 * Input and output are a gain node
	 */
	private _gain: Gain;

	/**
	 * The channel splitter node
	 */
	private _split: Split;

	/**
	 * The analysis type
	 */
	private _type!: AnalyserType;

	/**
	 * The buffer that the FFT data is written to
	 */
	private _buffers: Float32Array[] = [];

	/**
	 * @param type The return type of the analysis, either "fft", or "waveform".
	 * @param size The size of the FFT. This must be a power of two in the range 16 to 16384.
	 */
	constructor(type?: AnalyserType, size?: number);
	constructor(options?: Partial<AnalyserOptions>);
	constructor() {
		const options = optionsFromArguments(
			Analyser.getDefaults(),
			arguments,
			["type", "size"]
		);
		super(options);

		this.input =
			this.output =
			this._gain =
				new Gain({ context: this.context });
		this._split = new Split({
			context: this.context,
			channels: options.channels,
		});
		this.input.connect(this._split);

		assertRange(options.channels, 1);

		// create the analysers
		for (let channel = 0; channel < options.channels; channel++) {
			this._analysers[channel] = this.context.createAnalyser();
			this._split.connect(this._analysers[channel], channel, 0);
		}

		// set the values initially
		this.size = options.size;
		this.type = options.type;
		this.smoothing = options.smoothing;
	}

	static getDefaults(): AnalyserOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			size: 1024,
			smoothing: 0.8,
			type: "fft" as AnalyserType,
			channels: 1,
		});
	}

	/**
	 * Run the analysis given the current settings. If {@link channels} = 1,
	 * it will return a Float32Array. If {@link channels} > 1, it will
	 * return an array of Float32Arrays where each index in the array
	 * represents the analysis done on a channel.
	 */
	getValue(): Float32Array | Float32Array[] {
		this._analysers.forEach((analyser, index) => {
			const buffer = this._buffers[index];
			if (this._type === "fft") {
				analyser.getFloatFrequencyData(buffer);
			} else if (this._type === "waveform") {
				analyser.getFloatTimeDomainData(buffer);
			}
		});
		if (this.channels === 1) {
			return this._buffers[0];
		} else {
			return this._buffers;
		}
	}

	/**
	 * The size of analysis. This must be a power of two in the range 16 to 16384.
	 */
	get size(): PowerOfTwo {
		return this._analysers[0].frequencyBinCount;
	}
	set size(size: PowerOfTwo) {
		this._analysers.forEach((analyser, index) => {
			analyser.fftSize = size * 2;
			this._buffers[index] = new Float32Array(size);
		});
	}

	/**
	 * The number of channels the analyser does the analysis on. Channel
	 * separation is done using {@link Split}
	 */
	get channels(): number {
		return this._analysers.length;
	}

	/**
	 * The analysis function returned by analyser.getValue(), either "fft" or "waveform".
	 */
	get type(): AnalyserType {
		return this._type;
	}
	set type(type: AnalyserType) {
		assert(
			type === "waveform" || type === "fft",
			`Analyser: invalid type: ${type}`
		);
		this._type = type;
	}

	/**
	 * 0 represents no time averaging with the last analysis frame.
	 */
	get smoothing(): NormalRange {
		return this._analysers[0].smoothingTimeConstant;
	}
	set smoothing(val: NormalRange) {
		this._analysers.forEach((a) => (a.smoothingTimeConstant = val));
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		this._analysers.forEach((a) => a.disconnect());
		this._split.dispose();
		this._gain.dispose();
		return this;
	}
}
