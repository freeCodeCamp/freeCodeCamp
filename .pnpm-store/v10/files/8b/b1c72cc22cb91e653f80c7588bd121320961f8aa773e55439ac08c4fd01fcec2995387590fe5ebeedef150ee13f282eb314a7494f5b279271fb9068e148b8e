import { Volume } from "../../component/channel/Volume.js";
import { ToneAudioBuffers, } from "../../core/context/ToneAudioBuffers.js";
import { ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { assert } from "../../core/util/Debug.js";
import { noOp, readOnly } from "../../core/util/Interface.js";
import { Source } from "../Source.js";
import { Player } from "./Player.js";
/**
 * Players combines multiple {@link Player} objects.
 * @category Source
 */
export class Players extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Players.getDefaults(), arguments, ["urls", "onload"], "urls");
        super(options);
        this.name = "Players";
        /**
         * Players has no input.
         */
        this.input = undefined;
        /**
         * The container of all of the players
         */
        this._players = new Map();
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
    static getDefaults() {
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
    get mute() {
        return this._volume.mute;
    }
    set mute(mute) {
        this._volume.mute = mute;
    }
    /**
     * The fadeIn time of the envelope applied to the source.
     */
    get fadeIn() {
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
    get fadeOut() {
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
    get state() {
        const playing = Array.from(this._players).some(([_, player]) => player.state === "started");
        return playing ? "started" : "stopped";
    }
    /**
     * True if the buffers object has a buffer by that name.
     * @param name  The key or index of the buffer.
     */
    has(name) {
        return this._buffers.has(name);
    }
    /**
     * Get a player by name.
     * @param  name  The players name as defined in the constructor object or `add` method.
     */
    player(name) {
        assert(this.has(name), `No Player with the name ${name} exists on this object`);
        if (!this._players.has(name)) {
            const player = new Player({
                context: this.context,
                fadeIn: this._fadeIn,
                fadeOut: this._fadeOut,
                url: this._buffers.get(name),
            }).connect(this.output);
            this._players.set(name, player);
        }
        return this._players.get(name);
    }
    /**
     * If all the buffers are loaded or not
     */
    get loaded() {
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
    add(name, url, callback) {
        assert(!this._buffers.has(name), "A buffer with that name already exists on this object");
        this._buffers.add(name, url, callback);
        return this;
    }
    /**
     * Stop all of the players at the given time
     * @param time The time to stop all of the players.
     */
    stopAll(time) {
        this._players.forEach((player) => player.stop(time));
        return this;
    }
    dispose() {
        super.dispose();
        this._volume.dispose();
        this.volume.dispose();
        this._players.forEach((player) => player.dispose());
        this._buffers.dispose();
        return this;
    }
}
//# sourceMappingURL=Players.js.map