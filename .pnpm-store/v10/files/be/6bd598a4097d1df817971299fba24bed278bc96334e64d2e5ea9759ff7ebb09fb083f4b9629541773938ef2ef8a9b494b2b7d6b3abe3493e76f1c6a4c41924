import { Volume } from "../../component/channel/Volume.js";
import { Param } from "../../core/context/Param.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import {
	ToneAudioBuffers,
	ToneAudioBuffersUrlMap,
} from "../../core/context/ToneAudioBuffers.js";
import { OutputNode, ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { Decibels, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { assert } from "../../core/util/Debug.js";
import { noOp, readOnly } from "../../core/util/Interface.js";
import { BasicPlaybackState } from "../../core/util/StateTimeline.js";
import { Source, SourceOptions } from "../Source.js";
import { Player } from "./Player.js";

export interface PlayersOptions extends SourceOptions {
	urls: ToneAudioBuffersUrlMap;
	volume: Decibels;
	mute: boolean;
	onload: () => void;
	onerror: (error: Error) => void;
	baseUrl: string;
	fadeIn: Time;
	fadeOut: Time;
}

/**
 * Players combines multiple {@link Player} objects.
 * @category Source
 */
export class Players extends ToneAudioNode<PlayersOptions> {
	readonly name: string = "Players";

	/**
	 * The output volume node
	 */
	private _volume: Volume;

	/**
	 * The volume of the output in decibels.
	 */
	readonly volume: Param<"decibels">;

	/**
	 * The combined output of all of the players
	 */
	readonly output: OutputNode;

	/**
	 * Players has no input.
	 */
	readonly input = undefined;

	/**
	 * The container of all of the players
	 */
	private _players: Map<string, Player> = new Map();

	/**
	 * The container of all the buffers
	 */
	private _buffers: ToneAudioBuffers;

	/**
	 * private holder of the fadeIn time
	 */
	private _fadeIn: Time;

	/**
	 * private holder of the fadeOut time
	 */
	private _fadeOut: Time;

	/**
	 * @param urls An object mapping a name to a url.
	 * @param onload The function to invoke when all buffers are loaded.
	 */
	constructor(urls?: ToneAudioBuffersUrlMap, onload?: () => void);
	/**
	 * @param urls An object mapping a name to a url.
	 * @param options The remaining options associated with the players
	 */
	constructor(
		urls?: ToneAudioBuffersUrlMap,
		options?: Partial<Omit<PlayersOptions, "urls">>
	);
	constructor(options?: Partial<PlayersOptions>);
	constructor() {
		const options = optionsFromArguments(
			Players.getDefaults(),
			arguments,
			["urls", "onload"],
			"urls"
		);
		super(options);

		/**
		 * The output volume node
		 */
		this._volume = this.output = new Volume({
			context: this.context,
			volume: options.volume,
		});

		this.volume = this._volume.volume;
		readOnly(this, "volume");
		this._buffers = new ToneAudioBuffers({
			urls: options.urls,
			onload: options.onload,
			baseUrl: options.baseUrl,
			onerror: options.onerror,
		});
		// mute initially
		this.mute = options.mute;
		this._fadeIn = options.fadeIn;
		this._fadeOut = options.fadeOut;
	}

	static getDefaults(): PlayersOptions {
		return Object.assign(Source.getDefaults(), {
			baseUrl: "",
			fadeIn: 0,
			fadeOut: 0,
			mute: false,
			onload: noOp,
			onerror: noOp,
			urls: {},
			volume: 0,
		});
	}

	/**
	 * Mute the output.
	 */
	get mute(): boolean {
		return this._volume.mute;
	}
	set mute(mute) {
		this._volume.mute = mute;
	}

	/**
	 * The fadeIn time of the envelope applied to the source.
	 */
	get fadeIn(): Time {
		return this._fadeIn;
	}
	set fadeIn(fadeIn) {
		this._fadeIn = fadeIn;
		this._players.forEach((player) => {
			player.fadeIn = fadeIn;
		});
	}

	/**
	 * The fadeOut time of the each of the sources.
	 */
	get fadeOut(): Time {
		return this._fadeOut;
	}
	set fadeOut(fadeOut) {
		this._fadeOut = fadeOut;
		this._players.forEach((player) => {
			player.fadeOut = fadeOut;
		});
	}

	/**
	 * The state of the players object. Returns "started" if any of the players are playing.
	 */
	get state(): BasicPlaybackState {
		const playing = Array.from(this._players).some(
			([_, player]) => player.state === "started"
		);
		return playing ? "started" : "stopped";
	}

	/**
	 * True if the buffers object has a buffer by that name.
	 * @param name  The key or index of the buffer.
	 */
	has(name: string): boolean {
		return this._buffers.has(name);
	}

	/**
	 * Get a player by name.
	 * @param  name  The players name as defined in the constructor object or `add` method.
	 */
	player(name: string): Player {
		assert(
			this.has(name),
			`No Player with the name ${name} exists on this object`
		);
		if (!this._players.has(name)) {
			const player = new Player({
				context: this.context,
				fadeIn: this._fadeIn,
				fadeOut: this._fadeOut,
				url: this._buffers.get(name),
			}).connect(this.output);
			this._players.set(name, player);
		}
		return this._players.get(name) as Player;
	}

	/**
	 * If all the buffers are loaded or not
	 */
	get loaded(): boolean {
		return this._buffers.loaded;
	}

	/**
	 * Add a player by name and url to the Players
	 * @param  name A unique name to give the player
	 * @param  url  Either the url of the bufer or a buffer which will be added with the given name.
	 * @param callback  The callback to invoke when the url is loaded.
	 * @example
	 * const players = new Tone.Players();
	 * players.add("gong", "https://tonejs.github.io/audio/berklee/gong_1.mp3", () => {
	 * 	console.log("gong loaded");
	 * 	players.player("gong").start();
	 * });
	 */
	add(
		name: string,
		url: string | ToneAudioBuffer | AudioBuffer,
		callback?: () => void
	): this {
		assert(
			!this._buffers.has(name),
			"A buffer with that name already exists on this object"
		);
		this._buffers.add(name, url, callback);
		return this;
	}

	/**
	 * Stop all of the players at the given time
	 * @param time The time to stop all of the players.
	 */
	stopAll(time?: Time): this {
		this._players.forEach((player) => player.stop(time));
		return this;
	}

	dispose(): this {
		super.dispose();
		this._volume.dispose();
		this.volume.dispose();
		this._players.forEach((player) => player.dispose());
		this._buffers.dispose();
		return this;
	}
}
