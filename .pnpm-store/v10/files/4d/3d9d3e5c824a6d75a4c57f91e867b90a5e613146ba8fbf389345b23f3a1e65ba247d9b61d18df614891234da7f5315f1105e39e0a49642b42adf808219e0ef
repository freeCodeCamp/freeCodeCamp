import { OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Decibels } from "../core/type/Units.js";
import { Param } from "../core/context/Param.js";
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
export declare class UserMedia extends ToneAudioNode<UserMediaOptions> {
    readonly name: string;
    readonly input: undefined;
    readonly output: OutputNode;
    /**
     * The MediaStreamNode
     */
    private _mediaStream?;
    /**
     * The media stream created by getUserMedia.
     */
    private _stream?;
    /**
     * The open device
     */
    private _device?;
    /**
     * The output volume node
     */
    private _volume;
    /**
     * The volume of the output in decibels.
     */
    readonly volume: Param<"decibels">;
    /**
     * @param volume The level of the input in decibels
     */
    constructor(volume?: Decibels);
    constructor(options?: Partial<UserMediaOptions>);
    static getDefaults(): UserMediaOptions;
    /**
     * Open the media stream. If a string is passed in, it is assumed
     * to be the label or id of the stream, if a number is passed in,
     * it is the input number of the stream.
     * @param  labelOrId The label or id of the audio input media device.
     *                   With no argument, the default stream is opened.
     * @return The promise is resolved when the stream is open.
     */
    open(labelOrId?: string | number): Promise<this>;
    /**
     * Close the media stream
     */
    close(): this;
    /**
     * Returns a promise which resolves with the list of audio input devices available.
     * @return The promise that is resolved with the devices
     * @example
     * Tone.UserMedia.enumerateDevices().then((devices) => {
     * 	// print the device labels
     * 	console.log(devices.map(device => device.label));
     * });
     */
    static enumerateDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Returns the playback state of the source, "started" when the microphone is open
     * and "stopped" when the mic is closed.
     */
    get state(): "started" | "stopped";
    /**
     * Returns an identifier for the represented device that is
     * persisted across sessions. It is un-guessable by other applications and
     * unique to the origin of the calling application. It is reset when the
     * user clears cookies (for Private Browsing, a different identifier is
     * used that is not persisted across sessions). Returns undefined when the
     * device is not open.
     */
    get deviceId(): string | undefined;
    /**
     * Returns a group identifier. Two devices have the
     * same group identifier if they belong to the same physical device.
     * Returns null  when the device is not open.
     */
    get groupId(): string | undefined;
    /**
     * Returns a label describing this device (for example "Built-in Microphone").
     * Returns undefined when the device is not open or label is not available
     * because of permissions.
     */
    get label(): string | undefined;
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
    get mute(): boolean;
    set mute(mute: boolean);
    dispose(): this;
    /**
     * If getUserMedia is supported by the browser.
     */
    static get supported(): boolean;
}
