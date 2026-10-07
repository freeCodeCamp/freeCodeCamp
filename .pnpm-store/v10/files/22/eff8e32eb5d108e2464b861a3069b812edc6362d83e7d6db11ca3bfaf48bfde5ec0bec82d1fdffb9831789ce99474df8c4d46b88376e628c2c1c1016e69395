import { ToneAudioBuffer } from "../core/context/ToneAudioBuffer.js";
import { Positive, Time } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { assert } from "../core/util/Debug.js";
import { Source, SourceOptions } from "../source/Source.js";
import { ToneBufferSource } from "./buffer/ToneBufferSource.js";

export type NoiseType = "white" | "brown" | "pink";

export interface NoiseOptions extends SourceOptions {
	type: NoiseType;
	playbackRate: Positive;
	fadeIn: Time;
	fadeOut: Time;
}

/**
 * Noise is a noise generator. It uses looped noise buffers to save on performance.
 * Noise supports the noise types: "pink", "white", and "brown". Read more about
 * colors of noise on [Wikipedia](https://en.wikipedia.org/wiki/Colors_of_noise).
 *
 * @example
 * // initialize the noise and start
 * const noise = new Tone.Noise("pink").start();
 * // make an autofilter to shape the noise
 * const autoFilter = new Tone.AutoFilter({
 * 	frequency: "8n",
 * 	baseFrequency: 200,
 * 	octaves: 8
 * }).toDestination().start();
 * // connect the noise
 * noise.connect(autoFilter);
 * // start the autofilter LFO
 * autoFilter.start();
 * @category Source
 */
export class Noise extends Source<NoiseOptions> {
	readonly name: string = "Noise";

	/**
	 * Private reference to the source
	 */
	private _source: ToneBufferSource | null = null;

	/**
	 * private reference to the type
	 */
	private _type!: NoiseType;

	/**
	 * The playback rate of the noise. Affects
	 * the "frequency" of the noise.
	 */
	private _playbackRate: Positive;

	/**
	 * The fadeIn time of the amplitude envelope.
	 */
	protected _fadeIn: Time;

	/**
	 * The fadeOut time of the amplitude envelope.
	 */
	protected _fadeOut: Time;

	/**
	 * @param type the noise type (white|pink|brown)
	 */
	constructor(type?: NoiseType);
	constructor(options?: Partial<NoiseOptions>);
	constructor() {
		const options = optionsFromArguments(Noise.getDefaults(), arguments, [
			"type",
		]);
		super(options);

		this._playbackRate = options.playbackRate;
		this.type = options.type;
		this._fadeIn = options.fadeIn;
		this._fadeOut = options.fadeOut;
	}

	static getDefaults(): NoiseOptions {
		return Object.assign(Source.getDefaults(), {
			fadeIn: 0,
			fadeOut: 0,
			playbackRate: 1,
			type: "white" as NoiseType,
		});
	}

	/**
	 * The type of the noise. Can be "white", "brown", or "pink".
	 * @example
	 * const noise = new Tone.Noise().toDestination().start();
	 * noise.type = "brown";
	 */
	get type(): NoiseType {
		return this._type;
	}
	set type(type: NoiseType) {
		assert(type in _noiseBuffers, "Noise: invalid type: " + type);
		if (this._type !== type) {
			this._type = type;
			// if it's playing, stop and restart it
			if (this.state === "started") {
				const now = this.now();
				this._stop(now);
				this._start(now);
			}
		}
	}

	/**
	 * The playback rate of the noise. Affects
	 * the "frequency" of the noise.
	 */
	get playbackRate(): Positive {
		return this._playbackRate;
	}
	set playbackRate(rate: Positive) {
		this._playbackRate = rate;
		if (this._source) {
			this._source.playbackRate.value = rate;
		}
	}

	/**
	 * internal start method
	 */
	protected _start(time?: Time): void {
		const buffer = _noiseBuffers[this._type];
		this._source = new ToneBufferSource({
			url: buffer,
			context: this.context,
			fadeIn: this._fadeIn,
			fadeOut: this._fadeOut,
			loop: true,
			onended: () => this.onstop(this),
			playbackRate: this._playbackRate,
		}).connect(this.output);
		this._source.start(
			this.toSeconds(time),
			Math.random() * (buffer.duration - 0.001)
		);
	}

