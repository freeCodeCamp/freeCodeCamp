import { createOfflineAudioContext } from "../context/AudioContext.js";
import { Context } from "../context/Context.js";
import { Seconds } from "../type/Units.js";
import { isOfflineAudioContext } from "../util/AdvancedTypeCheck.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";

/**
 * Wrapper around the OfflineAudioContext
 * @category Core
 * @example
 * // generate a single channel, 0.5 second buffer
 * const context = new Tone.OfflineContext(1, 0.5, 44100);
 * const osc = new Tone.Oscillator({ context });
 * context.render().then(buffer => {
 * 	console.log(buffer.numberOfChannels, buffer.duration);
 * });
 */
export class OfflineContext extends Context {
	readonly name: string = "OfflineContext";

	/**
	 * A private reference to the duration
	 */
	private readonly _duration: Seconds;

	/**
	 * An artificial clock source
	 */
	private _currentTime: Seconds = 0;

	/**
	 * Private reference to the OfflineAudioContext.
	 */
	protected _context!: OfflineAudioContext;

	readonly isOffline: boolean = true;

	/**
	 * @param  channels  The number of channels to render
	 * @param  duration  The duration to render in seconds
	 * @param sampleRate the sample rate to render at
	 */
	constructor(channels: number, duration: Seconds, sampleRate: number);
	constructor(context: OfflineAudioContext);
	constructor() {
		super({
			clockSource: "offline",
			context: isOfflineAudioContext(arguments[0])
				? arguments[0]
				: createOfflineAudioContext(
						arguments[0],
						arguments[1] * arguments[2],
						arguments[2]
					),
			lookAhead: 0,
			updateInterval: isOfflineAudioContext(arguments[0])
				? 128 / arguments[0].sampleRate
				: 128 / arguments[2],
		});

		this._duration = isOfflineAudioContext(arguments[0])
			? arguments[0].length / arguments[0].sampleRate
			: arguments[1];
	}

	/**
	 * Override the now method to point to the internal clock time
	 */
	now(): Seconds {
		return this._currentTime;
	}

	/**
	 * Same as this.now()
	 */
	get currentTime(): Seconds {
		return this._currentTime;
	}

	/**
	 * Render just the clock portion of the audio context.
	 */
	private async _renderClock(asynchronous: boolean): Promise<void> {
		let index = 0;
		while (this._duration - this._currentTime >= 0) {
			// invoke all the callbacks on that time
			this.emit("tick");

			// increment the clock in block-sized chunks
			this._currentTime += 128 / this.sampleRate;

			// yield once a second of audio
			index++;
			const yieldEvery = Math.floor(this.sampleRate / 128);
			if (asynchronous && index % yieldEvery === 0) {
				await new Promise((done) => setTimeout(done, 1));
			}
		}
	}

	/**
	 * Render the output of the OfflineContext
	 * @param asynchronous If the clock should be rendered asynchronously, which will not block the main thread, but be slightly slower.
	 */
	async render(asynchronous = true): Promise<ToneAudioBuffer> {
		await this.workletsAreReady();
		await this._renderClock(asynchronous);
		const buffer = await this._context.startRendering();
		return new ToneAudioBuffer(buffer);
	}

	/**
	 * Close the context
	 */
	close(): Promise<void> {
		return Promise.resolve();
	}
}
