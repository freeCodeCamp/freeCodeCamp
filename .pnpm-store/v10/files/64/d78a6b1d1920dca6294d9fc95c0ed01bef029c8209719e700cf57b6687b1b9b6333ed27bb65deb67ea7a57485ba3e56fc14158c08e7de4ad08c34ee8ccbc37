import { AudioRange, Decibels } from "../../core/type/Units.js";
import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Param } from "../../core/context/Param.js";
import { Gain } from "../../core/context/Gain.js";
export interface ChannelOptions extends ToneAudioNodeOptions {
    pan: AudioRange;
    volume: Decibels;
    solo: boolean;
    mute: boolean;
    channelCount: number;
}
/**
 * Channel provides a channel strip interface with volume, pan, solo and mute controls.
 * @see {@link PanVol} and {@link Solo}
 * @example
 * // pan the incoming signal left and drop the volume 12db
 * const channel = new Tone.Channel(-0.25, -12);
 * @category Component
 */
export declare class Channel extends ToneAudioNode<ChannelOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * The soloing interface
     */
    private _solo;
    /**
     * The panning and volume node
     */
    private _panVol;
    /**
     * The L/R panning control. -1 = hard left, 1 = hard right.
     * @min -1
     * @max 1
     */
    readonly pan: Param<"audioRange">;
    /**
     * The volume control in decibels.
     */
    readonly volume: Param<"decibels">;
    /**
     * @param volume The output volume.
     * @param pan the initial pan
     */
    constructor(volume?: Decibels, pan?: AudioRange);
    constructor(options?: Partial<ChannelOptions>);
    static getDefaults(): ChannelOptions;
    /**
     * Solo/unsolo the channel. Soloing is only relative to other {@link Channel}s and {@link Solo} instances
     */
    get solo(): boolean;
    set solo(solo: boolean);
    /**
     * If the current instance is muted, i.e. another instance is soloed,
     * or the channel is muted
     */
    get muted(): boolean;
    /**
     * Mute/unmute the volume
     */
    get mute(): boolean;
    set mute(mute: boolean);
    /**
     * Store the send/receive channels by name.
     */
    private static buses;
    /**
     * Get the gain node belonging to the bus name. Create it if
     * it doesn't exist
     * @param name The bus name
     */
    private _getBus;
    /**
     * Send audio to another channel using a string. `send` is a lot like
     * {@link connect}, except it uses a string instead of an object. This can
     * be useful in large applications to decouple sections since {@link send}
     * and {@link receive} can be invoked separately in order to connect an object
     * @param name The channel name to send the audio
     * @param volume The amount of the signal to send.
     * 	Defaults to 0db, i.e. send the entire signal
     * @returns Returns the gain node of this connection.
     */
    send(name: string, volume?: Decibels): Gain<"decibels">;
    /**
     * Receive audio from a channel which was connected with {@link send}.
     * @param name The channel name to receive audio from.
     */
    receive(name: string): this;
    dispose(): this;
}
