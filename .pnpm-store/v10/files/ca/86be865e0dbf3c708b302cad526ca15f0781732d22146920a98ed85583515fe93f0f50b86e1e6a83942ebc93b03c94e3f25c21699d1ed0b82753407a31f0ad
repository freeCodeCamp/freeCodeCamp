import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { Positive, Seconds, Time } from "../../core/type/Units.js";
import { defaultArg, optionsFromArguments } from "../../core/util/Defaults.js";
import { noOp } from "../../core/util/Interface.js";
import { isUndef } from "../../core/util/TypeCheck.js";
import { Source, SourceOptions } from "../Source.js";
import { ToneBufferSource } from "./ToneBufferSource.js";
import { assertRange } from "../../core/util/Debug.js";
import { timeRange } from "../../core/util/Decorator.js";

export interface PlayerOptions extends SourceOptions {
	onload: () => void;
	onerror: (error: Error) => void;
	playbackRate: Positive;
	loop: boolean;
	autostart: boolean;
	loopStart: Time;
	loopEnd: Time;
	reverse: boolean;
	fadeIn: Time;
	fadeOut: Time;
	url?: ToneAudioBuffer | string | AudioBuffer;
}

/**
 * Player is an audio file player with start, loop, and stop functions.
 * @example
 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
 * // play as soon as the buffer is loaded
 * player.autostart = true;
 * @category Source
 */
export class Player extends Source<PlayerOptions> {
	readonly name: string = "Player";

	/**
	 * If the file should play as soon
	 * as the buffer is loaded.
	 */
	autostart: boolean;

	/**
	 * The buffer
	 */
	private _buffer: ToneAudioBuffer;

	/**
	 * if the buffer should loop once it's over
	 */
	private _loop: boolean;

	/**
	 * if 'loop' is true, the loop will start at this position
	 */
	private _loopStart: Time;

	/**
	 * if 'loop' is true, the loop will end at this position
	 */
	private _loopEnd: Time;

	/**
	 * the playback rate
	 */
	private _playbackRate: Positive;

	/**
	 * All of the active buffer source nodes
	 */
	private _activeSources: Set<ToneBufferSource> = new Set();

	/**
	 * The fadeIn time of the amplitude envelope.
	 */
	@timeRange(0)
	fadeIn: Time;

	/**
	 * The fadeOut time of the amplitude envelope.
	 */
	@timeRange(0)
	fadeOut: Time;

	/**
	 * @param url Either the AudioBuffer or the url from which to load the AudioBuffer
	 * @param onload The function to invoke when the buffer is loaded.
	 */
	constructor(
		url?: string | AudioBuffer | ToneAudioBuffer,
		onload?: () => void
	);
	constructor(options?: Partial<PlayerOptions>);
	constructor() {
		const options = optionsFromArguments(Player.getDefaults(), arguments, [
			"url",
			"onload",
		]);
		super(options);

		this._buffer = new ToneAudioBuffer({
			onload: this._onload.bind(this, options.onload),
			onerror: options.onerror,
			reverse: options.reverse,
			url: options.url,
		});
		this.autostart = options.autostart;
		this._loop = options.loop;
		this._loopStart = options.loopStart;
		this._loopEnd = options.loopEnd;
		this._playbackRate = options.playbackRate;
		this.fadeIn = options.fadeIn;
		this.fadeOut = options.fadeOut;
	}

	static getDefaults(): PlayerOptions {
		return Object.assign(Source.getDefaults(), {
			autostart: false,
			fadeIn: 0,
			fadeOut: 0,
			loop: false,
			loopEnd: 0,
			loopStart: 0,
			onload: noOp,
			onerror: noOp,
			playbackRate: 1,
			reverse: false,
		});
	}

	/**
	 * Load the audio file as an audio buffer.
	 * Decodes the audio asynchronously and invokes
	 * the callback once the audio buffer loads.
	 * Note: this does not need to be called if a url
	 * was passed in to the constructor. Only use this
	 * if you want to manually load a new url.
	 * @param url The url of the buffer to load. Filetype support depends on the browser.
	 */
	async load(url: string): Promise<this> {
		await this._buffer.load(url);
		this._onload();
		return this;
	}

	/**
	 * Internal callback when the buffer is loaded.
	 */
	private _onload(callback: () => void = noOp): void {
		callback();
		if (this.autostart) {
			this.start();
		}
	}