	/**
	 * internal stop method
	 */
	protected _stop(time?: Time): void {
		if (this._source) {
			this._source.stop(this.toSeconds(time));
			this._source = null;
		}
	}

	/**
	 * The fadeIn time of the amplitude envelope.
	 */
	get fadeIn(): Time {
		return this._fadeIn;
	}
	set fadeIn(time) {
		this._fadeIn = time;
		if (this._source) {
			this._source.fadeIn = this._fadeIn;
		}
	}

	/**
	 * The fadeOut time of the amplitude envelope.
	 */
	get fadeOut(): Time {
		return this._fadeOut;
	}
	set fadeOut(time) {
		this._fadeOut = time;
		if (this._source) {
			this._source.fadeOut = this._fadeOut;
		}
	}

	protected _restart(time?: Time): void {
		// TODO could be optimized by cancelling the buffer source 'stop'
		this._stop(time);
		this._start(time);
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		if (this._source) {
			this._source.disconnect();
		}
		return this;
	}
}

//--------------------
// THE NOISE BUFFERS
//--------------------

// Noise buffer stats
const BUFFER_LENGTH = 44100 * 5;
const NUM_CHANNELS = 2;

/**
 * The cached noise buffers
 */
interface NoiseCache {
	[key: string]: ToneAudioBuffer | null;
}

/**
 * Cache the noise buffers
 */
const _noiseCache: NoiseCache = {
	brown: null,
	pink: null,
	white: null,
};

/**
 * The noise arrays. Generated on initialization.
 * borrowed heavily from https://github.com/zacharydenton/noise.js
 * (c) 2013 Zach Denton (MIT)
 */
const _noiseBuffers = {
	get brown(): ToneAudioBuffer {
		if (!_noiseCache.brown) {
			const buffer: Float32Array[] = [];
			for (let channelNum = 0; channelNum < NUM_CHANNELS; channelNum++) {
				const channel = new Float32Array(BUFFER_LENGTH);
				buffer[channelNum] = channel;
				let lastOut = 0.0;
				for (let i = 0; i < BUFFER_LENGTH; i++) {
					const white = Math.random() * 2 - 1;
					channel[i] = (lastOut + 0.02 * white) / 1.02;
					lastOut = channel[i];
					channel[i] *= 3.5; // (roughly) compensate for gain
				}
			}
			_noiseCache.brown = new ToneAudioBuffer().fromArray(buffer);
		}
		return _noiseCache.brown;
	},

	get pink(): ToneAudioBuffer {
		if (!_noiseCache.pink) {
			const buffer: Float32Array[] = [];
			for (let channelNum = 0; channelNum < NUM_CHANNELS; channelNum++) {
				const channel = new Float32Array(BUFFER_LENGTH);
				buffer[channelNum] = channel;
				let b0, b1, b2, b3, b4, b5, b6;
				b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
				for (let i = 0; i < BUFFER_LENGTH; i++) {
					const white = Math.random() * 2 - 1;
					b0 = 0.99886 * b0 + white * 0.0555179;
					b1 = 0.99332 * b1 + white * 0.0750759;
					b2 = 0.969 * b2 + white * 0.153852;
					b3 = 0.8665 * b3 + white * 0.3104856;
					b4 = 0.55 * b4 + white * 0.5329522;
					b5 = -0.7616 * b5 - white * 0.016898;
					channel[i] =
						b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
					channel[i] *= 0.11; // (roughly) compensate for gain
					b6 = white * 0.115926;
				}
			}
			_noiseCache.pink = new ToneAudioBuffer().fromArray(buffer);
		}
		return _noiseCache.pink;
	},

	get white(): ToneAudioBuffer {
		if (!_noiseCache.white) {
			const buffer: Float32Array[] = [];
			for (let channelNum = 0; channelNum < NUM_CHANNELS; channelNum++) {
				const channel = new Float32Array(BUFFER_LENGTH);
				buffer[channelNum] = channel;
				for (let i = 0; i < BUFFER_LENGTH; i++) {
					channel[i] = Math.random() * 2 - 1;
				}
			}
			_noiseCache.white = new ToneAudioBuffer().fromArray(buffer);
		}
		return _noiseCache.white;
	},
};
