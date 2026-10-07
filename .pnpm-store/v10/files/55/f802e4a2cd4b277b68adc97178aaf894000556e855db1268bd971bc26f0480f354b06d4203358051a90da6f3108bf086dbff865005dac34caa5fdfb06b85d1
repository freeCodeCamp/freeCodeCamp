import {
	connect,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { Decibels } from "../core/type/Units.js";
import { Volume } from "../component/channel/Volume.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { assert } from "../core/util/Debug.js";
import { Param } from "../core/context/Param.js";
import { readOnly } from "../core/util/Interface.js";
import { isDefined, isNumber } from "../core/util/TypeCheck.js";

export interface UserMediaOptions extends ToneAudioNodeOptions {
	volume: Decibels;
	mute: boolean;
}
/**
 * UserMedia uses MediaDevices.getUserMedia to open up and external microphone or audio input.
 * Check [MediaDevices API Support](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
 * to see which browsers are supported. Access to an external input
 * is limited to secure (HTTPS) connections.
 * @example
 * const meter = new Tone.Meter();
 * const mic = new Tone.UserMedia().connect(meter);
 * mic.open().then(() => {
 * 	// promise resolves when input is available
 * 	console.log("mic open");
 * 	// print the incoming mic levels in decibels
 * 	setInterval(() => console.log(meter.getValue()), 100);
 * }).catch(e => {
 * 	// promise is rejected when the user doesn't have or allow mic access
 * 	console.log("mic not open");
 * });
 * @category Source
 */

export class UserMedia extends ToneAudioNode<UserMediaOptions> {
	readonly name: string = "UserMedia";

	readonly input: undefined;
	readonly output: OutputNode;

	/**
	 * The MediaStreamNode
	 */
	private _mediaStream?: MediaStreamAudioSourceNode;

	/**
	 * The media stream created by getUserMedia.
	 */
	private _stream?: MediaStream;

	/**
	 * The open device
	 */
	private _device?: MediaDeviceInfo;

	/**
	 * The output volume node
	 */
	private _volume: Volume;

	/**
	 * The volume of the output in decibels.
	 */
	readonly volume: Param<"decibels">;

	/**
	 * @param volume The level of the input in decibels
	 */
	constructor(volume?: Decibels);
	constructor(options?: Partial<UserMediaOptions>);
	constructor() {
		const options = optionsFromArguments(
			UserMedia.getDefaults(),
			arguments,
			["volume"]
		);
		super(options);

		this._volume = this.output = new Volume({
			context: this.context,
			volume: options.volume,
		});
		this.volume = this._volume.volume;
		readOnly(this, "volume");
		this.mute = options.mute;
	}

	static getDefaults(): UserMediaOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			mute: false,
			volume: 0,
		});
	}

	/**
	 * Open the media stream. If a string is passed in, it is assumed
	 * to be the label or id of the stream, if a number is passed in,
	 * it is the input number of the stream.
	 * @param  labelOrId The label or id of the audio input media device.
	 *                   With no argument, the default stream is opened.
	 * @return The promise is resolved when the stream is open.
	 */
	async open(labelOrId?: string | number): Promise<this> {
		assert(UserMedia.supported, "UserMedia is not supported");
		// close the previous stream
		if (this.state === "started") {
			this.close();
		}
		const devices = await UserMedia.enumerateDevices();
		if (isNumber(labelOrId)) {
			this._device = devices[labelOrId];
		} else {
			this._device = devices.find((device) => {
				return (
					device.label === labelOrId || device.deviceId === labelOrId
				);
			});
			// didn't find a matching device
			if (!this._device && devices.length > 0) {
				this._device = devices[0];
			}
			assert(isDefined(this._device), `No matching device ${labelOrId}`);
		}
		// do getUserMedia
		const constraints = {
			audio: {
				echoCancellation: false,
				sampleRate: this.context.sampleRate,
				noiseSuppression: false,
				mozNoiseSuppression: false,
			},
		};
		if (this._device) {
			// @ts-ignore
			constraints.audio.deviceId = this._device.deviceId;
		}
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		// start a new source only if the previous one is closed
		if (!this._stream) {
			this._stream = stream;
			// Wrap a MediaStreamSourceNode around the live input stream.
			const mediaStreamNode =
				this.context.createMediaStreamSource(stream);
			// Connect the MediaStreamSourceNode to a gate gain node
			connect(mediaStreamNode, this.output);
			this._mediaStream = mediaStreamNode;
		}
		return this;
	}

	/**
	 * Close the media stream
	 */
	close(): this {
		if (this._stream && this._mediaStream) {
			this._stream.getAudioTracks().forEach((track) => {
				track.stop();
			});
			this._stream = undefined;
			// remove the old media stream
			this._mediaStream.disconnect();
			this._mediaStream = undefined;
		}
		this._device = undefined;
		return this;
	}

	/**
	 * Returns a promise which resolves with the list of audio input devices available.
	 * @return The promise that is resolved with the devices
	 * @example
	 * Tone.UserMedia.enumerateDevices().then((devices) => {
	 * 	// print the device labels
	 * 	console.log(devices.map(device => device.label));
	 * });
	 */
	static async enumerateDevices(): Promise<MediaDeviceInfo[]> {
		const allDevices = await navigator.mediaDevices.enumerateDevices();
		return allDevices.filter((device) => {
			return device.kind === "audioinput";
		});
	}

	/**
	 * Returns the playback state of the source, "started" when the microphone is open
	 * and "stopped" when the mic is closed.
	 */
	get state() {
		return this._stream && this._stream.active ? "started" : "stopped";
	}

	/**
	 * Returns an identifier for the represented device that is
	 * persisted across sessions. It is un-guessable by other applications and
	 * unique to the origin of the calling application. It is reset when the
	 * user clears cookies (for Private Browsing, a different identifier is
	 * used that is not persisted across sessions). Returns undefined when the
	 * device is not open.
	 */
	get deviceId(): string | undefined {
		if (this._device) {
			return this._device.deviceId;
		} else {
			return undefined;
		}
	}

	/**
	 * Returns a group identifier. Two devices have the
	 * same group identifier if they belong to the same physical device.
	 * Returns null  when the device is not open.
	 */
	get groupId(): string | undefined {
		if (this._device) {
			return this._device.groupId;
		} else {
			return undefined;
		}
	}

	/**
	 * Returns a label describing this device (for example "Built-in Microphone").
	 * Returns undefined when the device is not open or label is not available
	 * because of permissions.
	 */
	get label(): string | undefined {
		if (this._device) {
			return this._device.label;
		} else {
			return undefined;
		}
	}

	/**
	 * Mute the output.
	 * @example
	 * const mic = new Tone.UserMedia();
	 * mic.open().then(() => {
	 * 	// promise resolves when input is available
	 * });
	 * // mute the output
	 * mic.mute = true;
	 */
	get mute(): boolean {
		return this._volume.mute;
	}
	set mute(mute) {
		this._volume.mute = mute;
	}

	dispose(): this {
		super.dispose();
		this.close();
		this._volume.dispose();
		this.volume.dispose();
		return this;
	}

	/**
	 * If getUserMedia is supported by the browser.
	 */
	static get supported(): boolean {
		return (
			isDefined(navigator.mediaDevices) &&
			isDefined(navigator.mediaDevices.getUserMedia)
		);
	}
}