	/**
	 * Internal callback when the buffer is done playing.
	 */
	private _onSourceEnd(source: ToneBufferSource): void {
		// invoke the onstop function
		this.onstop(this);

		// delete the source from the active sources
		this._activeSources.delete(source);
		if (
			this._activeSources.size === 0 &&
			!this._synced &&
			this._state.getValueAtTime(this.now()) === "started"
		) {
			// remove the 'implicitEnd' event and replace with an explicit end
			this._state.cancel(this.now());
			this._state.setStateAtTime("stopped", this.now());
		}
	}

	/**
	 * Play the buffer at the given startTime. Optionally add an offset
	 * and/or duration which will play the buffer from a position
	 * within the buffer for the given duration.
	 *
	 * @param  time When the player should start.
	 * @param  offset The offset from the beginning of the sample to start at.
	 * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
	 */
	start(time?: Time, offset?: Time, duration?: Time): this {
		super.start(time, offset, duration);
		return this;
	}

	/**
	 * Internal start method
	 */
	protected _start(startTime?: Time, offset?: Time, duration?: Time): void {
		// if it's a loop the default offset is the loopStart point
		if (this._loop) {
			offset = defaultArg(offset, this._loopStart);
		} else {
			// otherwise the default offset is 0
			offset = defaultArg(offset, 0);
		}

		// compute the values in seconds
		const computedOffset = this.toSeconds(offset);

		// compute the duration which is either the passed in duration of the buffer.duration - offset
		const origDuration = duration;
		duration = defaultArg(
			duration,
			Math.max(this._buffer.duration - computedOffset, 0)
		);
		let computedDuration = this.toSeconds(duration);

		// scale it by the playback rate
		computedDuration = computedDuration / this._playbackRate;

		// get the start time
		startTime = this.toSeconds(startTime);

		// make the source
		const source = new ToneBufferSource({
			url: this._buffer,
			context: this.context,
			fadeIn: this.fadeIn,
			fadeOut: this.fadeOut,
			loop: this._loop,
			loopEnd: this._loopEnd,
			loopStart: this._loopStart,
			onended: this._onSourceEnd.bind(this),
			playbackRate: this._playbackRate,
		}).connect(this.output);

		// set the looping properties
		if (!this._loop && !this._synced) {
			// cancel the previous stop
			this._state.cancel(startTime + computedDuration);
			// if it's not looping, set the state change at the end of the sample
			this._state.setStateAtTime(
				"stopped",
				startTime + computedDuration,
				{
					implicitEnd: true,
				}
			);
		}

		// add it to the array of active sources
		this._activeSources.add(source);

		// start it
		if (this._loop && isUndef(origDuration)) {
			source.start(startTime, computedOffset);
		} else {
			// subtract the fade out time
			source.start(
				startTime,
				computedOffset,
				computedDuration - this.toSeconds(this.fadeOut)
			);
		}
	}

	/**
	 * Stop playback.
	 */
	protected _stop(time?: Time): void {
		const computedTime = this.toSeconds(time);
		this._activeSources.forEach((source) => source.stop(computedTime));
	}

	/**
	 * Stop and then restart the player from the beginning (or offset)
	 * @param  time When the player should start.
	 * @param  offset The offset from the beginning of the sample to start at.
	 * @param  duration How long the sample should play. If no duration is given,
	 * 					it will default to the full length of the sample (minus any offset)
	 */
	restart(time?: Seconds, offset?: Time, duration?: Time): this {
		super.restart(time, offset, duration);
		return this;
	}

	protected _restart(time?: Seconds, offset?: Time, duration?: Time): void {
		[...this._activeSources].pop()?.stop(time); // explicitly stop only the most recently created source, to avoid edge case when > 1 source exists and _stop() erroneously sets all stop times past original end offset
		this._start(time, offset, duration);
	}

	/**
	 * Seek to a specific time in the player's buffer. If the
	 * source is no longer playing at that time, it will stop.
	 * @param offset The time to seek to.
	 * @param when The time for the seek event to occur.
	 * @example
	 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3", () => {
	 * 	player.start();
	 * 	// seek to the offset in 1 second from now
	 * 	player.seek(0.4, "+1");
	 * }).toDestination();
	 */
	seek(offset: Time, when?: Time): this {
		const computedTime = this.toSeconds(when);
		if (this._state.getValueAtTime(computedTime) === "started") {
			const computedOffset = this.toSeconds(offset);
			// if it's currently playing, stop it
			this._stop(computedTime);
			// restart it at the given time
			this._start(computedTime, computedOffset);
		}
		return this;
	}

