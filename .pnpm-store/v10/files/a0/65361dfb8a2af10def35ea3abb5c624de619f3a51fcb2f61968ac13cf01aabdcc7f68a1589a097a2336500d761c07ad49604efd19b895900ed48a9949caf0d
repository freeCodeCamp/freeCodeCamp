import { Param } from "../../core/context/Param.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { ToneAudioBuffersUrlMap } from "../../core/context/ToneAudioBuffers.js";
import { OutputNode, ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { Decibels, Time } from "../../core/type/Units.js";
import { BasicPlaybackState } from "../../core/util/StateTimeline.js";
import { SourceOptions } from "../Source.js";
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
export declare class Players extends ToneAudioNode<PlayersOptions> {
    readonly name: string;
    /**
     * The output volume node
     */
    private _volume;
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
    readonly input: undefined;
    /**
     * The container of all of the players
     */
    private _players;
    /**
     * The container of all the buffers
     */
    private _buffers;
    /**
     * private holder of the fadeIn time
     */
    private _fadeIn;
    /**
     * private holder of the fadeOut time
     */
    private _fadeOut;
    /**
     * @param urls An object mapping a name to a url.
     * @param onload The function to invoke when all buffers are loaded.
     */
    constructor(urls?: ToneAudioBuffersUrlMap, onload?: () => void);
    /**
     * @param urls An object mapping a name to a url.
     * @param options The remaining options associated with the players
     */
    constructor(urls?: ToneAudioBuffersUrlMap, options?: Partial<Omit<PlayersOptions, "urls">>);
    constructor(options?: Partial<PlayersOptions>);
    static getDefaults(): PlayersOptions;
    /**
     * Mute the output.
     */
    get mute(): boolean;
    set mute(mute: boolean);
    /**
     * The fadeIn time of the envelope applied to the source.
     */
    get fadeIn(): Time;
    set fadeIn(fadeIn: Time);
    /**
     * The fadeOut time of the each of the sources.
     */
    get fadeOut(): Time;
    set fadeOut(fadeOut: Time);
    /**
     * The state of the players object. Returns "started" if any of the players are playing.
     */
    get state(): BasicPlaybackState;
    /**
     * True if the buffers object has a buffer by that name.
     * @param name  The key or index of the buffer.
     */
    has(name: string): boolean;
    /**
     * Get a player by name.
     * @param  name  The players name as defined in the constructor object or `add` method.
     */
    player(name: string): Player;
    /**
     * If all the buffers are loaded or not
     */
    get loaded(): boolean;
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
    add(name: string, url: string | ToneAudioBuffer | AudioBuffer, callback?: () => void): this;
    /**
     * Stop all of the players at the given time
     * @param time The time to stop all of the players.
     */
    stopAll(time?: Time): this;
    dispose(): this;
}