	/**
	 * Set the loop start and end. Will only loop if loop is set to true.
	 * @param loopStart The loop start time
	 * @param loopEnd The loop end time
	 * @example
	 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/malevoices_aa2_F3.mp3").toDestination();
	 * // loop between the given points
	 * player.setLoopPoints(0.2, 0.3);
	 * player.loop = true;
	 * player.autostart = true;
	 */
	setLoopPoints(loopStart: Time, loopEnd: Time): this {
		this.loopStart = loopStart;
		this.loopEnd = loopEnd;
		return this;
	}

	/**
	 * If loop is true, the loop will start at this position.
	 */
	get loopStart(): Time {
		return this._loopStart;
	}
	set loopStart(loopStart) {
		this._loopStart = loopStart;
		if (this.buffer.loaded) {
			assertRange(this.toSeconds(loopStart), 0, this.buffer.duration);
		}
		// get the current source
		this._activeSources.forEach((source) => {
			source.loopStart = loopStart;
		});
	}

	/**
	 * If loop is true, the loop will end at this position.
	 */
	get loopEnd(): Time {
		return this._loopEnd;
	}
	set loopEnd(loopEnd) {
		this._loopEnd = loopEnd;
		if (this.buffer.loaded) {
			assertRange(this.toSeconds(loopEnd), 0, this.buffer.duration);
		}
		// get the current source
		this._activeSources.forEach((source) => {
			source.loopEnd = loopEnd;
		});
	}

	/**
	 * The audio buffer belonging to the player.
	 */
	get buffer(): ToneAudioBuffer {
		return this._buffer;
	}
	set buffer(buffer) {
		this._buffer.set(buffer);
	}

	/**
	 * If the buffer should loop once it's over.
	 * @example
	 * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/breakbeat.mp3").toDestination();
	 * player.loop = true;
	 * player.autostart = true;
	 */
	get loop(): boolean {
		return this._loop;
	}
	set loop(loop) {
		// if no change, do nothing
		if (this._loop === loop) {
			return;
		}
		this._loop = loop;
		// set the loop of all of the sources
		this._activeSources.forEach((source) => {
			source.loop = loop;
		});
		if (loop) {
			// remove the next stopEvent
			const stopEvent = this._state.getNextState("stopped", this.now());
			if (stopEvent) {
				this._state.cancel(stopEvent.time);
			}
		}
	}

	/**
	 * Normal speed is 1. The pitch will change with the playback rate.
	 * @example
	 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/femalevoices_aa2_A5.mp3").toDestination();
	 * // play at 1/4 speed
	 * player.playbackRate = 0.25;
	 * // play as soon as the buffer is loaded
	 * player.autostart = true;
	 */
	get playbackRate(): Positive {
		return this._playbackRate;
	}
	set playbackRate(rate) {
		this._playbackRate = rate;
		const now = this.now();

		// cancel the stop event since it's at a different time now
		const stopEvent = this._state.getNextState("stopped", now);
		if (stopEvent && stopEvent.implicitEnd) {
			this._state.cancel(stopEvent.time);
			this._activeSources.forEach((source) => source.cancelStop());
		}

		// set all the sources
		this._activeSources.forEach((source) => {
			source.playbackRate.setValueAtTime(rate, now);
		});
	}

	/**
	 * If the buffer should be reversed. Note that this sets the underlying {@link ToneAudioBuffer.reverse}, so
	 * if multiple players are pointing at the same ToneAudioBuffer, they will all be reversed.
	 * @example
	 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/chime_1.mp3").toDestination();
	 * player.autostart = true;
	 * player.reverse = true;
	 */
	get reverse(): boolean {
		return this._buffer.reverse;
	}
	set reverse(rev) {
		this._buffer.reverse = rev;
	}

	/**
	 * If the buffer is loaded
	 */
	get loaded(): boolean {
		return this._buffer.loaded;
	}

	dispose(): this {
		super.dispose();
		// disconnect all of the players
		this._activeSources.forEach((source) => source.dispose());
		this._activeSources.clear();
		this._buffer.dispose();
		return this;
	}
}
